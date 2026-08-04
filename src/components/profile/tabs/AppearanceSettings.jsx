import { Moon, Sun, Monitor } from "lucide-react";
import useTheme from "../../../hooks/useTheme";

function AppearanceSettings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold text-text-primary">Appearance</h2>

        <p className="mt-1 text-sm text-text-secondary">
          Customize how SafeNet looks on your device.
        </p>
      </div>

      {/* Theme */}

      <div
        className="
          rounded-none
          border
          border-border
          bg-background
          p-5
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-text-primary">Theme</h3>

            <p className="mt-1 text-sm text-text-secondary">
              Switch between light and dark mode.
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-primary
              px-4
              py-2
              text-white
              transition
              hover:opacity-90
            "
          >
            {theme === "dark" ? (
              <>
                <Moon size={18} />
                Dark
              </>
            ) : (
              <>
                <Sun size={18} />
                Light
              </>
            )}
          </button>
        </div>
      </div>

      {/* Preview */}

      <div
        className="
          rounded-none
          border
          border-border
          bg-background
          p-5
        "
      >
        <div className="flex items-center gap-2 mb-4">
          <Monitor size={18} className="text-primary" />

          <h3 className="font-medium text-text-primary">Preview</h3>
        </div>

        <div
          className="
            rounded-lg
            border
            border-border
            bg-card
            p-6
          "
        >
          <div className="space-y-3">
            <div className="h-4 w-40 rounded bg-primary/30" />

            <div className="h-3 w-full rounded bg-border" />

            <div className="h-3 w-3/4 rounded bg-border" />

            <div className="mt-5 flex gap-3">
              <div className="h-10 w-24 rounded-lg bg-primary" />

              <div className="h-10 w-24 rounded-lg border border-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppearanceSettings;
