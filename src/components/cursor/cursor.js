import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isDesktop }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      // Hide the default cursor and show custom cursor elements
      document.body.style.cursor = "none";
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      const moveCursor = (e) => {
        // Small circle moves with mouse (this IS your cursor now)
        gsap.set(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          xPercent: -50, // Center the circle on cursor
          yPercent: -50, // Center the circle on cursor
        });

        // Big circle follows with delay
        gsap.to(follower.current, {
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const hover = () => {
        // Animate follower to match cursor position and grow
        gsap.to(follower.current, {
          x: cursor.current._gsap.x - 20 + 8, // center follower on cursor
          y: cursor.current._gsap.y - 20 + 8,
          scale: 3,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor.current, {
          scale: 0.5,
          duration: 0.3,
        });
      };

      const unHover = () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      document.addEventListener("mousemove", moveCursor);

      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });

      return () => {
        // Restore default cursor on cleanup
        document.body.style.cursor = "auto";
        document.removeEventListener("mousemove", moveCursor);
        document.querySelectorAll(".link").forEach((el) => {
          el.removeEventListener("mouseenter", hover);
          el.removeEventListener("mouseleave", unHover);
        });
      };
    }
  }, [isDesktop]);

  return (
    <>
      <div ref={cursor} className="custom-cursor hidden" />
      <div ref={follower} className="custom-follower hidden" />
    </>
  );
};

export default Cursor;