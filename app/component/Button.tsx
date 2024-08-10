export type Button = {
  title: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export const MainButton = ({
  title,
  type = "button",
  onClick,
  className,
  disabled,
}: Button) => (
  <button
    className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out ${className} bg-indigo-600 border border-transparent rounded-full shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 ${
      disabled ? "bg-gray-500 cursor-not-allowed" : ""
    }`}
    type={type}
    onClick={onClick}
    disabled={disabled}>
    {title}
  </button>
);

export default MainButton;
