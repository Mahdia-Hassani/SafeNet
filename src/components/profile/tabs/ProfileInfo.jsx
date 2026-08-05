import EditableField from "../EditableField";

import { useProfile } from "../../../context/ProfileContext";

function ProfileInfo() {
  const { profile, updateProfile } = useProfile();

  const handleSave = (field, value) => {
    updateProfile(field, value);
  };

  if (!profile) {
    return <p className="text-text-secondary">Loading profile...</p>;
  }

  const fields = [
    {
      label: "Full Name",
      field: "fullName",
    },
    {
      label: "Email",
      field: "email",
    },
    {
      label: "Role",
      field: "role",
    },
    {
      label: "Member Since",
      field: "memberSince",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h2
          className="
            text-lg
            font-semibold
            text-text-primary
          "
        >
          Profile Information
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-text-secondary
          "
        >
          Manage your SafeNet account information.
        </p>
      </div>

      {/* Editable Fields */}

      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
        "
      >
        {fields.map((item) => (
          <EditableField
            key={item.field}
            label={item.label}
            field={item.field}
            value={profile[item.field]}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileInfo;
