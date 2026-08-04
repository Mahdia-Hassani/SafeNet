function ProfileCard({ title, description, children, footer }) {
  return (
    <section
      className="
        w-full
        rounded-none
        border
        border-border
        bg-card
        shadow-sm
        transition
        duration-300
      "
    >
      {/* Card Header */}

      {(title || description) && (
        <div
          className="
              border-b
              border-border
              px-5
              py-5
              sm:px-7
            "
        >
          {title && (
            <h2
              className="
                    text-lg
                    font-semibold
                    text-text-primary
                  "
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className="
                    mt-1
                    text-sm
                    text-text-secondary
                  "
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Card Body */}

      <div
        className="
          px-5
          py-6
          sm:px-7
        "
      >
        {children}
      </div>

      {/* Card Footer */}

      {footer && (
        <div
          className="
              border-t
              border-border
              px-5
              py-4
              sm:px-7
            "
        >
          {footer}
        </div>
      )}
    </section>
  );
}

export default ProfileCard;
