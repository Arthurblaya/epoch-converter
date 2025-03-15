"use client";
import { useHumanReadableConverter } from "@/features/converters/hooks/useHumanReadableConverter";
import DateFormatter from "./dateFormatter";

export default function HumanReadableConverter() {
  const {
    datetime,
    setDatetime,
    convertedDate,
    error,
    selectedTimeZone,
    setSelectedTimeZone,
    convertToEpoch,
    timeZone,
  } = useHumanReadableConverter();

  const handleInputChange =
    (key: keyof typeof datetime, maxDigits: number, maxValue?: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, maxDigits);
      if (maxValue !== undefined && parseInt(value, 10) > maxValue) return;
      setDatetime((prev) => ({ ...prev, [key]: value }));
    };

  return (
    <div className="flex flex-col gap-4">
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
              value={datetime[key as keyof typeof datetime] ?? ""}
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

        <button className="btn btn-accent w-24 h-10" onClick={convertToEpoch}>
          Convert
        </button>
      </div>

      {error && <p className="text-error text-center">{error}</p>}
      {convertedDate && <DateFormatter date={convertedDate} />}
    </div>
  );
}
