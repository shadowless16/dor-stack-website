import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Award, Users, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamPage() {
  const leadership = [
    {
      name: "David Richardson",
      title: "Chief Executive Officer & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 20 years of experience in global consulting and project management, David founded Do'r Stack Limited with a vision to deliver world-class solutions to multinational corporations. He holds an MBA from Harvard Business School and is a certified PMP.",
      expertise: ["Strategic Leadership", "Global Operations", "Business Development", "Client Relations"],
      experience: "20+ years",
      education: "MBA, Harvard Business School",
      certifications: ["PMP", "Six Sigma Black Belt"],
      linkedin: "#",
      email: "david.richardson@dorstacklimited.com",
    },
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah leads our technology initiatives with expertise in digital transformation, cloud architecture, and enterprise systems. She previously served as CTO at two Fortune 500 companies and holds a PhD in Computer Science from MIT.",
      expertise: ["Digital Transformation", "Cloud Architecture", "Enterprise Systems", "Cybersecurity"],
      experience: "18+ years",
      education: "PhD Computer Science, MIT",
      certifications: ["AWS Solutions Architect", "CISSP", "TOGAF"],
      linkedin: "#",
      email: "sarah.chen@dorstacklimited.com",
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Operations Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael oversees global operations and project delivery with a focus on operational excellence and quality assurance. His background includes 15+ years in international project management across healthcare, finance, and manufacturing sectors.",
      expertise: ["Operations Management", "Project Delivery", "Quality Assurance", "Process Optimization"],
      experience: "15+ years",
      education: "MS Engineering Management, Stanford",
      certifications: ["PMP", "Lean Six Sigma Master Black Belt", "ISO 9001 Lead Auditor"],
      linkedin: "#",
      email: "michael.rodriguez@dorstacklimited.com",
    },
    {
      name: "Emma Thompson",
      title: "Chief Financial Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emma brings extensive financial expertise from her previous roles at leading investment banks and consulting firms. She specializes in financial strategy, risk management, and international business development.",
      expertise: ["Financial Strategy", "Risk Management", "International Finance", "M&A"],
      experience: "16+ years",
      education: "CPA, MBA Finance, Wharton",
      certifications: ["CPA", "CFA", "FRM"],
      linkedin: "#",
      email: "emma.thompson@dorstacklimited.com",
    },
  ]

  const departmentHeads = [
    {
      name: "James Wilson",
      title: "Director of Consulting Services",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Business Strategy", "Change Management", "Digital Transformation"],
      experience: "12+ years",
      linkedin: "#",
    },
    {
      name: "Lisa Anderson",
      title: "Director of Engineering",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Civil Engineering", "Project Management", "Infrastructure Development"],
      experience: "14+ years",
      linkedin: "#",
    },
    {
      name: "Robert Kim",
      title: "Director of Real Estate",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Commercial Real Estate", "Property Development", "Investment Analysis"],
      experience: "13+ years",
      linkedin: "#",
    },
    {
      name: "Maria Garcia",
      title: "Director of Human Resources",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Talent Management", "Global HR Strategy", "Organizational Development"],
      experience: "11+ years",
      linkedin: "#",
    },
    {
      name: "Thomas Brown",
      title: "Director of Business Development",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Client Relations", "Market Expansion", "Strategic Partnerships"],
      experience: "10+ years",
      linkedin: "#",
    },
    {
      name: "Jennifer Lee",
      title: "Director of Quality Assurance",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Quality Management", "Process Improvement", "Compliance"],
      experience: "9+ years",
      linkedin: "#",
    },
  ]

  const teamStats = [
    { icon: <Users className="h-8 w-8" />, value: "200+", label: "Team Members" },
    { icon: <Globe className="h-8 w-8" />, value: "25+", label: "Countries" },
    { icon: <Award className="h-8 w-8" />, value: "150+", label: "Certifications" },
    { icon: <Users className="h-8 w-8" />, value: "15+", label: "Average Experience" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Meet the global experts who drive excellence in every project. Our diverse team combines deep industry
              knowledge with innovative thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
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

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">LEADERSHIP TEAM</Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Visionary Leaders Driving Global Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our executive team brings decades of combined experience from leading global corporations and consulting
                firms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {leadership.map((leader, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-yellow-400 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-2 relative h-64 lg:h-auto">
                      <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                    </div>
                    <div className="lg:col-span-3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <h3 className="text-xl font-bold text-blue-900">{leader.name}</h3>
                        <p className="text-blue-600 font-medium">{leader.title}</p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>

                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2 text-sm">Expertise:</h4>
                          <div className="flex flex-wrap gap-1">
                            {leader.expertise.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="font-semibold text-blue-900">Experience:</span>
                            <p className="text-gray-600">{leader.experience}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-blue-900">Education:</span>
                            <p className="text-gray-600">{leader.education}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 pt-2">
                          <Link href={leader.linkedin} className="text-blue-600 hover:text-blue-800">
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link href={`mailto:${leader.email}`} className="text-blue-600 hover:text-blue-800">
                            <Mail className="h-5 w-5" />
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium mb-4">
                DEPARTMENT HEADS
              </Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Experienced Department Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our department heads bring specialized expertise and proven track records in their respective fields.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departmentHeads.map((member, index) => (
                <Card key={index} className="text-center border-2 hover:border-yellow-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4 text-sm">{member.title}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2 text-sm">Expertise:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-semibold">Experience:</span> {member.experience}
                    </p>

                    <Link href={member.linkedin} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                      <Linkedin className="h-4 w-4 mr-1" />
                      <span className="text-sm">Connect</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Culture & Values</h2>
              <p className="text-xl text-gray-600">
                What makes Do'r Stack Limited a great place to work and partner with
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, setting the highest standards for quality and
                  performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">I</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We conduct business with the highest ethical standards, building trust through transparency and
                  honesty.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace innovation and creative thinking to deliver cutting-edge solutions for our clients.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">C</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of collaboration, working together to achieve extraordinary results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Global Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals to join our growing team. Explore career opportunities with
            Do'r Stack Limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
              >
                Contact HR Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
