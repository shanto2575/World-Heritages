import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    // console.log(session)
    const user = session?.user;
    return (
        <div className='my-6 lg:mt-12'>
            <div className='w-96 mx-auto'>
                <div className=' border rounded-2xl p-5'>

                    <Image
                        src={user?.image}
                        alt='profile'
                        width={300}
                        height={300}
                        className='w-full'
                    />

                    <div className='text-center mt-4'>
                        <h1 className='text-2xl font-bold'>Name : {user?.name}</h1>
                        <h1>Email : {user?.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
