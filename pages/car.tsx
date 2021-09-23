import { useEffect, useRef, useState } from 'react';
import { isAfter, parseISO, intervalToDuration } from 'date-fns';
import Confetti from 'react-confetti';

const targetTime = parseISO('2021-09-24T11:00:00-05:00');

export default function Car() {
  const [showConfetti, setShowConfetti] = useState(false);
  const dateNode = useRef<HTMLHeadingElement>();

  useEffect(() => {
    setInterval(() => {
      const duration = intervalToDuration({
        start: new Date(),
        end: targetTime,
      });

      dateNode.current.innerHTML = [
        duration.hours.toString().padStart(2, '0'),
        duration.minutes.toString().padStart(2, '0'),
        duration.seconds.toString().padStart(2, '0'),
      ].join(':');
    }, 1000);
  }, []);

  const currentTime = new Date();

  if (isAfter(currentTime, targetTime)) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold text-center">
          Ya tenemos carrito!!! 🎉
        </h1>
      </div>
    );
  }

  const duration = intervalToDuration({
    start: currentTime,
    end: targetTime,
  });

  return (
    <>
      {showConfetti && <Confetti gravity={0.2} />}
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-opacity-75 text-center pb-4">
            🙀 El carrito llega en
          </h2>
          <h1
            ref={dateNode}
            className="text-white text-6xl font-bold text-center"
          >
            {[
              duration.hours.toString().padStart(2, '0'),
              duration.minutes.toString().padStart(2, '0'),
              duration.seconds.toString().padStart(2, '0'),
            ].join(':')}
          </h1>
          <div className="pt-8">
            <button
              className="bg-gray-100 rounded-md py-4 px-6 text-gray-800 text-2xl font-bold border-2 border-gray-200"
              onClick={() => setShowConfetti(true)}
            >
              Yay! 🥳
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
