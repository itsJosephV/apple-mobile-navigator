import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BurgerMenu from "./burger-menu";
import { links } from "../links";
import useBreakpoint from "use-breakpoint";
import { cn } from "../utils/cn";
import { ChevronRight } from "./chevron-right";
import { Apple } from "./Apple";

const navHeight = 48;
const breakpoint = { md: 768 };
const easeInOutCubic = [0.65, 0, 0.35, 1];

const containerVariants = {
  hidden: { height: 0 },
  visible: {
    height: `calc(100vh - ${navHeight}px)`,
    transition: {
      duration: 0.35,
      ease: easeInOutCubic,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.35,
      ease: easeInOutCubic,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2,
    },
  },
};

const chevronVariants = {
  hidden: {
    opacity: 0,
    x: -5,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { breakpoint: breakpointValue } = useBreakpoint(breakpoint);

  const handleToggle = () => {
    if (!isAnimating) {
      setIsOpen((prev) => !prev);
      document.body.style.overflow = isOpen ? "auto" : "hidden";
    }
  };

  useEffect(() => {
    if (!breakpointValue) return;
    if (breakpointValue === "md" && isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [breakpointValue, isOpen]);

  //TODO: APPLY TRANSPARENCY [22,22,22,0.8]

  return (
    <header className="sticky top-0 w-full">
      <nav
        style={{ height: `${navHeight}px` }}
        className={cn(
          "flex justify-between items-center bg-[rgba(22,22,22)] backdrop-saturate-[1.8] backdrop-blur-[20px] px-5"
        )}
      >
        <div>
          <a className="font-bold text-neutral-300" href="">
            <Apple className="size-6" />
          </a>
        </div>
        <ul className="md:flex hidden items-center text-sm gap-8 text-neutral-300">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="hover:text-neutral-50 transition-colors duration-300"
              >
                <a href={link.href}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <BurgerMenu isOpen={isOpen} handleToggle={handleToggle} />
      </nav>
      {/* Mobile menu */}
      <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
        {isOpen && (
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            className="bg-[rgba(22,22,22)] overflow-y-scroll absolute w-full"
          >
            <ul className="flex gap-4 flex-col pt-4 text-neutral-50 text-3xl font-semibold">
              {links.map((link, index) => {
                return (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="pl-5 pr-4"
                  >
                    <motion.div
                      whileHover="hover"
                      initial="hidden"
                      className="flex justify-between items-center"
                    >
                      <a href={link.href}>{link.name}</a>
                      <motion.span variants={chevronVariants}>
                        <ChevronRight className="size-8 relative top-px" />
                      </motion.span>
                    </motion.div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
