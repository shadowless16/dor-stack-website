import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Users, Clock, CheckCircle, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const caseStudies = [
    {
      title: "Global Bank Digital Transformation",
      client: "Fortune 500 Financial Institution",
      industry: "Finance",
      duration: "18 months",
      teamSize: "45 consultants",
      image: "/placeholder.svg?height=300&width=500",
      challenge: "Legacy systems hindering customer experience and operational efficiency across 15 countries.",
      solution:
        "Comprehensive digital transformation including cloud migration, mobile banking platform, and process automation.",
      results: [
        "35% reduction in operational costs",
        "60% improvement in customer satisfaction",
        "50% faster transaction processing",
        "99.9% system uptime achieved",
      ],
      technologies: ["Cloud Architecture", "Mobile Development", "Process Automation", "Data Analytics"],
      testimonial:
        "Do'r Stack Limited delivered exceptional results, transforming our operations across multiple continents with minimal disruption to our services.",
    },
    {
      title: "Healthcare Network Expansion",
      client: "International Healthcare Group",
      industry: "Healthcare",
      duration: "24 months",
      teamSize: "60 specialists",
      image: "/placeholder.svg?height=300&width=500",
      challenge:
        "Rapid expansion requiring 15 new medical facilities across 3 countries with strict regulatory compliance.",
      solution:
        "End-to-end project management including site selection, design, construction, and technology integration.",
      results: [
        "15 facilities delivered on time",
        "20% under budget completion",
        "100% regulatory compliance",
        "2,000+ jobs created",
      ],
      technologies: ["Medical Equipment Integration", "HVAC Systems", "IT Infrastructure", "Security Systems"],
      testimonial:
        "The team's expertise in healthcare regulations and construction management was instrumental in our successful expansion.",
    },
    {
      title: "Manufacturing Automation Initiative",
      client: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      duration: "12 months",
      teamSize: "35 engineers",
      image: "/placeholder.svg?height=300&width=500",
      challenge:
        "Outdated manufacturing processes resulting in high costs and quality inconsistencies across 8 production facilities.",
      solution:
        "Industry 4.0 implementation with IoT sensors, automated quality control, and predictive maintenance systems.",
      results: [
        "25% reduction in production costs",
        "40% improvement in quality metrics",
        "30% increase in production capacity",
        "90% reduction in unplanned downtime",
      ],
      technologies: [
        "IoT Implementation",
        "Predictive Analytics",
        "Robotic Process Automation",
        "Quality Management Systems",
      ],
      testimonial:
        "The automation solutions have revolutionized our operations, setting new industry standards for efficiency and quality.",
    },
    {
      title: "Renewable Energy Infrastructure",
      client: "National Energy Provider",
      industry: "Energy",
      duration: "30 months",
      teamSize: "80 specialists",
      image: "/placeholder.svg?height=300&width=500",
      challenge: "Transition to renewable energy requiring 500MW solar and wind capacity with grid integration.",
      solution:
        "Comprehensive renewable energy project including site development, technology installation, and grid modernization.",
      results: [
        "500MW renewable capacity delivered",
        "15% ahead of schedule completion",
        "10% under budget delivery",
        "Carbon emissions reduced by 40%",
      ],
      technologies: ["Solar Technology", "Wind Systems", "Grid Integration", "Energy Storage"],
      testimonial:
        "This project has positioned us as a leader in renewable energy, exceeding all performance and timeline expectations.",
    },
  ]

  const portfolioStats = [
    { icon: <Building2 className="h-8 w-8" />, value: "500+", label: "Projects Completed" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "$2.5B+", label: "Project Value Delivered" },
    { icon: <Users className="h-8 w-8" />, value: "200+", label: "Global Clients" },
    { icon: <Clock className="h-8 w-8" />, value: "98%", label: "On-Time Delivery" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how we've helped global leaders transform their operations, drive innovation, and achieve
              exceptional results across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">CASE STUDIES</Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Success Stories That Define Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore detailed case studies showcasing our expertise in delivering complex projects that drive
                measurable business value.
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-blue-900/20"></div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-blue-100 text-blue-800">{study.industry}</Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          {study.teamSize}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.client}</p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                          <p className="text-gray-600 text-sm">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Solution:</h4>
                          <p className="text-gray-600 text-sm">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3">Key Results:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800 italic">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Trusted by Global Leaders</h2>
              <p className="text-xl text-gray-600">We're proud to partner with industry leaders across the globe</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Client+${i}`}
                    alt={`Client ${i}`}
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve exceptional results for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
              >
                Explore Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
