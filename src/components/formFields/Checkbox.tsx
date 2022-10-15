import type { RegisterOptions } from "react-hook-form";

interface CheckboxProps {
  name: string;
  label: string;
  defaultChecked: boolean;
  register: any;
  options: RegisterOptions;
  errors: any;
  onBackground?: "light" | "dark";
}

const Checkbox = ({
  name,
  label,
  defaultChecked = false,
  register,
  options,
  errors,
  onBackground = "light",
}: CheckboxProps) => {
  const labelColour = onBackground === "light" ? "text-gray-800" : "text-white";
  const errorColour = onBackground === "light" ? "text-red-700" : "text-red-300";

  const [errorName, errorIdx] = name.split(".");
  const errorMessage = errorIdx
    ? errors[errorName as string]?.[errorIdx]?.message
    : errors[name]?.message;

  return (
    <label
      className={`text-base ${labelColour} w-full flex flex-row justify-start items-center gap-2`}
    >
      <div className={`group`}>
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          {...register(name, { ...options })}
          className={`text-archiveBlue-500 rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400`}
        />
      </div>
      <span>{label}</span>
      {Boolean(errorMessage) && (
        <span className={`text-base max-w-prose ${errorColour}`}>{errorMessage?.toString()}</span>
      )}
    </label>
  );
};

export default Checkbox;
