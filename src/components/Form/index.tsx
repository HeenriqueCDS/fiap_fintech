import { FormEventHandler, ReactNode } from "react";

interface FormProps {
    onSubmit: (any: any) => any;
    children: ReactNode;
}

export const Form = ({ children, onSubmit }: FormProps) => {
    return (
        <form onSubmit={() => onSubmit} className='py-8 px-4 bg-foreground md:w-96 flex flex-col gap-8 rounded '>
            {children}
        </form>
    )
}