"use client";

import Link from "next/link";

interface DropdownMenuProps {
    isOpen: boolean;
    onClose?: () => void;
}

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Prezzi", href: "/prezzi" },
    { label: "Contatti", href: "/contatti" },
];

export default function DropdownMenu({ isOpen, onClose }: DropdownMenuProps) {
    return (
        <div
            className={`fixed top-[90px] right-6 md:right-8 w-[calc(100%-48px)] md:w-[400px] z-40 transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] origin-top ${isOpen
                    ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
                }`}
        >
            <div className="flex flex-col gap-2">
                {/* Navigation Links Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={onClose}
                                className="text-2xl md:text-3xl font-medium tracking-tight hover:text-gray-500 transition-colors flex items-center gap-4 group"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
