import { FileText, Globe, Download, ExternalLink } from "lucide-react";

function Resources({ lesson }) {
  return (
    <section className="space-y-8">
      <h2
        className="
          text-2xl
          font-bold
          text-text-primary
        "
      >
        Course Resources
      </h2>

      <div
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
            border-b
            border-border
            px-6
            py-5
          "
        >
          <h3
            className="
              font-semibold
              text-text-primary
            "
          >
            Learning Materials
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-text-secondary
            "
          >
            Articles, guides and downloadable resources for this course.
          </p>
        </div>

        {/* Resource List */}

        {lesson.resources.map((resource, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              border-b
              border-border
              px-6
              py-5
              transition
              hover:bg-surface
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              {resource.type === "PDF" ? (
                <FileText size={22} className="text-red-500" />
              ) : (
                <Globe size={22} className="text-primary" />
              )}

              <div>
                <h4
                  className="
                    font-medium
                    text-text-primary
                  "
                >
                  {resource.title}
                </h4>

                <p
                  className="
                    text-sm
                    text-text-secondary
                  "
                >
                  {resource.type}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span
                className="
                  text-sm
                  text-text-secondary
                "
              ></span>

              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                download={resource.type === "PDF"}
                className="
                  rounded-lg
                  bg-primary
                  px-4
                  py-2
                  text-sm
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                {resource.type === "PDF" ? (
                  <div className="flex items-center gap-2">
                    <Download size={15} />
                    Download
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ExternalLink size={15} />
                    Open
                  </div>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;
