function Button({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-md
        bg-[var(--primary)]
        px-4
        py-2
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-[var(--primary-hover)]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
