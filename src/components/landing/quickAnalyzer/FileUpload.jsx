import { useRef, useState } from "react";
import { UploadCloud, FileText } from "lucide-react";

function FileUpload({ setValue }) {
  const fileInputRef = useRef(null);

  const [fileName, setFileName] = useState("");

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    setFileName(file.name);

    setValue(file);
  }

  function handleClick() {
    fileInputRef.current.click();
  }

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        onClick={handleClick}
        className="
        border-2
        border-dashed
        border-border

        rounded-2xl

        bg-background

        py-16
        px-6

        text-center

        cursor-pointer

        transition

        hover:border-primary

        hover:bg-primary/5
        "
      >
        <div
          className="
          w-16
          h-16

          mx-auto

          rounded-full

          bg-primary/10

          flex
          items-center
          justify-center
          "
        >
          {fileName ? (
            <FileText size={30} className="text-primary" />
          ) : (
            <UploadCloud size={30} className="text-primary" />
          )}
        </div>

        <h3
          className="
          mt-6

          text-lg

          font-semibold

          text-text-primary
          "
        >
          {fileName ? fileName : "Drag & Drop your file"}
        </h3>

        <p
          className="
          mt-2

          text-text-secondary
          "
        >
          {fileName
            ? "File selected successfully"
            : "or click anywhere to browse"}
        </p>
      </div>
    </div>
  );
}

export default FileUpload;
