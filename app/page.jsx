export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          padding: "100px 40px",
          background: "linear-gradient(135deg, #0f172a, #1e3a8a, #0f766e)",
          color: "white"
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", lineHeight: "1.2", marginBottom: "20px" }}>
            Global Logistics & Customs Clearance Experts
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "700px", opacity: 0.9 }}>
            C2Sky Cargo delivers reliable UK-wide and international logistics solutions,
            specialising in customs clearance, freight forwarding, and air, sea, and road transport.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "14px 28px",
              background: "white",
              color: "#0f172a",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Contact Our Team
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "80px 40px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Our Services</h2>

          <ul style={{ lineHeight: "2", fontSize: "17px", color: "#334155" }}>
            <li>Customs Clearance for all UK imports</li>
            <li>Freight Forwarding (Air, Sea & Road)</li>
            <li>Air Freight & Express Shipments</li>
            <li>Sea Freight (FCL & LCL)</li>
            <li>UK-Wide Haulage & Distribution</li>
            <li>De-vanning & Warehouse Support</li>
          </ul>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>About C2Sky Cargo</h2>
          <p style={{ fontSize: "17px", color: "#334155", maxWidth: "900px", lineHeight: "1.7" }}>
            C2Sky Cargo is a UK-based logistics and customs clearance specialist providing
            end-to-end import and freight solutions. We handle customs clearance for all
            types of goods entering the UK, including garments, food and drink products,
            commercial cargo, and vehicles.
            <br /><br />
            Our experienced team ensures full compliance with UK regulations while delivering
            efficient, transparent, and reliable logistics services for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px",
          background: "#020617",
          color: "#94a3b8",
          textAlign: "center",
          fontSize: "14px"
        }}
      >
        © {new Date().getFullYear()} C2Sky Cargo. All rights reserved.
      </footer>
    </main>
  );
}
