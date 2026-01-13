import React from 'react';
import './Button.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'| 'success';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick
}: ButtonProps) {
  
  const classNames = [
    'hls-button',
    `hls-button--${variant}`,
    `hls-button--${size}`,
    loading ? 'hls-button--loading' : ''
  ].join(' ');
  
  return (
    <button className={classNames} disabled={disabled || loading} onClick={onClick}>
      {loading ? '...' : children}
    </button>
  );
}