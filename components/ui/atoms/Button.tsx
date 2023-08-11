import React, { ReactNode } from 'react';
import SpinnerIcon from '@/components/ui/atoms/Spinner';

interface ButtonProps {
  children?: ReactNode;
  isSubmit?: boolean;
  className?: string;
  isLoading?: boolean;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  isDisabled?: boolean;
  // other props go here
}

export default function Button({
  children = null,
  isSubmit = false,
  className = '',
  isLoading = false,
  onClick = () => {},
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      className={`hover:bg-[#473894] transition-all bg-[#6651D4] text-white w-full py-3 font-semibold rounded-lg text-sm ${className}`}
    >
      {isLoading ? <SpinnerIcon /> : children}
    </button>
  );
}

Button.defaultProps = {
  children: null as ReactNode,
  isSubmit: false,
  className: '',
  isLoading: false,
  onClick: () => {},
  isDisabled: false,
};
