import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlink = ({ href, children }) => {
    const pathname = usePathname()
    const isActive = href === pathname;
    return <Link href={href} className={`font-bold ${isActive && 'text-red-500 border-b border-pink-500' }`}>{children}</Link>
}

export default Navlink
