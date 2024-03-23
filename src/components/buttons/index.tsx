import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonstyle = cva(
  'rounded flex gap-2 text-sm font-medium transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring',
  {
    defaultVariants: {
      size: 'md',
      variants: 'primary',
    },
    variants: {
      size: {
        md: 'px-8 py-3',
        sm: 'py-2 px-4',
      },
      variants: {
        primary: 'bg-indigo-600  text-white active:bg-indigo-500',
        secondary: 'bg-red-600 active:bg-red-500  text-white ',
      },
    },
  }
);

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  variants,
  size,
  className,
  children,
  ...rest
}: Props) => {
  const style = buttonstyle({ className, size, variants });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
