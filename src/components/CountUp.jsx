import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

export default function CountUp({ target, decimals = 0, suffix = "", duration = 1400 }) {
  const [ref, inView] = useReveal(0.4);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-display text-3xl font-medium text-white">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
