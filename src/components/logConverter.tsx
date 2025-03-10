"use client";

import { useState } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { useTimeZone } from "@/context/timeZoneContext";
import { useDateFormat } from "@/context/dateFormatContext";

export default function LogConverter() {
  const { timeZone } = useTimeZone();
  const { dateFormat } = useDateFormat();
  const [logInput, setLogInput] = useState("");
  const [convertedLog, setConvertedLog] = useState("");
  const [error, setError] = useState<string | null>(null);

  const convertTimestamps = () => {
    setError(null);
    const timestampRegex = /\b\d{10,16}\b/g;

    let foundEpoch = false;

    const newLog = logInput.replace(timestampRegex, (match) => {
      let epoch = Number(match);

      if (epoch < 1e12) {
        epoch *= 1000;
      } else if (epoch > 1e15) {
        epoch = Math.floor(epoch / 1000);
      }

      const date = new Date(epoch);
      if (isNaN(date.getTime())) return match;

      foundEpoch = true;
      return formatInTimeZone(date, timeZone, dateFormat);
    });

    if (!foundEpoch) {
      setError("No epoch timestamps detected.");
      setConvertedLog("");
    } else {
      setConvertedLog(newLog);
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-secondary text-2xl">Convert Logs with Timestamps</h2>
      <p>Paste logs to convert timestamps into readable dates.</p>
      <textarea
        className="textarea textarea-bordered bg-neutral-900 text-neutral-content w-full"
        placeholder="Paste logs here..."
        value={logInput}
        onChange={(e) => setLogInput(e.target.value)}
        rows={Math.min(logInput.split("\n").length, 20)}
      ></textarea>

      <button className="btn btn-accent" onClick={convertTimestamps}>
        Convert
      </button>

      {error && <p className="text-error text-center">{error}</p>}

      {convertedLog && (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-secondary">Converted Logs:</h3>
          <p>
            You can select the time zone and date format from the sidebar and
            navbar.
          </p>
          <textarea
            className="textarea textarea-bordered bg-neutral-900 text-neutral-content w-full"
            readOnly
            value={convertedLog}
            rows={Math.min(logInput.split("\n").length, 20)}
          ></textarea>
        </div>
      )}
    </div>
  );
}
