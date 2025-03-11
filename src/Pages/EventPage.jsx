import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import EventForm from "../Components/Eventform";
import EventsData from "../Components/EventsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventPage = () => {
  const [events, setEvents] = useState(EventsData);
  const [filter, setFilter] = useState("All");

  const headingRef = useRef(null);
  const filterRef = useRef(null);
  const eventCardsRef = useRef([]);
  const formRef = useRef(null);

  const handleFilterChange = (e) => setFilter(e.target.value);

  const addEvent = (newEvent) => {
    const eventToAdd = { ...newEvent, id: events.length + 1 };
    setEvents([...events, eventToAdd]);
  };

  const filteredEvents = filter === "All" ? events : events.filter((event) => event.category === filter);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      filterRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: "back.out(1.5)" }
    );

    gsap.fromTo(
      eventCardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: eventCardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#6366F1] to-[#34D399] p-6">
      <Navbar />
      
      {/* Heading */}
      <h1 ref={headingRef} className="text-4xl font-bold text-center text-white mb-8">
        Upcoming Events
      </h1>

      {/* Filter Section */}
      <div className="flex justify-center mb-6">
        <select
          ref={filterRef}
          className="px-5 py-3 border rounded-lg shadow-lg bg-white text-gray-700 font-semibold transition-all hover:shadow-xl"
          onChange={handleFilterChange}
          value={filter}
        >
          <option value="All">All Categories</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
          <option value="Music">Music</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Arts">Arts</option>
          <option value="Education">Education</option>
        </select>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (eventCardsRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
              <p className="text-gray-500">
                {event.date} - {event.location}
              </p>
              <p className="mt-2 text-gray-700">{event.description}</p>
              <span className="mt-2 inline-block px-4 py-2 text-sm text-white bg-[#4F46E5] rounded-full font-medium">
                {event.category}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-200 text-lg">No events found.</p>
        )}
      </div>

      {/* Add New Event Form */}
      <div ref={formRef} className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Add New Event</h2>
        </div>
        <EventForm onAddEvent={addEvent} />
      </div>
    </div>
  );
};

export default EventPage;
