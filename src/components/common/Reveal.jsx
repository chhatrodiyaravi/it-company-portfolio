import useReveal from "../../hooks/useReveal";

function Reveal({ children, className = "" }) {
  const { elementRef, isVisible } = useReveal();

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
