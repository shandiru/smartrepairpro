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
    <div
      className="fixed bottom-0 left-0 w-full 
      bg-white text-black dark:bg-black dark:text-gray-200
      p-6 text-center shadow-lg border-t border-gray-200 dark:border-gray-700
      z-50 transition-colors"
    >
      <p className="mb-4 text-gray-700 dark:text-gray-400 leading-relaxed">
        We use cookies to improve your experience.{" "}
        <a
          href="/privacy-policy"
          className="underline text-red-600 font-semibold dark:text-red-400 hover:opacity-80"
        >
          Learn more
        </a>
      </p>

      <button
        onClick={handleAccept}
        className="px-8 py-3 bg-red-600 text-white rounded-md font-semibold 
        hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 
        transition"
      >
        Accept Cookies
      </button>
    </div>
  );
}
