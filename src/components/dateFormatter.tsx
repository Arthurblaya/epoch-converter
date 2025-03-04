import { formatDistanceToNow } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { enUS } from "date-fns/locale";
import ClipboardIcon from "@/icons/clipBoardIcon";
import { useTimeZone } from "@/context/timeZoneContext";

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
    "EEEE, MMMM d, yyyy HH:mm:ss XXX"
  );

  const formattedLocal = formatInTimeZone(
    date,
    timeZone,
    "EEEE, MMMM d, yyyy HH:mm:ss XXX"
  );

  const relativeTime = formatDistanceToNow(date, {
    locale: enUS,
    addSuffix: true,
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:gap-12 gap-8">
      {/* Formatted Time Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Formatted Time</h3>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>GMT/UTC:</strong> {formattedUTC}
          </span>
          <button
            onClick={() => copyToClipboard(formattedUTC)}
            className="shrink-0 text-neutral hover:text-primary transition-colors duration-400 cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Selected TimeZone:</strong> {formattedLocal}
          </span>
          <button
            onClick={() => copyToClipboard(formattedLocal)}
            className="shrink-0 text-neutral hover:text-primary transition-colors duration-400 cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>

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
          <button
            onClick={() => copyToClipboard(epochSeconds.toString())}
            className="shrink-0 text-neutral hover:text-primary transition-colors duration-400 cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Milliseconds:</strong> {epochMilliseconds}
          </span>
          <button
            onClick={() => copyToClipboard(epochMilliseconds.toString())}
            className="shrink-0 text-neutral hover:text-primary transition-colors duration-400 cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Microseconds:</strong> {epochMicroseconds}
          </span>
          <button
            onClick={() => copyToClipboard(epochMicroseconds.toString())}
            className="shrink-0 text-neutral hover:text-primary transition-colors duration-400 cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
