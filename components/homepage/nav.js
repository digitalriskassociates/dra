import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <>
            <div className="relative">
                <div className="max-w-screen-2xl mx-auto px-5 md:px-14">
                    <div className="flex justify-between items-center pt-8 md:justify-start md:space-x-10">
                        <div as="nav" className="flex space-x-10">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}