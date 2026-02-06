import { useEffect, useRef, useState } from 'react';
import GameEngine from '../classes/GameEngine';
import livesImage from '../assets/Lives.png';
import fruitImage from '../assets/Fruit.png';

import styles from "./home/Home.module.css";

const Pacman: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gameEngineRef = useRef<GameEngine | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const [score, setScore] = useState(0);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const gameEngine = new GameEngine(canvas, ctx);
                gameEngineRef.current = gameEngine;

                gameEngine.setScoreCallback((newScore) => {
                    setScore(newScore);
                });
                gameEngine.start().then(() => {
                    setIsLoading(false);
                }).catch(console.error);

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
            <div className={styles.screenArea}>
                {isLoading && (
                    <div className={styles.loadingOverlay}>
                        <p>LOADING</p>
                    </div>
                )}

                <div style={{ visibility: isLoading ? 'hidden' : 'visible' }} className={styles.gameContainer}>
                    <div className={styles.gameContainerSideContent}>
                        <div className={styles.oneUpContainer}>
                            1UP
                        </div>
                        <div >
                            <img src={livesImage} />
                        </div>
                    </div>
                    <div>
                        <canvas
                            ref={canvasRef}
                        />
                    </div>

                    <div className={styles.gameContainerSideContent} style={{ alignItems: 'start' }}>
                        <div className={styles.scoreContainer}>
                            {score}
                        </div>

                        <div className={styles.scoreContainer}>
                            <img src={fruitImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Pacman;
