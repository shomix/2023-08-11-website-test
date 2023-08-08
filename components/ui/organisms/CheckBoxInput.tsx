// type SelectProps = {
//   isChecked: boolean;
//   styleProp: boolean;
//   containerClassName?: string;
//   inputClassName?: string;
// };

export default function CheckBoxInput({
  isChecked,
  styleProp,
  containerClassName = 'flex w-[1.5em] h-[1.5em] my-auto rounded-sm overflow-hidden',
  inputClassName = ' w-[1.5em] bg-rose-600 bg-transparent accent-[#6651D4] ',
}) {
  return (
    <div
      className={containerClassName}
      style={
        styleProp
          ? {
              borderColor: 'white',
              border: 'solid',
              borderWidth: '1px',
            }
          : { border: 'none' }
      }
    >
      <input
        type="checkbox"
        checked={isChecked}
        className={inputClassName}
        style={styleProp ? { opacity: 0 } : { opacity: 1 }}
      />
    </div>
  );
}
