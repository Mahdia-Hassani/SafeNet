import { ShieldCheck, Link2, MailWarning, SearchCheck } from "lucide-react";

function HeroScanner() {
  const points = [
    {
      icon: Link2,
      className: "top-[22%] right-[18%]",
    },
    {
      icon: MailWarning,
      className: "bottom-[20%] right-[20%]",
    },
    {
      icon: SearchCheck,
      className: "bottom-[25%] left-[18%]",
    },
  ];

  return (
    <div
      className="
      relative

      w-[280px]
      h-[280px]

      sm:w-[340px]
      sm:h-[340px]

      lg:w-[440px]
      lg:h-[440px]

      flex
      items-center
      justify-center
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-10
        rounded-full
        bg-primary/20
        blur-3xl
        animate-pulse
        "
      />

      {/* Radar Outer Ring */}

      <div
        className="
        absolute
        inset-0
        rounded-full
        border
        border-primary/30
        "
      />

      {/* Radar Middle Ring */}

      <div
        className="
        absolute
        inset-[12%]
        rounded-full
        border
        border-primary/25
        "
      />

      {/* Radar Inner Ring */}

      <div
        className="
        absolute
        inset-[28%]
        rounded-full
        border
        border-primary/40
        "
      />

      {/* Grid Vertical */}

      <div
        className="
        absolute
        w-full
        h-[1px]
        bg-primary/20
        "
      />

      {/* Grid Horizontal */}

      <div
        className="
        absolute
        h-full
        w-[1px]
        bg-primary/20
        "
      />

      {/* Rotating Scanner */}

      <div
        className="
        absolute
        inset-0
        rounded-full
        animate-spin
        "
        style={{
          animationDuration: "7s",
        }}
      >
        <div
          className="
          absolute
          top-0
          left-1/2

          w-[2px]
          h-1/2

          bg-primary

          origin-bottom

          shadow-[0_0_25px_var(--primary)]
          "
        />
      </div>

      {/* Detection Points */}

      {points.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`
            absolute
            ${item.className}

            w-10
            h-10

            rounded-full

            bg-surface

            border
            border-primary/50

            flex
            items-center
            justify-center

            animate-pulse
            `}
          >
            <Icon size={20} className="text-primary" />
          </div>
        );
      })}

      {/* Center Core */}

      <div
        className="
        relative

        w-24
        h-24

        sm:w-28
        sm:h-28

        lg:w-32
        lg:h-32

        rounded-full

        bg-card

        border
        border-primary

        flex
        items-center
        justify-center

        shadow-[0_0_40px_rgba(56,116,199,0.35)]

        "
      >
        <ShieldCheck
          className="
          text-primary
          "
          size={55}
        />
      </div>
    </div>
  );
}

export default HeroScanner;
