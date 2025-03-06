"use client";
import { useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";
import DateFormatter from "./dateFormatter";
import { useTimeZone } from "@/context/timeZoneContext";
import { DATE_FORMAT_ISO_8601_MILLISECONDS } from "@/utils/formattedDates/formatedDates";

export default function HumanReadableConverter() {
  const { timeZone } = useTimeZone();
  const [datetime, setDatetime] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    second: "",
    millisecond: "",
  });
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");
  const [date, setDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setDatetime({
      year: now.getUTCFullYear().toString(),
      month: (now.getUTCMonth() + 1).toString().padStart(2, "0"),
      day: now.getUTCDate().toString().padStart(2, "0"),
      hour: now.getUTCHours().toString().padStart(2, "0"),
      minute: now.getUTCMinutes().toString().padStart(2, "0"),
      second: now.getUTCSeconds().toString().padStart(2, "0"),
      millisecond: now.getUTCMilliseconds().toString().padStart(3, "0"),
    });
  }, []);

  const handleInputChange =
    (key: keyof typeof datetime, maxDigits: number, maxValue?: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, maxDigits);
      if (maxValue !== undefined && parseInt(value, 10) > maxValue) return;
      setDatetime((prev) => ({ ...prev, [key]: value }));
    };

  const convertToEpoch = () => {
    setError(null);

    const { year, month, day, hour, minute, second, millisecond } = datetime;
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

      if (selectedTimeZone === "UTC") {
        dateInstance = new Date(Date.UTC(y, m, d, h, min, s, ms));
      } else {
        const localDateStr = formatInTimeZone(
          new Date(y, m, d, h, min, s, ms),
          selectedTimeZone,
          DATE_FORMAT_ISO_8601_MILLISECONDS.format
        );
        dateInstance = new Date(localDateStr);
      }

      setDate(dateInstance);
    } catch {
      setError("Error converting date. Check your inputs.");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-secondary text-2xl">
        Convert Human Date to Timestamp
      </h2>

      <div className="flex items-end gap-2 flex-wrap">
        {[
          { label: "Yr", key: "year", maxDigits: 4, width: "w-16" },
          {
            label: "Mon",
            key: "month",
            maxDigits: 2,
            maxValue: 12,
            width: "w-12",
          },
          {
            label: "Day",
            key: "day",
            maxDigits: 2,
            maxValue: 31,
            width: "w-12",
          },
          {
            label: "Hr",
            key: "hour",
            maxDigits: 2,
            maxValue: 23,
            width: "w-12",
          },
          {
            label: "Min",
            key: "minute",
            maxDigits: 2,
            maxValue: 59,
            width: "w-12",
          },
          {
            label: "Sec",
            key: "second",
            maxDigits: 2,
            maxValue: 59,
            width: "w-12",
          },
          {
            label: "Ms",
            key: "millisecond",
            maxDigits: 3,
            maxValue: 999,
            width: "w-14",
          },
        ].map(({ label, key, maxDigits, maxValue, width }) => (
          <div key={key} className="flex flex-col items-center">
            <small>{label}</small>
            <input
              className={`input input-bordered text-center ${width}`}
              type="number"
              value={datetime[key as keyof typeof datetime]}
              onChange={handleInputChange(
                key as keyof typeof datetime,
                maxDigits,
                maxValue
              )}
            />
          </div>
        ))}

        <div className="flex flex-col items-center">
          <small>Zone</small>
          <select
            className="input input-bordered w-24"
            value={selectedTimeZone}
            onChange={(e) => setSelectedTimeZone(e.target.value)}
          >
            <option value="UTC">UTC</option>
            {timeZone !== "UTC" && <option value={timeZone}>{timeZone}</option>}
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
