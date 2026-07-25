function SettingCard({ title, description, children }) {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      <div className="mb-5">
        <h2 className="text-xl font-semibold">{title}</h2>

        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>

      {children}
    </div>
  );
}

export default SettingCard;
