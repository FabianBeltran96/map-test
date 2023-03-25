import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input({
  className,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      className="w-full h-14 rounded bg-gray-600 text-white font-extrabold"
      {...props}
    />
  );
}
