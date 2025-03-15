import { useState } from "react";

import { useTimeZone } from "@/context/timeZoneContext";
import { useDateFormat } from "@/context/dateFormatContext";
import { DateConverter } from "../lib/dateConverter";

export function useLogConverter() {
  const { timeZone } = useTimeZone();
  const { dateFormat } = useDateFormat();

  const [logInput, setLogInput] = useState("");
  const [convertedLog, setConvertedLog] = useState("");
  const [error, setError] = useState<string | null>(null);

  const convertTimestamps = () => {
    setError(null);
    const timestampRegex = /\b\d{10,16}\b/g;

    let foundEpoch = false;

    const newLog = logInput.replace(timestampRegex, (match) => {
      let epoch = Number(match);
      const date = DateConverter.fromEpoch(epoch);

      if (isNaN(date.getTime())) return match;

      foundEpoch = true;
      return DateConverter.format(date, dateFormat, timeZone);
    });

    if (!foundEpoch) {
      setError("No epoch timestamps detected.");
      setConvertedLog("");
    } else {
      setConvertedLog(newLog);
    }
  };

  return {
    logInput,
    setLogInput,
    convertedLog,
    error,
    convertTimestamps,
  };
}
