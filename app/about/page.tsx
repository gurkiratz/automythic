'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const TechItem = ({
  name,
  description,
  logo,
  link,
}: {
  name: string
  description: string
  logo: React.ReactNode
  link: string
}) => (
  <div className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700">
    <div className="flex-shrink-0">{logo}</div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-gray-300 text-sm mb-2">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-medium"
      >
        Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  </div>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-8">
      <Card className="w-full max-w-4xl bg-gray-900 border-gray-800 shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Us
          </CardTitle>
          <CardDescription className="text-gray-400 text-lg mt-2">
            Crafting AI-Powered Adventures
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Who We Are */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">
              Who We Are
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We&apos;re a small team of creators passionate about interactive
              storytelling and blockchain tech. Our mission is to craft unique,
              AI-driven adventures that anyone can play and shape, pushing the
              boundaries of narrative experiences.
            </p>
          </div>

          {/* How We Built It */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">
              How We Built It
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Our app combines cutting-edge technologies for a seamless and
              immersive experience:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <TechItem
                name="Next.js"
                description="Powers our fast, responsive web app with server-side rendering and dynamic routing."
                logo={
                  <svg className="w-8 h-8" viewBox="0 0 180 180" fill="none">
                    <mask
                      id="mask0_408_134"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="180"
                      height="180"
                    >
                      <circle cx="90" cy="90" r="90" fill="black" />
                    </mask>
                    <g mask="url(#mask0_408_134)">
                      <circle cx="90" cy="90" r="90" fill="black" />
                      <path
                        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                        fill="url(#paint0_linear_408_134)"
                      />
                      <rect
                        x="115"
                        y="54"
                        width="12"
                        height="72"
                        fill="url(#paint1_linear_408_134)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_408_134"
                        x1="109"
                        y1="116.5"
                        x2="144.5"
                        y2="160.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_408_134"
                        x1="121"
                        y1="54"
                        x2="120.799"
                        y2="106.875"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                link="https://nextjs.org/"
              />
              <TechItem
                name="NEAR Shade Agents"
                description="Secures user authentication and transactions with NEAR blockchain, enabling token-based purchases."
                logo={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16.5938 1.51884L12.9199 7.25807C12.7993 7.4412 12.9199 7.68677 13.1359 7.68677H23.6712C23.9374 7.68677 24.0831 8.00478 23.8922 8.19542L7.31285 22.4512C7.04668 22.6794 6.65507 22.3864 6.77559 22.0559L11.1004 10.9049C11.1707 10.7143 11.0249 10.5112 10.8089 10.5112H0.328918C0.0878716 10.5112 -0.0578145 10.2432 0.0878716 10.0276L15.5589 0.0687311C15.8251 -0.159358 16.2167 0.133683 16.121 0.464196L16.5938 1.51884Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                }
                link="https://near.org/blog/shade-agents-the-first-truly-autonomous-ai-agents"
              />
              <TechItem
                name="Google Gemini 1.5 Pro"
                description="Drives our AI game generation, crafting rich narratives and choices from user prompts."
                logo={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12.1399 2C6.61624 2 2.13989 6.47635 2.13989 12C2.13989 17.5236 6.61624 22 12.1399 22C17.6635 22 22.1399 17.5236 22.1399 12C22.1399 6.47635 17.6635 2 12.1399 2ZM12.1399 20C7.72089 20 4.13989 16.419 4.13989 12C4.13989 7.58099 7.72089 4 12.1399 4C16.5589 4 20.1399 7.58099 20.1399 12C20.1399 16.419 16.5589 20 12.1399 20Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.1399 6C8.82589 6 6.13989 8.686 6.13989 12C6.13989 15.314 8.82589 18 12.1399 18C15.4539 18 18.1399 15.314 18.1399 12C18.1399 8.686 15.4539 6 12.1399 6ZM12.1399 16C9.93089 16 8.13989 14.209 8.13989 12C8.13989 9.791 9.93089 8 12.1399 8C14.3489 8 16.1399 9.791 16.1399 12C16.1399 14.209 14.3489 16 12.1399 16Z"
                      fill="#34A853"
                    />
                    <path
                      d="M12.1399 10C11.0353 10 10.1399 10.8954 10.1399 12C10.1399 13.1046 11.0353 14 12.1399 14C13.2445 14 14.1399 13.1046 14.1399 12C14.1399 10.8954 13.2445 10 12.1399 10Z"
                      fill="#FBBC05"
                    />
                  </svg>
                }
                link="https://deepmind.google/technologies/gemini/"
              />
            </div>
          </div>

          {/* Collaboration Credit */}
          <div className="text-center text-gray-400 text-base mt-8 pt-6 border-t border-gray-800">
            Made in collaboration with{' '}
            <Link
              href="https://www.playtingz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline font-medium"
            >
              Automythic AI x Tingz
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
