function MessageInput({ value, setValue }) {
  return (
    <div className="space-y-3">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={12}
        placeholder="Paste a suspicious message..."
        className="
        w-full

        bg-background

        border
        border-border

        rounded-2xl

        px-5
        py-5

        resize-none

        outline-none

        text-text-primary

        placeholder:text-text-secondary

        focus:border-primary

        transition
        "
      />

      <p
        className="
        text-sm
        text-text-secondary
        "
      >
        Paste suspicious emails, messages, or text that you want SafeNet AI to
        analyze.
      </p>
    </div>
  );
}

export default MessageInput;
