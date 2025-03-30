import Nav from '@/components/Nav';
import Scene from '@/world/Scene';
import { useCallback, useEffect, useRef, useState } from 'react';



let scene = new Scene();


export function App() {
    const refCanvas = useRef<HTMLCanvasElement>(null);

    const onResize = useCallback(() => {
        scene.resize(
            refCanvas.current?.clientWidth ?? 0,
            refCanvas.current?.clientHeight ?? 0
        );
    }, []);


    useEffect(() => {
        const state = refCanvas.current;
        if (!state) return;

        if (scene.destroyed) scene = new Scene();
        scene.init({
            canvas: state,
            width: state.clientWidth,
            height: state.clientHeight,
        });
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            scene.destroy();
        };
    }, []);


    return (
        <div className="bg-primary h-screen w-screen flex flex-row">
            <div className="shrink-0 h-screen">
                <Nav subtitle={["Hello!", "Hello! I'm..."]} />
            </div>
            <div className="flex-1 w-full bg-red-500">
                <canvas className="w-full h-screen" ref={refCanvas} id="scene"></canvas>
            </div>
        </div>
    );
}

