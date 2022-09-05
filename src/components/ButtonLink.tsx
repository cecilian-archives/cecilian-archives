import { forwardRef } from "react";
import Link from "next/link";
import LoadingIndicator from "src/components/LoadingIndicator";

interface ButtonLinkBase {
  className?: string;
  width?: "fixed" | "adaptive";
  children: React.ReactNode;
  loading?: boolean;
  variant?: "solid" | "outline";
  colour?: "primary" | "secondary";
  textColour?: "light" | "dark";
}
interface LinkProps extends ButtonLinkBase {
  to: string;
  target?: string;
  onClick?: () => void;
  buttonType?: never;
}
interface ButtonProps extends ButtonLinkBase {
  to?: never;
  target?: never;
  onClick: () => void;
  buttonType?: "button" | "submit" | "reset";
}
type ButtonLinkProps = ButtonProps | LinkProps;

const baseClasses =
  "my-2 flex justify-center gap-4 items-center text-center py-2 px-6 rounded-md shadow-md text-lg md:text-base hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-transparent";
const variantClasses = {
  solid: {
    primary:
      "relative hover:-top-0.5 text-white bg-archiveBlue-700 border border-archiveBlue-800 focus:ring-archiveBlue-800",
    secondary:
      "relative hover:-top-0.5 text-gray-900 bg-archiveYellow-500 focus:ring-archiveYellow-300",
  },
  outline: {
    primary:
      "bg-transparent border border-archiveBlue-800 focus:ring-archiveBlue-300 hover:bg-archiveBlue-700 hover:text-white",
    secondary:
      "bg-transparent border border-archiveYellow-500 focus:ring-archiveYellow-400 hover:bg-archiveYellow-500 hover:text-gray-900",
  },
};
const widthClasses = {
  fixed: "w-56 max-w-full",
  adaptive: "w-max max-w-full min-w-[14rem]", // 14rem = w-56
};

const ButtonLink = forwardRef(
  (
    {
      to,
      target,
      onClick,
      loading,
      variant = "solid",
      colour = "primary",
      textColour = "dark",
      width = "adaptive",
      buttonType = undefined,
      className = "",
      children,
    }: ButtonLinkProps,
    ref?: React.Ref<any>
  ) => {
    const RootElement = Boolean(to) ? (Boolean(target) ? "a" : Link) : "button";
    const textClasses =
      variant === "outline" ? (textColour === "light" ? "text-white" : "text-black") : "";
    return (
      <RootElement
        href={to as string}
        target={target}
        type={RootElement === "button" ? buttonType : undefined}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant][colour]} ${widthClasses[width]} ${textClasses} ${className}`}
        ref={ref}
      >
        {RootElement === "button" ? (
          <>
            {loading && <LoadingIndicator />}
            {children}
          </>
        ) : RootElement === Link ? (
          <a
            className={`${baseClasses} ${variantClasses[variant][colour]} ${widthClasses[width]} ${textClasses} ${className}`}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </RootElement>
    );
  }
);

export default ButtonLink;
