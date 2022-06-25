import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { Link } from "../../components/Link"

export const Login = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col gap-4 w-screen max-w-7xl m-auto justify-center md:items-center h-screen p-4'>
            <article className="flex flex-col">
                <h1 className='m-auto text-6xl '>Bank<span className='text-green-500 font-medium'>2B</span></h1>
                <p className='text-text-dark'>Soluções financeiras para empresas do futuro</p>
            </article>
            <div className="flex flex-col ">
                <Form onSubmit={() => console.log('Logado')}>
                    <h1 className="m-auto font-medium">Faça seu login:</h1>
                    <div className='flex flex-col gap-4'>
                        <Input label='CNPJ/E-mail:' />
                        <Input type='password' label='Senha:' />
                    </div>
                    <Button onClick={() => navigate('/dashboard')} type='submit' variant='confirm'>Entrar</Button>
                </Form>
                <div className='flex flex-col mt-4 gap-2'>
                    <Link path='/'>Esqueci minha senha</Link>
                    <Link path='/register'>Ainda não sou cliente</Link>
                </div>
            </div>
        </div>
    )
}