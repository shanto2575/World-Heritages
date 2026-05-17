import HeritageCard from '@/components/Heritages/HeritageCard'
import React from 'react'

const HeritagesPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/heritages`, {
        cache: 'no-store'
    })
    const heritages = await res.json()

    return (
        <div className='w-10/12 mx-auto my-8'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    heritages.map(heritages => <HeritageCard key={heritages._id} heritages={heritages} />)
                }
            </div>
        </div>
    )
}

export default HeritagesPage
