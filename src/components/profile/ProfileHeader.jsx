import { Edit3, ShieldCheck } from "lucide-react";
import { useProfile } from "../../context/ProfileContext";

function ProfileHeader({ onEditProfile }) {
  const { profile } = useProfile();

  if (!profile) return null;

  return (
    <section
      className="
        w-full
        border
        border-border
        bg-card
        p-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Left Side */}

        <div className="flex items-center gap-5">
          {/* Avatar */}

          <img
            src="/images/Avatar.jpg"
            alt="Profile Avatar"
            className="
              h-20
              w-20
              rounded-full
              border
              border-border
              object-cover
            "
          />

          {/* User Information */}

          <div>
            <h1
              className="
                text-2xl
                font-semibold
                text-text-primary
              "
            >
              {profile.fullName}
            </h1>

            <p
              className="
                mt-1
                text-text-secondary
              "
            >
              {profile.role}
            </p>

            <div
              className="
                mt-3
                flex
                items-center
                gap-2
                text-sm
                text-primary
              "
            >
              <ShieldCheck size={16} />

              <span>SafeNet Member</span>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          <button
            onClick={onEditProfile}
            className="
              flex
              items-center
              gap-2
              border
              border-primary
              bg-primary
              px-5
              py-2.5
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            <Edit3 size={18} />
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
