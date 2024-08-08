'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  email: z.string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    })

    toast({
      title: 'click on submit',
      description: 'sign up with ' + values.email
    })
  }

  return (
    <div className="p-8 w-[400px]">
      <h1 className="text-xl font-bold mb-4">Sign Up</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input placeholder="E-Mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
      <p className="block text-center pt-2 mb-4 text-sm text-gray-500">
        By clicking continue, you agree to our <Link href="/terms" className="underline underline-offset-4 hover:text-gray-800">Terms of Service</Link> and <Link href="/privacy" className="underline underline-offset-4 hover:text-gray-800">Privacy Policy</Link>
      </p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">OR Sign In</span>
        </div>
      </div>
      <div className="mt-4">
        <Link href="login">
          <Button className="w-full">Sign In</Button>
        </Link>
      </div>
    </div>
  )
}