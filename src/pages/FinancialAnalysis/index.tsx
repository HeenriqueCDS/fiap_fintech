
import { PlusCircle } from "phosphor-react"
import { useContext, useState } from "react"
import { Input } from "../../components/Input"
import Listbox from "../../components/Listbox"
import { Modal } from "../../components/Modal"
import { MonthButton } from "../../components/MonthSelectButton"
import { TransactionCard } from "../../components/TransactionCard"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { monefy } from "../../util/monefy"


interface Options {
    name: string;
    value: 'input' | 'output'
}

export const FinancialAnalysis = () => {

    const [isOpen, setIsOpen] = useState(false)

    const options = [
        { name: 'Entrada', value: 'input' },
        { name: 'Saída', value: 'output' }
    ] as Options[]

    const [selected, setSelected] = useState(options[0])
    const [name, setName] = useState<string>('')
    const [amount, setAmount] = useState<number>(0)
    const [date, setDate] = useState<string>('2022-06-24')


    const { transactions, createTransaction, initialBalance, inputs, outputs } = useContext(TransactionsContext)

    const handleCreateTransaction = () => {
        try {
            createTransaction({
                name,
                amount,
                date,
                type: selected.value,
            })
            window.alert('Transação criada!')
        } catch (err) {
            window.alert('Erro ao criar transação')
        }
    }

    const income = inputs - outputs
    const currentBalance = initialBalance + income

    return (
        <>
            <div className='flex flex-col w-full p-4 md:self-center max-w-3xl'>
                <header className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <h1>
                            Análise mensal
                        </h1>
                        <MonthButton monthYear='Junho de 2022' onClick={() => window.alert('Em breve')} />
                    </div>
                    <div className='flex justify-between items-end'>
                        <article>
                            <h4>Saldo inicial: <span className='text-text-dark'>{monefy(initialBalance)}</span></h4>
                            <h4>Entradas: <span className='text-green-400'>{monefy(inputs)}</span></h4>
                            <h4>Saídas:  <span className='text-red-400'>- {monefy(outputs)}</span></h4>

                        </article>
                        <article>
                            <h4>Receita: &nbsp;
                                {income <= 0 ?
                                    <span className='text-red-500' >{monefy(income)}</span> :
                                    <span className='text-green-500' >{monefy(income)}</span>
                                }

                            </h4>
                            <h4>Saldo: &nbsp;
                                {currentBalance <= 0 ?
                                    <span className='text-red-500' >{monefy(currentBalance)}</span> :
                                    <span className='text-green-500' >{monefy(currentBalance)}</span>
                                }</h4>
                        </article>
                    </div>
                </header>
                <section className={`flex relative flex-col w-full mt-6 pt-6 gap-2 before:content-[''] before:bg-foreground before:absolute before:h-[1px] before:w-full before:top-0`}>
                    <header className='pl-2 flex mb-2 gap-1'>
                        <div className='min-w-[90px] w-[40%] mobileLarge:w-[35%] truncate'>
                            Nome
                        </div>
                        <div className='min-w-[70px] w-[30%] truncate mobileLarge:w-[25%]'>Valor</div>
                        <div className='min-w-[70px] w-[10%] truncate hidden mobileLarge:flex'>Data</div>
                        <div className="w-10 ml-auto flex items-center justify-center">
                            <PlusCircle
                                onClick={() => setIsOpen(true)}
                                className='text-green-400 hover:text-green-600 transition-colors cursor-pointer' size={24}
                            />
                        </div>
                    </header>
                    {transactions.map((transaction, index) => {
                        return (
                            <TransactionCard
                                key={index}
                                name={transaction.name}
                                date={transaction.date}
                                type={transaction.type}
                                amount={transaction.amount}
                            />
                        )
                    })}
                </section>

            </div>
            <Modal action='Adicionar' isOpen={isOpen} title='Adicionar transação' setIsOpen={setIsOpen} onSubmit={handleCreateTransaction}>
                <Input
                    label='Nome'
                    onChange={(event) => setName(event.target.value)}
                />
                <Input
                    label='Data'
                    type='date'
                    onChange={(event) => setDate(event.target.value)}
                />
                <Listbox
                    list={options}
                    selected={selected}
                    setSelected={setSelected}
                    label='Tipo'
                />
                <Input
                    type='number'
                    onChange={(event) => setAmount(Number(event.target.value))}
                    min={0.01}
                    step={0.01}
                    label='Quantidade'
                />
            </Modal>
        </>
    )
}