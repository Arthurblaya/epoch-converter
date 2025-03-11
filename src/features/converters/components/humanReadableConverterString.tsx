"use client";
import { useState, useEffect } from "react";
import { parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { DATE_FORMAT_ISO_8601 } from "@/utils/formatedDates";
import DateFormatter from "@/features/dateFormatting/components/dateFormatter";

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
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
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
