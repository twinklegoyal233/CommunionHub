import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import gsap from "gsap";
import TestimonialSlider from "../Components/TestimonialSlider";

function HomePage() {
  const welcomeTitleRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);
  const featureSectionRef = useRef(null);
  const featureCardsRef = useRef([]);
  const testimonialSectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
  
    // Hero Section: Title & Text Animation
    tl.fromTo(
      [welcomeTitleRef.current, welcomeTextRef.current, heroTitleRef.current, heroTextRef.current],
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    )

    .fromTo(
      heroButtonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" }
    )

    .to(heroButtonRef.current, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    }, "+=0.5"); 
  
    // Feature Section Animation (Trigger only on scroll)
    gsap.fromTo(
      featureSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", 
        scrollTrigger: {
          trigger: featureSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
  
    gsap.fromTo(
      featureCardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: featureCardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  
    // Testimonials Section Animation (Trigger only on scroll)
    gsap.fromTo(
      testimonialSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialSectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  
  }, []);
  

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar />

      {/* Welcome Message */}
      <div className="container text-center p-12">
        <h1 ref={welcomeTitleRef} className="text-4xl font-bold my-4 text-[#6366F1]">
          Welcome to the Communion App!
        </h1>
        <p ref={welcomeTextRef} className="text-lg mb-6 text-[#374151]">
          Connecting people of all faiths through events and community support.
        </p>
      </div>

      {/* Hero Section */}
      <div className="container">
        <section className="bg-gradient-to-r from-[#6366F1] to-[#34D399] text-white text-center p-12 rounded-2xl shadow-lg">
          <h2 ref={heroTitleRef} className="text-3xl font-semibold mb-4">
            Connecting People Across Faiths & Interests
          </h2>
          <p ref={heroTextRef} className="text-lg mb-8">
            Discover and participate in events that align with your interests, fostering unity and collaboration.
          </p>
          <Link
            ref={heroButtonRef}
            to="/events"
            className="relative px-6 py-3 before:rounded-lg rounded-lg font-semibold text-[#34D399] bg-white overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-[#4F46E5] before:w-0 before:h-full before:transition-all before:duration-300 before:left-0 hover:text-white hover:before:w-full"
          >
            <span className="relative z-10">Explore Events</span>
          </Link>
        </section>
      </div>

      {/* Feature Section */}
      <div className="container">
        <section ref={featureSectionRef} className="p-12 mt-6 bg-black rounded-2xl shadow-lg">
          <h1 className="mb-6 md:mb-0 text-white text-32 md:text-48">
            Why Communion Rocks!
          </h1>

          <div className="md:w-1/2 ml-auto">
            <p className="text-white mb-16">
              Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                serviceIcon: "people.png",
                heading: "Unifying Communities ",
                description: "Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions. ",
              },
              {
                serviceIcon: "innovation.png",
                heading: "Innovative and Fun ",
                description: "Experience faith in a fresh way through our interactive features, engaging events, and modern approach to spiritual connection. ",
              },
              {
                serviceIcon: "unity.png",
                heading: "Promoting Unity",
                description: "We foster understanding and harmony between different faith communities through shared experiences and meaningful dialogue. ",
              },
            ].map(({ heading, description, serviceIcon }, index) => (
              <div
                key={index}
                ref={(el) => (featureCardsRef.current[index] = el)}
                className="bg-[#2e2e2e] p-8 min-h-[356px] flex-col flex relative group"
              >
                <div className="mb-6 inline-block w-10 md:w-15">
                  <img src={serviceIcon} alt="" width={48} height={40} />
                </div>

                <div className="flex-1 flex flex-col gap-6 justify-end">
                  <h3 className="text-24 text-white">{heading}</h3>
                  <p className="text-12 text-white mb-0 leading-[140%] md:max-w-[90%]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <section ref={testimonialSectionRef} className="container mt-12 text-center">
        <TestimonialSlider />
      </section>
    </div>
  );
}

export default HomePage;
