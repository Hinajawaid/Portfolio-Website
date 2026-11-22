"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const INTERVAL = 3500;
const SLIDE_MS = 700; // keep in sync with .car-track transition in globals.css

// Auto-advancing carousel that always moves right. A copy of the first slide sits
// after the last one; once it is reached the track silently snaps back to slide 0.
export default function ProjectShots({ images, title }) {
  const n = images.length;
  const [pos, setPos] = useState(0); // 0..n (n is the cloned first slide)
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [open, setOpen] = useState(null); // lightbox index or null
  const pending = useRef(null);

  const current = pos % n;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Autoplay: restarts whenever the slide changes, so manual clicks reset the timer.
  useEffect(() => {
    if (n < 2 || paused || reduceMotion || open !== null) return;
    const t = setTimeout(() => {
      setAnimate(true);
      setPos((p) => Math.min(p + 1, n));
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [pos, n, paused, reduceMotion, open]);

  // Reached the clone of slide 0: after the slide finishes, jump back to the real slide 0 with no animation.
  useEffect(() => {
    if (pos !== n) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setPos(0);
    }, reduceMotion ? 0 : SLIDE_MS + 30);
    return () => clearTimeout(t);
  }, [pos, n, reduceMotion]);

  // After any no-animation jump, turn the animation back on (and run a queued move).
  useEffect(() => {
    if (animate) return;
    let r2;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        setAnimate(true);
        if (pending.current !== null) {
          setPos(pending.current);
          pending.current = null;
        }
      });
    });
    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, [animate]);

  const next = () => {
    setAnimate(true);
    setPos((p) => Math.min(p + 1, n));
  };
  const prev = () => {
    if (pos === 0) {
      // Wrap backwards: jump (unseen) to the clone of slide 0, then slide to the last slide.
      pending.current = n - 1;
      setAnimate(false);
      setPos(n);
    } else {
      setAnimate(true);
      setPos(pos - 1);
    }
  };
  const goTo = (i) => {
    setAnimate(true);
    setPos(i);
  };

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, move]);

  const slides = n > 1 ? [...images, images[0]] : images;

  return (
    <>
      <div
        className="carousel"
        role="group"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="car-track"
          style={{
            transform: `translateX(-${pos * 100}%)`,
            transition: animate && !reduceMotion ? undefined : "none",
          }}
        >
          {slides.map((img, i) => {
            const isClone = i === n && n > 1;
            const active = i === pos;
            return (
              <button
                key={isClone ? `${img.src}-clone` : img.src}
                className="car-slide"
                onClick={() => setOpen(i % n)}
                aria-label={`Open screenshot full size: ${img.caption}`}
                aria-hidden={!active}
                tabIndex={active ? 0 : -1}
              >
                <img src={img.src} alt={isClone ? "" : `${title}: ${img.caption}`} />
              </button>
            );
          })}
        </div>

        {n > 1 && (
          <>
            <button className="car-arrow prev" onClick={prev} aria-label="Previous screenshot">‹</button>
            <button className="car-arrow next" onClick={next} aria-label="Next screenshot">›</button>
          </>
        )}

        <div className="car-footer">
          <span className="car-caption" aria-live="off">{images[current].caption}</span>
          {n > 1 && (
            <div className="car-dots">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  className={i === current ? "on" : ""}
                  onClick={() => goTo(i)}
                  aria-label={`Show screenshot ${i + 1}: ${img.caption}`}
                  aria-current={i === current}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {open !== null && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} screenshots`} onClick={close}>
          <button className="lb-close icon-btn" onClick={close} aria-label="Close">✕</button>
          {n > 1 && (
            <button className="lb-nav prev icon-btn" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous screenshot">‹</button>
          )}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={images[open].src} alt={`${title}: ${images[open].caption}`} />
            <figcaption>{images[open].caption} · {open + 1}/{n}</figcaption>
          </figure>
          {n > 1 && (
            <button className="lb-nav next icon-btn" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next screenshot">›</button>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
