import { formatDistanceToNow } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { enUS } from "date-fns/locale";
import { useTimeZone } from "@/context/timeZoneContext";
import CopyButton from "./copyButton";
import { DATE_FORMAT_HUMAN_READABLE_ENGLISH } from "@/formattedDates/formatedDates";

interface DateFormatterProps {
  date: Date;
}

export default function DateFormatter({ date }: DateFormatterProps) {
  const { timeZone } = useTimeZone();

  if (isNaN(date.getTime())) return <p className="text-error">Invalid Date</p>;

  const epochSeconds = Math.floor(date.getTime() / 1000);
  const epochMilliseconds = date.getTime();
  const epochMicroseconds = date.getTime() * 1_000;

  const formattedUTC = formatInTimeZone(
    date,
    "UTC",
    DATE_FORMAT_HUMAN_READABLE_ENGLISH.format
  );

  const formattedLocal = formatInTimeZone(
    date,
    timeZone,
    DATE_FORMAT_HUMAN_READABLE_ENGLISH.format
  );

  const relativeTime = formatDistanceToNow(date, {
    locale: enUS,
    addSuffix: true,
  });

  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:gap-12 gap-8">
      {/* Formatted Time Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Formatted Time</h3>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>GMT/UTC:</strong> {formattedUTC}
          </span>
          <CopyButton text={formattedUTC} size="size-4" />
        </div>

        {timeZone && timeZone !== "UTC" && timeZone !== "Etc/GMT+0" && (
          <div className="flex items-center flex-wrap gap-2">
            <span className="whitespace-nowrap min-w-0 truncate">
              <strong>Selected TimeZone:</strong> {formattedLocal}
            </span>
            <CopyButton text={formattedLocal} size="size-4" />
          </div>
        )}

        <p>
          <strong>Relative:</strong> {relativeTime}
        </p>
      </div>

      {/* Epoch Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Epoch</h3>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Seconds:</strong> {epochSeconds}
          </span>
          <CopyButton text={epochSeconds.toString()} size="size-4" />
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Milliseconds:</strong> {epochMilliseconds}
          </span>
          <CopyButton text={epochMilliseconds.toString()} size="size-4" />
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Microseconds:</strong> {epochMicroseconds}
          </span>
          <CopyButton text={epochMicroseconds.toString()} size="size-4" />
        </div>
      </div>
    </div>
  );
}
