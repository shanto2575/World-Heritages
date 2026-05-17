import HeritageDetailsCard from '@/components/Heritages/HeritageDetailsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

const HeritageDetailsPage = async ({ params }) => {
    const {id} = await params;
    // console.log(id)
    const {token}=await auth.api.getToken({
        headers:await headers()
    })
    // console.log(token)
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/heritages/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const heritage=await res.json()
    return (
        <div>
            <div>
                <HeritageDetailsCard heritage={heritage}/>
            </div>
        </div>
    )
}

export default HeritageDetailsPage
