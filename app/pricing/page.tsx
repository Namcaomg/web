import Link from "next/link"


export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header Navigation */}
      <div className="flex justify-between items-center mb-12">
        <button
          className="border-[#95ff00] text-white hover:bg-[#95ff00] hover:text-black rounded-full px-6 py-2 bg-transparent border-2"
        >
          <Link href="/">Back to home page</Link>
        </button>

        <Link href="/contact">
        <button
          className="border-[#95ff00] text-white hover:bg-[#95ff00] hover:text-black rounded-full px-6 py-2 bg-transparent border-2"
        >

      Contact Us
        </button>
        </Link>
      </div>

      {/* Pricing Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="relative">
            <div className="w-12 h-12 bg-[#95ff00] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-[#95ff00] rounded-full relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#95ff00] rounded-full"></div>
                <div className="absolute -top-2 left-2 w-1 h-1 bg-[#95ff00] rounded-full"></div>
                <div className="absolute top-1 -right-1 w-1 h-1 bg-[#95ff00] rounded-full"></div>
                <div className="absolute -bottom-1 left-1 w-1 h-1 bg-[#95ff00] rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white">Pricing</h1>
          <div className="w-16 h-8">
            <svg viewBox="0 0 64 32" className="w-full h-full fill-[#95ff00]">
              <path d="M0 16 Q16 0 32 16 Q48 32 64 16" stroke="#95ff00" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* YouTube Growth Card */}
        <div className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 40 40" className="w-10 h-10 fill-[#95ff00]">
              <path
                d="M20 0 Q10 10 0 20 Q10 30 20 40 Q30 30 40 20 Q30 10 20 0"
                stroke="#95ff00"
                strokeWidth="2"
                fill="none"
              />
              <path d="M15 10 L25 20 L15 30" stroke="#95ff00" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="bg-[#95ff00] text-black rounded-3xl p-6">
            <div className="pb-4">
              <h2 className="text-2xl font-bold">YouTube Growth</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Basic</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Channel audit & optimization</li>
                  <li>• SEO-friendly titles & tags</li>
                  <li>• 1 content strategy session</li>
                  <li className="text-green-700 ml-4">↳ Ideal for new creators</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Standard</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Monthly content plan (×4 videos)</li>
                  <li>• Thumbnail feedback & improvements</li>
                  <li>• Performance tracking report</li>
                  <li className="text-green-700 ml-4">↳ Perfect for growing channels</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Premium</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Full channel management</li>
                  <li>• Weekly strategy calls</li>
                  <li>• Advanced growth tactics & monetization</li>
                  <li className="text-green-700 ml-4">↳ Best for brands & influencers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Music Production Card */}
        <div className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 40 40" className="w-10 h-10 fill-[#95ff00]">
              <path
                d="M20 0 Q10 10 0 20 Q10 30 20 40 Q30 30 40 20 Q30 10 20 0"
                stroke="#95ff00"
                strokeWidth="2"
                fill="none"
              />
              <path d="M15 10 L25 20 L15 30" stroke="#95ff00" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="bg-[#95ff00] text-black rounded-3xl p-6">
            <div className="pb-4">
              <h2 className="text-2xl font-bold">Music Production</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Basic</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Custom beat (non-exclusive)</li>
                  <li>• Basic mix & master</li>
                  <li className="text-green-700 ml-4">↳ Good for intros, background music</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Standard</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Exclusive beat creation</li>
                  <li>• Vocal mixing + mastering</li>
                  <li>• Audio branding (sound logo optional)</li>
                  <li className="text-green-700 ml-4">↳ Ideal for artists or content creators</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Premium</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Full production (beat + vocals)</li>
                  <li>• Revisions + mastering for streaming</li>
                  <li>• Sync-ready for YouTube/ads</li>
                  <li className="text-green-700 ml-4">↳ Professional release-ready music</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Video Creation Card */}
        <div className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 40 40" className="w-10 h-10 fill-[#95ff00]">
              <path
                d="M20 0 Q10 10 0 20 Q10 30 20 40 Q30 30 40 20 Q30 10 20 0"
                stroke="#95ff00"
                strokeWidth="2"
                fill="none"
              />
              <path d="M15 10 L25 20 L15 30" stroke="#95ff00" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="bg-[#95ff00] text-black rounded-3xl p-6">
            <div className="pb-4">
              <h2 className="text-2xl font-bold">Video Creation</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Basic</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Video editing (up to 5 min)</li>
                  <li>• Basic transitions & audio sync</li>
                  <li>• 1 thumbnail design</li>
                  <li className="text-green-700 ml-4">↳ For short-form content or clips</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Standard</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Video editing (up to 10 min)</li>
                  <li>• Motion graphics + intro/outro</li>
                  <li>• Thumbnail + title suggestions</li>
                  <li className="text-green-700 ml-4">↳ For vloggers or series creators</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Premium</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Full video production (script to final cut)</li>
                  <li>• Animated elements & branding</li>
                  <li>• SEO-optimized title, tags & description</li>
                  <li className="text-green-700 ml-4">↳ Complete content creation service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}