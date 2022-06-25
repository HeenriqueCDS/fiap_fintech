import { ButtonHTMLAttributes, ReactNode } from "react"
import { useNavigate } from "react-router-dom";

interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    path:  string;
    children: ReactNode
}

export const Link = ({children, path ,...rest}: LinkProps) => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(path)} className="text-text-dark w-fit transition-colors hover:text-green-400 " {...rest}>{children}</button>
    )
}