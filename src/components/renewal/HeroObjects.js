import React, { useEffect, useRef } from 'react';

export default function HeroObjects() {
    const ref = useRef(null);
    useEffect(() => {
        const layer = ref.current;
        const hero = layer.closest('section');
        const objects = [...layer.children];
        const motion = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
        const depth = [0.65, -0.9, 1.1];
        const rotation = [14, -12, 22];
        let frame = 0;
        let x = 0, y = 0, targetX = 0, targetY = 0;

        function draw() {
            frame = 0;
            x += (targetX - x) * 0.09;
            y += (targetY - y) * 0.09;
            objects.forEach((object, index) => {
                object.style.transform = `translate3d(${x * depth[index]}px, ${y * depth[index]}px, 0) rotate(${rotation[index] + x * depth[index] * 0.15}deg)`;
            });
            if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.05) frame = requestAnimationFrame(draw);
        }
        function queue() { if (!frame) frame = requestAnimationFrame(draw); }
        function move(event) {
            if (!motion.matches) return;
            const rect = hero.getBoundingClientRect();
            targetX = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 56;
            targetY = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 56;
            queue();
        }
        function reset() {
            targetX = targetY = 0;
            if (motion.matches) queue();
            else {
                cancelAnimationFrame(frame);
                frame = 0;
                x = y = 0;
                objects.forEach(object => object.style.removeProperty('transform'));
            }
        }
        hero.addEventListener('pointermove', move, { passive: true });
        hero.addEventListener('pointerleave', reset);
        motion.addEventListener('change', reset);
        return () => {
            cancelAnimationFrame(frame);
            hero.removeEventListener('pointermove', move);
            hero.removeEventListener('pointerleave', reset);
            motion.removeEventListener('change', reset);
        };
    }, []);
    return <div className="rp-home-objects" ref={ref} aria-hidden="true">
        <span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="24" height="22" rx="4" /><path d="M4 12h24M13 12v15M8 8.5h.01m3 0h.01" /></svg></span>
        <span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m10 9-7 7 7 7m12-14 7 7-7 7M19 5l-6 22" /></svg></span>
        <span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 4 13 7-13 7L3 11l13-7ZM4 17l12 7 12-7M4 23l12 7 12-7" /></svg></span>
    </div>;
}
