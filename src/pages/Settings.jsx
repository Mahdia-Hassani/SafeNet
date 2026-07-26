import DashboardLayout from "../layouts/DashboardLayout";
import PrivacySettings from "../components/settings/PrivacySettings";
import AboutSettings from "../components/settings/AboutSettings";

import ProfileSettings from "../components/settings/ProfileSettings";

function Settings() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>

          <p className="mt-2 text-slate-500">Manage your SafeNet experience.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ProfileSettings />

          <PrivacySettings />

          <AboutSettings />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
