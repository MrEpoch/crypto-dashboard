import CryptoImage from "@/assets/cryptoPicture.jpg";
import NewsItem from "@/components/NewsItem";
import cryptoHaven from "@/assets/CryptoHaven.png";
import Image from "next/image";
import Link from "next/link";

const myData = [
  {
    title: "Crypto Rise",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: CryptoImage
  },
  {
    title: "Crypto Rise",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: CryptoImage
  },
  {
    title: "Crypto Rise",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: CryptoImage
  },
  {
    title: "Crypto Rise",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: CryptoImage
  },
];

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

export default async function Home() {
  const news = await getNews();
  const present = [];

  return (
    <main className="min-h-screen h-full w-full  bg-transparent">
      <div className={`max-w-screen-xl h-full rounded-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8`}>
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Manage your investments</h1>
        <p className="mb-8 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Track your latest news, prices of currencies and more with our CryptHaven dashboard, designed for ease of use and simplicity.</p>
        <div className="w-full flex justify-center">
            <Link href="/news" className="hover:scale-105 hover:transition duration-300 transition">
            <Image src={cryptoHaven} alt="Crypto" width={200} height={200} className="rounded-lg object-cover w-64 aspect-square" />
          </Link>
        </div>
        <div className="flex py-16 flex-wrap justify-center items-center gap-5">
        {news.filter((v: any) => {
            if (present[v.title]) return false
            else present[v.title] = true;
            return true;
         }).slice(0, 3).map((v, i) => (
            <NewsItem key={i} item={v} index={v} />
            ))}
        </div>
      </div>
    </main>
  )
}
