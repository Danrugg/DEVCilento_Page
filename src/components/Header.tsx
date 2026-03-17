"use client";

import { useState } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between w-full p-6 md:p-8 fixed top-0 z-50 bg-transparent mix-blend-multiply">
                {/* Left: Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-black hover:opacity-80 transition-opacity">
                    DEVCilento
                </Link>

                {/* Right: Pill Buttons */}
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 px-6 py-3 bg-[#e8e9ef] hover:bg-gray-300 transition-colors rounded-full text-black text-sm font-medium tracking-wide"
                    >
                        {isMenuOpen ? "CLOSE" : "MENU"}
                        <div className="flex gap-0.5 ml-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Overlay for mobile menu to close on click outside */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm" 
                    onClick={() => setIsMenuOpen(false)} 
                />
            )}

            <DropdownMenu isOpen={isMenuOpen} />
        </>
    );
}
