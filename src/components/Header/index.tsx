import { Buildings, Question, Wrench } from "phosphor-react";
import { IconButton } from "../IconButton";

interface HeaderProps {
    setIsOpen: (value: boolean) => void;
    companyName: string;
}

export const Header = ({ companyName, setIsOpen }: HeaderProps) => {
    return (
        <header className='flex bg-foreground  w-screen justify-between p-4'>
            <div className="flex flex-col gap-1">
                <button
                    onClick={() => setIsOpen(true)}
                    className='flex justify-center items-center h-12 w-12 rounded-full bg-middleground relative transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-green-500 disabled:opacity-50 disabled:hover:bg-green-500      '
                >
                    <Buildings className='h-6 w-6 absolute' />
                </button>
                <h1>{companyName}</h1>
            </div>
            <div className='flex gap-2 items-start'>
                <IconButton handleClick={() => console.log('Cliquei vadia')}>
                    <Wrench size={24} />
                </IconButton>
                <IconButton handleClick={() => console.log('Cliquei vadia')}>
                    <Question size={24} />
                </IconButton>

            </div>
        </header>
    )
}