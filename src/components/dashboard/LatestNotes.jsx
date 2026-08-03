import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function LatestNotes({ notes = [] }) {
  return (
    <section
      className="
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      {/* Header */}

      <div className="border-b border-border px-6 py-5">
        <h2 className="text-lg font-semibold text-text-primary">
          Latest Notes
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Your recently saved learning notes.
        </p>
      </div>

      {/* Notes */}

      <div>
        {notes.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm text-text-secondary">No notes available.</p>
          </div>
        ) : (
          notes.slice(0, 3).map((note) => (
            <div
              key={note.id}
              className="
                border-b
                border-border
                px-6
                py-5
                last:border-none
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-text-primary">
                  {note.title || "Untitled Note"}
                </h3>

                <span className="text-xs text-text-secondary">
                  {new Date(note.updatedAt).toLocaleDateString()}
                </span>
              </div>

              <p
                className="
                  mt-3
                  line-clamp-1
                  text-sm
                  text-text-secondary
                "
              >
                {note.content}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer */}

      {notes.length > 0 && (
        <div className="border-t border-border px-6 py-4">
          <Link
            to="/learning"
            className="
              flex
              items-center
              justify-between
              font-medium
              text-primary
              transition
              hover:translate-x-1
            "
          >
            <span>View All Notes</span>

            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </section>
  );
}

export default LatestNotes;
