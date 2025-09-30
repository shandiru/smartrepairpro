import { useState, useEffect } from "react";

export default function GDPRBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem("gdprConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setVisible(false);
  };

  if (!visible) return null; // Hide if already accepted

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white text-black p-6 text-center shadow-lg border-t-4 border-red-600 z-50">
      <p className="mb-3 text-gray-700">
        We use cookies to improve your experience.{" "}
        <a href="/privacy-policy" className="underline text-red-600 font-semibold">
          Learn more
        </a>
      </p>
      <button
        onClick={handleAccept}
        className="mt-2 px-6 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition"
      >
        Accept Cookies
      </button>
    </div>
  );
}
