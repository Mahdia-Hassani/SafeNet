export function getRelativeTime(dateString) {
  const date = new Date(dateString);

  const now = new Date();

  const diffMs = now - date;

  const minutes = Math.floor(diffMs / 60000);

  const hours = Math.floor(diffMs / 3600000);

  const days = Math.floor(diffMs / 86400000);

  if (minutes < 1) return "Just now";

  if (minutes < 60) return `${minutes} min ago`;

  if (hours < 24) return `${hours} hr ago`;

  if (days === 1) return "Yesterday";

  if (days < 7) return `${days} days ago`;

  return date.toLocaleDateString();
}
