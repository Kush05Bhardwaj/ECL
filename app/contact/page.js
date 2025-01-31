"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "../actions"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    const formData = new FormData(event.currentTarget)
    const result = await submitContactForm(formData)

    setIsSubmitting(false)
    setSubmitResult(result)

    if (result.success) {
      event.target.reset()
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold text-center">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="relative">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-semibold">Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Enter Name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input id="company" name="company" placeholder="Enter Company Name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input id="email" name="email" type="email" placeholder="Enter Email" className="pl-10" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input id="phone" name="phone" type="tel" placeholder="Enter Mobile Number" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="orders" className="text-sm font-medium">
                    How many orders do you receive in a month?
                  </label>
                  <Select name="orders">
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-100">0-100 orders</SelectItem>
                      <SelectItem value="101-500">101-500 orders</SelectItem>
                      <SelectItem value="501-1000">501-1000 orders</SelectItem>
                      <SelectItem value="1000+">More than 1000 orders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Enter your message" className="min-h-[100px]" />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                {submitResult && (
                  <div className={`text-center ${submitResult.success ? "text-green-600" : "text-red-600"}`}>
                    {submitResult.success
                      ? "Your message has been sent successfully. We'll get back to you soon!"
                      : submitResult.error || "An error occurred. Please try again."}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

