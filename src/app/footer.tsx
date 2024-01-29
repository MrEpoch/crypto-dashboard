import Image from "next/image";
import cryptoHaven from "@/assets/CryptoHaven.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shadow bg-transparent">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <a href="https://stencukpage.com/" className="flex items-center mb-4 sm:mb-0 space-x-6 font-oswald rtl:space-x-reverse">
                  <Image src={cryptoHaven} alt="CryptHaven" className="scale-150 w-16 h-16" width={300} height={300} />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CryptHaven</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                  </li>
              </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://stencukpage.com" className="hover:underline">Alexandr Stenčuk</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
