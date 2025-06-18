"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      company: "Global Financial Services Inc.",
      industry: "Finance",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "Do'r Stack Limited transformed our entire digital infrastructure across 15 countries. Their expertise in cloud migration and process automation resulted in a 35% reduction in operational costs while significantly improving our customer experience. The team's professionalism and global perspective were exactly what we needed.",
      project: "Digital Transformation Initiative",
      results: "35% cost reduction, 60% improved customer satisfaction",
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Chief Executive Officer",
      company: "International Healthcare Network",
      industry: "Healthcare",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The healthcare facility expansion project was complex, involving strict regulatory requirements across three countries. Do'r Stack Limited's team demonstrated exceptional project management skills, delivering all 15 facilities on time and 20% under budget. Their attention to compliance and quality was outstanding.",
      project: "Healthcare Network Expansion",
      results: "15 facilities delivered, 20% under budget, 100% compliance",
    },
    {
      name: "James Thompson",
      title: "Chief Operations Officer",
      company: "Advanced Manufacturing Corp",
      industry: "Manufacturing",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The Industry 4.0 implementation across our 8 production facilities was a game-changer. Do'r Stack Limited's engineering team delivered automation solutions that reduced our production costs by 25% while improving quality metrics by 40%. Their innovative approach set new industry standards for our operations.",
      project: "Manufacturing Automation Initiative",
      results: "25% cost reduction, 40% quality improvement, 30% capacity increase",
    },
    {
      name: "Emma Williams",
      title: "Chief Strategy Officer",
      company: "National Energy Solutions",
      industry: "Energy",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "Our renewable energy project required 500MW capacity with complex grid integration. Do'r Stack Limited exceeded all expectations, delivering 15% ahead of schedule and 10% under budget. Their expertise in renewable technologies and project management was instrumental in positioning us as an industry leader.",
      project: "Renewable Energy Infrastructure",
      results: "500MW capacity, 15% ahead of schedule, 40% carbon reduction",
    },
    {
      name: "Robert Kim",
      title: "Chief Information Officer",
      company: "Global Retail Chain",
      industry: "Retail",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "The supply chain optimization project transformed our operations across 200+ stores in 12 countries. Do'r Stack Limited's consultants delivered solutions that improved our efficiency by 40% while reducing inventory costs by 30%. Their global expertise and local knowledge were invaluable.",
      project: "Supply Chain Optimization",
      results: "40% efficiency improvement, 30% inventory cost reduction",
    },
    {
      name: "Lisa Anderson",
      title: "Chief Executive Officer",
      company: "TechStart Innovations",
      industry: "Technology",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      testimonial:
        "As a rapidly scaling tech company, we needed infrastructure that could grow with us. Do'r Stack Limited designed and implemented cloud architecture that enabled us to scale from 10 to 1000+ employees seamlessly. Their forward-thinking approach and technical expertise were exceptional.",
      project: "Scalable Infrastructure Development",
      results: "100x team scaling, 99.9% uptime, 50% faster deployment",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentReview = testimonials[currentTestimonial]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Client <span className="text-yellow-400">Testimonials</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Hear from global leaders who have experienced the Do'r Stack Limited difference. Their success stories
              speak to our commitment to excellence and results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">CLIENT FEEDBACK</Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">What Our Clients Say</h2>
            </div>

            <div className="relative">
              <Card className="border-2 border-gray-100 shadow-xl">
                <CardContent className="p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className="relative w-24 h-24 mx-auto lg:mx-0 mb-6">
                        <Image
                          src={currentReview.image || "/placeholder.svg"}
                          alt={currentReview.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-1">{currentReview.name}</h3>
                      <p className="text-gray-600 mb-2">{currentReview.title}</p>
                      <p className="text-sm text-gray-500 mb-4">{currentReview.company}</p>
                      <Badge className="bg-blue-100 text-blue-800">{currentReview.industry}</Badge>
                      <div className="flex justify-center lg:justify-start mt-4">
                        {[...Array(currentReview.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <Quote className="h-12 w-12 text-blue-200 mb-6" />
                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                        "{currentReview.testimonial}"
                      </blockquote>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2">Project:</h4>
                            <p className="text-sm text-gray-600">{currentReview.project}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2">Key Results:</h4>
                            <p className="text-sm text-gray-600">{currentReview.results}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-blue-200 hover:border-blue-400"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-blue-200 hover:border-blue-400"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">More Success Stories</h2>
              <p className="text-xl text-gray-600">
                Discover how we've helped organizations across industries achieve their goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <Card key={index} className="h-full border-2 hover:border-yellow-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                      "{testimonial.testimonial.substring(0, 150)}..."
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <Badge className="bg-blue-100 text-blue-800 text-xs">{testimonial.industry}</Badge>
                      <span className="text-xs text-gray-500">{testimonial.company}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Trusted by Industry Leaders</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Client Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Project Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Global Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the Do'r Stack Limited difference and become our next success story.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
