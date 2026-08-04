import { FileText, Pencil, Trash2, Copy, CalendarDays } from "lucide-react";

function NoteCard({ note, onEdit, onDelete, onCopy }) {
  return (
    <article
      className="
        overflow-hidden
        border
        border-border
        bg-card
        transition
        hover:border-primary/30
        hover:shadow-sm
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
            <FileText size={18} />
          </div>

          <div>
            <h3 className="font-semibold text-text-primary">
              {note.title || "Untitled Note"}
            </h3>

            <div
              className="
                mt-1
                flex
                items-center
                gap-2
                text-xs
                text-text-secondary
              "
            >
              <CalendarDays size={14} />

              {new Date(note.updatedAt).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onCopy(note)}
            className="
              rounded-none
              p-2
              transition
              hover:bg-surface
            "
          >
            <Copy size={18} />
          </button>

          <button
            onClick={() => onEdit(note)}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-surface
            "
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(note.id)}
            className="
              rounded-lg
              p-2
              text-red-500
              transition
              hover:bg-red-50
            "
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Body */}

      <div className="p-6">
        <p
          className="
            whitespace-pre-wrap
            text-sm
            leading-7
            text-text-secondary
          "
        >
          {note.content}
        </p>
      </div>
    </article>
  );
}

export default NoteCard;
