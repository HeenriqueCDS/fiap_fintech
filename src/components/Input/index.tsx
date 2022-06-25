import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input = ({ label, ...rest}: InputProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <label>{label}</label>
            <input className='rounded bg-transparent border-middleground border-2 p-2 hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-green-500 disabled:opacity-50 disabled:hover:bg-green-500' {...rest}></input>
        </div>
    )
}