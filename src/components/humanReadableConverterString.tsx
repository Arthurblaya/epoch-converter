"use client";
import { useState, useEffect } from "react";
import { parseISO } from "date-fns";
import DateFormatter from "./dateFormatter";
import { formatInTimeZone } from "date-fns-tz";
import { DATE_FORMAT_ISO_8601 } from "@/utils/formattedDates/formatedDates";

export default function HumanReadableConverterString() {
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [placeholder, setPlaceholder] = useState("Enter a date...");

  useEffect(() => {
    setPlaceholder(
      `Enter a date (e.g., ${formatInTimeZone(
        new Date(),
        "UTC",
        DATE_FORMAT_ISO_8601.format
      )})`
    );
  }, []);

  const convertToDate = () => {
    setError(null);
    setDate(null);

    if (!inputValue.trim()) {
      setError("Please enter a date.");
      return;
    }

    try {
      let parsedDate = new Date(inputValue);

      if (isNaN(parsedDate.getTime())) {
        parsedDate = parseISO(inputValue);
      }

      if (isNaN(parsedDate.getTime())) {
        setError("Invalid date format.");
      } else {
        setDate(parsedDate);
      }
    } catch {
      setError("Error processing the date.");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-secondary text-2xl">
        Convert Date Format into a Readable Timestamp
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          className="input input-bordered"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button className="btn btn-accent" onClick={convertToDate}>
          Convert
        </button>
      </div>

      {error && <p className="text-error">{error}</p>}
      {date && <DateFormatter date={date} />}
    </div>
  );
}
