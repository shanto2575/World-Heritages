"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditsModal({ heritage }) {
    const { _id,
        siteName,
        country,
        region,
        type,
        unescoYear,
        location,
        imageUrl,
        summary,
        description,
    } = heritage;

    const onSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const heritages = Object.fromEntries(formdata.entries())
        // console.log(heritage,'formData')
        const {data:tokenData}=await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/heritages/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                authorization:`Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(heritages)
        })
        const data = await res.json()
        // console.log(data,'data')
        window.location.reload()
    }

    return (
        <Modal>
            <Button className={'rounded'}>Edits</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edits Heritages Details</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className=" space-y-1">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        {/* Site Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={siteName} name="siteName" >
                                                <Label>Heritage Site Name</Label>
                                                <Input placeholder="Taj Mahal" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Country */}
                                        <TextField defaultValue={country} name="country" >
                                            <Label>Country</Label>
                                            <Input placeholder="India" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Region / Continent */}
                                        <TextField defaultValue={region} name="region" >
                                            <Label>Region / Continent</Label>
                                            <Input placeholder="Asia" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Site Type */}
                                        <div>
                                            <Select name="type" className="w-full" placeholder="Select site type">
                                                <Label>Site Type</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover >
                                                    <ListBox >
                                                        <ListBox.Item id="Cultural">Cultural<ListBox.ItemIndicator /></ListBox.Item>
                                                        <ListBox.Item id="Natural">Natural<ListBox.ItemIndicator /></ListBox.Item>
                                                        <ListBox.Item id="Mixed">Mixed<ListBox.ItemIndicator /></ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* UNESCO Year */}
                                        <TextField defaultValue={unescoYear} name="unescoYear" type="number" >
                                            <Label>UNESCO Listed Year</Label>
                                            <Input type="number" placeholder="1983" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Location */}
                                        <TextField defaultValue={location} name="location" >
                                            <Label>City / Location</Label>
                                            <Input placeholder="Agra, Uttar Pradesh" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Image URL */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={imageUrl} name="imageUrl" >
                                                <Label>Image URL</Label>
                                                <Input type="url" placeholder="https://example.com/tajmahal.jpg" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Short Summary */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={summary} name="summary" >
                                                <Label>Short Summary</Label>
                                                <Input placeholder="Iconic white marble mausoleum..." className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={description} name="description" >
                                                <Label>Full Description</Label>
                                                <TextArea
                                                    placeholder="Describe the historical and cultural importance..."
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                    </div>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Confirm Edits</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}