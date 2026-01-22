export default function Contact() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      
      {/* HEADER */}
      <section
        style={{
          padding: "100px 40px",
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
          color: "white"
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
            Contact C2Sky Cargo
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Speak to our team about customs clearance, freight forwarding,
            and logistics solutions.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section style={{ padding: "80px 40px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Get in Touch
          </h2>

          <p style={{ fontSize: "17px", color: "#334155", lineHeight: "1.7" }}>
            Our experienced team is available to assist with all enquiries
            related to customs clearance, air and sea freight, haulage,
            and logistics services across the UK and internationally.
          </p>

          <div style={{ marginTop: "30px", fontSize: "17px", lineHeight: "2", color: "#0f172a" }}>
            <p><strong>Phone:</strong> 07448 415685</p>
            <p><strong>Phone:</strong> 07459 710537</p>
            <p><strong>Email:</strong> info@c2skygroup.com</p>
          </div>

          <p style={{ marginTop: "30px", fontSize: "14px", color: "#64748b" }}>
            Company registration details will be provided shortly.
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
