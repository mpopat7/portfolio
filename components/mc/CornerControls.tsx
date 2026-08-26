"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SOUND_KEY = "mc-sound";
const SCALE_KEY = "mc-gui-scale";

/**
 * The mute and options buttons Minecraft parks in the corner of its menus.
 *
 * The click is synthesised with WebAudio rather than shipped as a sample —
 * Mojang's sounds aren't redistributable, and a two-oscillator blip is a
 * closer match to the wood-button "click" than anything free would be.
 */
export default function CornerControls() {
  const [sound, setSound] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [scale, setScale] = useState(100);
  const ctxRef = useRef<AudioContext | null>(null);

  // Restore preferences. Wrapped because storage throws outright in some
  // embedded contexts rather than just returning null.
  useEffect(() => {
    try {
      setSound(localStorage.getItem(SOUND_KEY) === "on");
      const s = Number(localStorage.getItem(SCALE_KEY));
      if (s >= 60 && s <= 160) setScale(s);
    } catch {
      /* no stored prefs — defaults are already correct */
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--u",
      `calc(clamp(1.5px, min(0.2344vw, 0.375vh), 3.25px) * ${scale / 100})`,
    );
  }, [scale]);

  const blip = useCallback(() => {
    if (!sound) return;
    try {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = (ctxRef.current ??= new Ctor());
      if (ctx.state === "suspended") void ctx.resume();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.07);
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      /* audio unavailable — the UI works fine silently */
    }
  }, [sound]);

  // One delegated listener beats wiring a click handler through every button.
  useEffect(() => {
    if (!sound) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest(".mc-button")) blip();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [sound, blip]);

  useEffect(() => {
    if (!optionsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOptionsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [optionsOpen]);

  const toggleSound = () => {
    const next = !sound;
    setSound(next);
    try {
      localStorage.setItem(SOUND_KEY, next ? "on" : "off");
    } catch {
      /* preference just won't persist */
    }
  };

  const changeScale = (v: number) => {
    setScale(v);
    try {
      localStorage.setItem(SCALE_KEY, String(v));
    } catch {
      /* preference just won't persist */
    }
  };

  return (
    <>
      <button
        onClick={toggleSound}
        aria-label={sound ? "Mute interface sounds" : "Unmute interface sounds"}
        aria-pressed={sound}
        className="mc-button icon fixed bottom-[calc(3*var(--u))] left-[calc(4*var(--u))] z-20 flex items-center justify-center"
      >
        <SpeakerIcon on={sound} />
      </button>

      <button
        onClick={() => setOptionsOpen(true)}
        aria-label="Options"
        aria-haspopup="dialog"
        className="mc-button icon fixed bottom-[calc(3*var(--u))] left-[calc(27*var(--u))] z-20 flex items-center justify-center"
      >
        <GearIcon />
      </button>

      {optionsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Options"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOptionsOpen(false);
          }}
        >
          <div className="mc-window w-full max-w-[420px] p-4">
            <h2 className="mb-4 text-center text-lg font-bold text-[#3b3b3b]">
              Options
            </h2>

            <label className="mb-2 block text-sm text-[#3b3b3b]">
              GUI Scale: {scale}%
            </label>
            <input
              type="range"
              min={60}
              max={160}
              step={10}
              value={scale}
              onChange={(e) => changeScale(Number(e.target.value))}
              className="mb-4 w-full accent-[#3b3b3b]"
              aria-label="GUI scale"
            />

            <div className="flex flex-col gap-2">
              <button
                onClick={toggleSound}
                className="mc-button small w-full"
                aria-pressed={sound}
              >
                Sounds: {sound ? "ON" : "OFF"}
              </button>
              <button
                onClick={() => setOptionsOpen(false)}
                className="mc-button small w-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SpeakerIcon({ on }: { on: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[45%] w-[45%]"
    >
      <path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z" />
      {on ? (
        <>
          <path d="M16 9a3 3 0 0 1 0 6" />
          <path d="M19 6a7 7 0 0 1 0 12" />
        </>
      ) : (
        <>
          <line x1="22" x2="16" y1="9" y2="15" />
          <line x1="16" x2="22" y1="9" y2="15" />
        </>
      )}
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[45%] w-[45%]"
    >
      <path d="M9.7 4.1a2.3 2.3 0 0 1 4.6 0 2.3 2.3 0 0 0 3.3 1.9 2.3 2.3 0 0 1 2.3 4 2.3 2.3 0 0 0 0 3.9 2.3 2.3 0 0 1-2.3 4 2.3 2.3 0 0 0-3.3 1.9 2.3 2.3 0 0 1-4.6 0 2.3 2.3 0 0 0-3.3-1.9 2.3 2.3 0 0 1-2.4-4 2.3 2.3 0 0 0 0-3.9 2.3 2.3 0 0 1 2.4-4 2.3 2.3 0 0 0 3.3-1.9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
