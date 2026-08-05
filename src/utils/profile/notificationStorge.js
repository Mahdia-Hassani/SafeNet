const STORAGE_KEY = "safenet_notifications";

const defaultSettings = {
  emailNotifications: true,
  threatAlerts: true,
  learningReminder: false,
  weeklyReport: true,
};

export function getNotificationSettings() {
  const savedSettings = localStorage.getItem(STORAGE_KEY);

  if (!savedSettings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSettings));

    return defaultSettings;
  }

  try {
    return JSON.parse(savedSettings);
  } catch (error) {
    console.error("Notification settings error:", error);

    return defaultSettings;
  }
}

export function saveNotificationSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export function updateNotificationSetting(key, value) {
  const settings = getNotificationSettings();

  const updatedSettings = {
    ...settings,
    [key]: value,
  };

  saveNotificationSettings(updatedSettings);

  return updatedSettings;
}

export function resetNotificationSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSettings));

  return defaultSettings;
}
