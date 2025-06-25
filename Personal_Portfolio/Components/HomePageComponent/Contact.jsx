import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xpwrowdv", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto w-full h-full bg-black/50 p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-3 text-white">
          Contact us
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Let’s bring your ideas to life - get in touch and let’s build
          something amazing together.
        </p>

        <div className="flex  justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6 p-6 rounded-2xl shadow-md"
          >
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-sm font-bold text-white mb-4 ml-2 inline-block"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Mark Neal"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent placeholder-gray-400"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="text-sm font-bold text-white mb-4 ml-2 inline-block"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="mark.neal@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent placeholder-gray-400"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="text-sm font-bold text-white mb-4 ml-2 inline-block"
              >
                Your vision
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                placeholder="Hello Abood, I need a personal portfolio website..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full p-3 cursor-pointer bg-gray-700/50 text-white rounded-lg hover:bg-yellow-400/30 transition duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>

            {status && (
              <p className="text-center text-sm text-gray-300 mt-2">{status}</p>
            )}
          </form>

          <img
            src="/Images/message.svg"
            alt="Message icon"
            className="w-1/2 hidden md:block"
            style={{ filter: "drop-shadow(0 4px 5px rgba(80, 80, 80, 0.5))" }}
          />
        </div>
      </div>
    </section>
  );
}
