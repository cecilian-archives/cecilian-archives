import type { ReactNode } from "react";
import type { RegisterOptions } from "react-hook-form";

interface TextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  register: any;
  options: RegisterOptions;
  errors: any;
  onBackground?: "light" | "dark";
  children?: ReactNode;
}

const TextArea = ({
  name,
  label,
  placeholder,
  rows = 4,
  register,
  options,
  errors,
  onBackground = "light",
  children,
}: TextAreaProps) => {
  const labelColour = onBackground === "light" ? "text-gray-800" : "text-white";
  const errorColour = onBackground === "light" ? "text-red-700" : "text-red-300";
  return (
    <label
      className={`text-base ${labelColour} w-full flex flex-col justify-center items-start gap-1`}
    >
      <span>{label}</span>
      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name, options)}
        className="text-black w-full rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400"
      >
        {children}
      </textarea>
      {Boolean(errors[name]?.message) && (
        <span className={`text-base max-w-prose ${errorColour} mt-1 mb-3`}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </label>
  );
};

export default TextArea;
