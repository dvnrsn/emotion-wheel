import { Link } from '@remix-run/react';
import { useState } from 'react';

import { emotions } from '~/data/emotions';
import { Emotion, SecondaryEmotion } from '~/types';

export default function Wheel() {
  const [primaryEmotion, setPrimaryEmotion] = useState<Emotion | null>(null);
  const [secondaryEmotion, setSecondaryEmotion] =
    useState<SecondaryEmotion | null>(null);

  return (
    <div className="h-screen p-8">
      {!primaryEmotion ? (
        <div>
          <div className="mb-4">
            <Link
              to="/"
              className="text-blue-500 flex items-center h-11 lg:h-auto"
            >
              <span className="text-2xl mr-2">←</span>Home
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {emotions.map((emotion) => (
              <button
                key={emotion.name}
                onClick={() => setPrimaryEmotion(emotion)}
                style={{ backgroundColor: emotion.color }}
                className="p-6 h-24 lg:h-48 rounded-lg text-xl lg:text-3xl capitalize shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <span className="text-3xl lg:text-6xl mr-2">
                  {emotion.emoji}
                </span>
                {emotion.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <button
              onClick={() => {
                if (secondaryEmotion) {
                  setSecondaryEmotion(null);
                } else {
                  setPrimaryEmotion(null);
                }
              }}
              className="text-blue-500 flex items-center h-11 lg:h-auto"
            >
              <span className="text-2xl mr-2">←</span>Back to{' '}
              {secondaryEmotion ? 'secondary emotions' : 'primary emotions'}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {!secondaryEmotion
              ? primaryEmotion.nested?.map((secondary, index) => (
                  <button
                    key={secondary.name}
                    onClick={() => setSecondaryEmotion(secondary)}
                    style={{
                      backgroundColor: `color-mix(in lch, ${
                        primaryEmotion.from
                      }, ${primaryEmotion.to} ${
                        (100 / primaryEmotion.nested.length) * index
                      }%)`,
                    }}
                    className="p-6 h-24 lg:h-48 rounded-lg text-lg shadow-lg hover:opacity-90 transition-opacity"
                  >
                    {secondary.name}
                  </button>
                ))
              : secondaryEmotion.nested?.map((tertiary) => (
                  <button
                    key={tertiary.name}
                    style={{
                      backgroundColor: primaryEmotion.color,
                    }}
                    className="p-6 h-24 rounded-lg text-lg shadow-lg hover:opacity-90 transition-opacity"
                  >
                    {tertiary.name}
                  </button>
                ))}
          </div>
        </div>
      )}
    </div>
  );
}
