import { ReactNode } from "react";
import { defaultFocus } from "../../styles";

interface IconButtonProps {
    handleClick: () => any;
    children: ReactNode;
}

export const IconButton = ({children,handleClick}: IconButtonProps) => {
    return (
        <button className={`rounded-full hover:scale-105 ${defaultFocus}`} onClick={handleClick}>
            {children}
        </button>
    )
}