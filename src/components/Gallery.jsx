import React, { useState } from 'react';
import PICTURES from '../data/pictures';
import { useDynamicTransition } from '../hooks';

const SECONDS = 1000;
const MIN_DELAY = 1;
const MIN_INCREMENT = 1;

function Gallery() {
    const [delay, setDelay] = useState(3 * SECONDS);
    const [increment, setIncrement] = useState(MIN_INCREMENT);

    const index = useDynamicTransition({ delay, increment, length: PICTURES.length });

    const updateDelay = (event) => {
        const value = event.target.value;
        const delay = value > MIN_DELAY ? value : MIN_DELAY;
        setDelay(delay * SECONDS);
    };

    const updateIncrement = (event) => {
        const value = event.target.value;
        const increment = value > MIN_INCREMENT ? value : MIN_INCREMENT;
        setIncrement(increment);
    };

    return (
        <div className="Gallery">
            <img
                src={PICTURES[index].image}
                alt="gallery"
            />
            <div className="multiform">
                <div>
                    Gallery transition delay (seconds):
                    <input type="number" value={delay / SECONDS} onChange={updateDelay} />
                </div>
                <div>
                    Gallery transition increment:
                    <input type="number" value={increment} onChange={updateIncrement} />
                </div>

            </div>
        </div>
    );
}

export default Gallery;
