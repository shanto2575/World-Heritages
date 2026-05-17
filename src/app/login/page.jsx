'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,

        })
        console.log(data)
        if (data) {
            toast.success('Login Successful')
            redirect('/')
        }
        if (error) {
            toast.error(error.message)
        }
    }
    const handleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }
    return (
        <div className="p-3 lg:p-0">
            <div className=" my-6">
                <div className="text-center my-3">
                    <h1 className="font-bold text-3xl">Login Your Account</h1>
                </div>
                <div className="w-full lg:w-3/12 mx-auto border p-5 rounded">
                    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                        <div className="flex gap-2">
                            <Button type="submit" className={'w-full rounded'}>
                                Log In
                            </Button>
                        </div>
                        <div className="text-center text-sm">
                            <p>Don`t Have a Account ? <Link href={'/signup'} className="text-md text-blue-600 font-semibold">SignUp</Link></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Separator className="flex-1" />
                            <span className="whitespace-nowrap font-bold text-orange-400">Or SignUp</span>
                            <Separator className="flex-1" />
                        </div>
                        <div className="space-y-4">
                            <Button onClick={handleSignIn} variant="outline" className={'rounded w-full hover:text-cyan-500'}><FcGoogle />Google</Button>
                            <Button onClick={handleGithubSignIn} variant="outline" className={'rounded w-full hover:text-cyan-500 '}><FaGithub />GitHub</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage