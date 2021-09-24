import { useEffect, useRef, useState } from 'react';
import { isAfter, parseISO, intervalToDuration } from 'date-fns';
import Confetti from 'react-confetti';
import Image from 'next/image';

// @ts-ignore
import car from '../public/car_sm.jpg';

const targetTime = parseISO('2021-09-24T11:00:00-05:00');

export default function Car() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiKey, setConfettiKey] = useState<number>(null);
  const dateNode = useRef<HTMLHeadingElement>();
  const currentInterval = useRef<number>(null);

  const currentTime = new Date();
  const carIsMine = isAfter(currentTime, targetTime);

  useEffect(() => {
    if (carIsMine) {
      if (currentInterval.current) {
        window.clearInterval(currentInterval.current);
      }

      return;
    }

    currentInterval.current = window.setInterval(() => {
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
  }, [carIsMine]);

  const duration = intervalToDuration({
    start: currentTime,
    end: targetTime,
  });

  return (
    <>
      <Confetti
        key={confettiKey}
        gravity={0.5}
        run={showConfetti}
        recycle={false}
      />
      <div className="w-screen h-screen flex items-center justify-center p-4">
        <div className="text-center">
          {carIsMine ? (
            <>
              <h1 className="text-white text-6xl font-bold text-center">
                Ya tenemos carrito!!! 🎉
              </h1>
              <div className="pt-8">
                <div>
                  <div className="max-w-xl mx-auto rounded-lg overflow-hidden border-4 border-white bg-white">
                    <Image src={car} alt="A georgeous nissan sentra" />
                    <div className="p-8">
                      <h4 className="font-bold">24/09/2021</h4>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}

          <div className="pt-8">
            <button
              className="bg-gray-100 rounded-md py-4 px-6 text-gray-800 text-2xl font-bold border-2 border-gray-200"
              onClick={() => {
                setConfettiKey(Date.now());
                setShowConfetti(true);
              }}
            >
              Yay! 🥳
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
