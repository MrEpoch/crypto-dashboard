import CryptoImage from "@/assets/cryptoPicture.jpg";
import Image from "next/image";

const myData = [
  {
    title: "Crypto Rise",
    description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: CryptoImage
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-darkmode-500">
      <div className="max-w-screen-xl h-screen bg-gradient-to-b from-black to-gray-950/50 mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex py-16 flex-wrap justify-center items-center gap-5">
          {myData.map((item, index) => (
            <div
              key={index}
              className="w-64 h-full bg-darkmode-500 flex flex-col items-center justify-around p-6 group relative cursor-pointer"
            >
              <p className="text-md z-10 text-center font-medium hidden group-hover:flex h-full items-center text-gray-100 absolute justify-center w-full top-0 right-0">{item.description.slice(0, 50)}...</p>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
            className="rounded-lg z-0 group-hover:brightness-50 object-cover"
              />
              <p className="mt-2 group-hover:brigtness-50 text-md text-center font-medium text-gray-100">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
