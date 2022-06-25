import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'cancel' | 'confirm'
}

export const Button = ({children, variant, ...rest}: ButtonProps) => {
    if (variant === 'confirm') {
        return (
            <button {...rest} className='flex-1 rounded text-foreground p-2 bg-green-500 transition-all text-base font-medium hover:opacity-80' >{children}</button>
        )
    } else {
        return (
            <button {...rest} className='flex-1 rounded text-foreground p-2 bg-zinc-500 transition-all text-base font-medium hover:opacity-80' >{children}</button>
        )
    }

}