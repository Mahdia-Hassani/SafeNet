import { useEffect, useState } from "react";

import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../../utils/noteStorage";

import NoteEditor from "../course/NoteEditor";
import NoteCard from "../course/NoteCard";
import NotesList from "../course/NotesList";

function Notes({ lesson }) {
  const [notes, setNotes] = useState([]);

  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [saving, setSaving] = useState(false);

  const [lastSaved, setLastSaved] = useState("");

  useEffect(() => {
    loadNotes();
  }, [lesson.id]);

  function loadNotes() {
    const data = getNotes(lesson.id);

    setNotes(data);
  }

  async function handleSave() {
    if (!content.trim()) return;

    setSaving(true);

    if (editingId) {
      updateNote(lesson.id, editingId, {
        content,
      });
    } else {
      createNote(lesson.id, {
        title: lesson.title,
        content,
      });
    }

    setTimeout(() => {
      loadNotes();

      setSaving(false);

      setEditingId(null);

      setContent("");

      setLastSaved(new Date().toLocaleString());
    }, 300);
  }

  function handleEdit(note) {
    setEditingId(note.id);
    setContent(note.content);

    setTimeout(() => {
      const editor = document.getElementById("note-editor");

      if (editor) {
        editor.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  }

  function handleDelete(id) {
    deleteNote(lesson.id, id);

    loadNotes();

    if (editingId === id) {
      setEditingId(null);

      setContent("");
    }
  }

  async function handleCopy(note) {
    await navigator.clipboard.writeText(note.content);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section className="space-y-8">
      <h2
        className="
          text-2xl
          font-bold
          text-text-primary
        "
      >
        Course Notes
      </h2>

      <NoteEditor
        value={content}
        onChange={setContent}
        onSave={handleSave}
        saving={saving}
        lastSaved={lastSaved}
      />

      {notes.length > 0 && (
        <section className="space-y-5">
          <NotesList
            notes={notes}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onCopy={handleCopy}
          />
        </section>
      )}

      {notes.length === 0 && (
        <div
          className="
            border
            border-dashed
            border-border
            bg-card
            px-10
            py-16
            text-center
          "
        >
          <h3
            className="
              text-lg
              font-semibold
              text-text-primary
            "
          >
            No notes yet
          </h3>

          <p
            className="
              mt-2
              text-text-secondary
            "
          >
            Start writing your first note for this course.
          </p>
        </div>
      )}
    </section>
  );
}

export default Notes;
