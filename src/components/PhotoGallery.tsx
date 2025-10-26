import { useRef, useEffect, useCallback } from "react";
import coaching1 from '../assets/photos/coaching1.png';
import coaching2 from '../assets/photos/coaching2.png';
import coaching3 from '../assets/photos/coaching3.png';
import diwen1 from '../assets/photos/diwen1.png';
import doubles1 from '../assets/photos/doubles1.png';
import medals1 from '../assets/photos/medals1.png';
import courts1 from '../assets/courts1.png';
import courts2 from '../assets/courts2.png';

export default function PhotoGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const photos = [coaching1, courts1, coaching2, coaching3, diwen1, courts2, doubles1, medals1];
  const loopPhotos = [...photos, ...photos, ...photos];

  const scrollByAmount = useCallback((dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.8 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const setToMiddle = () => {
      const segment = el.scrollWidth / 3;
      el.scrollLeft = segment + 1;
    };

    requestAnimationFrame(setToMiddle);

    const onResize = () => requestAnimationFrame(setToMiddle);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const total = el.scrollWidth;
        const segment = total / 3;
        const left = el.scrollLeft;
        if (left < segment * 0.05) el.scrollLeft = left + segment;
        else if (left > segment * 1.95) el.scrollLeft = left - segment;
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="gallery-wrap">
      <button className="gallery-arrow left" onClick={() => scrollByAmount("left")} aria-label="Previous photos">
        &larr;
      </button>

      <div className="gallery-scroller" ref={scrollerRef}>
        {loopPhotos.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={src}
              alt={`Gallery view ${i + 1}`}
              className="gallery-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/0A192F/FFF?text=Image+${i+1}`;
              }}
            />
          </div>
        ))}
      </div>

      <button className="gallery-arrow right" onClick={() => scrollByAmount("right")} aria-label="Next photos">
        &rarr;
      </button>
    </div>
  );
}
