"use client";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    Separator,
    TextArea,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
    const route = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        // console.log(user)
        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
            callbackURL: "/login"
        })
        console.log(data, error)
        if (data) {
            route.push('/login')
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
            <div className="my-5 lg:my-10">
                <div className="text-center my-3">
                    <h1 className="font-bold text-3xl">Create Your Account</h1>
                </div>
                <div className="w-full lg:w-3/12 mx-auto border p-5 rounded">
                    <Form className="w-full space-y-4 " onSubmit={onSubmit}>
                        <Fieldset>
                            <FieldGroup>
                                <TextField
                                    isRequired
                                    name="name"
                                    validate={(value) => {
                                        if (value.length < 3) {
                                            return "Name must be at least 3 characters";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Name</Label>
                                    <Input placeholder="Enter Your Name" />
                                    <FieldError />
                                </TextField>
                                <TextField isRequired name="image" type="url">
                                    <Label>ImageUrl</Label>
                                    <Input placeholder="Enter Your Imageurl" />
                                    <FieldError />
                                </TextField>
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
                                    <Input placeholder="Enter Your Email" />
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
                            </FieldGroup>
                            <Fieldset.Actions>
                                <Button type="submit" className={'w-full rounded'}>
                                    Create Account
                                </Button>
                            </Fieldset.Actions>
                            <div className="flex items-center gap-4">
                                <Separator className="flex-1" />
                                <span className="whitespace-nowrap font-bold text-orange-400">Or SignUp</span>
                                <Separator className="flex-1" />
                            </div>
                            <div className="space-y-4">
                                <Button onClick={handleSignIn} variant="outline" className={'rounded w-full hover:text-cyan-500'}><FcGoogle />Google</Button>
                                <Button onClick={handleGithubSignIn} variant="outline" className={'rounded w-full hover:text-cyan-500 '}><FaGithub />GitHub</Button>
                            </div>
                        </Fieldset>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
