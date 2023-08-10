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
  inputClassName = '',
  containerClassName = '',
  labelClassName = '',
  onChange,
}) {
  return (
    <div className={`flex flex-col mb-4 font-gilroy ${containerClassName}`}>
      <label htmlFor={id} className={`mb-1 font-normal ${labelClassName}`}>
        {text}
      </label>
      <input
        required={required}
        value={value}
        id={id}
        onChange={(e) => onChange(e, id)}
        className={`border py-2 px-2 rounded-md ${inputClassName}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
