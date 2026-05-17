"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteHeritageAlert({ heritage }) {
    const route=useRouter()
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
    const handleHeritageDelete=async(id)=>{
        const {data:tokenData}=await authClient.token()
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/heritages/${id}`,{
            method:'DELETE',
            headers:{
                "Content-type":'application/json',
                authorization:`Bearer ${tokenData?.token}`
            }
        })
        const data=await res.json()
        // console.log(data,'delete data')
        if(data){
            route.push('/heritages')
        }
        
    }
    return (
        <AlertDialog>
            <Button variant="danger" className={'rounded'}>Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete {siteName} permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{siteName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={()=>handleHeritageDelete(_id)} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}