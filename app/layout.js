import "./globals.css"
import { Inter } from "next/font/google"
import LayoutContent from "@/components/LayoutContent"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ECL Logistics",
  description: "Safer and Faster Logistic Services",
  icons: {
    icon: "/img/ecl.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}

