function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-xl
        bg-white
        p-6
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
