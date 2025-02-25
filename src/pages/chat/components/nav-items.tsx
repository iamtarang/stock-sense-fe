/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type Category = {
    name: string,
    icon: string,
    items: string[]
}

const NavItems = ({ category }: { category: Category }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <button
                className="flex items-center justify-between w-full px-3 py-2 text-left rounded-md hover:bg-blue-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center">
                    <span className="mr-2">{/* Icon would go here */}</span>
                    <span>{category.name}</span>
                </div>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-2 ml-4 space-y-1">
                    {category.items.map((item: string, index: number) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-3 py-2 text-sm rounded-md hover:bg-blue-700"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavItems;