import React from 'react'

type Variant = 'solid' | 'outline';
type Color = 'slate' | 'white' | 'orange';

interface IButton {
  variant?: Variant;
  color?: Color;
  className?: string;
  href?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-lg py-3 px-9 text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group border-white border inline-flex items-center justify-center rounded-lg py-3 px-9 text-base focus:outline-none',
};

const variantStyles = {
  solid: {
    orange: 'bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-700 active:text-white focus-visible:outline-white',
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    orange: 'text-orange-500 hover:text-orange-600 active:text-orange-600 focus-visible:outline-white border-orange-500 hover:border-orange-600',
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
};

export default function Button({variant = 'solid', color='orange', className, children, ...props}: IButton) {
  const classNames = `${baseStyles[variant] + variantStyles[variant][color]} ${className}`
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
