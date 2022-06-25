import { CalendarPlus } from "phosphor-react";
import { defaultFocus, defaultHover } from "../../styles";

interface MonthButtonProps {
    monthYear: string;
    onClick: () => void;
}

export const MonthButton = ({monthYear, onClick}: MonthButtonProps) => {
    return (
        <button onClick={onClick} className={`items-center flex rounded-md bg-foreground gap-1 ${defaultFocus} ${defaultHover}`}>
        <span className='flex p-2 text-sm'>
            {monthYear}
        </span>
        <span className='flex items-center justify-center h-full bg-middleground p-2 rounded-r-md '>
            <CalendarPlus className='text-green-400'size={24} />
        </span></button>
    )
}