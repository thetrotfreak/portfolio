'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Page() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-2 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} relative`}>
            <div className="absolute top-4 right-4">
                <button
                    className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode
                        ? 'hover:bg-gray-700'
                        : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    onClick={toggleTheme}
                >
                    {isDarkMode ? (
                        <BsSunFill size={24} className="text-yellow-500" />
                    ) : (
                        <BsMoonFill size={24} className="text-gray-700 dark:text-gray-300" />
                    )}
                </button>
            </div>

            <div className="flex flex-col items-start mb-6">
                <span className="text-9xl font-bold">Hi!</span>
                <h1 className="text-6xl font-bold">I am Bivas.</h1>
            </div>

            <div className="flex">
                <Link
                    href="https://github.com/thetrotfreak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 m-2 rounded flex items-center ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                >
                    <FaGithub className="mr-2" />
                    GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/bivas-k-26843b1ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 m-2 rounded flex items-center ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                </Link>
            </div>
        </div>
    );
}