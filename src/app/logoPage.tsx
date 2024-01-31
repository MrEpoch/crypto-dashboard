'use client';

import Image from "next/image";
import Logo from "@/assets/CryptoHaven.png";
import { motion } from "framer-motion"

export default function pageLogo() {
    return (
        <>
            <motion.div initial={{ y: 70, opacity: 0 }} transition={{ duration: 0.3 }} animate={{ y: 0, opacity: 1 }}>
            <Image src={Logo} alt="Crypto" width={200} height={200}  className="rounded-lg object-cover w-64 aspect-square" />
        </motion.div>
        </>
    )
}
