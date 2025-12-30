import { useState, useEffect, useCallback } from "react";

const DB_NAME = "FastingTrackerDB";
const DB_VERSION = 1;
const PHOTOS_STORE = "photos";

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(PHOTOS_STORE)) {
        const store = db.createObjectStore(PHOTOS_STORE, { keyPath: "id" });
        store.createIndex("date", "date", { unique: false });
      }
    };
  });
};

export const usePhotoStorage = () => {
  const [photos, setPhotos] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadPhotos = useCallback(async () => {
    try {
      const db = await openDB();
      const transaction = db.transaction(PHOTOS_STORE, "readonly");
      const store = transaction.objectStore(PHOTOS_STORE);
      const request = store.getAll();

      request.onsuccess = () => {
        const photoMap = {};
        request.result.forEach((photo) => {
          photoMap[photo.date] = photo;
        });
        setPhotos(photoMap);
        setIsLoading(false);
      };
    } catch (error) {
      console.error("Error loading photos:", error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  const savePhoto = async (date, imageData) => {
    try {
      const db = await openDB();
      const transaction = db.transaction(PHOTOS_STORE, "readwrite");
      const store = transaction.objectStore(PHOTOS_STORE);

      const photo = {
        id: date,
        date,
        imageData,
        savedAt: new Date().toISOString(),
      };

      store.put(photo);

      setPhotos((prev) => ({
        ...prev,
        [date]: photo,
      }));

      return true;
    } catch (error) {
      console.error("Error saving photo:", error);
      return false;
    }
  };

  const deletePhoto = async (date) => {
    try {
      const db = await openDB();
      const transaction = db.transaction(PHOTOS_STORE, "readwrite");
      const store = transaction.objectStore(PHOTOS_STORE);

      store.delete(date);

      setPhotos((prev) => {
        const newPhotos = { ...prev };
        delete newPhotos[date];
        return newPhotos;
      });

      return true;
    } catch (error) {
      console.error("Error deleting photo:", error);
      return false;
    }
  };

  const getAllPhotoDates = () => {
    return Object.keys(photos).sort();
  };

  return { photos, isLoading, savePhoto, deletePhoto, getAllPhotoDates };
};
