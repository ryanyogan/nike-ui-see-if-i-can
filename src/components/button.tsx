import Image from "next/image";

interface ButtonProps {
  label: string;
  icon?: string;
}

export default function Button({ label, icon }: ButtonProps) {
  return (
    <button className="flex flex-row justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
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
