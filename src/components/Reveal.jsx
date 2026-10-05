import useReveal from "../hooks/useReveal";

/**
 * Wraps children and fades/slides them in once scrolled into view.
 * Pass stagger to animate direct children one after another
 * (used for grids of cards).
 */
export default function Reveal({ as: Tag = "div", stagger = false, className = "", style = {}, children }) {
  const [ref, inView] = useReveal();
  const base = stagger ? "reveal-stagger reveal" : "reveal";
  return (
    <Tag ref={ref} className={`${base} ${inView ? "in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
