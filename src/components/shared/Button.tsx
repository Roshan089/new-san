import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2 dark:focus:ring-offset-black';

  const variantClasses = {
    primary: 'bg-saffron-500 text-white hover:bg-saffron-600 dark:bg-saffron-600 dark:hover:bg-saffron-700 shadow-md hover:shadow-lg',
    secondary: 'bg-navy-800 text-white hover:bg-navy-700 dark:bg-silver-800 dark:text-white dark:hover:bg-silver-700 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-saffron-500 text-saffron-500 hover:bg-saffron-50 dark:border-saffron-400 dark:text-saffron-400 dark:hover:bg-saffron-900/20',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;