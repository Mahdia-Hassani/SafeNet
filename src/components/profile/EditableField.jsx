import { useState } from "react";
import { Edit3, Check, X } from "lucide-react";

function EditableField({ label, field, value, onSave }) {
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(value || "");

  function handleSave() {
    onSave(field, newValue);
    setEditing(false);
  }

  function handleCancel() {
    setNewValue(value || "");
    setEditing(false);
  }

  return (
    <div
      className="
      border
      border-border
      bg-background
      p-5
      "
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-secondary">{label}</p>

        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="
            text-primary
            hover:opacity-80
            "
          >
            <Edit3 size={16} />
          </button>
        )}
      </div>

      {editing ? (
        <div className="mt-3 flex gap-2">
          <input
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="
            w-full
            bg-transparent
            border
            border-border
            px-3
            py-2
            outline-none
            text-text-primary
            "
          />

          <button onClick={handleSave} className="text-primary">
            <Check size={18} />
          </button>

          <button onClick={handleCancel} className="text-red-400">
            <X size={18} />
          </button>
        </div>
      ) : (
        <h3
          className="
          mt-3
          font-medium
          text-text-primary
          "
        >
          {value || "Not set"}
        </h3>
      )}
    </div>
  );
}

export default EditableField;
