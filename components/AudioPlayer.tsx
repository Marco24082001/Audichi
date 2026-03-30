"use client";

import { useRef, useState } from "react";

type AudioPlayerProps = {
  audioUrl: string;
};

export function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);

  const syncDuration = () => {
    if (!audioRef.current) return;
    const nextDuration = audioRef.current.duration;
    if (Number.isFinite(nextDuration) && nextDuration > 0) {
      setDuration(nextDuration);
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    await audioRef.current.play();
    setIsPlaying(true);
  };

  const handleSeek = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleSpeedChange = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = value;
    setSpeed(value);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <audio
        key={audioUrl}
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onLoadedMetadata={syncDuration}
        onDurationChange={syncDuration}
        onCanPlay={syncDuration}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={togglePlay}
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <label className="text-sm text-slate-600">
          Speed
          <select
            value={speed}
            onChange={(event) => handleSpeedChange(Number(event.target.value))}
            className="ml-2 rounded-md border border-slate-300 px-2 py-1 text-sm"
          >
            <option value={0.75}>0.75x</option>
            <option value={1}>1x</option>
            <option value={1.25}>1.25x</option>
          </select>
        </label>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={duration || 0}
          disabled={duration <= 0}
          step={0.1}
          value={currentTime}
          onChange={(event) => handleSeek(Number(event.target.value))}
          className="w-full"
        />
        <p className="mt-1 text-xs text-slate-500">
          {currentTime.toFixed(1)}s / {duration.toFixed(1)}s
        </p>
      </div>
    </div>
  );
}
