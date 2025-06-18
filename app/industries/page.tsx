import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Heart, Cpu, ShoppingCart, Factory, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Finance",
      description: "Banking, insurance, and financial services transformation",
      services: ["Digital Banking Solutions", "Risk Management", "Regulatory Compliance", "Fintech Integration"],
      caseStudy: "Helped a major bank reduce operational costs by 35% through digital transformation",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Healthcare",
      description: "Healthcare systems optimization and medical facility development",
      services: [
        "Hospital Management Systems",
        "Medical Facility Construction",
        "Healthcare IT",
        "Compliance Management",
      ],
      caseStudy: "Designed and built 15 medical facilities across 3 countries in 18 months",
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Technology",
      description: "Tech companies scaling and infrastructure development",
      services: ["Cloud Architecture", "Software Development", "Data Centers", "Cybersecurity"],
      caseStudy: "Enabled a tech startup to scale from 10 to 1000+ employees with robust infrastructure",
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "Retail",
      description: "Retail operations optimization and omnichannel solutions",
      services: ["Supply Chain Optimization", "E-commerce Platforms", "Store Design", "Inventory Management"],
      caseStudy: "Increased retail chain efficiency by 40% through supply chain optimization",
    },
    {
      icon: <Factory className="h-10 w-10" />,
      title: "Manufacturing",
      description: "Industrial automation and manufacturing excellence",
      services: ["Process Automation", "Quality Systems", "Lean Manufacturing", "Industrial Construction"],
      caseStudy: "Implemented Industry 4.0 solutions reducing production costs by 25%",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Energy",
      description: "Energy sector consulting and infrastructure projects",
      services: ["Renewable Energy Projects", "Grid Modernization", "Energy Efficiency", "Regulatory Compliance"],
      caseStudy: "Delivered 500MW renewable energy project ahead of schedule and under budget",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Industries We <span className="text-yellow-400">Serve</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Deep industry expertise across six key sectors, delivering specialized solutions that address unique
              challenges and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">INDUSTRY EXPERTISE</Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Specialized Solutions for Every Sector</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our industry-focused approach ensures we understand your unique challenges and deliver solutions that
                create lasting value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="h-full border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-yellow-100 group-hover:text-yellow-600 transition-colors">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-2xl text-blue-900">{industry.title}</CardTitle>
                    <p className="text-gray-600">{industry.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Success Story:</h4>
                      <p className="text-sm text-gray-600 italic">"{industry.caseStudy}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Industry Impact by the Numbers</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium mb-4">
                  CROSS-INDUSTRY EXPERTISE
                </Badge>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Leveraging Cross-Industry Insights</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our diverse industry experience allows us to bring innovative solutions from one sector to another,
                  creating unique competitive advantages for our clients.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Best practices sharing across industries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Innovative problem-solving approaches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Regulatory compliance expertise</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Global market understanding</span>
                  </li>
                </ul>
                <Link href="/portfolio">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Our Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Industry Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">ISO 9001:2015</span>
                    <Badge className="bg-green-100 text-green-800">Certified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">ISO 27001:2013</span>
                    <Badge className="bg-green-100 text-green-800">Certified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">PMP Certified Team</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">LEED Accredited</span>
                    <Badge className="bg-green-100 text-green-800">Professional</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry expertise can drive innovation and growth for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Schedule Industry Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
