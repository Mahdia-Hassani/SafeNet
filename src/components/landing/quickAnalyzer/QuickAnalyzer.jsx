import { Mail, Link2, MessageSquare, Sparkles } from "lucide-react";

function QuickAnalyzer() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="
          bg-card
          border
          border-border
          rounded-3xl
          p-8
          lg:p-12
          shadow-xl
          "
        >
          {/* Header */}

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles size={16} />
              AI Powered Analysis
            </div>

            <h2 className="mt-6 text-4xl font-bold text-text-primary">
              Analyze Suspicious Content
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Paste a suspicious email, message or website link. SafeNet will
              analyze it and explain whether it may contain phishing, scams or
              other security risks.
            </p>
          </div>

          {/* Textarea */}

          <div className="mt-10">
            <textarea
              rows={8}
              placeholder="Paste suspicious content here..."
              className="
              w-full
              resize-none
              rounded-2xl
              bg-background
              border
              border-border
              px-5
              py-4
              text-text-primary
              placeholder:text-text-secondary
              outline-none
              focus:border-primary
              transition
              "
            />
          </div>

          {/* Supported */}

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border">
              <Mail size={18} className="text-primary" />
              <span>Email</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border">
              <Link2 size={18} className="text-primary" />
              <span>URL</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border">
              <MessageSquare size={18} className="text-primary" />
              <span>Message</span>
            </div>
          </div>

          {/* Button */}

          <div className="mt-10 flex justify-center">
            <button
              className="
              px-8
              py-3.5
              rounded-xl
              bg-primary
              text-white
              font-medium
              hover:bg-primary-hover
              transition
              shadow-lg
              shadow-primary/20
              "
            >
              Analyze with AI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickAnalyzer;
