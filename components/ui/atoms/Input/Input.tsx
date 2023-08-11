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
    <div className={`flex flex-col mt-2 mb-6 ${containerClassName}`}>
      <label
        htmlFor={id}
        className={`font-[500] mb-1 text-[14px] ${labelClassName}`}
      >
        {text}
      </label>
      <input
        required={required}
        value={value}
        id={id}
        onChange={(e) => onChange(e, id)}
        className={`border py-2 px-2 rounded-md placeholder:text-sm placeholder:font-Inter placeholder:font-light shadow-Input ${inputClassName}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
