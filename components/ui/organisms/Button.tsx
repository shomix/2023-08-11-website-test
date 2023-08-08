// type ButtonProps = {
//   text: string;
//   onClick: any;
//   type?: 'submit' | 'button' | 'reset';
//   buttonClassName?: string;
// };

export default function Button({
  text,
  onClick,
  // type = 'submit',
  buttonClassName = 'hover:bg-[#473894] transition-all bg-[#6651D4] text-white w-full py-3 font-semibold rounded-lg',
}) {
  return (
    <button onClick={onClick} type="submit" className={buttonClassName}>
      {text}
    </button>
  );
}
