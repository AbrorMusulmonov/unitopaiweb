"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  MessageSquare,
  Target,
  CheckSquare,
  BarChart3,
  Mic,
  DollarSign,
  ExternalLink,
  Mail,
  Star,
  Check,
  Crown,
  Zap,
  Building2,
  Users,
  TrendingUp,
  FileCheck,
  Search,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900 hover:text-[#34A853] transition-colors duration-300">
                unitopai
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#hero"
                className="text-gray-600 hover:text-[#34A853] transition-all duration-300 font-medium hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-gray-600 hover:text-[#34A853] transition-all duration-300 font-medium hover:scale-105"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-gray-600 hover:text-[#34A853] transition-all duration-300 font-medium hover:scale-105"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-[#34A853] transition-all duration-300 font-medium hover:scale-105"
              >
                Contact
              </Link>
              <Button
                asChild
                className="bg-[#34A853] hover:bg-[#2d8f47] text-white rounded-full px-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="https://t.me/unitopai_bot" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24 bg-gradient-to-b from-green-50/30 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`text-center lg:text-left transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Journey to a <span className="text-[#34A853] animate-pulse">Utopia College</span> Starts Here —
                Powered by{" "}
                <span className="text-[#34A853] hover:scale-105 inline-block transition-transform duration-300">
                  unitopai
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
                AI-powered guidance for international university applications — including essay feedback, smart letter
                review, and personalized school matching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#34A853] hover:bg-[#2d8f47] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
                >
                  <Link href="https://t.me/unitopai_bot" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Try the Demo on Telegram
                  </Link>
                </Button>
              </div>
            </div>
            <div
              className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-[#34A853]/10 to-[#34A853]/20 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-500 hover:rotate-1">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-[#34A853] rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse hover:animate-spin transition-all duration-300">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">AI-Powered Application Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-[#34A853] transition-colors duration-300">
              Comprehensive AI-Powered University Application Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From free basic tools to advanced premium features, we support every step of your application journey.
            </p>
          </div>

          {/* Available Now Features */}
          <div className="mb-16">
            <div className="text-center mb-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Available Now</h3>
              <p className="text-gray-600">Core features accessible to all users</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: FileText,
                  title: "Essay Feedback",
                  description:
                    "Get AI-powered grammar, structure, and content suggestions to improve your application essays.",
                  delay: "0ms",
                },
                {
                  icon: BarChart3,
                  title: "Profile Analysis",
                  description:
                    "Comprehensive analysis of your academic profile with personalized improvement recommendations.",
                  delay: "200ms",
                },
                {
                  icon: CheckSquare,
                  title: "Application Checklist",
                  description:
                    "Stay organized with comprehensive checklists and deadline tracking for each application.",
                  delay: "400ms",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl transform hover:scale-105 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: feature.delay }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#34A853]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#34A853]/20 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-[#34A853] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#34A853] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Premium Features */}
          <div className="mb-16">
            <div className="text-center mb-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Features</h3>
              <p className="text-gray-600">Advanced tools for serious applicants</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "University Matching",
                  description:
                    "Advanced AI-powered university matching based on your profile, preferences, and career goals.",
                  delay: "0ms",
                },
                {
                  icon: MessageSquare,
                  title: "Letter Analysis",
                  description: "Advanced AI analysis of recommendation letters with detailed improvement suggestions.",
                  delay: "200ms",
                },
                {
                  icon: FileCheck,
                  title: "AI-based CV/Resume Review",
                  description: "Professional CV and resume analysis with AI-powered suggestions for maximum impact.",
                  delay: "400ms",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border border-[#34A853]/20 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl relative transform hover:scale-105 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: feature.delay }}
                >
                  <Badge className="absolute -top-2 -right-2 bg-[#34A853] text-white animate-pulse hover:animate-bounce">
                    PREMIUM
                  </Badge>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#34A853]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#34A853]/20 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-[#34A853] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#34A853] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coming Soon Features */}
          <div>
            <div className="text-center mb-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600">Exciting features in development</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Mic,
                  title: "AI Interview Prep",
                  description: "Practice university interviews with AI-powered feedback and personalized coaching.",
                  delay: "0ms",
                },
                {
                  icon: DollarSign,
                  title: "Scholarship Matching",
                  description: "Discover and match with relevant scholarships worldwide to fund your education.",
                  delay: "200ms",
                },
                {
                  icon: Search,
                  title: "AI-powered Document Check",
                  description: "Advanced PDF Inspector for comprehensive document analysis and verification.",
                  delay: "400ms",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl relative opacity-75 hover:opacity-90 transform hover:scale-105 group animate-fade-in-up"
                  style={{ animationDelay: feature.delay }}
                >
                  <Badge className="absolute -top-2 -right-2 bg-gray-500 text-white">COMING SOON</Badge>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose unitopai */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-[#34A853] transition-colors duration-300">
              Why Choose unitopai?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep understanding of international university admissions to
              provide unparalleled guidance for your academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Built by students",
                subtitle: "for students worldwide with real experience in international admissions",
                delay: "0ms",
              },
              {
                title: "94%",
                subtitle: "of users significantly improved their application quality and success rate",
                delay: "200ms",
              },
              {
                title: "Advanced AI",
                subtitle: "powered by machine learning, not generic templates or basic automation",
                delay: "400ms",
              },
              {
                title: "Enterprise Security",
                subtitle: "bank-level encryption ensures your personal data remains completely private",
                delay: "600ms",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-[#34A853] mb-2 hover:animate-pulse">{stat.title}</div>
                <p className="text-gray-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "unitopai gave me instant clarity on my essay — I finally knew what to fix and how to make it compelling for admissions officers.",
                author: "Zafar, admitted to HKUST",
                delay: "0ms",
              },
              {
                text: "The university matching feature helped me discover NYU Shanghai, which turned out to be the perfect fit for my international business goals.",
                author: "Zilola, admitted to NYU Shanghai",
                delay: "200ms",
              },
              {
                text: "Saved me months of stress and confusion. The AI feedback was incredibly detailed and helped me craft a winning application.",
                author: "Shohnur, admitted to Duke Kunshan University",
                delay: "400ms",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg rounded-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: testimonial.delay }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm text-gray-500">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-[#34A853] transition-colors duration-300">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">Start free and upgrade as you need more advanced features</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border border-gray-200 rounded-2xl shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Free</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $0<span className="text-lg text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "1 essay review per month",
                  "Basic profile analysis",
                  "Application checklist",
                  "Community support",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Check className="w-5 h-5 text-[#34A853] animate-pulse" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                <Button
                  asChild
                  className="w-full mt-8 bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="https://t.me/unitopai_bot" target="_blank" rel="noopener noreferrer">
                    Get Started Free
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card
              className="border-2 border-[#34A853] rounded-2xl shadow-xl relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#34A853] text-white px-4 py-1 animate-bounce">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Premium</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  $9<span className="text-lg text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Unlimited essay reviews",
                  "Advanced university matching",
                  "Letter analysis & optimization",
                  "AI-based CV/Resume review",
                  "Priority support",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Check className="w-5 h-5 text-[#34A853] animate-pulse" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                <Button
                  asChild
                  className="w-full mt-8 bg-[#34A853] text-white hover:bg-[#2d8f47] rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="https://t.me/unitopai_bot" target="_blank" rel="noopener noreferrer">
                    Subscribe Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card
              className="border border-gray-200 rounded-2xl shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Business</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  <span className="text-lg">Custom Pricing</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Building2, text: "For schools & education organizations" },
                  { icon: Users, text: "Bulk student management" },
                  { icon: TrendingUp, text: "Advanced analytics & reporting" },
                  { icon: Crown, text: "Custom integrations & API access" },
                  { icon: Check, text: "Dedicated account manager" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <feature.icon className="w-5 h-5 text-[#34A853] hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
                <Button
                  asChild
                  className="w-full mt-8 bg-[#34A853] text-white hover:bg-[#2d8f47] rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="https://t.me/unitopai_bot" target="_blank" rel="noopener noreferrer">
                    Contact Sales
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#34A853] to-[#2d8f47] overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
              Ready to simplify your application process?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of students who are applying smarter, faster, and with less stress.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-[#34A853] hover:bg-green-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce-subtle"
            >
              <Link href="https://t.me/unitopai_bot" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Try the Demo via Telegram → @unitopai_bot
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4 animate-fade-in-up">
              <span className="text-2xl font-bold text-gray-900 hover:text-[#34A853] transition-colors duration-300">
                unitopai
              </span>
              <p className="text-gray-600">AI-powered guidance for international university applications.</p>
            </div>

            {/* Navigation */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-[#34A853] transition-all duration-300 hover:translate-x-1"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-600 hover:text-[#34A853] transition-all duration-300 hover:translate-x-1"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-[#34A853] transition-all duration-300 hover:translate-x-1"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-[#34A853] transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>info.unitopai@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/unitopai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#34A853] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://t.me/unitopai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#34A853] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.378 2.618-.378 2.618-1.414 2.618-.896 0-1.378-.896-1.378-.896l-3.457-2.618-.896-.896 1.792-1.792c.448-.448.896-.448.896-.896 0-.448-.448-.448-.896 0l-2.688 2.24L7.2 11.2l-2.24-.896c-.448-.169-.448-.896 0-1.065l8.96-3.457c.448-.169.896.169.648.378z" />
                  </svg>
                  <span className="sr-only">Telegram</span>
                </Link>
                <Link
                  href="https://x.com/unitopai_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#34A853] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </Link>
                <Link
                  href="https://www.instagram.com/unitopai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#34A853] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 animate-fade-in-up">
            <p className="text-gray-500">© {new Date().getFullYear()} unitopai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
