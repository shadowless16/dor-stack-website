"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Business District, Suite 4500",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "newyork@dorstacklimited.com",
      timezone: "EST (UTC-5)",
      isHeadquarters: true,
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Financial Square, Floor 12",
      zipCode: "London EC2V 8RF",
      phone: "+44 20 7123 4567",
      email: "london@dorstacklimited.com",
      timezone: "GMT (UTC+0)",
      isHeadquarters: false,
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Marina Bay Drive, Level 25",
      zipCode: "Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@dorstacklimited.com",
      timezone: "SGT (UTC+8)",
      isHeadquarters: false,
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Dubai International Financial Centre",
      zipCode: "Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@dorstacklimited.com",
      timezone: "GST (UTC+4)",
      isHeadquarters: false,
    },
  ]

  const services = [
    "Business Strategy Consulting",
    "IT Consulting & Digital Transformation",
    "Operations Management",
    "Project Management",
    "Engineering Services",
    "Construction Management",
    "Real Estate Development",
    "Other",
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been received. Our team will get back to you within 24 hours.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
                budget: "",
                timeline: "",
              })
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Send Another Message
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to transform your business? Let's discuss how Do'r Stack Limited can help you achieve your goals
              with our global expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-900">Send Us a Message</CardTitle>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-100k">Under $100K</option>
                            <option value="100k-500k">$100K - $500K</option>
                            <option value="500k-1m">$500K - $1M</option>
                            <option value="1m-5m">$1M - $5M</option>
                            <option value="over-5m">Over $5M</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select timeline</option>
                            <option value="immediate">Immediate (1-3 months)</option>
                            <option value="short-term">Short-term (3-6 months)</option>
                            <option value="medium-term">Medium-term (6-12 months)</option>
                            <option value="long-term">Long-term (12+ months)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Please describe your project requirements, challenges, and objectives..."
                          className="w-full"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                      >
                        {isSubmitting ? (
                          "Sending Message..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">info@dorstacklimited.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Headquarters</p>
                        <p className="text-gray-600">
                          123 Business District
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Consultation
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Live Chat Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="mr-2 h-4 w-4" />
                      Request a Quote
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 bg-blue-50">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Response Time</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Guaranteed response within 24 hours</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">GLOBAL PRESENCE</Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Global Offices</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With offices across four continents, we're positioned to serve clients wherever they need us, whenever
                they need us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <Card
                  key={index}
                  className={`p-6 ${office.isHeadquarters ? "border-2 border-yellow-400" : "border-2 border-gray-100"} hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-0">
                    {office.isHeadquarters && (
                      <Badge className="bg-yellow-100 text-yellow-800 mb-4">Headquarters</Badge>
                    )}
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{office.city}</h3>
                    <p className="text-sm text-gray-600 mb-4">{office.country}</p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{office.address}</p>
                          <p className="text-gray-700">{office.zipCode}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                        <p className="text-gray-700">{office.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                        <p className="text-gray-700">{office.email}</p>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                        <p className="text-gray-700">{office.timezone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
