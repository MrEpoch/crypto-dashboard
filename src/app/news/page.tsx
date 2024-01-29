import MyImg from "@/assets/baclground.jpg";
import Image from "next/image";

async function getNews() {
    try {
        const res = await fetch("https://newsdata.io/api/1/news?apikey="+process.env.NEWS_API+"&q=crypto&language=en");
        const js = await res.json();
        return js.results;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export default async function Prices() {

    const news = await getNews();
    const present = {};

    return (
    <main className="min-h-screen h-full py-16 w-full ">
        <section className="w-full flex flex-col justify-center items-center">
            <div className="W-full grid grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl p-4">
        {news.filter((v: any) => {
            if (present[v.title]) return false
            else present[v.title] = true;
            return true;
         }).map((v, i) => (
                    <a key={i} href={v.link} className="rounded min-w-72 h-full aspect-square w-full group bg-white  shadow dark:bg-gray-800 relative overflow-hidden transition">
                        <Image width={400} height={400} src={v.image_url} className="h-full group-hover:scale-110 object-cover w-full transition brightness-50 rounded-lg w-full absolute" alt={v.title}/>
                        <div className="p-5 z-10 absolute flex flex-col items-center justify-center w-full h-full">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{v.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300 text-center">{v.description.length > 80 ? v.description.split("", 80).join("")+"..." : v.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    </main>
    )
}
