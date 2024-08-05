import Image from "next/image";

export default function Logo({ width = 30, height = 30 }: { width?: number, height?: number }) {

  return (
    <main>
      <div>
        <Image src={'/svg/logo_black.svg'} width={width} height={height} alt="logo" />
      </div>
    </main>
  )
}