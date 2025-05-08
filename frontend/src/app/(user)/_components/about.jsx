"use client"
import React, { useState } from 'react'
import { FaSquareGithub, FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const footerContent = [
    {
        id: 1,
        title: "دسترسی سریع",
        desc1: "طراحی سایت",
        desc2: "مشاوره رایگان و سئو",
        desc3: "آموزش های رایگان",
        desc4: "سولات رایج"
    },
    {
        id: 2,
        title: "دسترسی سریع",
        desc1: "طراحی سایت",
        desc2: "مشاوره رایگان و سئو",
        desc3: "آموزش های رایگان",
        desc4: "سولات رایج"
    },
    {
        id: 3,
        title: "دسترسی سریع",
        desc1: "طراحی سایت",
        desc2: "مشاوره رایگان و سئو",
        desc3: "آموزش های رایگان",
        desc4: "سولات رایج"
    },

]


function About() {
    const [isOpen, setIsOpen] = useState(null)
    const handleToggle = (id) => {
        setIsOpen(prev => prev === id ? null : id);
    };

    return (
        <footer className="px-4 mt-8 pt-8 pb-8 md:flex space-y-6 container xl:max-w-screen-xl items-center justify-between">
            {footerContent.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleToggle(item.id)}
                    className="border-b pb-4 border-b-gray-400 md:border-none"
                >
                    <h2 className="flex items-center justify-between text-secondary-800 font-bold">
                        {item.title}
                        <HiChevronDown
                            className={`md:hidden ${isOpen === item.id ? "rotate-180" : ""
                                } transition-all duration-500`}
                        />
                    </h2>
                    <ul
                        className={`text-sm text-secondary-600 mr-1 md:block ${isOpen === item.id ? "" : "hidden"
                            }`}
                    >
                        <li>{item.desc1}</li>
                        <li>{item.desc2}</li>
                        <li>{item.desc3}</li>
                        <li>{item.desc4}</li>
                    </ul>
                </div>
            ))}

            <div className="space-y-4">
                <h2 className="text-secondary-800 font-bold">تماس با ما</h2>
                <ul className="text-sm text-secondary-600 mr-1 space-y-4">
                    <li>
                        <span>همراه : 09167123676</span>
                    </li>
                    <li className="flex items-center justify-evenly">
                        <FaTelegram className="text-blue-500 icon" />
                        <FaSquareGithub className="text-black icon" />
                        <FaInstagramSquare className="text-red-600 icon" />
                        <FaLinkedin className="text-blue-600 icon" />
                    </li>
                    <li>
                        <a href="mailto:shahryartoolabi@gmail.com">shahryartoolabi@gmail.com</a>
                    </li>
                </ul>
            </div>
        </footer>)
}

export default About
