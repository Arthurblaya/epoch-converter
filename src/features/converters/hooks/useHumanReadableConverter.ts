import { useState, useEffect } from "react";
import { useTimeZone } from "@/context/timeZoneContext";
import { DATE_FORMAT_ISO_8601_MILLISECONDS } from "@/utils/formatedDates";
import { DateConverter } from "../lib/dateConverter";

export function useHumanReadableConverter() {
  const { timeZone } = useTimeZone();
  const [selectedTimeZone, setSelectedTimeZone] = useState<"UTC" | string>("UTC");

  const [datetime, setDatetime] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    second: "",
    millisecond: "",
  });

  const [convertedDate, setConvertedDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const formattedDate = DateConverter.format(new Date(), DATE_FORMAT_ISO_8601_MILLISECONDS.format, selectedTimeZone);

    const [datePart, timePart] = formattedDate.split("T");
    const [year, month, day] = datePart.split("-");
    const [time, millisecondWithZone] = timePart.split(".");
    const [hour, minute, second] = time.split(":");

    setDatetime({
      year: year ?? new Date().getFullYear().toString(),
      month: month ?? (new Date().getMonth() + 1).toString().padStart(2, "0"),
      day: day ?? new Date().getDate().toString().padStart(2, "0"),
      hour: hour ?? "00",
      minute: minute ?? "00",
      second: second ?? "00",
      millisecond: millisecondWithZone ? millisecondWithZone.substring(0, 3) : "000"
    });
  }, [selectedTimeZone]);

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
        const localDateStr = DateConverter.format(new Date(y, m, d, h, min, s, ms), DATE_FORMAT_ISO_8601_MILLISECONDS.format, selectedTimeZone);
        dateInstance = new Date(localDateStr);
      }

      setConvertedDate(dateInstance);
    } catch {
      setError("Error converting date. Check your inputs.");
    }
  };

  return {
    datetime,
    setDatetime,
    convertedDate,
    error,
    selectedTimeZone,
    setSelectedTimeZone,
    convertToEpoch,
    timeZone,
  };
}
