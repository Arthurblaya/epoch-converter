import { useState, useCallback } from "react";
import { DateConverter } from "../lib/dateConverter";

export function useEpochConverter() {
  const [epochInput, setEpochInput] = useState(() =>
    Math.floor(Date.now()).toString()
  );
  const [convertedDate, setConvertedDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convertEpoch = useCallback(() => {
    setError(null);
    const epoch = Number(epochInput);

    if (isNaN(epoch) || epoch <= 0) {
      setError("Invalid timestamp. Please enter a valid number.");
      return;
    }

    setConvertedDate(DateConverter.fromEpoch(epoch));
  }, [epochInput]);

  return {
    epochInput,
    setEpochInput,
    convertedDate,
    error,
    convertEpoch,
  };
}
