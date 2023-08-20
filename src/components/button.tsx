import clsx from "clsx";
import Image from "next/image";

interface ButtonProps {
  label: string;
  icon?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function Button({
  label,
  icon,
  backgroundColor,
  borderColor,
  textColor,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex flex-row justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full",
        backgroundColor ? backgroundColor : "bg-coral-red",
        textColor ? textColor : "text-white",
        borderColor ? borderColor : "border-coral-red"
      )}
    >
      {label}
      {icon && (
        <Image
          src={icon}
          height={5}
          width={5}
          className="ml-2 rounded-full w-5 h-5"
          alt="button"
        />
      )}
    </button>
  );
}
