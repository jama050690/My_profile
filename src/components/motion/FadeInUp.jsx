import { useEffect, useRef, useState } from "react";

export default function FadeInUp({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const frameRef = useRef();

  useEffect(() => {
    frameRef.current = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div
      className={`fade-in-up ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
