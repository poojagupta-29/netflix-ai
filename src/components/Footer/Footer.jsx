import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-400 py-10 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <p className="mb-8">Questions? Call 000-800-919-1743 (Toll-Free)</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-8 mb-8">
                    <Link to={'/'} className="hover:underline">FAQ</Link>
                    <Link to={'/'} className="hover:underline">Help Centre</Link>
                    <Link to={'/'} className="hover:underline">Terms of Use</Link>
                    <Link to={'/'} className="hover:underline">Privacy</Link>
                    <Link to={'/'} className="hover:underline col-span-2 sm:col-span-1">Cookie Preferences</Link>
                    <Link to={'/'} className="hover:underline col-span-2 sm:col-span-1">Corporate Information</Link>
                </div>
                <div>
                    <button className="flex items-center border border-neutral-700 px-4 py-2 rounded text-white bg-transparent hover:bg-neutral-800 transition">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18l-6-6h12l-6 6z" /></svg> English <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                </div>
            </div>
        </footer>
    )
}
