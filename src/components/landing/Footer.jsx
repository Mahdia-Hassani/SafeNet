import { ShieldCheck } from "lucide-react";

function Footer() {
  const productLinks = ["Analyzer", "Dashboard", "Features", "How It Works"];

  const resourceLinks = [
    "Learning Center",
    "Security Guide",
    "Threat Library",
    "Blog",
  ];

  const companyLinks = ["About", "Contact", "Privacy", "Terms"];

  return (
    <footer
      className="
      pt-20
      pb-8

      bg-background

      border-t
      border-border
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        "
      >
        <div
          className="
          grid

          md:grid-cols-2

          lg:grid-cols-5

          gap-12
          "
        >
          {/* Brand */}

          <div
            className="
            lg:col-span-2
            "
          >
            <div
              className="
              flex
              items-center
              gap-3
              "
            >
              <div
                className="
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                "
              >
                <ShieldCheck size={30} className="text-primary" />
              </div>

              <h2
                className="
                text-xl
                font-semibold

                text-text-primary
                "
              >
                SafeNet
              </h2>
            </div>

            <p
              className="
              mt-5

              max-w-sm

              text-base

              leading-relaxed

              text-text-secondary
              "
            >
              AI-powered cybersecurity platform helping users detect threats,
              understand risks and build safer digital habits.
            </p>
          </div>

          {/* Columns */}

          <FooterColumn title="Product" items={productLinks} />

          <FooterColumn title="Resources" items={resourceLinks} />

          <FooterColumn title="Company" items={companyLinks} />
        </div>

        {/* Bottom */}

        <div
          className="
          mt-16

          pt-6
          text-sm

          text-text-secondary

          text-center

          "
        >
          © 2026 SafeNet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3
        className="
        text-sm

        font-semibold

        text-text-primary

        uppercase
        "
      >
        {title}
      </h3>

      <ul
        className="
        mt-5

        space-y-3
        "
      >
        {items.map((item) => (
          <li key={item}>
            <a
              className="
                text-sm

                text-text-secondary

                hover:text-primary

                transition

                cursor-pointer
                "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
