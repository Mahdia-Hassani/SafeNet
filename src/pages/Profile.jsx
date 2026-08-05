import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfileCard from "../components/profile/ProfileCard";

import ProfileInfo from "../components/profile/tabs/ProfileInfo";
import PersonalInfo from "../components/profile/tabs/PersonalInfo";
import SecuritySettings from "../components/profile/tabs/Securitysetting";
import AppearanceSettings from "../components/profile/tabs/AppearanceSettings";
import NotificationSettings from "../components/profile/tabs/NotificationSetting";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInfo />;

      case "personal":
        return <PersonalInfo />;

      case "security":
        return <SecuritySettings />;

      case "appearance":
        return <AppearanceSettings />;

      case "notifications":
        return <NotificationSettings />;

      default:
        return <ProfileInfo />;
    }
  };

  return (
    <DashboardLayout>
      <div
        className="
          min-h-screen
          bg-background
          text-text-primary
          space-y-6
        "
      >
        {/* Page Header */}

        <ProfileHeader onEditProfile={() => setActiveTab("profile")} />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content Card */}

        <ProfileCard>{renderContent()}</ProfileCard>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
