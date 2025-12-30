import { useState, useEffect, useCallback } from "react";
import { supabase, STORAGE_BUCKET, DEFAULT_USER_ID } from "../lib/supabase";

export const useSupabasePhotos = () => {
  const [photos, setPhotos] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load photos metadata from Supabase
  const loadPhotos = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .eq("user_id", DEFAULT_USER_ID);

      if (error) throw error;

      const photosObj = {};
      for (const photo of data || []) {
        // Get public URL for the photo
        const { data: urlData } = supabase.storage
          .from(STORAGE_BUCKET)
          .getPublicUrl(photo.storage_path);

        photosObj[photo.date_key] = {
          id: photo.id,
          data: urlData.publicUrl,
          storagePath: photo.storage_path,
          date: photo.date_key,
        };
      }
      setPhotos(photosObj);
    } catch (err) {
      console.error("Error loading photos:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  // Save photo to Supabase Storage
  const savePhoto = useCallback(async (dateKey, base64Data) => {
    try {
      // Convert base64 to blob
      const base64Response = await fetch(base64Data);
      const blob = await base64Response.blob();

      // Create unique filename with timestamp to allow multiple photos
      const timestamp = Date.now();
      const uniqueKey = `${dateKey}_${timestamp}`;
      const fileName = `${DEFAULT_USER_ID}/${uniqueKey}.jpg`;

      console.log("Uploading photo to:", fileName);

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(fileName, blob, {
          contentType: blob.type || "image/jpeg",
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        throw uploadError;
      }

      console.log("Upload successful:", uploadData);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(fileName);

      // Save metadata to database
      const { data: photoRecord, error: dbError } = await supabase
        .from("photos")
        .insert({
          user_id: DEFAULT_USER_ID,
          date_key: uniqueKey,
          storage_path: fileName,
        })
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        throw dbError;
      }

      console.log("Photo record saved:", photoRecord);
      console.log("Public URL:", urlData.publicUrl);

      // Update local state
      setPhotos((prev) => ({
        ...prev,
        [uniqueKey]: {
          id: photoRecord.id,
          data: urlData.publicUrl,
          storagePath: fileName,
          date: uniqueKey,
        },
      }));

      return true;
    } catch (err) {
      console.error("Error saving photo:", err);
      setError(err.message);
      return false;
    }
  }, []);

  // Delete photo from Supabase Storage
  const deletePhoto = useCallback(
    async (dateKey) => {
      try {
        const photo = photos[dateKey];
        if (!photo) return false;

        // Delete from storage
        if (photo.storagePath) {
          const { error: storageError } = await supabase.storage
            .from(STORAGE_BUCKET)
            .remove([photo.storagePath]);

          if (storageError) console.warn("Storage delete error:", storageError);
        }

        // Delete from database
        const { error: dbError } = await supabase
          .from("photos")
          .delete()
          .eq("id", photo.id);

        if (dbError) throw dbError;

        // Update local state
        setPhotos((prev) => {
          const newPhotos = { ...prev };
          delete newPhotos[dateKey];
          return newPhotos;
        });

        return true;
      } catch (err) {
        console.error("Error deleting photo:", err);
        setError(err.message);
        return false;
      }
    },
    [photos]
  );

  // Get all photo dates
  const getAllPhotoDates = useCallback(() => {
    return Object.keys(photos).sort();
  }, [photos]);

  return {
    photos,
    savePhoto,
    deletePhoto,
    getAllPhotoDates,
    loading,
    error,
    refresh: loadPhotos,
  };
};
