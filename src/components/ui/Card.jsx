function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-md
        border
        border-border
        bg-card
        p-5
        transition-colors
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
