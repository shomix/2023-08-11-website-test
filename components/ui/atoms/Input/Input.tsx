// type InputProps = {
//   text: string;
//   placeholder?: string;
//   type: string;
//   value: string;
//   id: string;
//   required?: boolean;
//   inputClassName?: string;
//   containerClassName?: string;
//   labelClassName?: string;
//   onChange: any;
// };

export default function Input({
  text,
  placeholder = 'placeholder',
  type,
  value,
  id,
  required = true,
  inputClassName = 'border py-2 px-2 rounded-md',
  containerClassName = 'flex flex-col mb-4',
  labelClassName = 'mb-1 font-normal',
  onChange,
}) {
  return (
    <div className={containerClassName}>
      <label htmlFor={id} className={labelClassName}>
        {text}
      </label>
      <input
        required={required}
        value={value}
        id={id}
        onChange={(e) => onChange(e, id)}
        className={inputClassName}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
