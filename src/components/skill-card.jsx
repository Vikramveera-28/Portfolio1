"use client";

import { useEffect, useRef, useState } from 'react';

export default function SkillCard({ icon, name, index, direction = 'left' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const directionClasses = {
    left: 'translate-x-10',
    right: '-translate-x-10',
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-4 transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : `${directionClasses[direction]} opacity-0`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {icon}
      <p className="font-semibold text-lg">{name}</p>
    </div>
  );
}
