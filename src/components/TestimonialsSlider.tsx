import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Amina Rahman",
    role: "3rd Year Student",
    message:
      "SQAT helped me land my first QA internship! The hands-on training is amazing.",
    imageUrl: "https://i.ibb.co.com/zTRH6c1p/pexels-jeff-denlea-721292-3021563.jpg",
  },
  {
    name: "Jamal Hossain",
    role: "4th Year Student",
    message:
      "I learned real-world automation tools and bug hunting that I use daily in my projects.",
    imageUrl: "https://i.ibb.co.com/9H8z7Nwj/pexels-italo-melo-881954-2379005.jpg",
  },
  {
    name: "Sadia Islam",
    role: "2nd Year Student",
    message:
      "The mentorship and collaborative projects in SQAT made me confident to take on real QA tasks.",
    imageUrl: "https://i.ibb.co.com/9k3XZSg7/pexels-jeff-denlea-721292-3021538.jpg",
  },
  {
    name: "Tanvir Ahmed",
    role: "4th Year Student",
    message:
      "From workshops to hackathons, SQAT provides everything you need to become a professional QA Engineer.",
    imageUrl: "https://i.ibb.co.com/67PVBxR5/pexels-sarmad-mughal-94606-966067.jpg",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  // auto slider every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="bg-background mb-3">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        What Our Members Say
      </h2>

      <div className="relative flex justify-center items-center">
        {/* Card wrapper with fixed width */}
        <div className="relative w-[400px] flex justify-center min-h-[180px]">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                i === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="bg-shada rounded-2xl shadow-md p-6 w-[400px] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                    <img
                      src={review.imageUrl}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-base">
                      {review.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm leading-relaxed">
                  "{review.message}"
                </p>
              </div>
            </div>
          ))}

          {/* Prev button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-70px] top-1/2 -translate-y-1/2 bg-primary/90 text-white rounded-full p-2 shadow hover:bg-accent hover:text-white transition z-20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-70px] top-1/2 -translate-y-1/2 bg-primary/90 text-white  rounded-full p-2 shadow hover:bg-accent hover:text-white transition z-20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}