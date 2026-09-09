import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PortfolioCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const totalItems = items.length;

  const nextSlide = useCallback(() => {
    if (totalItems <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    if (totalItems <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Handlers for Mobile Swipe
  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  if (totalItems === 0) return null;

  return (
    <div
      className="relative w-full select-none"
      style={{
        "--current-index": currentIndex,
      }}
    >
      {/* Top Controls: Left & Right Arrows */}
      <div className="mb-5 sm:mb-6 flex items-center justify-between px-2 sm:px-4">
        {/* Slide Counter */}
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="font-bold text-accent-600">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-surface-300">/</span>
          <span className="text-primary-400">
            {String(totalItems).padStart(2, "0")}
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Proyek sebelumnya"
            className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-surface-200 bg-white text-primary-900 shadow-sm transition-all duration-200 hover:border-accent-400 hover:bg-accent-500 hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Proyek berikutnya"
            className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-surface-200 bg-white text-primary-900 shadow-sm transition-all duration-200 hover:border-accent-400 hover:bg-accent-500 hover:text-white hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track Viewport */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="cursor-grab active:cursor-grabbing overflow-visible"
      >
        {/* Sliding Track - Well proportioned card widths and peek spacing */}
        <div
          className="flex transition-transform duration-500 ease-out [--card-width:88%] sm:[--card-width:72%] lg:[--card-width:56%] xl:[--card-width:50%] [--card-gap:16px] sm:[--card-gap:24px] lg:[--card-gap:32px]"
          style={{
            gap: "var(--card-gap)",
            transform:
              "translateX(calc(-1 * var(--current-index) * (var(--card-width) + var(--card-gap))))",
          }}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={item.id}
                onClick={() => goToSlide(index)}
                style={{ width: "var(--card-width)" }}
                className={`shrink-0 transition-all duration-500 rounded-2xl sm:rounded-3xl bg-white p-3.5 sm:p-5 border ${
                  isActive
                    ? "border-surface-200 shadow-lg opacity-100 scale-100 ring-1 ring-black/5"
                    : "border-surface-200/60 shadow-sm opacity-45 sm:opacity-60 scale-[0.98] hover:opacity-80"
                }`}
              >
                {/* Photo Container - Compact height & crisp framing */}
                <div className="relative h-[220px] sm:h-[290px] md:h-[330px] lg:h-[360px] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                    draggable="false"
                  />
                </div>

                {/* Project Information Below Photo */}
                <div className="mt-4 sm:mt-5 px-1 sm:px-2 text-left">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-primary-950">
                    {item.title}
                  </h3>

                  {/* Location · Year */}
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-accent-600">
                    {item.location} · {item.year}
                  </p>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm md:text-base leading-relaxed text-primary-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicator (● ○ ○ ○ ○) */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
        {items.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Lihat proyek ${idx + 1}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                isActive
                  ? "w-7 h-2.5 bg-accent-500 shadow-sm shadow-accent-500/30"
                  : "w-2.5 h-2.5 bg-surface-300 hover:bg-surface-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
