// type InputProps = {
//   onChange: any;
//   id: string;
//   containerClassName?: string;
//   checked?: boolean;
//   label: JSX.Element;
// };

export default function RadioInput({
  onChange,
  id,
  containerClassName = 'flex gap-1',
  checked = true,
  label,
}) {
  return (
    <div className={containerClassName}>
      <input
        type="radio"
        checked={checked}
        id={id}
        onChange={(e) => onChange(e, id)}
      />
      {label}
    </div>
  );
}
