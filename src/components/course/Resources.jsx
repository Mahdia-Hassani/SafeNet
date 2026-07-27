import { FileText, Globe, Download, ExternalLink } from "lucide-react";

function Resources({ lesson }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">Course Resources</h2>

      <p className="mt-2 text-slate-500">Helpful materials for this course.</p>

      <div className="mt-8 space-y-4">
        {lesson.resources.map((resource, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-5
              transition
              hover:border-blue-200
              hover:bg-slate-50
            "
          >
            <div className="flex items-center gap-4">
              {resource.type === "PDF" ? (
                <FileText size={24} className="text-red-500" />
              ) : (
                <Globe size={24} className="text-blue-600" />
              )}

              <div>
                <h3 className="font-semibold">{resource.title}</h3>

                <p className="text-sm text-slate-500">{resource.type}</p>
              </div>
            </div>

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              download={resource.type === "PDF"}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-2
                text-white
                transition
                hover:bg-blue-700
              "
            >
              {resource.type === "PDF" ? (
                <>
                  <Download size={16} />
                  Download
                </>
              ) : (
                <>
                  <ExternalLink size={16} />
                  Open
                </>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
