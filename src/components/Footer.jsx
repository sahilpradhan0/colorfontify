import React from 'react'

const Footer = () => {
    const links = [
        {
            name: "Home",
            path: "#"
        },
        {
            name: "Upload Image",
            path: "#upload"
        },
        {
            name: "How It Works",
            path: "#howItWorks"
        },
        {
            name: "Features",
            path: "#features"
        },
    ]
    return (
        <footer class="text-white px-4 md:px-8 py-4 bg-slate-950">
            <div class="max-w-6xl mx-auto flex  gap-8 text-sm justify-between">
                <div className='flex flex-col w-1/2'>
                    <h2 class="text-lg font-semibold mb-2 text-md md:text-xl">ColorFontify</h2>
                    <p class="text-gray-400 text-xs md:text-sm leading-5">
                     Instantly generate color palettes and extract text with one click.
                    </p>
                </div>
                <div className=''>
                    <h3 class="font-semibold mb-2 text-md md:text-lg">Quick Links</h3>
                    <ul class="space-y-1 text-gray-400">
                        {links.map((link, index) => <li key={index}><a href={link.path} className='hover:text-white text-xs md:text-sm'>{link.name}</a></li>)}
                    </ul>
                </div>
            </div>
            <div class="text-center text-gray-500 mt-10 text-xs">
                © 2025 ColorFontify. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer