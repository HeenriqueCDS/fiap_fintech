import { createContext, ReactNode, useState } from "react"

export interface Transaction {
    name: string;
    amount: number;
    date: string; //yyyy-mm-dd
    type: 'input' | 'output';
}

type TransactionContextData = {
    transactions: Transaction[]
    createTransaction: (transaction: Transaction) => void;
    inputs: number
    outputs: number
    initialBalance: number
}

type ProviderProps = {
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export const TransactionsProvider = ({ children }: ProviderProps) => {
    const [transactions, setTransactions] = useState([{
        name: 'Freelance Web',
        type: 'input',
        amount: 2000,
        date: new Date().toISOString()
    } as Transaction
    ])

    const [inputs, setInputs] = useState(2000)
    const [outputs, setOutputs] = useState(0)

    const initialBalance = 7000

    const createTransaction = ({ type, amount, date, name }: Transaction) => {

        setTransactions([
            ...transactions, {
                name,
                type,
                amount,
                date
            }
        ])
        if (type === 'input') {
            setInputs(inputs + amount)
        }
        if (type === 'output') {
            setOutputs(outputs + amount)
        }

    }



    return (
        <TransactionsContext.Provider value={{ createTransaction, transactions, outputs, inputs, initialBalance }}>
            {children}
        </TransactionsContext.Provider>
    )
}