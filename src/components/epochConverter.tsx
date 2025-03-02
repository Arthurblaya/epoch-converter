"use client";
import { useState, useEffect, useCallback } from "react";
import DateFormatter from "./dateFormatter";

export default function EpochConverter() {
  const [epochInput, setEpochInput] = useState(() =>
    Math.floor(Date.now() / 1000).toString()
  );
  const [date, setDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convertEpoch = useCallback((input: string) => {
    setError(null);
    if (!input) return;

    let epoch = Number(input);
    if (isNaN(epoch) || epoch <= 0) {
      setError("Invalid timestamp. Please enter a valid number.");
      return;
    }

    if (epoch < 1e12) {
    } else if (epoch < 1e15) {
      epoch = Math.floor(epoch / 1000);
    } else if (epoch < 1e18) {
      epoch = Math.floor(epoch / 1_000_000);
    } else {
      setError("Invalid epoch timestamp. The number is too large.");
      return;
    }

    const newDate = new Date(epoch * 1000);
    if (isNaN(newDate.getTime())) {
      setError("Invalid timestamp. Please enter a valid number.");
      return;
    }

    setDate(newDate);
  }, []);

  useEffect(() => {
    convertEpoch(epochInput);
  }, [convertEpoch]);

  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-secondary text-2xl">
        Convert Epoch to Readable Date
      </h2>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            className="input input-bordered border border-color-border"
            type="number"
            placeholder="Enter Epoch timestamp"
            value={epochInput}
            onChange={(e) => setEpochInput(e.target.value)}
          />
          <button
            className="btn btn-accent"
            onClick={() => convertEpoch(epochInput)}
            disabled={!epochInput || isNaN(Number(epochInput))}
          >
            Convert
          </button>
        </div>
        {error && <p className="text-error text-sm">{error}</p>}
      </div>

      <p className="text-sm">
        Supports Unix timestamps in seconds, milliseconds, and microseconds.
      </p>

      {date && <DateFormatter date={date} />}
    </div>
  );
}
