"use client";
import { useLogConverter } from "@/features/converters/hooks/useLogConverter";

export default function LogConverter() {
  const { logInput, setLogInput, convertedLog, error, convertTimestamps } =
    useLogConverter();

  return (
    <div className="flex flex-col gap-4">
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
        <textarea
          className="textarea textarea-bordered bg-neutral-900 text-neutral-content w-full"
          readOnly
          value={convertedLog}
          rows={Math.min(logInput.split("\n").length, 20)}
        ></textarea>
      )}
    </div>
  );
}
