import { useRef, useState } from "react";
import ServiceCard from "@/components/service-card";
import { services } from "@/constant/service";

const ServiceWeOffer = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const totalCards = services.length;

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.scrollWidth / services.length;
      const scrollPosition = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : totalCards - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < totalCards - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="service"
      className="text-center w-full flex flex-col mt-10 gap-8 max-w-7xl mx-auto px-4"
    >
      <h1 className="text-3xl font-bold text-gray-900">Services we offer</h1>
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 hover:border-(--primary) transition-all duration-300 hidden md:block"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6 px-4 md:px-12">
            {services.map((service, index) => {
              // Since we navigate one card at a time, the active card is simply the currentIndex
              const isActive = index === currentIndex;

              return (
                <div
                  key={service.id}
                  className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <ServiceCard service={service} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 hover:border-(--primary) transition-all duration-300 hidden md:block"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2 w-full justify-center py-4 mt-4">
          {Array.from({ length: totalCards }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-linear-to-b from-(--secondary-light) to-(--primary-light) w-8"
                  : "border border-(--primary) hover:bg-gray-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceWeOffer;
