import { MessageSquare, Link2, FileText, UploadCloud } from "lucide-react";

function AnalyzerInput({
  activeTab,

  message,
  setMessage,

  url,
  setUrl,

  selectedFile,
  setSelectedFile,
}) {
  return (
    <section
      className="
        overflow-hidden
        border
        border-border
        bg-card
        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-4

          border-b
          border-border

          px-6
          py-5
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            bg-primary
            text-white
          "
        >
          {activeTab === "message" && <MessageSquare size={20} />}
          {activeTab === "url" && <Link2 size={20} />}
          {activeTab === "file" && <FileText size={20} />}
        </div>

        <div>
          <h3
            className="
              font-semibold
              text-text-primary
            "
          >
            {activeTab === "message" && "Analyze Message"}

            {activeTab === "url" && "Analyze Website"}

            {activeTab === "file" && "Analyze File"}
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-text-secondary
            "
          >
            {activeTab === "message" &&
              "Paste suspicious emails or messages for AI analysis."}

            {activeTab === "url" &&
              "Enter a suspicious website URL for analysis."}

            {activeTab === "file" &&
              "Upload a document or file to inspect for potential threats."}
          </p>
        </div>
      </div>

      {/* Body */}

      <div className="p-6">
        {/* MESSAGE */}

        {activeTab === "message" && (
          <textarea
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Paste suspicious email or message here..."
            className="
              w-full

              border
              border-border

              bg-surface

              p-5

              outline-none

              transition

              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
            "
          />
        )}

        {/* URL */}

        {activeTab === "url" && (
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="
              w-full

              border
              border-border

              bg-surface

              px-5
              py-4

              outline-none

              transition

              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
            "
          />
        )}

        {/* FILE */}

        {activeTab === "file" && (
          <label
            className="
              flex
              cursor-pointer
              flex-col
              items-center
              justify-center

              border-2
              border-dashed
              border-border

              bg-surface

              px-8
              py-12

              transition

              hover:border-primary
            "
          >
            <UploadCloud size={42} className="text-primary" />

            <h4
              className="
                mt-5
                font-semibold
                text-text-primary
              "
            >
              Upload a File
            </h4>

            <p
              className="
                mt-2
                text-sm
                text-text-secondary
              "
            >
              Click to choose a document
            </p>

            {selectedFile && (
              <div
                className="
                  mt-6

                  border
                  border-border

                  bg-card

                  px-4
                  py-3

                  text-sm
                  text-text-primary
                "
              >
                {selectedFile.name}
              </div>
            )}

            <input
              hidden
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </label>
        )}
      </div>
    </section>
  );
}

export default AnalyzerInput;
