import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-[#F0F9FF] text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="SmartBuddy Logo" className="h-8" />
          <h1 className="text-xl font-bold">SmartBuddy</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-8 py-12">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Smarter Learning for <br /> Years 2–6, Powered by AI
          </h2>
          <p className="text-lg text-gray-700">
            Personalised help in English and Maths — built just for your child.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded font-semibold">
              Try it Free
            </button>
            <button className="bg-blue-100 text-blue-600 px-5 py-2 rounded font-semibold">
              Take a Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 text-center">
          <img src="/mascot.png" alt="AI Mascot" className="max-w-sm w-full" />
        </div>
      </section>

      {/* More sections to be added next... */}
    </div>
  );
}

export default App;