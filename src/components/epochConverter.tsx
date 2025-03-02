"use client";
import { useState, useEffect } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import ClipboardIcon from "@/icons/clipBoardIcon";

export default function EpochConverter() {
  const [epochInput, setEpochInput] = useState("");
  const [result, setResult] = useState<{
    formattedUTC: string;
    formattedLocal: string;
    relativeTime: string;
    timeType: "seconds" | "milliseconds" | "microseconds";
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const currentEpoch = Math.floor(Date.now() / 1000).toString();
    setEpochInput(currentEpoch);
    convertEpoch(currentEpoch);
  }, []);

  const determineTimeType = (epoch: number) => {
    if (epoch < 1e12) return "seconds";
    if (epoch < 1e15) return "milliseconds";
    if (epoch < 1e18) return "microseconds";
    return null;
  };

  const convertEpoch = (input?: string) => {
    setError(null);
    const epochStr = input ?? epochInput;
    if (!epochStr) return;

    let epoch = Number(epochStr);
    if (isNaN(epoch) || epoch <= 0) {
      setError("Invalid timestamp. Please enter a valid number.");
      return;
    }

    const timeType = determineTimeType(epoch);
    if (!timeType) {
      setError("Invalid epoch timestamp. The number is too large.");
      return;
    }

    if (timeType === "milliseconds") epoch = Math.floor(epoch / 1000);
    if (timeType === "microseconds") epoch = Math.floor(epoch / 1_000_000);

    const date = new Date(epoch * 1000);
    if (isNaN(date.getTime())) {
      setError("Invalid timestamp. Please enter a valid number.");
      return;
    }

    setResult({
      timeType,
      formattedUTC: format(date, "PPPP HH:mm:ss 'UTC'", { locale: enUS }),
      formattedLocal: date.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }),
      relativeTime: formatDistanceToNow(date, { locale: enUS, addSuffix: true }),
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-secondary text-2xl">Convert Epoch to Readable Date</h2>

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
            onClick={() => convertEpoch()}
            disabled={!epochInput || isNaN(Number(epochInput))}
          >
            Convert
          </button>
        </div>
        {error && <p className="text-error text-sm">{error}</p>}
      </div>

      <p className="text-sm">Supports Unix timestamps in seconds, milliseconds, and microseconds.</p>

      {result && (
        <div>
          <h3>
            <span className={result.timeType === "seconds" ? "font-semibold" : ""}>
              Unix Time in Seconds
            </span>{" "}
            |{" "}
            <span className={result.timeType === "milliseconds" ? "font-semibold" : ""}>
              Milliseconds
            </span>{" "}
            |{" "}
            <span className={result.timeType === "microseconds" ? "font-semibold" : ""}>
              Microseconds
            </span>
          </h3>

          <div className="flex items-center gap-2">
            <p>
              <strong>GMT/UTC:</strong> {result.formattedUTC}
            </p>
            <button
              onClick={() => copyToClipboard(result.formattedUTC)}
              className="text-neutral hover:text-primary focus:text-primary cursor-pointer"
            >
              <ClipboardIcon className="size-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <p>
              <strong>Local Time:</strong> {result.formattedLocal}
            </p>
            <button
              onClick={() => copyToClipboard(result.formattedLocal)}
              className="text-neutral hover:text-primary focus:text-primary cursor-pointer"
            >
              <ClipboardIcon className="size-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <p>
              <strong>Relative:</strong> {result.relativeTime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
