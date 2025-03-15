"use client";
import DateFormatter from "@/features/converters/components/dateFormatter";
import { useEpochConverter } from "@/features/converters/hooks/useEpochConverter";

export default function EpochConverter() {
  const { epochInput, setEpochInput, convertedDate, error, convertEpoch } =
    useEpochConverter();

  return (
    <div className="flex flex-col gap-4">
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
          onClick={convertEpoch}
          disabled={!epochInput}
        >
          Convert
        </button>
      </div>
      {error && <p className="text-error text-sm">{error}</p>}
      {convertedDate && <DateFormatter date={convertedDate} />}
    </div>
  );
}
