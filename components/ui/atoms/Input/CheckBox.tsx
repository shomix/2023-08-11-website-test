import React from 'react';

interface CheckBoxInputProps {
  isChecked: boolean;
  styleProp?: boolean;
  inputClassName?: string;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  onChange?: React.EventHandler<React.ChangeEvent>;
}

export default function CheckBoxInput({
  isChecked,
  styleProp,
  inputClassName,
  onClick,
  onChange,
}: CheckBoxInputProps) {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      className={`w-[1.5em] bg-rose-600 bg-transparent accent-[#6651D4] ${inputClassName}`}
      style={styleProp ? { opacity: 0 } : { opacity: 1 }}
      onClick={onClick}
      onChange={onChange}
    />
  );
}

CheckBoxInput.defaultProps = {
  styleProp: false,
  inputClassName: 'w-[1.5em] bg-rose-600 bg-transparent accent-[#6651D4]',
  onClick: () => {},
  onChange: () => {},
};
