export const metadata = { title: "LivecodeX" };

export default function Page() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="card p-8 bg-white/[0.05] border border-white/[0.1]">
        <div className="text-sm text-muted">Inter-College Live Coding Competition</div>
        <h1 className="mt-1 text-4xl font-extrabold tracking-tight">
          <span className="text-[color:var(--accent)]">Livecode</span>X
        </h1>
        <div className="mt-3 flex flex-wrap gap-3 text-xs">
          <span className="rounded-full bg-white/[0.08] px-3 py-1 text-muted">24 Oct 2025</span>
          <span className="rounded-full bg-white/[0.08] px-3 py-1 text-muted">CMRIT Hyderabad</span>
          <span className="rounded-full bg-white/[0.08] px-3 py-1 text-muted">Teams of 1–2</span>
          <span className="rounded-full bg-white/[0.08] px-3 py-1 text-muted">₹199 Fee</span>
        </div>
        <p className="mt-4 text-base text-muted max-w-3xl">
          Test your problem-solving and coding skills live on stage. Compete with participants
          from colleges across the city in algorithmic challenges curated by the <span className="font-medium text-foreground">Data Science Society.</span>
        </p>
      </header>

      <section className="mt-8 grid md:grid-cols-5 gap-6 items-start">
        {/* Left Column: Competition Details */}
        <div className="md:col-span-3 card p-6">
          
          <h2 className="text-xl font-semibold mb-4">About the <span className="text-[color:var(--accent)]">Competition</span></h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li className="text-muted">
              <span className="font-medium text-foreground">Format:</span> Live coding rounds on curated problems (DSA + implementation)
            </li>
            <li className="text-muted">
              <span className="font-medium text-foreground">Languages allowed:</span> C/C++, Python, Java, or JavaScript
            </li>
            <li className="text-muted">
              <span className="font-medium text-foreground">Rounds:</span> Qualifier → Finals (on-site)
            </li>
            <li className="text-muted">
              <span className="font-medium text-foreground">Eligibility:</span> Open to all undergraduate students (inter-college)
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold mb-4"><span className="text-[color:var(--accent)]">Schedule</span></h2>
          <ul className="mt-2 text-sm grid gap-1">
            <li className="text-muted">
              <span className="font-medium text-foreground">Reporting:</span> 9:30 AM
            </li>
            <li className="text-muted">
              <span className="font-medium text-foreground">Qualifier:</span> 10:00 AM – 11:30 AM
            </li>
            <li className="text-muted">
              <span className="font-medium text-foreground">Finals:</span> 1:30 PM – 3:00 PM
            </li>
            <li className="text-muted">
              <span className="font-medium text-foreground">Results & Felicitation:</span> 4:00 PM
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold mb-4"><span className="text-[color:var(--accent)]">Prizes</span></h2>
          <ul className="mt-2 text-sm grid gap-1 text-muted">
            <li>• Winner, Runner-up, and Best Freshman awards (Exciting Cash Prizes)</li>
            <li>• Premium Swag and Certificates for all finalists</li>
            <li>• Recognition across all DSS official channels</li>
          </ul>
        </div>

        {/* Right Column: Event Details & Registration CTA */}
        <aside className="md:col-span-2 grid gap-6">
          <div className="card p-6">
            <h3 className="font-medium text-lg mb-3"><span className="text-[color:var(--accent)]">Event</span> Details</h3>
            <div className="mt-3 grid gap-3 text-sm">
              <div className="flex items-center justify-between"><span className="text-muted">Date</span><span>24 Oct 2025</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Venue</span><span>CMRIT Hyderabad</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Team size</span><span>1–2 members</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Registration fee</span><span>₹80 per team</span></div>
              <div className="flex items-center justify-between"><span className="text-muted">Contact</span><span>dss@cmrithyderabad.edu.in</span></div>
            </div>
          </div>

          {/* Registration CTA Card - StudentTribe Integration */}
          <div 
            className="card p-6 bg-gray-900 shadow-lg"
            style={{ 
              background: 'linear-gradient(140deg, color-mix(in oklab, var(--accent) 70%, #0a0a0a), #0a0a0a)', // Darker BG to make white text pop
              boxShadow: '0 10px 20px -5px color-mix(in oklab, var(--accent) 50%, transparent)' 
            }}
          >
            {/* All content inside here is WHITE */}
            <div className="flex items-center justify-center mb-4">
                {/* Image Placeholder for External Logo */}
                <img 
                    src="https://studenttribe.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-16-at-5.33.34-PM-300x300.jpeg" // REPLACE WITH ACTUAL LOGO URL
                    alt="StudentTribe Logo"
                    className="w-10 h-auto"
                />
                <span className="ml-2 text-xl font-bold text-white">StudentTribe</span>
            </div>
            
            <p className="text-sm text-white text-center mb-4 font-medium">
                Official Ticketing and Outreach Partner
            </p>

            <a 
              href="https://events.studenttribe.in/event/68f3ac14602c76c3d73f8bab"
              target="_blank"
              rel="noopener noreferrer"
              // CHANGED: Button background to red and hover color
              className="bg-red-600 text-white font-bold rounded-full px-5 py-3 text-base w-full inline-block text-center hover:bg-red-700 transition"
            >
              Register on StudentTribe
            </a>
            <p className="mt-3 text-xs text-white/80 text-center">Secure your spot before the deadline!</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
