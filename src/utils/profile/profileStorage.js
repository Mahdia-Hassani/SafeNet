const STORAGE_KEY = "safenet_profile";

const defaultProfile = {
  fullName: "Basira",
  email: "basira@example.com",
  role: "Cyber Security Learner",
  memberSince: "August 2026",
  avatar: "/images/Avatar.jpg",
};

export function getProfile() {
  const savedProfile = localStorage.getItem(STORAGE_KEY);

  if (!savedProfile) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProfile));

    return defaultProfile;
  }

  try {
    return JSON.parse(savedProfile);
  } catch (error) {
    console.error("Profile Storage Error:", error);

    return defaultProfile;
  }
}

export function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function updateProfile(field, value) {
  const profile = getProfile();

  const updatedProfile = {
    ...profile,
    [field]: value,
  };

  saveProfile(updatedProfile);

  return updatedProfile;
}

export function resetProfile() {
  saveProfile(defaultProfile);

  return defaultProfile;
}
