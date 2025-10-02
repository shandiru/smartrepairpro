import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HOURS = [
  { day: "Monday", time: "9:00 am – 5:00 pm" },
  { day: "Tuesday", time: "9:00 am – 6:00 pm" },
  { day: "Wednesday", time: "9:00 am – 6:00 pm" },
  { day: "Thursday", time: "9:00 am – 6:00 pm" },
  { day: "Friday", time: "9:00 am – 6:00 pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

// Very reasonable client-side patterns (not “perfect”, but practical)
const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// UK-friendly phone pattern; also accepts +44, spaces, dashes, parentheses
const PHONE_REGEX =
  /^(?:\+?44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^[0-9+\-\s()]{7,}$/;

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // Track touched + errors for better UX
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  // Validate a single field value
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value?.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name looks too short.";
        return "";
      case "email":
        if (!value?.trim()) return "Please enter your email.";
        if (!EMAIL_REGEX.test(value.trim())) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value) return ""; // optional
        if (!PHONE_REGEX.test(value.trim()))
          return "Enter a valid phone (e.g. 07912 345 678 or +44 7912 345 678).";
        return "";
      case "message":
        if (!value?.trim()) return "Please tell us a bit about the issue.";
        if (value.trim().length < 10) return "Message should be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const validateForm = (form) => {
    const fd = new FormData(form);
    const fields = ["name", "email", "phone", "message"];
    const newErrors = {};
    fields.forEach((f) => {
      const msg = validateField(f, fd.get(f));
      if (msg) newErrors[f] = msg;
    });
    // Honeypot check
    if (fd.get("website")) {
      newErrors.website = "Bot detected.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const msg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!validateForm(formRef.current)) {
      setStatus({
        state: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    // block basic bots via honeypot
    const hp = new FormData(formRef.current).get("website");
    if (hp) {
      setStatus({ state: "error", message: "Submission blocked." });
      return;
    }

    setStatus({ state: "sending", message: "Sending your message..." });

    try {
      await emailjs.sendForm(
        "service_404lxe7",   // Your EmailJS service ID
        "template_htvvsej",  // Your EmailJS template ID
        formRef.current,
        "tmUgtXKf_TwGrV1iE"  // Your EmailJS public key
      );

      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent. We'll get back to you shortly.",
      });
      formRef.current.reset();
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        state: "error",
        message:
          "Sorry, something went wrong while sending. Please try again, or call us directly.",
      });
    }
  };

  const isSending = status.state === "sending";

  // Initialize AOS when component is mounted
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-neutral-900 py-12 px-4 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-center text-2xl md:text-3xl font-bold"
          style={{ color: "#D10806" }}
        >
          Ready to Restore Your Car’s Look?
        </h2>
        <p data-aos="fade-up" className="text-center text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
         Contact us today to book a dent or scratch repair, ask questions, or request a free quote. Our expert team is here to bring your vehicle back to flawless condition.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Information */}
          <div
            data-aos="fade-right"
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact Information
            </h3>
            <div className="mt-4 space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <p className="font-medium dark:text-gray-200">Address</p>
                <address className="not-italic">
                  Leicester, Wigston LE18 3WJ
                </address>
              </div>

              <div>
                <p className="font-medium dark:text-gray-200">Phone</p>
                <a
                  href="tel:+447989668752"
                  style={{ color: "#D10806" }}
                  className="hover:underline"
                >
                  07989 668752
                </a>
                <div className="mt-1">
                  <a
                    href="https://wa.me/447989668752"
                    style={{ color: "#D10806" }}
                    className="hover:underline"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <p className="font-medium dark:text-gray-200">Opening Hours</p>
                <ul className="mt-2 divide-y divide-gray-200 dark:divide-neutral-700 border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                  {HOURS.map(({ day, time }) => (
                    <li
                      key={day}
                      className="grid grid-cols-2 gap-4 px-4 py-2 text-sm md:text-base"
                    >
                      <span className="text-gray-700 dark:text-gray-200">
                        {day}
                      </span>
                      <span className="text-right font-medium text-gray-900 dark:text-gray-100">
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            data-aos="fade-left"
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300"
          >
            {/* Inline status message */}
            <div
              className="mb-4"
              aria-live="polite"
              aria-atomic="true"
              role="status"
            >
              {status.state === "success" && (
                <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                  {status.message}
                </div>
              )}
              {status.state === "error" && (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                  {status.message}
                </div>
              )}
              {status.state === "sending" && (
                <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800">
                  {status.message}
                </div>
              )}
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4" noValidate>
              {/* Honeypot (should stay hidden) */}
              <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  required
                  onBlur={handleBlur}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-700
                    ${errors.name && touched.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.name && touched.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com*"
                  required
                  inputMode="email"
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  pattern={EMAIL_REGEX.source}
                  title="Enter a valid email like name@example.com"
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-700
                    ${errors.email && touched.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.email && touched.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="07912 345 678 or +44 7912 345 678*"
                  inputMode="tel"
                  onBlur={handleBlur}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  pattern={PHONE_REGEX.source}
                  title="UK phone example: 07912 345 678 or +44 7912 345 678"
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-700
                    ${errors.phone && touched.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.phone && touched.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="car_registration"
                  placeholder="Car Registration*"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
                />
                <input
                  type="text"
                  name="make_model"
                  placeholder="Make and Model*"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location*"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your car issue*"
                  rows="4"
                  required
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full border bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-700
                    ${errors.message && touched.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.message && touched.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition
                  ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                style={{ backgroundColor: "#D10806" }}
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <span className="transition-transform duration-300 group-hover:-translate-x-2">
                      Send Message
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center">
                Same-day appointments often available • No obligation consultation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}