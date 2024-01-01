import CryptoImage from "@/assets/cryptoPicture.jpg";
import NewsItem from "@/components/NewsItem";
import background from "@/assets/baclground.jpg";
import cryptoSquare from "@/assets/CryptoSquare.png";
import Image from "next/image";

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

export default function Home() {
  return (
    <main className="min-h-screen h-full w-full bg-darkmode-500">
      <div style={{ backgroundImage: `url('${background.src}')` }} className={`max-w-screen-xl h-full rounded-xl bg-black bg-fixed bg-auto bg-repeat bg-center mx-auto py-24 px-4 sm:px-6 lg:px-8`}>
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Manage your investments</h1>
        <p className="mb-8 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Track your latest news, prices of currencies and more with our CryptHaven dashboard, designed for ease of use and simplicity.</p>
        <div className="flex justify-center">
          <Image src={cryptoSquare} alt="Crypto" width={200} height={200} className="rounded-lg object-cover w-64 aspect-square" />
        </div>
        <div className="flex py-16 flex-wrap justify-center items-center gap-5">
          {myData.map((item, index) => (
            <NewsItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
