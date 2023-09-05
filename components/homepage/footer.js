import Link from 'next/link'

export default function Footer() {
    return (
        <div className="bg-black py-14 m-auto">
            <div className="max-w-screen-2xl px-5 md:px-14 block m-auto text-center">
                <button
                    type="button"
                >
                    <a href="mailto:HR@DigitalRiskDevelopment.com" target="_blank" rel="noreferrer">
                            <p className="inline-flex text-white ml-3 text-center">HR@DigitalRiskDevelopment.com</p>
                    </a>
                </button>
            </div>
        </div>
    )
}