import { Edit3, Trash2, Copy, CalendarDays, FileText } from "lucide-react";

import { useState } from "react";

function NotesList({ notes, onEdit, onDelete }) {
  const [copiedId, setCopiedId] = useState(null);

  async function handleCopy(note) {
    await navigator.clipboard.writeText(note.content);

    setCopiedId(note.id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  }

  if (!notes.length) {
    return (
      <div
        className="
          border
          border-dashed
          border-border
          bg-card
          p-10
          text-center
        "
      >
        <FileText
          size={35}
          className="
            mx-auto
            text-text-secondary
          "
        />

        <h3
          className="
            mt-4
            font-semibold
            text-text-primary
          "
        >
          No Notes Yet
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-text-secondary
          "
        >
          Create your first learning note for this course.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-5">
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <h3
          className="
            text-xl
            font-semibold
            text-text-primary
          "
        >
          Your Notes
        </h3>

        <span
          className="
            text-sm
            text-text-secondary
          "
        >
          {notes.length} Notes
        </span>
      </div>

      <div
        className="
          grid
          gap-5
          md:grid-cols-2
        "
      >
        {notes.map((note) => (
          <div
            key={note.id}
            className="
            border
            border-border
            bg-card
            p-5
            transition
            hover:shadow-sm
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-start
                justify-between
                gap-3
              "
            >
              <div>
                <h4
                  className="
                    font-semibold
                    text-text-primary
                  "
                >
                  {note.title}
                </h4>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-text-secondary
                  "
                >
                  <CalendarDays size={14} />

                  {new Date(note.updatedAt).toLocaleDateString()}
                </div>
              </div>

              <FileText
                size={22}
                className="
                  text-primary
                "
              />
            </div>

            {/* Content */}

            <p
              className="
                mt-5
                line-clamp-4
                text-sm
                leading-6
                text-text-secondary
              "
            >
              {note.content}
            </p>

            {/* Actions */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
              "
            >
              <div
                className="
                  flex
                  gap-2
                "
              >
                <button
                  onClick={() => onEdit(note)}
                  className="
                    flex
                    items-center
                    gap-2
                    border
                    border-border
                    px-4
                    py-2
                    text-sm
                    transition
                    hover:bg-surface
                    "
                >
                  <Edit3 size={15} />
                  Edit
                </button>

                <button
                  onClick={() => handleCopy(note)}
                  className="
                    flex
                    items-center
                    gap-2
                    border
                    border-border
                    px-4
                    py-2
                    text-sm
                    transition
                    hover:bg-surface
                    "
                >
                  <Copy size={15} />

                  {copiedId === note.id ? "Copied!" : "Copy"}
                </button>
              </div>

              <button
                onClick={() => onDelete(note.id)}
                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    text-red-500
                    transition
                    hover:bg-red-50
                    "
              >
                <Trash2 size={17} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NotesList;
