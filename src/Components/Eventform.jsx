import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function EventForm({ onAddEvent }) {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Charity");

  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ title: eventName, description, location, date, category });
    setEventName("");
    setDescription("");
    setLocation("");
    setDate("");
  };

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      inputRefs.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 1,
        ease: "elastic.out(1, 0.5)",
      }
    );

    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-8 bg-white rounded-lg "
    >
      <div className="mb-4">
        <label
          htmlFor="eventName"
          className="block text-gray-700 font-semibold mb-1"
        >
          Event Name
        </label>
        <input
          ref={(el) => (inputRefs.current[0] = el)}
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-1"
        >
          Description
        </label>
        <textarea
          ref={(el) => (inputRefs.current[1] = el)}
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-gray-700 font-semibold mb-1"
        >
          Location
        </label>
        <input
          ref={(el) => (inputRefs.current[2] = el)}
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-gray-700 font-semibold mb-1"
        >
          Date
        </label>
        <input
          ref={(el) => (inputRefs.current[3] = el)}
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-gray-700 font-semibold mb-1"
        >
          Category
        </label>
        <select
          ref={(el) => (inputRefs.current[4] = el)}
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          <option value="Charity">Charity</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Music">Music</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Arts">Arts</option>
          <option value="Education">Education</option>
        </select>
      </div>

      <button
        ref={buttonRef}
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-green-400 text-white py-3 rounded-md shadow-md text-lg font-semibold tracking-wide hover:shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Add Event
      </button>
    </form>
  );
}

export default EventForm;
