import LoginForm from "@/components/login-form";
import Image from "next/image";

export default async function Page() {
  return (
    <main>
      <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900">
            <Image src="/bg_gradient.jpg" width={2000} height={800} className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]" alt="Background"></Image>
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src="/svg/logo.svg" width={30} height={30} alt="Theme Logo" /><span className="inline-block pl-2">Rocket Design</span>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote>
              <p className="text-lg">
                Awesome quote. Make the web great again!
              </p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 flex flex-col items-center justify-center">
          <div className="lg:hidden relative w-full">
            <div className="flex justify-center items-center">
              <div>
                <Image src="/svg/logo_black.svg" width={30} height={30} alt="Theme Logo" />
              </div>
              <div>
                <span className="pl-2 font-extrabold">Rocket Design</span>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <span className="w-60 border-t mt-1"></span>
            </div>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </main>
  )
}