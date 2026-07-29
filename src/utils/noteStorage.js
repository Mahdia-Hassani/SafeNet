const STORAGE_KEY = "safenet_notes";

export function getNotes(courseId) {
  const data = localStorage.getItem(STORAGE_KEY);

  const notes = data ? JSON.parse(data) : [];

  if (!courseId) return notes;

  return notes.filter((note) => note.courseId === courseId);
}

export function createNote(courseId, note) {
  const notes = getNotes();

  const newNote = {
    id: crypto.randomUUID(),
    courseId,
    title: note.title || "Untitled Note",
    content: note.content,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  notes.unshift(newNote);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));

  return newNote;
}

export function updateNote(courseId, id, updates) {
  const notes = getNotes();

  const updated = notes.map((note) => {
    if (note.id !== id) return note;

    return {
      ...note,
      ...updates,
      updatedAt: Date.now(),
    };
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return getNotes(courseId);
}

export function deleteNote(courseId, id) {
  const notes = getNotes();

  const filtered = notes.filter((note) => note.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

  return getNotes(courseId);
}

export function getLatestNote() {
  const notes = getNotes();

  if (notes.length === 0) return null;

  return [...notes].sort((a, b) => b.updatedAt - a.updatedAt)[0];
}
