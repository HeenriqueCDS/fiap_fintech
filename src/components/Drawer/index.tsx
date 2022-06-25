import { X } from "phosphor-react";
import { ReactNode } from "react";
import { IconButton } from "../IconButton";

interface DrawerProps {
    children: ReactNode;
    companyName: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const Drawer = ({ children, isOpen, setIsOpen, companyName }: DrawerProps) => {
    return (
      <main
        className={
          " fixed overflow-hidden z-10 bg-black bg-opacity-70 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            " w-screen max-w-lg right-0 absolute bg-foreground h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <header className=" flex p-4 font-bold text-lg">{companyName}<span className='ml-auto'><IconButton handleClick={() => setIsOpen(false)}><X size={24}/></IconButton></span></header>
            {children}
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    );
  }