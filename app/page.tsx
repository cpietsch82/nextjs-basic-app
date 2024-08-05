import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className="absolute inset-0 bg-zinc-900">
        <Image src="/bg_gradient.jpg" width={2000} height={800} className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]" alt="Background"></Image>
      </div>
      <div className="content relative text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-20">
            Werbeblock 1
          </div>
          <div className="mt-20">
            Werbeblock 2
          </div>
          <div className="mt-20">
            Werbeblock 2
          </div>
          <div className="mt-20">
            Sign Up <Link href="/sign-up" className="underline hover:text-gray-500">here</Link> or if you already have an account log in <Link href="/login" className="underline hover:text-gray-500">here</Link>
          </div>
        </div>
      </div>
    </main>
  );
}