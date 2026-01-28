import React, { useEffect, useRef } from 'react';
import GameEngine from '../classes/GameEngine';

import styles from "./home/Home.module.css";

const Pacman: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gameEngineRef = useRef<GameEngine | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const gameEngine = new GameEngine(canvas, ctx);
                gameEngineRef.current = gameEngine;

                // Start the game
                gameEngine.start().catch(console.error);

                // Add event listener manually if GameEngine doesn't add it in constructor (it adds in main.ts currently)
                // We'll move that logic here.
                window.addEventListener("keydown", gameEngine.updatePlayerDirection);
            }
        }

        return () => {
            if (gameEngineRef.current) {
                gameEngineRef.current.stop();
            }
        };
    }, []);

    return (
        <div className={styles.pacmanContainer}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Pacman;
