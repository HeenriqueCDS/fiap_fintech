import { Info } from "phosphor-react"
import { Transaction } from "../../contexts/TransactionsContext";
import { defaultFocus, defaultHover } from "../../styles";
import { formatDate } from "../../util/DataFormat";
import { monefy } from "../../util/monefy"

interface TransactionCardProps extends Transaction {

}


export const TransactionCard = ({name, amount, date, type}: TransactionCardProps) => {
    return (
        <div tabIndex={0} className={`flex bg-foreground h-10 rounded-md items-center pl-2 gap-1 ${defaultFocus} ${defaultHover}`}>
            <div className='min-w-[90px] w-[40%] mobileLarge:w-[35%] w- truncate'>
                {name}
            </div>
            <div className={`min-w-[70px] w-[40%] truncate mobileLarge:w-[25%] ${type === 'input'? 'text-green-400' : 'text-red-400'}`}>
                {monefy(amount)}
            </div>
            <div className='min-w-[70px] w-[10%] truncate hidden mobileLarge:flex'>
                {formatDate(date)}
            </div>
            <div className='ml-auto w-10 flex justify-center items-center bg-middleground h-full rounded-r-md'>
                <Info className='text-green-400  hover:text-green-600 transition-colors' size={24} />
            </div>
        </div>
    )
}