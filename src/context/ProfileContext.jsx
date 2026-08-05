import { createContext, useContext, useEffect, useState } from "react";

import {
  getProfile,
  updateProfile as updateProfileStorage,
} from "../utils/profile/profileStorage";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile(getProfile());
  }, []);

  const updateProfile = (field, value) => {
    const updatedProfile = updateProfileStorage(field, value);

    setProfile(updatedProfile);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
