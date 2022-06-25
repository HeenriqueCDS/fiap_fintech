import { Fragment, useState } from 'react'
import { Listbox as NativeListbox, Transition } from '@headlessui/react'
import { ArrowsDownUp, Check } from 'phosphor-react'

interface Item {
  name: string;
  value: 'input' | 'output';
}

interface ListboxProps {
  list: Item[]
  selected: Item;
  setSelected: React.Dispatch<React.SetStateAction<Item>>;
  label: string;
}

export default function Listbox({ list, selected, setSelected, label }: ListboxProps) {

  return (
    <div className='flex flex-col gap-2'>
      <label>{label}</label>
      <NativeListbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <NativeListbox.Button className="relative w-full cursor-default rounded bg-transparent border-middleground border-2 p-2 hover:bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-green-500 disabled:opacity-50 disabled:hover:bg-green-500">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ArrowsDownUp
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </NativeListbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <NativeListbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-background py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {list.map((item, index) => (
                <NativeListbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-green-200 text-zinc-900' : 'text-text-dark'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </NativeListbox.Option>
              ))}
            </NativeListbox.Options>
          </Transition>
        </div>
      </NativeListbox>
    </div>
  )
}
