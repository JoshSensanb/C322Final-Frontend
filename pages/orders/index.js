import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Item from "@/components/Item";
import styles from "/styles/Orders.module.css"

const inter = Inter({ subsets: ['latin'] })

export default function OrderHome() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={styles.container}>
            <div className={styles.orderHome}>
            <Item
                itemName="test"
                price="0.01"
                comments="none"
            ></Item>
            <Item
                itemName="another test"
                price="298.21"
                comments="comment"
            ></Item>
            <Item
                itemName="test"
                price="0.01"
                comments="none"
            ></Item>
            </div>
            </div>
        </main>
    )
}
