import { useEffect, useState } from "react";
// import  logo  from "../assets/logo.png"
const Navbar = () => {
    const [positionY, setPositionY] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handlePosition = () => {
            const scrollPosition = window.scrollY;
            setPositionY(scrollPosition);
        }
        window.addEventListener('scroll', handlePosition);
        return () => {
            window.removeEventListener('scroll', handlePosition);
        }
    }, [])
    const navItems = [
        {
            id: 1,
            name: "How It Works",
        },
        {
            id: 2,
            name: "Features"
        },

    ]
    return (
        <nav className='flex justify-between items-center h-20 px-10 md:px-30 text-white border-b-1' style={{ background: positionY > 0 ? "var(--color-slate-900)" : "", borderBottom: "1px solid gray" }}>
            <div>
                <h1 className='cursor-pointer font-semibold text-xl'><a href="#">ColorFontify</a></h1>
                {/* <img src={logo}  className="w-[70px] h-[70px] rounded-full" alt="ColorFontify"/> */}
            </div>
            <ul className='hidden md:flex gap-x-10'>
                {
                    navItems.map((item) => <li key={item.id} className='cursor-pointer text-white hover:text-gray-200' onClick={() => {
                        if (item.name === "How It Works") {
                            const path = document.getElementById("howItWorks");
                            path.scrollIntoView();
                        } else if (item.name === "Features") {
                            const path = document.getElementById("features");
                            path.scrollIntoView();
                        }
                    }}>{item.name}</li>)
                }
            </ul>

            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            {menuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-slate-950 flex flex-col items-center md:hidden h-32 justify-center">
                    {
                        navItems.map((item) => <li key={item.id} className='cursor-pointer text-white hover:text-gray-200 py-4' onClick={() => {
                            if (item.name === "How It Works") {
                                const path = document.getElementById("howItWorks");
                                path.scrollIntoView();
                            } else if (item.name === "Features") {
                                const path = document.getElementById("features");
                                path.scrollIntoView();
                            }
                            setMenuOpen(false);
                        }}>{item.name}</li>)
                    }
                </ul>
            )}
        </nav>
    )
}

export default Navbar