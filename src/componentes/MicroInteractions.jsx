import React, { useState, useEffect } from 'react';

// Hook para animaciones de entrada
export const useFadeIn = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};

// Hook para hover effects
export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, hoverProps];
};

// Componente de botón con microinteracciones
export const AnimatedButton = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  disabled = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, hoverProps] = useHover();

  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
  };

  const scaleClasses = isPressed ? "scale-95" : isHovered ? "scale-105" : "scale-100";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      {...props}
      {...hoverProps}
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`${baseClasses} ${variantClasses[variant]} ${scaleClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

// Componente de tarjeta con animaciones
export const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}) => {
  const isVisible = useFadeIn(delay);
  const [isHovered, hoverProps] = useHover();

  return (
    <div
      {...props}
      {...hoverProps}
      className={`
        transition-all duration-300 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${isHovered ? 'shadow-xl scale-105' : 'shadow-lg scale-100'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Componente de loading con animación
export const LoadingDots = ({ size = 'medium', color = 'blue' }) => {
  const sizeClasses = {
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4'
  };

  const colorClasses = {
    blue: 'bg-blue-600',
    white: 'bg-white',
    gray: 'bg-gray-600'
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

// Componente de toast notification
export const Toast = ({ 
  message, 
  type = 'info', 
  isVisible, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const typeClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white'
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`px-6 py-3 rounded-lg shadow-lg ${typeClasses[type]} flex items-center space-x-2`}>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-current hover:opacity-75"
          aria-label="Cerrar notificación"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default {
  useFadeIn,
  useHover,
  AnimatedButton,
  AnimatedCard,
  LoadingDots,
  Toast
};
