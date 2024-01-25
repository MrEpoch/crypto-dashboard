import myImage from "@/assets/baclground.jpg";
import Image from "next/image";

export default function Prices() {
  return (
    <main className="min-h-screen h-full w-full bg-darkmode-500">
        <div className="w-full h-full flex flex-col items-center">
            <div className="relative p-4 mx-auto max-w-screen-2xl w-full overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex p-4 items-center justify-center flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 ">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-darkmode-400 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="See popular crypto" />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-darkmode-300 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Crypto Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Market Cap.
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-darkmode-400 border-b dark:border-darkmode-300">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <Image className="w-10 h-10 rounded-full" src={myImage} alt="Jese image" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Bitcoin</div>
                                </div>  
                            </th>
                            <td className="px-6 py-4">
                                $20,000
                            </td>
                            <td className="px-6 py-4">
                                $2T
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
  )
}
