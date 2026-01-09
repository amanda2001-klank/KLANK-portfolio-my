import React, { useState, useRef } from "react";
import EarthCanvas from "./EarthCanvas";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    emailjs
      .sendForm(
        "service_k2vzsfd",          // ← Replace with your Service ID
        "template_of84xci",         // ← Replace with your Template ID
        formRef.current,
        "2cW_UGhlJSvmSw_mS"           // ← Replace with your Public Key
      )
      .then(
        () => {
          setStatus({ loading: false, success: true, error: false });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus({ loading: false, success: false, error: false }), 4000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus({ loading: false, success: false, error: true });
        }
      );
  };

  return (
    <section
      style={{
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #00ffff, #00ffaa, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
            }}
          >
            Get in Touch
          </h2>
          <p style={{ fontSize: "24px", color: "#dddddd" }}>
            Let's build something amazing together
          </p>
        </div>

        {/* Side-by-Side Layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Neon Glass Contact Form */}
          <div
            style={{
              flex: "1",
              minWidth: "400px",
              background: "rgba(0, 0, 0, 0.45)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "32px",
              padding: "60px",
              border: "2px solid rgba(0, 255, 255, 0.5)",
              boxShadow: "0 0 60px rgba(0, 255, 255, 0.4)",
            }}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "35px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <button
                type="submit"
                disabled={status.loading}
                style={buttonStyle}
                onMouseOver={handleButtonHover}
                onMouseOut={handleButtonOut}
              >
                {status.loading ? "Sending..." : "Send Message 🚀"}
              </button>

              {status.success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: "#00ffff", textAlign: "center", marginTop: "10px" }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status.error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: "#ff4d4d", textAlign: "center", marginTop: "10px" }}
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </div>

          {/* Right: Transparent Earth Globe */}
          <div
            style={{
              flex: "1",
              minWidth: "400px",
              height: "650px",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Styles (unchanged)
const inputStyle = {
  padding: "24px 32px",
  background: "rgba(0, 0, 0, 0.6)",
  border: "2px solid rgba(0, 255, 255, 0.7)",
  borderRadius: "24px",
  color: "white",
  fontSize: "18px",
  outline: "none",
  transition: "all 0.4s",
};

const handleFocus = (e) => {
  e.target.style.borderColor = "#00ffff";
  e.target.style.boxShadow = "0 0 25px rgba(0, 255, 255, 0.6)";
};

const handleBlur = (e) => {
  e.target.style.borderColor = "rgba(0, 255, 255, 0.7)";
  e.target.style.boxShadow = "none";
};

const buttonStyle = {
  padding: "24px",
  background: "linear-gradient(to right, #00ffff, #00ffaa, #00ffff)",
  border: "none",
  borderRadius: "50px",
  fontSize: "22px",
  fontWeight: "bold",
  color: "black",
  cursor: "pointer",
  boxShadow: "0 0 50px rgba(0, 255, 255, 0.9)",
  transition: "all 0.4s",
};

const handleButtonHover = (e) => (e.target.style.boxShadow = "0 0 70px rgba(0, 255, 255, 1)");
const handleButtonOut = (e) => (e.target.style.boxShadow = "0 0 50px rgba(0, 255, 255, 0.9)");

export default Contact;