function ProfileInfo() {
  const userInfo = [
    {
      label: "Full Name",
      value: "Basira",
    },

    {
      label: "Email",
      value: "basira@example.com",
    },

    {
      label: "Role",
      value: "Cyber Security Learner",
    },

    {
      label: "Member Since",
      value: "August 2026",
    },
  ];

  return (
    <div
      className="
        space-y-6
      "
    >
      {/* Section Title */}

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
          View your SafeNet account information.
        </p>
      </div>

      {/* Information Grid */}

      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
        "
      >
        {userInfo.map((item) => (
          <div
            key={item.label}
            className="
                rounded-none
                border
                border-border
                bg-background
                p-4
                transition
                hover:border-primary
              "
          >
            <p
              className="
                  text-sm
                  text-text-secondary
                "
            >
              {item.label}
            </p>

            <p
              className="
                  mt-2
                  font-medium
                  text-text-primary
                "
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileInfo;
