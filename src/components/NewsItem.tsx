import Image from "next/image";
import Link from "next/link";
import randomImage from "@/assets/baclground.jpg";

export default function NewsItem({ item, index }: { item: any, index: number }) {
  return (
    <Link
      href="/"
      key={index}
      className="max-w-md w-full gap-3 h-full bg-darkmode-500 rounded-xl flex items-center justify-around group relative cursor-pointer"
    >
      <Image
        src={item.image_url ?? randomImage}
        alt={item.title}
        width={200}
        height={200}
        className="rounded-lg z-0 object-cover aspect-square h-full"
      />
      <div className="flex flex-col justify-center items-center gap-3 p-4">
          <h1 className="text-md font-bold text-white">{item.title.slice(0, 30) + "..."}</h1>
        <p className="text-white text-sm text-center">{item.description.slice(0, 100) + "..."}</p>
      </div>
    </Link>

  )
}
