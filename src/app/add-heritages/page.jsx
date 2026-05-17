'use client'
import { authClient } from '@/lib/auth-client'
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const AddHeritageSite = () => {
    const route = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const HeritageSite = Object.fromEntries(formData.entries())
        // console.log(HeritageSite)
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/heritages`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(HeritageSite)
        })
        const data = await res.json()
        if (data) {
            route.push('/heritages')
        }
    }
    return (
        <div className='p-3 lg:p-0'>
            <div className='lg:w-6/12 mx-auto border rounded-2xl my-6'>
                <div>
                    <h1 className='text-3xl font-bold text-center mt-5'>ADD World Heritages Site</h1>
                </div>
                <form onSubmit={onSubmit} className="p-5 lg:p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Site Name */}
                        <div className="md:col-span-2">
                            <TextField name="siteName" isRequired>
                                <Label>Heritage Site Name</Label>
                                <Input placeholder="Taj Mahal" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label>Country</Label>
                            <Input placeholder="India" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Region / Continent */}
                        <TextField name="region" isRequired>
                            <Label>Region / Continent</Label>
                            <Input placeholder="Asia" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Site Type */}
                        <div>
                            <Select name="type" isRequired className="w-full" placeholder="Select site type">
                                <Label>Site Type</Label>
                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Cultural">Cultural<ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Natural">Natural<ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Mixed">Mixed<ListBox.ItemIndicator /></ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* UNESCO Year */}
                        <TextField name="unescoYear" type="number" isRequired>
                            <Label>UNESCO Listed Year</Label>
                            <Input type="number" placeholder="1983" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Location */}
                        <TextField name="location" isRequired>
                            <Label>City / Location</Label>
                            <Input placeholder="Agra, Uttar Pradesh" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input type="url" placeholder="https://example.com/tajmahal.jpg" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Short Summary */}
                        <div className="md:col-span-2">
                            <TextField name="summary" isRequired>
                                <Label>Short Summary</Label>
                                <Input placeholder="Iconic white marble mausoleum..." className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Full Description</Label>
                                <TextArea
                                    placeholder="Describe the historical and cultural importance..."
                                    className="rounded-3xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-cyan-600 text-white rounded-none"
                    >
                        Add Heritage Site
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddHeritageSite