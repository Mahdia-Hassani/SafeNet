function Button({ children, type = "button", className = "" }) {
  return (
    <button
      type={type}
      className={`
        rounded-xl
        bg-blue-600
        px-4
        py-2
        font-medium
        text-white
        transition
        hover:bg-blue-700
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
