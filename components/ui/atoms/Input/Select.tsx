// interface Option {
//   value: string;
//   label: string;
// }

// interface SelectInputProps {
//   text: string;
//   options: Option[];
//   id: string;
//   inputClassName?: string;
//   containerClassName?: string;
//   labelClassName?: string;
//   onChange: any;
// }

export default function SelectInput({
  text,
  options,
  id,
  inputClassName = 'border py-2 px-2 rounded-md text-slate-600',
  containerClassName = 'flex flex-col mb-4',
  labelClassName = 'mb-1 font-normal',
  onChange,
}) {
  const option = options.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));

  return (
    <div className={containerClassName}>
      <label htmlFor={id} className={labelClassName}>
        {text}
      </label>
      <select
        id={id}
        onChange={(e) => onChange(e, id)}
        className={inputClassName}
      >
        {option}
      </select>
    </div>
  );
}
