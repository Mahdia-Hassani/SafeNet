import { Link2 } from "lucide-react";

function UrlInput({ value, setValue }) {
  return (
    <div className="space-y-4">
      <div
        className="
        flex
        items-center
        gap-3

        px-5
        py-4

        rounded-2xl

        border
        border-border

        bg-background

        focus-within:border-primary

        transition
        "
      >
        <Link2
          size={22}
          className="
          text-primary
          shrink-0
          "
        />

        <input
          type="url"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="https://example.com"
          className="
          w-full

          bg-transparent

          outline-none

          text-text-primary

          placeholder:text-text-secondary
          "
        />
      </div>

      <p
        className="
        text-sm
        text-text-secondary
        "
      >
        Enter a suspicious website URL to check for phishing, malware, or other
        security threats.
      </p>
    </div>
  );
}

export default UrlInput;
