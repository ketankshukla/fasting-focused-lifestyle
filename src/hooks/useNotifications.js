import { useState, useEffect, useCallback } from "react";

export const useNotifications = () => {
  const [permission, setPermission] = useState("default");
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ("Notification" in window) {
      setIsSupported(true);
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (!isSupported) return false;

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result === "granted";
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return false;
    }
  }, [isSupported]);

  const sendNotification = useCallback(
    (title, options = {}) => {
      if (!isSupported || permission !== "granted") return null;

      try {
        const notification = new Notification(title, {
          icon: "/fasting/favicon.svg",
          badge: "/fasting/favicon.svg",
          ...options,
        });

        notification.onclick = () => {
          window.focus();
          notification.close();
        };

        return notification;
      } catch (error) {
        console.error("Error sending notification:", error);
        return null;
      }
    },
    [isSupported, permission]
  );

  const scheduleReminder = useCallback(
    (type, delayMs) => {
      if (permission !== "granted") return null;

      const messages = {
        log: {
          title: "📊 Time to Log!",
          body: "Don't forget to log your daily weight and how you're feeling!",
        },
        milestone: {
          title: "🎉 Milestone Reached!",
          body: "You've hit a new fasting milestone! Check your progress.",
        },
        motivation: {
          title: "💪 Stay Strong!",
          body: "You're doing great! Every hour counts towards your goals.",
        },
        hydration: {
          title: "💧 Hydration Reminder",
          body: "Remember to drink water if you're on a water fast!",
        },
      };

      const message = messages[type] || messages.motivation;

      const timeoutId = setTimeout(() => {
        sendNotification(message.title, { body: message.body });
      }, delayMs);

      return timeoutId;
    },
    [permission, sendNotification]
  );

  const testNotification = useCallback(() => {
    if (!isSupported) {
      console.log("Notifications not supported");
      alert("Notifications are not supported in this browser");
      return false;
    }

    if (permission !== "granted") {
      console.log("Notification permission not granted:", permission);
      alert(
        'Please enable notifications first by clicking "Enable Notifications"'
      );
      return false;
    }

    try {
      const notification = new Notification("🔔 Test Notification", {
        body: "Notifications are working! You'll receive reminders here.",
        icon: "/favicon.svg",
        requireInteraction: false,
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      console.log("Test notification sent successfully");
      return true;
    } catch (error) {
      console.error("Error sending test notification:", error);
      alert("Error sending notification: " + error.message);
      return false;
    }
  }, [isSupported, permission]);

  return {
    permission,
    isSupported,
    requestPermission,
    sendNotification,
    scheduleReminder,
    testNotification,
  };
};
