import { useState } from "react";
import { Edit3, Check, X } from "lucide-react";

function EditableField({ label, field, value, onSave }) {
  const [editing, setEditing] = useState(false);

  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(field, inputValue);

    setEditing(false);
  };

  const handleCancel = () => {
    setInputValue(value);

    setEditing(false);
  };

  return (
    <div
      className="
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
        {label}
      </p>

      {!editing ? (
        <div
          className="
            mt-3
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <p
            className="
              font-medium
              text-text-primary
            "
          >
            {value}
          </p>

          <button
            onClick={() => setEditing(true)}
            className="
              text-primary
              transition
              hover:opacity-80
            "
          >
            <Edit3 size={18} />
          </button>
        </div>
      ) : (
        <div className="mt-3 space-y-3">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="
              w-full
              border
              border-border
              bg-background
              px-3
              py-2
              outline-none
              focus:border-primary
            "
          />

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="
                flex
                items-center
                gap-2
                bg-primary
                px-4
                py-2
                text-white
              "
            >
              <Check size={16} />
              Save
            </button>

            <button
              onClick={handleCancel}
              className="
                flex
                items-center
                gap-2
                border
                border-border
                px-4
                py-2
              "
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditableField;
