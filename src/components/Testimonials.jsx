import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const testimonialsData = [
  {
    name: 'John Doe',
    title: 'Project Manager at XYZ Corp',
    testimonial: 'Maria is an exceptional developer! Her attention to detail and creativity brought our project to life. I highly recommend her for any web development needs.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    title: 'CEO at ABC Enterprises',
    testimonial: 'Working with Maria has been a fantastic experience. She delivered high-quality work on time and exceeded our expectations. Truly a talented developer!',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Robert Johnson',
    title: 'Lead Developer at Tech Innovators',
    testimonial: 'Maria is a highly skilled developer who consistently produces top-notch work. Her problem-solving skills and technical knowledge are impressive.',
    image: 'https://via.placeholder.com/100',
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds

    const testimonialElement = document.getElementById('testimonial');
    gsap.fromTo(
      testimonialElement,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentTestimonial]);

  return (
    <section id="testimonials" className="min-h-screen flex flex-col items-center justify-center bg-dark-blue text-light-gray p-8">
      <h1 className="text-3xl font-bold mb-6">What People Say About Me</h1>
      <div id="testimonial" className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <img
          src={testimonialsData[currentTestimonial].image}
          alt={testimonialsData[currentTestimonial].name}
          className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
        />
        <p className="text-lg italic mb-4">{testimonialsData[currentTestimonial].testimonial}</p>
        <h3 className="text-xl font-bold">{testimonialsData[currentTestimonial].name}</h3>
        <p className="text-md text-gray-400">{testimonialsData[currentTestimonial].title}</p>
      </div>
    </section>
  );
};

export default Testimonials;
