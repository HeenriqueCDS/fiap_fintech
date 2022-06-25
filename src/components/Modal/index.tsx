import { Fragment, ReactNode} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '../Button';


interface ModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    title: string;
    onSubmit?: () => void;
    children: ReactNode;
    action: string;
}

export const Modal = ({isOpen, setIsOpen, title, onSubmit, children, action}: ModalProps) => {

    const closeModal = () => {
        setIsOpen(false)
    }

    const onDone = () => {
        setIsOpen(false)
        if (onSubmit) {
            onSubmit()
        }
    }
    return (


        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-foreground p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-green-300"
                                >
                                    {title}
                                </Dialog.Title>
                                <div className="flex flex-col gap-4 mt-2">
                                        {children}
                                </div>

                                <div className="flex mt-4 w-full gap-4">
                                    <Button variant='cancel' onClick={closeModal}>
                                        Cancelar
                                    </Button>
                                    <Button variant='confirm' onClick={onDone}>
                                        {action}
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}