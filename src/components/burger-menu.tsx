import { cn } from "../utils/cn";

type Props = {
  isOpen: boolean;
  handleToggle: () => void;
};

const BurgerMenu = ({ isOpen, handleToggle }: Props) => {
  return (
    <button
      className="relative h-8 w-8 -right-1.5 cursor-pointer md:hidden"
      onClick={handleToggle}
      aria-label="Toggle menu"
    >
      <div
        className={cn(
          "absolute left-[7px] top-[15px] transition-transform duration-200 ease-in-out",
          {
            "delay-0": isOpen,
            "delay-100 translate-y-[-3px] scale-x-[0.88235]": !isOpen,
          }
        )}
      >
        <div
          className={cn(
            "h-[1px] w-[17px] bg-neutral-300 rounded-md transition-transform duration-200 ease-in-out",
            {
              "-rotate-[45deg] delay-100": isOpen,
            }
          )}
        ></div>
      </div>
      <div
        className={cn(
          "absolute left-[7px] top-[15px] transition-transform duration-200 ease-in-out",
          {
            "delay-0": isOpen,
            "delay-100 translate-y-[3px] scale-x-[0.88235]": !isOpen,
          }
        )}
      >
        <div
          className={cn(
            "h-[1px] w-[17px] bg-neutral-300 rounded-md transition-transform duration-200 ease-in-out",
            {
              "rotate-[45deg] delay-100": isOpen,
            }
          )}
        ></div>
      </div>
    </button>
  );
};

export default BurgerMenu;
