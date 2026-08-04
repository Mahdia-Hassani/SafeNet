import AnswerOption from "./AnswerOption";

function AnswerOptions({
  options,
  selected,
  onSelect,
}) {
  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <AnswerOption
          key={index}
          option={option}
          index={index}
          selectedAnswer={selected}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default AnswerOptions;