import Link from 'next/link'

export default function Footer() {
    return (
        <div className="bg-brown bg-footer py-14">
            <div className="max-w-screen-2xl px-5 md:px-14 block m-auto">
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
                <p className="text-white playfair font-normal font-light text-2xl pt-9 pb-4">
                    Digital Risk Associates
                </p>
                <button
                    type="button"
                >
                    <a href="mailto:contact@digitalrisk.associates" target="_blank" rel="noreferrer">
                        <svg className="float-left" alt="email" width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="white" />
                            </svg>
                            <p className="inline-flex text-white ml-3">contact@digitalrisk.associates</p>
                    </a>
                </button>
                <p className="text-white pt-8">2022 Copywrite Digital Risk Assocates, Inc.</p>
            </div>
        </div>
    )
}