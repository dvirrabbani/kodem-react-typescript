import React, { useState } from "react";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-semibold text-gray-800">
                            Kodem
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Home
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            About
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </a>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen((s) => !s)}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {open ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                            Home
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                            About
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
