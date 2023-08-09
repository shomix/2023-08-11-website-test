import React from 'react';

interface CheckBoxInputProps {
  isChecked: boolean;
  styleProp?: boolean;
  inputClassName?: string;
  onClick?: React.EventHandler<React.SyntheticEvent>;
}

export default function CheckBoxInput({
  isChecked,
  styleProp,
  inputClassName,
  onClick,
}: CheckBoxInputProps) {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      className={`w-[1.5em] bg-rose-600 bg-transparent accent-[#6651D4] ${inputClassName}`}
      style={styleProp ? { opacity: 0 } : { opacity: 1 }}
      onClick={onClick}
    />
  );
}

CheckBoxInput.defaultProps = {
  styleProp: false,
  inputClassName: 'w-[1.5em] bg-rose-600 bg-transparent accent-[#6651D4]',
  onClick: () => {},
};
