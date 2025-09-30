"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center">
                <ul className="flex space-x-8 text-lg font-medium">
                    <li><a href="/" className="hover:text-gray-200">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-200">About</a></li>
                    <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

