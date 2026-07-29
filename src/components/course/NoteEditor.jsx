import { BookText, Save, RotateCcw } from "lucide-react";

function NoteEditor({ value, onChange, onSave, saving, lastSaved }) {
  const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;

  const characters = value.length;

  return (
    <div
      id="note-editor"
      className="
           border
           border-border
           bg-card
        "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-border
          px-6
          py-5
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-primary
              text-white
            "
          >
            <BookText size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-text-primary">Personal Notes</h3>

            <p className="text-sm text-text-secondary">
              Save important ideas while learning.
            </p>
          </div>
        </div>

        {lastSaved && (
          <span
            className="
              text-xs
              text-text-secondary
            "
          >
            Last saved {lastSaved}
          </span>
        )}
      </div>

      {/* Textarea */}

      <div className="p-6">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your notes..."
          className="
            h-72
            w-full
            resize-none
            border
            border-border
            bg-primay
            p-5
            text-sm
            leading-7
            outline-none
            transition
            focus:border-primary
          "
        />

        {/* Footer */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              gap-5
              text-sm
              text-text-secondary
            "
          >
            <span>{words} words</span>

            <span>{characters} characters</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onChange("")}
              className="
                flex
                items-center
                gap-2
                border
                border-border
                px-5
                py-3
                text-sm
                transition
                hover:bg-surface
              "
            >
              <RotateCcw size={18} />
              Clear
            </button>

            <button
              onClick={onSave}
              disabled={saving}
              className="
                flex
                items-center
                gap-2
                bg-primary
                px-5
                py-3
                text-white
                transition
                hover:opacity-90
                disabled:opacity-60
              "
            >
              <Save size={18} />

              {saving ? "Saving..." : "Save Note"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteEditor;
