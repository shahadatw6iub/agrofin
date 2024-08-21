"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from "next/link";
import { MdMenu as MenuIcon } from "react-icons/md";
import { FaLeaf as LeafIcon } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react'; // Importing the cross icon

const navItems = [
    { text: 'Features', href: '/features' },
    { text: 'Testimonials', href: '/testimonials' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
];

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header className="px-4 lg:px-6 h-14 flex items-center mt-5">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <LeafIcon className="h-6 w-6 text-green-500" />
                <span className="font-bold">Agro-fin</span>
            </Link>
            <div className="ml-auto flex items-center">
                {/* Hamburger menu button */}
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu}>
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>

                {/* Mobile menu (Sheet) */}
                {isMenuOpen && (
                    <div ref={menuRef} className="fixed inset-y-0 right-0 z-50 bg-white shadow-lg w-64 max-w-full h-full sm:h-auto sm:max-h-screen sm:w-80 sm:top-0 sm:right-0 sm:bottom-0 transition-transform transform translate-x-0">
                        <div className="flex flex-col p-6 h-full">
                            {/* Close button */}
                            <Button variant="ghost" size="icon" onClick={toggleMenu} className="self-end mb-4">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                            <nav className="flex flex-col gap-4">
                                {navItems.map(({ text, href }) => (
                                    <Link
                                        key={text}
                                        href={href}
                                        className="text-sm font-lg font-bold hover:underline underline-offset-4 text-muted-foreground"
                                        prefetch={false}
                                    >
                                        {text}
                                    </Link>
                                ))}
                                {/* ConnectButton inside the mobile menu */}
                                <div className="mt-4">
                                    <ConnectButton />
                                </div>
                            </nav>
                        </div>
                    </div>
                )}

                {/* Desktop menu */}
                <nav className="hidden lg:flex gap-4 sm:gap-6">
                    {navItems.map(({ text, href }) => (
                        <Link
                            key={text}
                            href={href}
                            className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground"
                            prefetch={false}
                        >
                            {text}
                        </Link>
                    ))}
                    {/* ConnectButton is not included here */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
