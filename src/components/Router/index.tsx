import { HouseSimple, SignOut } from "phosphor-react"
import { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { FinancialAnalysis } from "../../pages/FinancialAnalysis"
import { Dashboard } from "../../pages/Home"
import { Drawer } from "../Drawer"
import { Header } from "../Header"
import { IconButton } from "../IconButton"
import { LinkButton } from "../LinkButton"

export const Router = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const companyName = 'Empresa LTD'

    return (
        <>
            <Header companyName={companyName} setIsOpen={setIsOpen} />
            <Drawer companyName={companyName} isOpen={isOpen} setIsOpen={setIsOpen}>
                <main className='flex flex-col items-start p-4 gap-1'>
                    <LinkButton path='/dashboard'>
                        <HouseSimple/> Home
                    </LinkButton>
                    <LinkButton path='/monthly'>
                        Análise mensal
                    </LinkButton>
                </main>
                <span className='absolute left-4 bottom-4'><IconButton handleClick={() => navigate('/', { replace: true })}><SignOut className='transition-colors hover:text-red-500' size={24} /></IconButton></span>
            </Drawer>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/monthly' element={<FinancialAnalysis/>} />
            </Routes>
        </>
    )
}