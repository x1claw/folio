import { FaApple, FaDownload } from "react-icons/fa";

const app = {
  name: "1Calendar",
  icon: "📅",
  description: "A beautiful native macOS calendar app. Manage your schedule with elegance and ease.",
  downloadUrl: "https://github.com/x1claw/1Calendar-release",
  features: [
    "Native macOS design",
    "Event creation & editing",
    "Multiple calendars",
    "Quick shortcuts",
    "Menu bar integration",
  ],
};

export default function Home() {
  return (
    <main>
      <header>
        <div className="container">
          <h1>{app.name}</h1>
          <p>{app.description}</p>
          <div style={{ marginTop: "20px" }}>
            <a href={app.downloadUrl} className="btn" target="_blank" rel="noopener noreferrer">
              <FaDownload style={{ marginRight: "8px" }} />
              Download Free
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="app-card">
            <div className="app-icon">{app.icon}</div>
            <div className="app-name">{app.name}</div>
            <p className="app-description">{app.description}</p>
            <ul className="features">
              {app.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href={app.downloadUrl} className="btn" style={{ width: "100%", textAlign: "center" }} target="_blank" rel="noopener noreferrer">
              <FaDownload style={{ marginRight: "8px" }} />
              Download for Free
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} {app.name}</p>
        </div>
      </footer>
    </main>
  );
}
