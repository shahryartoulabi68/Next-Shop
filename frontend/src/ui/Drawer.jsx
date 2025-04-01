"use client"
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'

function Drawer({ open, onClose, children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return createPortal(
        <>
            <div className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800
            bg-opacity-30 ${open ? "block" : "hidden pointer-events-none"}`}
                onClick={onClose}
            ></div>
            <div className={`fixed top-0 ring-0 w-[250px] h-screen transition-transform transform z-40
            ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className='bg-secondary-0 max-h-full overflow-y-auto'>
                    {children}
                </div>
            </div>
        </>,
        document.body
    )
}

export default Drawer
