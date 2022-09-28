import type { HTMLInputTypeAttribute } from "react";
import type { RegisterOptions } from "react-hook-form";

interface TextFieldProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  register: any;
  options: RegisterOptions;
  errors: any;
  onBackground?: "light" | "dark";
}

const TextField = ({
  name,
  type = "text",
  label,
  placeholder,
  register,
  options,
  errors,
  onBackground = "light",
}: TextFieldProps) => {
  const labelColour = onBackground === "light" ? "text-gray-800" : "text-white";
  const errorColour = onBackground === "light" ? "text-red-700" : "text-red-300";
  return (
    <label
      className={`text-base ${labelColour} w-full flex flex-col justify-center items-start gap-1`}
    >
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, options)}
        className="text-black w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
      />
      {Boolean(errors[name]?.message) && (
        <span className={`text-base max-w-prose ${errorColour}`}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </label>
  );
};

export default TextField;
