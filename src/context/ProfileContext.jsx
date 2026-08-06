import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setProfile({
          id: session.user.id,
          email: session.user.email,
          fullName: session.user.user_metadata?.full_name || "User",
        });
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function loadProfile() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setProfile({
        id: user.id,
        email: user.email,
        fullName: user.user_metadata?.full_name || "User",
      });
    } else {
      setProfile(null);
    }

    setLoading(false);
  }

  async function updateProfile(fullName) {
    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: fullName,
      },
    });

    if (!error) {
      setProfile((prev) => ({
        ...prev,
        fullName,
      }));
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
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
