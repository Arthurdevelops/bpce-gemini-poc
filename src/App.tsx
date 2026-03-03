import { motion } from "framer-motion";
import React from "react";

/**
 * Prefixing interfaces with 'I' as per GEMINI.md instructions
 */
interface IFeatureProps {
  title: string;
  description: string;
  icon?: string;
}

/**
 * All components prefixed with 'op' as per src/GEMINI.md instructions
 */
const OpNavbar: React.FC = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: "1.25rem",
            letterSpacing: "-0.05em",
          }}
        >
          BPCE{" "}
          <span style={{ color: "var(--muted)", fontWeight: 400 }}>| AI</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "var(--muted)",
          }}
        >
          <a href="#tools" style={{ transition: "color 0.2s" }}>
            The Tools
          </a>
          <a href="#training" style={{ transition: "color 0.2s" }}>
            Training
          </a>
          <a href="#secure" style={{ transition: "color 0.2s" }}>
            Security
          </a>
        </div>
        <button
          className="glass"
          style={{
            padding: "0.5rem 1.25rem",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

const OpHero: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: "10rem",
        paddingBottom: "5rem",
        textAlign: "center",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              borderRadius: "2rem",
              border: "1px solid var(--border)",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1.5rem",
              color: "var(--accent)",
            }}
          >
            New for 2026
          </div>
          <h1
            className="gradient-text"
            style={{
              fontSize: "clamp(3rem, 10vw, 6rem)",
              lineHeight: 1.05,
              marginBottom: "2rem",
            }}
          >
            The AI Command Line.
            <br />
            Reimagined for BPCE.
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "var(--muted)",
              maxWidth: "800px",
              margin: "0 auto 3rem",
              lineHeight: 1.5,
            }}
          >
            Empower your workflow with high-performance CLI tools and AI coding
            assistants built specifically for our banking ecosystem.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}
          >
            <button
              style={{
                background: "#fff",
                color: "#000",
                padding: "1.25rem 2.5rem",
                borderRadius: "3rem",
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
            >
              Join the Cohort
            </button>
            <button
              className="glass"
              style={{
                color: "#fff",
                padding: "1.25rem 2.5rem",
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
            >
              Explore Tools
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const OpTerminal: React.FC = () => {
  return (
    <section id="tools" style={{ padding: "5rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass"
          style={{
            padding: "2px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
          }}
        >
          <div
            style={{
              background: "#000",
              borderRadius: "1.4rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#111",
                padding: "0.75rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#ff5f56",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#27c93f",
                }}
              />
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                bpce-ai --training
              </div>
            </div>
            <div
              style={{
                padding: "2rem",
                fontFamily: "var(--font-mono)",
                fontSize: "1.1rem",
                color: "#a6accd",
                minHeight: "300px",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#c3e88d" }}>$</span> npx bpce-ai init
              </div>
              <div style={{ marginBottom: "1rem", color: "#89ddff" }}>
                Initializing secure BPCE context...
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#c3e88d" }}>$</span> bpce-ai chat
                "Refactor this loan validation logic"
              </div>
              <div style={{ color: "#fff" }}>
                <span style={{ color: "#ff9cac" }}>AI:</span> Analysing banking
                compliance standards...
                <br />
                - Applied strict interest rate validation.
                <br />
                - Integrated KYC middleware.
                <br />- Optimized for 2026 fiscal regulations.
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: "1rem",
                }}
              >
                <span style={{ color: "var(--muted)" }}>
                  // Suggestion generated in 42ms
                </span>
                <br />
                <span style={{ color: "#f78c6c" }}>export const</span>{" "}
                validateLoan = (params: ILoanParams) ={">"} {"{"} ... {"}"}
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  display: "inline-block",
                  width: "10px",
                  height: "1.2rem",
                  background: "var(--accent)",
                  verticalAlign: "middle",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const OpFeature: React.FC<IFeatureProps> = ({ title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass"
    style={{
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "12px",
        background: "var(--accent)",
        opacity: 0.8,
      }}
    />
    <h3 style={{ fontSize: "1.5rem" }}>{title}</h3>
    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{description}</p>
  </motion.div>
);

const OpFeatures: React.FC = () => {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <OpFeature
            title="Unified CLI"
            description="One single command for all your banking tasks. Secure, fast, and integrated with BPCE internal systems."
          />
          <OpFeature
            title="IDE Integration"
            description="Custom extensions for VS Code and IntelliJ that understand BPCE coding standards and business logic."
          />
          <OpFeature
            title="Secure Prompting"
            description="Our AI models are trained with data privacy at the core. Your code never leaves the secure BPCE perimeter."
          />
          <OpFeature
            title="PR Analysis & Report"
            description="Reads and analyses any GitHub Pull Request in depth — code changes, reviewers, comments — and generates a detailed Markdown report with a quality summary, risk areas, and actionable recommendations."
          />
        </div>
      </div>
    </section>
  );
};

const OpApp: React.FC = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <OpNavbar />
      <main>
        <OpHero />
        <OpTerminal />
        <OpFeatures />

        {/* Security Section (Apple/AWS vibe) */}
        <section
          id="secure"
          style={{
            padding: "100px 0",
            background: "linear-gradient(180deg, #000 0%, #001 100%)",
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
                Secure by Default.
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "var(--muted)",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Leverage the power of Generative AI without compromising on
                banking regulations. Compliant with EBA and DORA requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "150px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div
              className="glass"
              style={{
                padding: "4rem 2rem",
                background:
                  "radial-gradient(circle at top right, rgba(0,122,255,0.1), transparent)",
              }}
            >
              <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
                Ready to build the future?
              </h2>
              <button
                style={{
                  background: "#fff",
                  color: "#000",
                  padding: "1.5rem 3.5rem",
                  borderRadius: "3rem",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                }}
              >
                Apply for Training
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "4rem 0",
          color: "var(--muted)",
          fontSize: "0.9rem",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>© 2026 BPCE Digital. All rights reserved.</div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OpApp;
