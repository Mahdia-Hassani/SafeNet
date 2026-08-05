import { Mail, Lock, ShieldCheck } from "lucide-react";

function Login() {
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
        {/* Left Side */}

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
            Login
          </h1>

          <p
            className="
            mt-3

            text-text-secondary
            "
          >
            Access your SafeNet account
          </p>

          <div
            className="
            mt-10

            space-y-6
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
          </div>

          <button
            className="
            mt-10

            py-3

            rounded-lg

            bg-primary

            text-white

            font-medium

            hover:bg-primary-hover

            transition
            "
          >
            Login
          </button>

          <p
            className="
            mt-6

            text-sm

            text-text-secondary
            "
          >
            Don't have an account?
            <span
              className="
              ml-2

              text-primary

              cursor-pointer
              "
            >
              Create Account
            </span>
          </p>
        </div>

        {/* Right Side */}

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
          {/* Diagonal Shape */}

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
              Welcome Back!
            </h2>

            <p
              className="
              mt-5

              text-text-secondary

              leading-relaxed
              "
            >
              Continue protecting your digital world with AI-powered security
              analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
