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
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src="../assets/dra-logo.svg"
                                        alt="DRA Logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div as="nav" className="flex space-x-10">
                            <a
                                href="mailto:contact@digitalrisk.associates"
                                target="_blank"
                                rel="noreferrer">
                                <button
                                    type="button"
                                >
                                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="white" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}