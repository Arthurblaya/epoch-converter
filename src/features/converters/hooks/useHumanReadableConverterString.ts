import { useState, useEffect } from "react";
import { DateConverter } from "../lib/dateConverter";

export function useHumanReadableConverterString() {

  const [inputValue, setInputValue] = useState<string>("");
  const [convertedDate, setConvertedDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputValue(new Date().toISOString());
  }, []);

  const convertToDate = () => {
    setError(null);
    const date = DateConverter.parseDateString(inputValue);
    if (!date) {
      setError("Invalid date format.");
    }
    setConvertedDate(date);
  };

  return {
    inputValue,
    setInputValue,
    convertedDate,
    error,
    convertToDate,
  };
}
