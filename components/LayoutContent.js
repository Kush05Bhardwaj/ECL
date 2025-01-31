"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsappFloat from "@/components/whatsapp-float"

export default function LayoutContent({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

