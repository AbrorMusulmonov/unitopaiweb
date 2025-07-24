import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "unitopai",
  description:
    "Xalqaro universitetlarga ariza berish uchun AI-powered yordamchi. Essay feedback, universitet matching, grant va stipendiya topish. Magistratura, bakalavr va doktorantura dasturlari uchun professional yordam.",
  keywords: [
    "grantlar",
    "stipendiyalar",
    "xalqaro universitetlar",
    "magistratura grantlari",
    "bakalavr grantlari",
    "doktorantura grantlari",
    "universitet ariza",
    "essay yozish",
    "recommendation letter",
    "AI yordamchi",
    "ta'lim granti",
    "chet el ta'limi",
    "universitet qabul",
    "application assistance",
    "international students",
    "scholarship matching",
    "university application",
    "study abroad",
    "academic writing",
    "unitopai",
    "davomini o'qish",
    "shaveytsariya ETH Zurich",
    "skoltech rossiyada",
    "barcha grantlar",
    "muddat tanlanmagan",
    "universitetlar",
    "blog",
    "video seminarlar",
    "o'quvchilar fikri",
  ].join(", "),
  authors: [{ name: "unitopai Team", url: "https://unitopai.com" }],
  creator: "unitopai",
  publisher: "unitopai",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://unitopai.com",
    languages: {
      uz: "https://unitopai.com/uz",
      en: "https://unitopai.com/en",
      ru: "https://unitopai.com/ru",
    },
  },
  openGraph: {
    title: "unitopai",
    description:
      "Grantlar, stipendiyalar va xalqaro universitetlarga ariza berish uchun AI-powered professional yordam. Magistratura, bakalavr va doktorantura dasturlari.",
    url: "https://unitopai.com",
    siteName: "unitopai",
    type: "website",
    locale: "uz_UZ",
    images: [
      {
        url: "https://unitopai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "unitopai - AI-powered universitet ariza yordamchisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "unitopai",
    description: "AI yordamida xalqaro universitetlarga ariza bering. Grantlar, stipendiyalar va professional yordam.",
    creator: "@unitopai_",
    images: ["https://unitopai.com/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Education",
  classification: "Education Technology, AI Assistant, University Applications, Grants, Scholarships",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" dir="ltr">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "unitopai",
              url: "https://unitopai.com",
              logo: "https://unitopai.com/logo.png",
              description:
                "AI-powered universitet ariza yordamchisi. Grantlar, stipendiyalar va xalqaro ta'lim imkoniyatlari.",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "unitopai Team",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+998-90-123-45-67",
                contactType: "customer service",
                email: "info.unitopai@gmail.com",
                availableLanguage: ["Uzbek", "English", "Russian"],
              },
              sameAs: [
                "https://t.me/unitopai",
                "https://www.linkedin.com/company/unitopai",
                "https://x.com/unitopai_",
                "https://www.instagram.com/unitopai/",
              ],
              serviceType: [
                "University Application Assistance",
                "Grant and Scholarship Matching",
                "Essay Writing Support",
                "AI-powered Education Consulting",
              ],
              areaServed: "Worldwide",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "unitopai Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Essay Feedback",
                      description: "AI-powered essay review va takomillashtirish",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "University Matching",
                      description: "Shaxsiy profil asosida universitet tanlash",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Grant va Stipendiya Matching",
                      description: "Eng mos grantlar va stipendiyalarni topish",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Educational Service Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "unitopai",
              url: "https://unitopai.com",
              description:
                "Xalqaro universitetlarga ariza berish, grantlar va stipendiyalar uchun AI-powered yordamchi xizmati.",
              educationalCredentialAwarded: "University Application Support Certificate",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Professional Certificate",
                educationalLevel: "Higher Education Support",
              },
              offers: [
                {
                  "@type": "Course",
                  name: "University Application Masterclass",
                  description: "Xalqaro universitetlarga muvaffaqiyatli ariza berish bo'yicha to'liq kurs",
                  provider: {
                    "@type": "Organization",
                    name: "unitopai",
                  },
                },
              ],
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "unitopai qanday yordam beradi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "unitopai AI yordamida essay feedback, universitet matching, grant topish va ariza jarayonini soddalashtirish xizmatlarini taqdim etadi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qanday grantlar mavjud?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Magistratura, bakalavr va doktorantura dasturlari uchun xalqaro grantlar va stipendiyalar mavjud. unitopai sizga eng mos variantlarni topishda yordam beradi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Xizmat narxi qancha?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Asosiy xizmatlar bepul, premium funksiyalar oyiga $9, korporativ rejalar uchun individual narxlar mavjud.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Additional Meta Tags for Better SEO */}
        <meta name="geo.region" content="UZ" />
        <meta name="geo.placename" content="Uzbekistan" />
        <meta name="language" content="Uzbek" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#34A853" />
        <meta name="msapplication-TileColor" content="#34A853" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://unitopai.com" />

        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="uz" href="https://unitopai.com/uz" />
        <link rel="alternate" hrefLang="en" href="https://unitopai.com/en" />
        <link rel="alternate" hrefLang="ru" href="https://unitopai.com/ru" />
        <link rel="alternate" hrefLang="x-default" href="https://unitopai.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
