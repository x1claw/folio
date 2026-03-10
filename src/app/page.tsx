import { FaApple, FaDownload, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const apps = [
  {
    id: 1,
    name: "1Calendar",
    icon: "📅",
    description: "A stunning, native macOS calendar app with a beautiful glassmorphic design. Manage your schedule with elegance and ease.",
    category: "productivity",
    color: "blue",
    downloadUrl: "https://github.com/x1claw/1Calendar-release",
    downloadType: "direct",
    features: [
      "Beautiful glassmorphic UI",
      "Native macOS experience",
      "Event creation & editing",
      "Multiple calendar support",
      "Quick entry shortcuts",
      "Menu bar integration",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Floating decorative orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 hero-shimmer pointer-events-none opacity-50" />

        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Mac icon card */}
          <div className="float-delay-1 mb-6 md:mb-8 mx-auto w-32 h-32 md:w-40 md:h-40 rounded-3xl glass-card glow-purple flex items-center justify-center animate-scale-in relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse" style={{ animationDuration: '3s' }} />
            <FaApple className="text-5xl md:text-7xl text-white relative z-10" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-glow animate-fade-in-up delay-200">
            My <span className="gradient-text">macOS Apps</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-in-up delay-300">
            Beautiful, native <span className="text-purple-400">macOS applications</span> designed to enhance your workflow
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
            <a href="#showcase" className="glass-button text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              View 1Calendar
            </a>
            <a href="https://github.com/x1claw/1Calendar-release" target="_blank" rel="noopener noreferrer" className="glass-button text-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section id="showcase" className="relative z-10 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 animate-fade-in-up">
            <span className="gradient-text">App Showcase</span>
          </h2>
          <p className="text-center text-[var(--foreground-muted)] text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            A native macOS calendar app crafted with care for productivity
          </p>

          {/* App cards grid - centered single card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {apps.map((app, index) => (
              <div
                key={app.id}
                className={`glass-card p-8 float-delay-${index} animate-fade-in-up gradient-border ${index === 0 ? 'delay-300' : index === 1 ? 'delay-400' : 'delay-500'} ${
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

                {/* Features list */}
                {app.features && (
                  <ul className="mb-6 space-y-2">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Download button */}
                <a
                  href={app.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download Free</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative z-10 h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-gradient-mid to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-sm" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
      </div>

      {/* Screenshots Section */}
      <section id="screenshots" className="relative z-10 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 animate-fade-in-up">
            <span className="gradient-text">Screenshots</span>
          </h2>
          <p className="text-center text-[var(--foreground-muted)] text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            A sneak peek at the beautiful interface
          </p>

          {/* Screenshot placeholder cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                className="glass-card p-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150 + 300}ms` }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/30 via-violet-900/20 to-cyan-900/30 flex flex-col items-center justify-center border border-white/5">
                  {/* macOS window chrome */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-white/5 backdrop-blur-sm flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  {/* Placeholder content */}
                  <div className="mt-8 text-center px-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <span className="text-3xl opacity-50">📸</span>
                    </div>
                    <p className="text-white/40 text-sm font-medium">Screenshot {idx} Coming Soon</p>
                    <p className="text-white/20 text-xs mt-2">Add your app screenshots here</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More screenshots hint */}
          <div className="mt-12 text-center animate-fade-in-up delay-500">
            <p className="text-[var(--foreground-muted)] text-sm">
              More screenshots will be added as apps are updated
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative z-10 h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-gradient-mid to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 blur-sm" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500" />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <a
              href="https://github.com/x1claw"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-button !p-3 !rounded-full"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-button !p-3 !rounded-full"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="group glass-button !p-3 !rounded-full"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8 text-sm">
            <a
              href="https://github.com/x1claw/1Calendar-release"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground-muted)] hover:text-white transition-colors"
            >
              1Calendar on GitHub
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#showcase"
              className="text-[var(--foreground-muted)] hover:text-white transition-colors"
            >
              Apps
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-[var(--foreground-muted)] text-sm">
            © {new Date().getFullYear()} — Built with <span className="text-pink-400">♥</span> using glassmorphism
          </p>
        </div>
      </footer>
    </main>
  );
}
