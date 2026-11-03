import { PanelsTopLeft, CodeXml, Layers } from 'lucide-react';
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
        <span><PanelsTopLeft /></span>
        <span><CodeXml /></span>
        <span><Layers /></span>
    </div>;
}
