import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { defaultFocus, defaultHover } from "../../styles";

interface LinkButtonProps {
    path: string;
    children: ReactNode
}

export const LinkButton = ({ path, children }: LinkButtonProps) => {

    const navigate = useNavigate()
    const isDisabled = (path === window.location.pathname)

    return (
        <button
            className={`rounded p-1 flex gap-1 items-center text-text-dark ${defaultFocus} disabled:hover:bg-transparent disabled:text-green-400 hover:text-green-400`}
            onClick={() => navigate(path)}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}