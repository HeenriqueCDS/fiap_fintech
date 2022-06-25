import { ReactNode } from "react"
import { defaultFocus } from "../../styles"

interface NavItemProps {
    children: ReactNode;
    label: string;
}

export const NavItem = ({ children, label }: NavItemProps) => {
    return (
        <a className='flex items-center justify-center flex-col gap-1'>
            <button className={`flex items-center hover:scale-105 justify-center rounded-full bg-foreground h-14 w-14 ${defaultFocus}`}>
                {children}
            </button>
            {label}
        </a>
    )
}