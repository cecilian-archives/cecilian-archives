import type { ReactNode } from "react";
import type { RegisterOptions } from "react-hook-form";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

interface NumberFieldProps {
  title: ReactNode;
  description?: ReactNode;
  name: string;
  label: string;
  placeholder?: string;
  register: any;
  options: RegisterOptions;
  errors: any;
  getValues: any;
  setValue: any;
  onBackground?: "light" | "dark";
}

const NumberField = ({
  title,
  description,
  name,
  label,
  placeholder,
  register,
  options,
  errors,
  getValues,
  setValue,
  onBackground = "light",
}: NumberFieldProps) => {
  const labelColour = onBackground === "light" ? "text-gray-800" : "text-white";
  const errorColour = onBackground === "light" ? "text-red-700" : "text-red-300";

  const increment = () => {
    const currentValue = parseInt(getValues(name)) || 0;
    const newValue = currentValue + 1;
    setValue(name, newValue, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
  };
  const decrement = () => {
    const currentValue = parseInt(getValues(name)) || 0;
    const newValue = currentValue - 1;
    if (newValue < 0) {
      setValue(name, 0, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
    } else {
      setValue(name, newValue, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-end gap-2">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="self-start md:self-auto">
          {title}
          {description}
        </div>
        <div
          className={`text-base ${labelColour} w-full md:w-auto grid grid-cols-[1fr_1.75rem_4rem_1.75rem] md:grid-cols-[1.75rem_4rem_1.75rem] auto-rows-auto justify-items-center items-center gap-y-1 gap-x-4`}
        >
          <label className="row-start-1 md:col-start-2 justify-self-start">{label}</label>
          <button
            type="button"
            className="text-archiveBlue-400 hover:text-archiveBlue-500 md:row-start-2"
            onClick={decrement}
          >
            <MinusCircleIcon className="w-7 h-7" />
          </button>
          <input
            type="text"
            placeholder={placeholder}
            {...register(name, {
              ...options,
              pattern: { value: /^-?\d+$/, message: "Please enter a number, with no decimals" },
              valueAsNumber: false,
            })}
            className={`md:row-start-2 text-black w-16 text-center rounded border border-archiveBlue-700 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-archiveBlue-400`}
          />
          <button
            type="button"
            className="text-archiveBlue-400 hover:text-archiveBlue-500 md:row-start-2"
            onClick={increment}
          >
            <PlusCircleIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
      {Boolean(errors[name]?.message) && (
        <span className={`text-base max-w-prose text-right ${errorColour}`}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default NumberField;
