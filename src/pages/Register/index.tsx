import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"

export const Register = () => {

    const navigate = useNavigate()

    const onSubmit = (event: Event) => {
        event.preventDefault()
    }

    return (
        <div className='flex flex-col gap-4 w-screen max-w-7xl m-auto justify-center md:items-center h-screen p-4'>
            <div className='flex justify-between w-full md:w-96'>
                <h1 className=' text-3xl '>Bank<span className='text-green-500 font-medium'>2B</span></h1>
                <h2 className='text-green-500 text-lg'>Cadastro</h2>
            </div>

            <Form onSubmit={onSubmit}>
                <div className='flex flex-col gap-4'>
                    <Input label='CNPJ:' />
                    <Input label='Email:' type='email' />
                    <Input label='Senha:' type='password' />
                    <Input label='Confirmar senha:' type='password' />
                </div>
                <div className='flex w-full gap-4'>
                    <Button variant='cancel' type='button' onClick={() => navigate('/')}>Cancelar</Button>
                    <Button variant='confirm' type='submit'>Próximo</Button>
                </div>
            </Form>
        </div>
    )
}