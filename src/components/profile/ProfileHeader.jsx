import { Edit3, ShieldCheck } from "lucide-react";

function ProfileHeader() {
  return (
    <section
      className="
        w-full
        rounded-none
        border
        border-border
        bg-card
        p-5
        sm:p-7
        transition
        duration-300
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* User Info */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          {/* Avatar */}

          <img
            src="/images/Avatar.jpg"
            alt="Profile Avatar"
            className="
              h-20
              w-20
              rounded-full
              object-cover
              border
              border-border
            "
          />

          {/* Information */}

          <div
            className="
              space-y-1
            "
          >
            <h1
              className="
                text-xl
                font-semibold
                text-text-primary
              "
            >
              Basira
            </h1>

            <p
              className="
                text-sm
                text-text-secondary
              "
            >
              Cyber Security Learner
            </p>

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-text-secondary
              "
            >
              <ShieldCheck size={16} />

              <span>SafeNet Member</span>
            </div>
          </div>
        </div>

        {/* Action */}

        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-primary
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:opacity-90
          "
        >
          <Edit3 size={17} />
          Edit Profile
        </button>
      </div>
    </section>
  );
}

export default ProfileHeader;
