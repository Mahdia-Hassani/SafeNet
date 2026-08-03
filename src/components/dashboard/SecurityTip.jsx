import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function SecurityTip({ tip }) {
  if (!tip) return null;

  return (
    <section
      className="
        relative
        overflow-hidden
        border
        border-primary/20
        bg-primary/5
      "
    >
      {/* Left Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-primary
        "
      />

      <div
        className="
          flex
          flex-col
          gap-6
          p-8

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div className="flex items-start gap-5">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-primary/10
              text-primary
            "
          >
            <ShieldCheck size={28} />
          </div>

          <div className="max-w-2xl">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-primary
              "
            >
              Security Tip of the Day
            </p>

            <h2 className="mt-2 text-xl font-bold text-text-primary">
              {tip.title}
            </h2>

            <p className="mt-3 leading-7 text-text-secondary">
              {tip.description}
            </p>
          </div>
        </div>

        {/* Button */}

        <Link
          to="/learning"
          className="
            flex
            shrink-0
            items-center
            gap-2
            border
            border-primary
            px-5
            py-3
            font-medium
            text-primary
            transition
            hover:bg-primary
            hover:text-white
          "
        >
          Learn More
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default SecurityTip;
