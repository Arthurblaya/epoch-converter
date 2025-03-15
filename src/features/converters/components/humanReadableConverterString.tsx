"use client";
import { useHumanReadableConverterString } from "@/features/converters/hooks/useHumanReadableConverterString";
import DateFormatter from "./dateFormatter";

export default function HumanReadableConverterString() {
  const { inputValue, setInputValue, convertedDate, error, convertToDate } =
    useHumanReadableConverterString();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Enter a date..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-accent" onClick={convertToDate}>
          Convert
        </button>
      </div>
      {error && <p className="text-error">{error}</p>}
      {convertedDate && <DateFormatter date={convertedDate} />}
    </div>
  );
}
