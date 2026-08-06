import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Mail, Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";

import { supabase } from "../lib/supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setError("");

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,

      password,
    });

    if (error) {
      setError(error.message);
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

          <form
            onSubmit={handleLogin}
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="
                  w-full

                  bg-transparent

                  outline-none

                  text-sm

                  text-text-primary

                  placeholder:text-text-secondary
                  "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-text-secondary hover:text-primary transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div
              className="
  flex

  items-center

  justify-between

  text-sm
  "
            >
              <label
                className="
    flex

    items-center

    gap-2

    cursor-pointer

    text-text-secondary
    "
              >
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-primary"
                />
                Remember me
              </label>

              <button
                type="button"
                className="
    text-primary

    hover:underline
    "
              >
                Forgot Password?
              </button>
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
              type="submit"
              disabled={loading}
              className="
  w-full

  mt-2

  py-3

  rounded-xl

  bg-primary

  text-white

  font-medium

  hover:bg-primary-hover

  transition

  disabled:opacity-50

  disabled:cursor-not-allowed
  "
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <p
            className="
            mt-6

            text-sm

            text-text-secondary
            "
          >
            Don't have an account?
            <span
              onClick={() => navigate("/register")}
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
