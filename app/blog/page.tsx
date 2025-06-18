import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    slug: "digital-transformation-trends-2024",
    title: "Digital Transformation Trends Shaping Global Business in 2024",
    excerpt:
      "Explore the latest digital transformation trends that are revolutionizing how multinational corporations operate, compete, and deliver value to customers worldwide.",
    content:
      "As we navigate through 2024, digital transformation continues to be the driving force behind business innovation and competitive advantage...",
    author: "Sarah Chen",
    authorRole: "Chief Technology Officer",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Digital Transformation", "Technology", "Business Strategy", "Innovation"],
  }

  const blogPosts = [
    {
      slug: "sustainable-construction-practices",
      title: "Sustainable Construction Practices for Global Projects",
      excerpt:
        "How Do'r Stack Limited integrates environmental sustainability into large-scale construction projects across different continents.",
      author: "Michael Rodriguez",
      authorRole: "Chief Operations Officer",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Construction",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Sustainability", "Construction", "Environment"],
    },
    {
      slug: "ai-consulting-future",
      title: "The Future of AI in Business Consulting",
      excerpt:
        "Examining how artificial intelligence is transforming the consulting industry and creating new opportunities for client value creation.",
      author: "David Richardson",
      authorRole: "CEO & Founder",
      date: "2024-03-08",
      readTime: "7 min read",
      category: "Consulting",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["AI", "Consulting", "Future Trends"],
    },
    {
      slug: "global-project-management-best-practices",
      title: "Global Project Management: Best Practices for Success",
      excerpt: "Key strategies and methodologies for managing complex projects across multiple countries and cultures.",
      author: "Lisa Anderson",
      authorRole: "Director of Engineering",
      date: "2024-03-05",
      readTime: "9 min read",
      category: "Project Management",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Project Management", "Global Operations", "Best Practices"],
    },
    {
      slug: "real-estate-investment-trends",
      title: "Commercial Real Estate Investment Trends in Emerging Markets",
      excerpt: "Analysis of commercial real estate opportunities and challenges in rapidly growing global markets.",
      author: "Robert Kim",
      authorRole: "Director of Real Estate",
      date: "2024-03-01",
      readTime: "5 min read",
      category: "Real Estate",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Real Estate", "Investment", "Emerging Markets"],
    },
    {
      slug: "cybersecurity-enterprise-solutions",
      title: "Cybersecurity Strategies for Global Enterprises",
      excerpt:
        "Essential cybersecurity frameworks and strategies for protecting multinational corporations from evolving threats.",
      author: "Sarah Chen",
      authorRole: "Chief Technology Officer",
      date: "2024-02-28",
      readTime: "10 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Cybersecurity", "Enterprise", "Risk Management"],
    },
    {
      slug: "supply-chain-optimization",
      title: "Supply Chain Optimization in Post-Pandemic Era",
      excerpt:
        "How companies are rebuilding and optimizing their supply chains for resilience and efficiency in the new normal.",
      author: "James Wilson",
      authorRole: "Director of Consulting Services",
      date: "2024-02-25",
      readTime: "8 min read",
      category: "Operations",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Supply Chain", "Operations", "Resilience"],
    },
  ]

  const categories = [
    { name: "All", count: 25 },
    { name: "Technology", count: 8 },
    { name: "Consulting", count: 6 },
    { name: "Construction", count: 5 },
    { name: "Real Estate", count: 4 },
    { name: "Operations", count: 2 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Industry <span className="text-yellow-400">Insights</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stay ahead with expert insights, industry trends, and thought leadership from our global team of
              consultants and specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">FEATURED ARTICLE</Badge>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Latest Insights</h2>
            </div>

            <Card className="overflow-hidden border-2 hover:border-yellow-400 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{featuredPost.category}</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-blue-900 leading-tight">
                      {featuredPost.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <p className="text-gray-600 leading-relaxed">{featuredPost.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-8">
                  <Card className="p-6 mb-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link
                            href={`/blog?category=${category.name.toLowerCase()}`}
                            className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <span>{category.name}</span>
                            <span className="text-sm bg-gray-100 px-2 py-1 rounded">{category.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Newsletter</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Subscribe to get the latest insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">Subscribe</Button>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-blue-900">Recent Articles</h2>
                  <div className="flex items-center text-gray-600">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="text-sm">Trending Topics</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-2 hover:border-yellow-400 transition-all duration-300 group"
                    >
                      <div className="relative h-48">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <Button
                            variant="outline"
                            className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" className="px-8 py-3">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed with Industry Insights</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert analysis, trends, and best practices delivered directly to your inbox.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
