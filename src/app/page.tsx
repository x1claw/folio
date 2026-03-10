import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaApple, FaDownload, FaAppStore } from "react-icons/fa";

const categories = [
  { id: "all", label: "All Apps" },
  { id: "productivity", label: "Productivity" },
  { id: "utilities", label: "Utilities" },
  { id: "developer", label: "Developer Tools" },
];

const apps = [
  {
    id: 1,
    name: "1Calendar",
    icon: "📅",
    description: "A beautiful calendar app for macOS",
    category: "productivity",
    color: "blue",
    downloadUrl: "https://github.com/x1claw/1Calendar-release",
    downloadType: "direct",
  },
];

const socials = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaEnvelope, href: "#", label: "Email" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Floating decorative orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Mac icon card */}
          <div className="float-delay-1 mb-8 mx-auto w-40 h-40 rounded-3xl glass-card glow-purple flex items-center justify-center">
            <FaApple className="text-7xl text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            My <span className="gradient-text">macOS Apps</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Beautiful, native <span className="text-purple-400">macOS applications</span> designed to enhance your workflow
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="glass-button text-lg">
              Browse Apps
            </button>
            <button className="glass-button text-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="gradient-text">App Showcase</span>
          </h2>
          <p className="text-center text-[var(--foreground-muted)] text-lg mb-12 max-w-2xl mx-auto">
            Discover native macOS apps crafted with care for productivity, utilities, and development
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  cat.id === "all"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "glass-card text-white/80 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* App cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <div
                key={app.id}
                className={`glass-card p-8 float-delay-${index} ${
                  app.color === 'purple' ? 'glow-purple' :
                  app.color === 'pink' ? 'glow-pink' :
                  app.color === 'cyan' ? 'glow-cyan' :
                  app.color === 'emerald' ? 'glow-emerald' :
                  app.color === 'amber' ? 'glow-amber' :
                  app.color === 'blue' ? 'glow-cyan' : 'glow-violet'
                }`}
              >
                {/* App icon */}
                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center ${
                  app.color === 'purple' ? 'from-purple-500 to-violet-600' :
                  app.color === 'pink' ? 'from-pink-500 to-rose-600' :
                  app.color === 'cyan' ? 'from-cyan-500 to-blue-600' :
                  app.color === 'emerald' ? 'from-emerald-500 to-teal-600' :
                  app.color === 'amber' ? 'from-amber-500 to-orange-600' :
                  app.color === 'blue' ? 'from-blue-500 to-cyan-600' : 'from-violet-500 to-purple-600'
                }`}>
                  <span className="text-4xl">{app.icon}</span>
                </div>

                {/* App name */}
                <h3 className="text-2xl font-bold mb-3 text-white">{app.name}</h3>

                {/* Description */}
                <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Category tag */}
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 text-white/60 mb-6 capitalize">
                  {app.category}
                </span>

                {/* Download button */}
                <a
                  href={app.downloadUrl}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-all ${
                    app.downloadType === "mac-app-store"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      : "glass-card hover:bg-white/20 text-white"
                  }`}
                >
                  {app.downloadType === "mac-app-store" ? (
                    <>
                      <FaAppStore className="w-5 h-5" />
                      <span>Mac App Store</span>
                    </>
                  ) : (
                    <>
                      <FaDownload className="w-5 h-5" />
                      <span>Direct Download</span>
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[var(--foreground-muted)]">
            © 2024 — Built with <span className="text-pink-400">♥</span> using glassmorphism
          </p>
        </div>
      </footer>
    </main>
  );
}
