import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Mail, Lock, User, ShieldCheck } from "lucide-react";
import { supabase } from "../lib/supabase";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      navigate("/dashboard");
    }

    setLoading(false);
  }

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
          <h1 className="text-2xl font-semibold text-text-primary">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            Start your journey with SafeNet
          </p>

          <form
            onSubmit={handleRegister}
            className="
           mt-6
          space-y-4
            "
          >
            {/* Full Name */}

            <div
              className="
  flex
  items-center
  gap-3

  border-b
  border-border

  pb-2
  "
            >
              <User size={19} className="text-primary" />

              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="
                  w-full

                  bg-transparent

                  outline-none

                  text-sm

                  text-text-primary

                  placeholder:text-text-secondary
                  "
              />
            </div>
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
              <Mail size={19} className="text-primary" />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
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
              <Lock size={19} className="text-primary" />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
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
              <Lock size={19} className="text-primary" />

              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                required
                className="
                w-full

                bg-transparent

                outline-none

                text-text-primary

                placeholder:text-text-secondary
                "
              />
            </div>

            {error && (
              <p
                className="
                  text-sm

                  text-red-400
                  "
              >
                {error}
              </p>
            )}

            <button
              disabled={loading}
              className="
              w-full

              mt-4

              py-3

              rounded-lg

              bg-primary

              text-white

              font-medium

              hover:bg-primary-hover

              transition

              disabled:opacity-50
              "
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <p
            className="
            mt-6

            text-sm

            text-text-secondary
            "
          >
            Already have an account?
            <span
              onClick={() => navigate("/login")}
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
              onClick={() => navigate("/")}
              className="
                cursor-pointer

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
