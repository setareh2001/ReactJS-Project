import React from "react";

const Input = ({
  type,
  label,
  value,
  defaultValue,
  placeholder,
  onChange,
  name,
  className,
}) => {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        className={className}
      />
    </label>
  );
};

export default Input;
