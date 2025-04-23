'use client';

import { useEffect, useRef } from 'react';

export function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Dot properties
    const dotSize = 2;
    const gap = 20;
    const dots: { x: number; y: number; color: string }[] = [];

    // Initialize dots
    const initDots = () => {
      if (!canvas || !ctx) return;
      dots.length = 0;
      const cols = Math.floor(canvas.width / gap);
      const rows = Math.floor(canvas.height / gap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * gap,
            y: j * gap,
            color: 'rgba(255, 255, 255, 0.2)'
          });
        }
      }
    };

    initDots();
    window.addEventListener('resize', initDots);

    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    // Animation
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const distance = Math.sqrt(
          Math.pow(mouseX - dot.x, 2) + Math.pow(mouseY - dot.y, 2)
        );
        
        // Change color based on mouse proximity
        if (distance < 100) {
          const hue = (Math.atan2(dot.y - mouseY, dot.x - mouseX) * 180) / Math.PI + 180;
          const saturation = 70;
          const lightness = 60;
          dot.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
        } else {
          dot.color = 'rgba(255, 255, 255, 0.2)';
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', initDots);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'rgb(17, 17, 17)' }}
    />
  );
} 