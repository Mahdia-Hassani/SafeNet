import { useState } from "react";
import { Globe, Languages, Clock3, Briefcase, Save, Edit3 } from "lucide-react";

import { supabase } from "../../../lib/supabase";

function PersonalInfo({ profile }) {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    country: profile?.country || "Afghanistan",

    language: profile?.language || "English / Persian",

    timezone: profile?.timezone || "GMT +4:30",

    occupation: profile?.occupation || "Student",

    bio: profile?.bio || "Passionate about web development and cybersecurity.",
  });

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  async function saveProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .update(formData)
      .eq("id", user.id);

    if (error) {
      console.error(error);

      return;
    }

    setEditing(false);
  }

  const personalInfo = [
    {
      icon: <Globe size={18} />,
      label: "Country",
      field: "country",
    },

    {
      icon: <Languages size={18} />,
      label: "Language",
      field: "language",
    },

    {
      icon: <Clock3 size={18} />,
      label: "Timezone",
      field: "timezone",
    },

    {
      icon: <Briefcase size={18} />,
      label: "Occupation",
      field: "occupation",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Manage your personal information.
          </p>
        </div>

        <button
          onClick={() => setEditing(!editing)}
          className="
flex
items-center
gap-2
text-primary
"
        >
          <Edit3 size={18} />

          {editing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {personalInfo.map((item) => (
          <div
            key={item.field}
            className="
border
border-border
bg-background
p-5
"
          >
            <div className="flex gap-3">
              <div className="text-primary">{item.icon}</div>

              <div className="flex-1">
                <p className="text-sm text-text-secondary">{item.label}</p>

                {editing ? (
                  <input
                    name={item.field}
                    value={formData[item.field]}
                    onChange={handleChange}
                    className="
mt-2
w-full
bg-transparent
border-b
border-border
outline-none
text-text-primary
"
                  />
                ) : (
                  <h3 className="mt-1 font-medium text-text-primary">
                    {formData[item.field]}
                  </h3>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="
border
border-border
bg-background
p-5
"
      >
        <h3 className="font-medium text-text-primary">About Me</h3>

        {editing ? (
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="
mt-3
w-full
min-h-28
bg-transparent
border
border-border
p-3
outline-none
"
          />
        ) : (
          <p className="mt-3 leading-7 text-text-secondary">{formData.bio}</p>
        )}
      </div>

      {editing && (
        <button
          onClick={saveProfile}
          className="
flex
items-center
gap-2
bg-primary
text-white
px-5
py-3
"
        >
          <Save size={18} />
          Save Changes
        </button>
      )}
    </div>
  );
}

export default PersonalInfo;
