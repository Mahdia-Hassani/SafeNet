import { Mail, Lock, ShieldCheck } from "lucide-react";

function Register() {
  return (
    <div
      className="
      min-h-screen

      bg-background

      flex

      items-center

      justify-center

      px-6
      "
    >
      <div
        className="
        w-full

        max-w-5xl

        min-h-[520px]

        border

        border-border

        flex

        overflow-hidden

        relative
        "
      >
        {/* Left Form */}

        <div
          className="
          w-full

          lg:w-1/2

          p-10

          lg:p-14

          flex

          flex-col

          justify-center

          bg-background
          "
        >
          <h1
            className="
            text-3xl

            font-semibold

            text-text-primary
            "
          >
            Create Account
          </h1>

          <p
            className="
            mt-3

            text-text-secondary
            "
          >
            Start your journey with SafeNet
          </p>

          <div
            className="
            mt-8

            space-y-5
            "
          >
            {/* Email */}

            <div
              className="
              flex

              items-center

              gap-3

              border-b

              border-border

              pb-3
              "
            >
              <Mail size={20} className="text-primary" />

              <input
                type="email"
                placeholder="Email"
                className="
                w-full

                bg-transparent

                outline-none

                text-text-primary

                placeholder:text-text-secondary
                "
              />
            </div>

            {/* Password */}

            <div
              className="
              flex

              items-center

              gap-3

              border-b

              border-border

              pb-3
              "
            >
              <Lock size={20} className="text-primary" />

              <input
                type="password"
                placeholder="Password"
                className="
                w-full

                bg-transparent

                outline-none

                text-text-primary

                placeholder:text-text-secondary
                "
              />
            </div>

            {/* Confirm Password */}

            <div
              className="
              flex

              items-center

              gap-3

              border-b

              border-border

              pb-3
              "
            >
              <Lock size={20} className="text-primary" />

              <input
                type="password"
                placeholder="Confirm Password"
                className="
                w-full

                bg-transparent

                outline-none

                text-text-primary

                placeholder:text-text-secondary
                "
              />
            </div>
          </div>

          <button
            className="
            mt-8

            py-3

            rounded-lg

            bg-primary

            text-white

            font-medium

            hover:bg-primary-hover

            transition
            "
          >
            Create Account
          </button>

          <p
            className="
            mt-6

            text-sm

            text-text-secondary
            "
          >
            Already have an account?
            <span
              className="
              ml-2

              text-primary

              cursor-pointer
              "
            >
              Sign In
            </span>
          </p>
        </div>

        {/* Right Welcome */}

        <div
          className="
          hidden

          lg:flex

          w-1/2

          bg-surface

          items-center

          justify-center

          relative

          overflow-hidden
          "
        >
          {/* Diagonal */}

          <div
            className="
            absolute

            left-0

            top-0

            h-full

            w-20

            bg-background

            -skew-x-12

            origin-top
            "
          />

          <div
            className="
            text-center

            px-10
            "
          >
            <div
              className="
              flex

              justify-center

              mb-6
              "
            >
              <ShieldCheck size={55} className="text-primary" />
            </div>

            <h2
              className="
              text-4xl

              font-semibold

              text-text-primary
              "
            >
              Join SafeNet
            </h2>

            <p
              className="
              mt-5

              text-text-secondary

              leading-relaxed
              "
            >
              Create your account and get smarter protection against digital
              threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
