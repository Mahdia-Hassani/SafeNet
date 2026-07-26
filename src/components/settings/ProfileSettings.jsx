import SettingCard from "./SettingCard";

function ProfileSettings() {
  return (
    <SettingCard
      title="Profile"
      description="Manage your personal information."
    >
      <div className="flex flex-col items-center text-center">
        <img
          src="/avatar.jpg"
          alt="Avatar"
          className="
            h-24
            w-24
            rounded-full
            object-cover
            shadow-md
          "
        />

        <h3 className="mt-4 text-lg font-semibold">Ali</h3>

        <p className="text-sm text-slate-500">ali@safenet.dev</p>

        <button
          className="
            mt-6
            rounded-xl
            bg-blue-600
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-blue-700
          "
        >
          Edit Profile
        </button>
      </div>
    </SettingCard>
  );
}

export default ProfileSettings;
