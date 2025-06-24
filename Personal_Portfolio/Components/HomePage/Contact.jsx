import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white bg-opacity-80">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <textarea placeholder="Message" className="border p-2 rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Send</button>
        </form>
      </div>
    </section>
  );
} 