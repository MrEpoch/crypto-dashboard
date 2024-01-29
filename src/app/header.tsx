import cryptoHaven from "@/assets/CryptoHaven.png";
import HeaderClient from "@/components/HeaderClient";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-transparent  w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://stencukpage.com" className="flex items-center space-x-5 rtl:space-x-reverse">
            <Image src={cryptoHaven} alt="CryptHaven" className="scale-150 w-16 h-16" width={300} height={300} />
            <span className="self-center text-sm font-bold sm:text-3xl font-oswald whitespace-nowrap text-white">CryptoHaven</span>
        </a>
        <HeaderClient />
      </div>
    </nav>
  )
}
