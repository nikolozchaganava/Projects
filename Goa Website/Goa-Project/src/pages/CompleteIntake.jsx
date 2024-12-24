import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CompleteIntake() {
  return (
    <div>
      <Header />
      <section className="max-w-3xl mx-auto p-6 bg-white py-36">
        <h3 className="text-sm text-green-600 uppercase font-semibold tracking-wider mb-2">Intake form</h3>
        <h2 className="text-3xl font-semibold mb-9 tracking-wide">
          Help us serve you better
        </h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block font-semibold">
              Name <span className="text-pink-600 font-semibold">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 outline outline-1 rounded-sm"
              placeholder="Jane Smith"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-black font-semibold">
              Email address{" "}
              <span className="text-pink-600 font-semibold">*</span>
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-sm outline outline-1"
              placeholder="email@website.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#595959]">
              What is your current level of experience in web development?
            </label>
            <select className="w-full px-3 py-2 outline outline-1 rounded-sm">
              <option disabled>Select</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-[#595959]">
              Which programming languages are you familiar with?
            </label>
            <div className="flex flex-wrap">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "Ruby",
                "PHP",
                "Java",
                "C",
                "C#",
                "C++",
                "Holy C",
                "Go",
                "Rust",
                "Kotlin",
                "Swift",
              ].map((lang) => (
                <div key={lang} className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">{lang}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-[#595959]">
              What are your learning goals for this course?
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-sm outline outline-1"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-[#595959]">
              How did you hear about GOA (Goal-Oriented Academy)?
            </label>
            <select className="w-full px-3 py-2 border rounded-sm outline outline-1">
              <option disabled>Select</option>
              <option>Social Media</option>
              <option>Friends</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-[#595959]">
              What is your preferred mode of learning?
            </label>
            <select className="w-full px-3 py-2 border rounded-sm outline outline-1">
              <option>Select</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Database</option>
              <option>Fullstack</option>
              <option>Software Engineer</option>
              <option>Game Development</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-[#595959]">
              Are you interested in working on group projects?
            </label>
            <select className="w-full px-3 py-2 border rounded-sm outline outline-1">
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-[#595959]">
              Additional questions or comments
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-sm outline outline-1"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="uppercase tracking-wide font-semibold px-6 py-3 bg-green-600 text-white rounded-sm w-full hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}
