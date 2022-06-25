import { CaretRight, CreditCard } from "phosphor-react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { NavItem } from "../../components/NavItem"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { defaultFocus, defaultHover } from "../../styles"
import { monefy } from "../../util/monefy"


export const Dashboard = () => {

    const navigate = useNavigate()

    const { initialBalance, inputs, outputs } = useContext(TransactionsContext)

    const income = inputs - outputs
    const currentBalance = initialBalance + income

    return (
        <div className='flex flex-col w-full p-4 md:self-center max-w-3xl'>
            <section tabIndex={0} className={`${defaultFocus} ${defaultHover} relative p-4 rounded-md flex w-100% bg-foreground h-20 max-w-3xl justify-between`}>
                <div className='flex flex-col'>
                    <h1>Simples Nacional</h1>
                    <h2>Saldo: {monefy(currentBalance)}</h2>
                </div>
                <CaretRight className='self-center transition-colors hover:text-green-400' size={24} />
            </section>
            <nav className='py-2 w-screen flex flex-row my-6 gap-4 overflow-x-auto scrollbar-none md:justify-center md:w-full '>
                <NavItem label='Despesas'><CreditCard className='text-green-400' size={24} /></NavItem>
                <NavItem label='Despesas'><CreditCard className='text-green-400' size={24} /></NavItem>
                <NavItem label='Despesas'><CreditCard className='text-green-400' size={24} /></NavItem>
                <NavItem label='Despesas'><CreditCard className='text-green-400' size={24} /></NavItem>
                <NavItem label='Despesas'><CreditCard className='text-green-400' size={24} /></NavItem>
            </nav>
            <section tabIndex={0} onClick={() => navigate('/monthly')} className={`flex px-4 ${defaultFocus} ${defaultHover} justify-between relative py-8 gap-4 before:content-[''] before:bg-foreground before:absolute before:h-[1px] before:w-full before:top-0 after:content-[''] after:bg-foreground after:absolute after:h-[1px] after:w-full after:bottom-0`}>
                <div className="flex flex-col gap-4">
                    <h1>Análise finaceira mensal</h1>
                    <article>
                        <h2>Entradas: <span className='text-green-400'>{monefy(inputs)}</span></h2>
                        <h2>Saídas:  <span className='text-red-400'>- {monefy(outputs)}</span></h2>

                    </article>
                    <h4>Receita mensal: &nbsp;
                        {income <= 0 ?
                            <span className='text-red-500' >{monefy(income)}</span> :
                            <span className='text-green-500' >{monefy(income)}</span>
                        }

                    </h4>
                </div>
                <CaretRight className='self-center transition-colors hover:text-green-400' size={24} />
            </section>
        </div >
    )
}