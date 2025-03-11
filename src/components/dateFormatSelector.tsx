"use client";

import { useDateFormat } from "@/context/dateFormatContext";
import {
  DATE_FORMAT_HUMAN_READABLE_ENGLISH,
  DATE_FORMAT_HUMAN_READABLE_NUMERIC,
  DATE_FORMAT_ISO_8601,
  DATE_FORMAT_ISO_8601_MILLISECONDS,
  DATE_FORMAT_RFC_2822,
  DATE_FORMAT_RFC_3339,
} from "@/utils/formatedDates";

const dateFormats = [
  DATE_FORMAT_ISO_8601,
  DATE_FORMAT_ISO_8601_MILLISECONDS,
  DATE_FORMAT_RFC_2822,
  DATE_FORMAT_RFC_3339,
  DATE_FORMAT_HUMAN_READABLE_ENGLISH,
  DATE_FORMAT_HUMAN_READABLE_NUMERIC,
];

function DateFormatSelector({ className }: { className?: string }) {
  const { dateFormat, setDateFormat } = useDateFormat();

  return (
    <section className="flex flex-col gap-2">
      <label htmlFor="date-format" className="text-sm font-medium">
        Date Format:
      </label>
      <select
        value={dateFormat}
        onChange={(e) => setDateFormat(e.target.value)}
        className={className + " select"}
      >
        {dateFormats.map((df) => (
          <option key={df.name} value={df.format}>
            {df.name}
          </option>
        ))}
      </select>
    </section>
  );
}

export default DateFormatSelector;
