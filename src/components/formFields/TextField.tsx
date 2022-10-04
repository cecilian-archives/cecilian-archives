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
  widthClasses?: string;
  prefix?: string;
  inputMode?: string;
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
  widthClasses = "",
  prefix = "",
  inputMode = undefined,
}: TextFieldProps) => {
  const labelColour = onBackground === "light" ? "text-gray-800" : "text-white";
  const errorColour = onBackground === "light" ? "text-red-700" : "text-red-300";
  const widthClass = widthClasses || "w-full";
  const prefixClass = Boolean(prefix) ? "pl-10" : "";

  const [errorName, errorIdx] = name.split(".");
  const errorMessage = errorIdx
    ? errors[errorName as string]?.[errorIdx]?.message
    : errors[name]?.message;

  return (
    <label
      className={`text-base ${labelColour} w-full flex flex-col justify-center items-start gap-1`}
    >
      <span>{label}</span>
      <div className={`relative group w-full`}>
        <input
          type={type}
          placeholder={placeholder}
          inputMode={inputMode}
          {...register(name, { ...options, setValueAs: (val: string) => val.trim() })}
          className={`text-black ${widthClass} ${prefixClass} rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400`}
        />
        {Boolean(prefix) && (
          <div className="absolute top-0 left-0 bottom-0 w-8 h-full bg-archiveBlue-200 bg-opacity-50 rounded-tl rounded-bl border border-archiveBlue-700 border-r-0 group-focus-within:border-transparent text-center flex justify-center items-center">
            {prefix}
          </div>
        )}
      </div>
      {Boolean(errorMessage) && (
        <span className={`text-base max-w-prose ${errorColour}`}>{errorMessage?.toString()}</span>
      )}
    </label>
  );
};

export default TextField;
