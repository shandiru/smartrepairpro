import React from "react";

export default function ContactSection() {
    return (
        <section className="bg-gray-50 dark:bg-neutral-900 py-12 px-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Ready to Get Your Car Fixed?
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                    Contact us to schedule a mobile repair service, ask questions, or
                    request a quote. Our team is ready to help.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8">
                    {/* Left Side - Contact Information */}
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow p-6 md:p-8 transition-colors duration-300">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Contact Information
                        </h3>
                        <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
                            <div>
                                <p className="font-medium dark:text-gray-200">Our Hours</p>
                                <p>Monday - Thursday : 09:00 - 17:00</p>
                                <p>Friday - Sunday : Closed</p>
                            </div>
                            <div>
                                <p className="font-medium dark:text-gray-200">Phone</p>
                                <a
                                    href="tel:+447713354794"
                                    className="text-blue-500 dark:text-blue-400 hover:underline"
                                >
                                    +44 7713 354794
                                </a>
                            </div>
                            <div>
                                <p className="font-medium dark:text-gray-200">WhatsApp</p>
                                <a
                                    href="https://wa.me/447713354794"
                                    className="text-blue-500 dark:text-blue-400 hover:underline"
                                >
                                    Message us on WhatsApp
                                </a>
                            </div>
                            <div>
                                <p className="font-medium dark:text-gray-200">Email</p>
                                <a
                                    href="mailto:K4sey@hotmail.co.uk"
                                    className="text-blue-500 dark:text-blue-400 hover:underline"
                                >
                                    K4sey@hotmail.co.uk
                                </a>
                            </div>
                            <div>
                                <p className="font-medium dark:text-gray-200">Service Area</p>
                                <p>15 Mile Radius Surrounding Leicestershire.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow p-6 md:p-8 transition-colors duration-300">
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="tel"
                                placeholder="(123) 456-7890"
                                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Car Registration"
                                    className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Make and Model"
                                    className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <textarea
                                placeholder="Tell us about your car issue"
                                rows="4"
                                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
