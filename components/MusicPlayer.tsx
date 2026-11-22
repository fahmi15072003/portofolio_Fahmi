"use client";

import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

const TRACK_SRC = "/audio/background.mp3";
const DEFAULT_VOLUME = 0.3; // pelan supaya tidak mengagetkan

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const resumeOnReturn = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);

  // Terapkan volume ke elemen audio
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // Jeda saat tab disembunyikan, lanjut lagi saat kembali
  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        resumeOnReturn.current = !audio.paused;
        audio.pause();
      } else if (resumeOnReturn.current) {
        resumeOnReturn.current = false;
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) await audio.play();
      else audio.pause();
    } catch {
      // Browser menolak memutar: abaikan saja
    }
  };

  return (
    <div className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/90 p-1.5 pr-4 shadow-lg shadow-black/40 transition-colors duration-300 hover:border-purple-400/40">
      <audio
        ref={audioRef}
        src={TRACK_SRC}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* Tombol play / pause */}
      <button
        onClick={toggle}
        aria-label={playing ? "Jeda musik" : "Putar musik"}
        aria-pressed={playing}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-600/30 transition-transform duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
      >
        {playing ? <FiPause /> : <FiPlay className="translate-x-px" />}
      </button>

      {/* Equalizer */}
      <div className="flex h-4 items-end gap-0.5" aria-hidden="true">
        {[0, 0.25, 0.5, 0.15].map((delay) => (
          <span
            key={delay}
            style={{
              animationDelay: `${delay}s`,
              animationPlayState: playing ? "running" : "paused",
            }}
            className="h-4 w-0.5 origin-bottom rounded-full bg-purple-300 animate-equalizer motion-reduce:animate-none"
          />
        ))}
      </div>

      {/* Label */}
      <span className="hidden text-xs font-medium text-gray-300 sm:block">
        {playing ? "Now playing" : "Play music"}
      </span>

      {/* Volume: muncul saat di-hover atau difokus (desktop) */}
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        aria-label="Volume"
        className="hidden w-0 accent-purple-400 opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100 group-focus-within:w-20 group-focus-within:opacity-100 sm:block"
      />
    </div>
  );
}