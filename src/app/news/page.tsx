import Link from "next/link"
import MyImg from "@/assets/baclground.jpg";
import Image from "next/image";

export default function Prices() {
    const data = [
        {
            title: "Title of said news",
            desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
            image: MyImg,
            link: "inMiddleOfNowhere"
        }
    ]
    
    return (
    <main className="min-h-screen h-full py-16 w-full bg-darkmode-500">
        <section className="w-full flex flex-col justify-center items-center">
            <div className="W-full grid grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl p-4">
                {data.map((v, i) => (
                    <Link key={i} href={"/news/"+v.link} className="w-72 h-full aspect-square w-full group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 relative overflow-hidden transition dark:border-gray-700">
                        <Image src={v.image} className="h-full group-hover:scale-110 object-cover w-full transition brightness-50 rounded-lg w-full absolute" alt={v.title}/>
                        <div className="p-5 z-10 absolute flex flex-col items-center justify-center w-full h-full">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{v.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300 text-center">{v.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    </main>
    )
}
