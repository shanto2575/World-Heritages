'use client'
import { authClient } from '@/lib/auth-client'
import { Avatar, Button } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navlink from './Navlink'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


const Navbar = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const { data: session } = authClient.useSession()
    const user = session?.user;

    const hanleLogOut = async () => {
        await authClient.signOut()
        router.push('/')
    }

    return (
        <nav className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">

                {/* Logo */}
                <Link href="/">
                    <p className="text-3xl font-bold bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        World Heritage
                    </p>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    <Navlink href="/">Home</Navlink>
                    <Navlink href="/heritages">Heritages</Navlink>
                    <Navlink href="/my-booking">My-Booking</Navlink>
                    <Navlink href="/add-heritages">Add-Heritages</Navlink>
                </ul>

                {/* Right side Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <Navlink href="/profile">Profile</Navlink>

                    {user ? (
                        <>
                            <Avatar>
                                <Avatar.Image src={user?.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                            </Avatar>

                            <Button onClick={hanleLogOut} className={'rounded'}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/login"><Button variant="primary" className={'rounded'}>Login</Button></Link>
                            <Link href="/signup"><Button variant="primary" className={'rounded'}>Sign Up</Button></Link>
                        </>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </header>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col p-5 gap-3  border-t">
                    <Navlink href="/">Home</Navlink>
                    <Navlink href="/heritages">Heritages</Navlink>
                    <Navlink href="/my-booking">My-Booking</Navlink>
                    <Navlink href="/add-heritages">Add-heritages</Navlink>
                    <Navlink href="/profile">Profile</Navlink>

                    {user ? (
                        <Button onClick={hanleLogOut} className="w-full rounded" >
                            Logout
                        </Button>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <Link href="/login"><Button className="w-full">Login</Button></Link>
                            <Link href="/signup"><Button className="w-full">Sign Up</Button></Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar