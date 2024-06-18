import React from 'react';

interface ButtonProps {
  backgroundColor: string;
  width: string;
  height: string;
  text: string;
  color: string;
  link: string;
  hoverColor: string;
  backgroundColorHover: string;
  border: string;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  width,
  height,
  text,
  color,
  link,
  hoverColor,
  backgroundColorHover,
  border,
}) => {
  return (
    <a href={link}>
      <button
        className={`transition hover:scale-105 hover:shadow-lg focus:outline-none flex justify-center items-center rounded-3xl cursor-pointer duration-150 ease-in-out delay-150 ${border} text-${color} hover:text-${hoverColor} hover:bg-${backgroundColorHover}`}
        style={{ backgroundColor, width, height }}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
