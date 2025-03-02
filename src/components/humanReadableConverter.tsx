"use client";
import { useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";
import DateFormatter from "./dateFormatter";

export default function HumanReadableConverter() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [millisecond, setMillisecond] = useState("");
  const [timezone, setTimezone] = useState("GMT");
  const [date, setDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setYear(now.getUTCFullYear().toString());
    setMonth((now.getUTCMonth() + 1).toString().padStart(2, "0"));
    setDay(now.getUTCDate().toString().padStart(2, "0"));
    setHour(now.getUTCHours().toString().padStart(2, "0"));
    setMinute(now.getUTCMinutes().toString().padStart(2, "0"));
    setSecond(now.getUTCSeconds().toString().padStart(2, "0"));
    setMillisecond(now.getUTCMilliseconds().toString().padStart(3, "0"));

    setDate(
      new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          now.getUTCHours(),
          now.getUTCMinutes(),
          now.getUTCSeconds(),
          now.getUTCMilliseconds()
        )
      )
    );
  }, []);

  const handleInputChange =
    (setter: (value: string) => void, maxDigits: number, maxValue?: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/\D/g, ""); // Solo números
      if (value.length > maxDigits) value = value.slice(0, maxDigits);
      if (maxValue !== undefined && parseInt(value, 10) > maxValue) return;
      setter(value);
    };

  const convertToEpoch = () => {
    setError(null);

    const y = parseInt(year, 10);
    const m = parseInt(month, 10) - 1;
    const d = parseInt(day, 10);
    const h = parseInt(hour, 10);
    const min = parseInt(minute, 10);
    const s = parseInt(second, 10);
    const ms = parseInt(millisecond, 10) || 0;

    if ([y, m, d, h, min, s, ms].some((v) => isNaN(v))) {
      setError("Invalid input. Please enter valid numbers.");
      return;
    }

    try {
      let dateInstance: Date;

      if (timezone === "GMT") {
        dateInstance = new Date(Date.UTC(y, m, d, h, min, s, ms));
      } else {
        const localDate = new Date(y, m, d, h, min, s, ms);
        const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const utcDateStr = formatInTimeZone(
          localDate,
          "UTC",
          "yyyy-MM-dd HH:mm:ss.SSS 'UTC'"
        );
        dateInstance = new Date(utcDateStr);
      }

      setDate(dateInstance);
    } catch (e) {
      setError("Error converting date. Check your inputs.");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-secondary text-2xl">
        Convert Human Date to Timestamp
      </h2>

      <div className="flex items-end gap-2 flex-wrap">
        <div className="flex flex-col items-center">
          <small>Yr</small>
          <input
            className="input input-bordered w-16 text-center"
            type="number"
            value={year}
            onChange={handleInputChange(setYear, 4)}
          />
        </div>
        <span>-</span>
        <div className="flex flex-col items-center">
          <small>Mon</small>
          <input
            className="input input-bordered w-12 text-center"
            type="number"
            value={month}
            onChange={handleInputChange(setMonth, 2, 12)}
          />
        </div>
        <span>-</span>
        <div className="flex flex-col items-center">
          <small>Day</small>
          <input
            className="input input-bordered w-12 text-center"
            type="number"
            value={day}
            onChange={handleInputChange(setDay, 2, 31)}
          />
        </div>
        <span>&nbsp;</span>
        <div className="flex flex-col items-center">
          <small>Hr</small>
          <input
            className="input input-bordered w-12 text-center"
            type="number"
            value={hour}
            onChange={handleInputChange(setHour, 2, 23)}
          />
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <small>Min</small>
          <input
            className="input input-bordered w-12 text-center"
            type="number"
            value={minute}
            onChange={handleInputChange(setMinute, 2, 59)}
          />
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <small>Sec</small>
          <input
            className="input input-bordered w-12 text-center"
            type="number"
            value={second}
            onChange={handleInputChange(setSecond, 2, 59)}
          />
        </div>
        <span>.</span>
        <div className="flex flex-col items-center">
          <small>Ms</small>
          <input
            className="input input-bordered w-14 text-center"
            type="number"
            value={millisecond}
            onChange={handleInputChange(setMillisecond, 3, 999)}
          />
        </div>
        <div className="flex flex-col items-center">
          <small>Zone</small>
          <select
            className="input input-bordered w-20"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            <option value="GMT">GMT</option>
            <option value="local">Local</option>
          </select>
        </div>
        <div className="flex flex-col items-center">
          <small>&nbsp;</small>
          <button className="btn btn-accent w-24 h-10" onClick={convertToEpoch}>
            Convert
          </button>
        </div>
      </div>

      {error && <p className="text-error text-center">{error}</p>}
      {date && <DateFormatter date={date} />}
    </div>
  );
}
