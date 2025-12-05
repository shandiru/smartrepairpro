"use client";
import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HOURS = [
  { day: "Monday", time: "9:00 am – 5:00 pm" },
  { day: "Tuesday", time: "9:00 am – 6:00 pm" },
  { day: "Wednesday", time: "9:00 am – 6:00 pm" },
  { day: "Thursday", time: "9:00 am – 6:00 pm" },
  { day: "Friday", time: "9:00 am – 6:00 pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_REGEX =
  /^(?:\+?44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^[0-9+\-\s()]{7,}$/;

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value?.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name looks too short.";
        return "";
      case "email":
        if (!value?.trim()) return "Please enter your email.";
        if (!EMAIL_REGEX.test(value.trim()))
          return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value?.trim()) return "Please enter your phone number.";
        if (!PHONE_REGEX.test(value.trim()))
          return "Enter a valid UK phone number.";
        return "";
      case "message":
        if (!value?.trim()) return "Please enter a short message.";
        if (value.trim().length < 10)
          return "Message should be at least 10 characters.";
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const msg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!validateForm(formRef.current)) {
      setStatus({
        state: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    const fd = new FormData(formRef.current);
    const name = fd.get("name");
    const email = fd.get("email");
    const phone = fd.get("phone");
    const carReg = fd.get("car_registration");
    const makeModel = fd.get("make_model");
    const location = fd.get("location");
    const message = fd.get("message");

    // Clean, professional WhatsApp message
    const whatsappMessage = `
New Repair Enquiry
----------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Car Registration: ${carReg || "N/A"}
Make & Model: ${makeModel || "N/A"}
Location: ${location || "N/A"}
Message: ${message}
----------------------------
Sent from the website contact form.
    `;

    const WHATSAPP_NUMBER = "447989668752"; // without +
    const encoded = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    window.open(url, "_blank");

    setStatus({
      state: "success",
      message:
        "Redirecting to WhatsApp… You can send your message directly there.",
    });
    formRef.current.reset();
    setTouched({});
    setErrors({});
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-neutral-900 py-12 px-4 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-center text-2xl md:text-3xl font-bold"
          style={{ color: "#D10806" }}
        >
          Ready to Restore Your Car’s Look?
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto"
        >
          Contact us today to book a dent or scratch repair, ask questions, or
          request a free quote. Our expert team is here to bring your vehicle
          back to flawless condition.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div
            data-aos="fade-right"
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact Information
            </h3>
            <div className="mt-4 space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <p className="font-medium dark:text-gray-200">Address</p>
                <address className="not-italic">
                  30 Laxton Close, Leicester Wigston LE18 3WJ
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

          {/* Right Side - Form */}
          <div
            data-aos="fade-left"
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 md:p-8"
          >
            {status.message && (
              <div
                className={`mb-4 px-4 py-3 rounded-md text-sm ${
                  status.state === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : status.state === "error"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                required
                onBlur={handleBlur}
                className={`w-full border rounded-lg p-3 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.name && touched.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="your.email@example.com*"
                required
                onBlur={handleBlur}
                className={`w-full border rounded-lg p-3 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="07912 345 678 or +44 7912 345 678*"
                required
                onBlur={handleBlur}
                className={`w-full border rounded-lg p-3 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 ${
                  errors.phone && touched.phone
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.phone && touched.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="car_registration"
                  placeholder="Car Registration*"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3"
                />
                <input
                  type="text"
                  name="make_model"
                  placeholder="Make and Model*"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location*"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your car issue*"
                rows="4"
                required
                onBlur={handleBlur}
                className={`w-full border rounded-lg p-3 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 ${
                  errors.message && touched.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              ></textarea>
              {errors.message && touched.message && (
                <p className="text-sm text-red-600">{errors.message}</p>
              )}

              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-full bg-[#D10806] hover:bg-red-700 transition"
              >
                Send via WhatsApp
              </button>

              <p className="text-sm text-gray-600 text-center">
                Same-day appointments often available • No obligation consultation
              </p>
              <p class="text-xs text-center dark:text-gray-300">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
