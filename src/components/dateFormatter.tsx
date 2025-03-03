import { formatDistanceToNow } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { enUS } from "date-fns/locale";
import ClipboardIcon from "@/icons/clipBoardIcon";

interface DateFormatterProps {
  date: Date;
}

export default function DateFormatter({ date }: DateFormatterProps) {
  if (isNaN(date.getTime())) return <p className="text-error">Invalid Date</p>;

  const epochSeconds = Math.floor(date.getTime() / 1000);
  const epochMilliseconds = date.getTime();
  const epochMicroseconds = date.getTime() * 1_000;

  const formattedUTC = formatInTimeZone(
    date,
    "UTC",
    "EEEE, d MMMM yyyy HH:mm:ss 'UTC'",
    { locale: enUS }
  );

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedLocal = formatInTimeZone(
    date,
    localTimeZone,
    "EEEE, d MMMM yyyy HH:mm:ss zzz",
    { locale: enUS }
  );

  const relativeTime = formatDistanceToNow(date, {
    locale: enUS,
    addSuffix: true,
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
      {/* Formatted Time Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Formatted Time</h3>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>GMT/UTC:</strong> {formattedUTC}
          </span>
          <button
            onClick={() => copyToClipboard(formattedUTC)}
            className="shrink-0 text-neutral hover:text-primary cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Local Time:</strong> {formattedLocal}
          </span>
          <button
            onClick={() => copyToClipboard(formattedLocal)}
            className="shrink-0 text-neutral hover:text-primary cursor-pointer"
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

        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Seconds:</strong> {epochSeconds}
          </span>
          <button
            onClick={() => copyToClipboard(epochSeconds.toString())}
            className="shrink-0 text-neutral hover:text-primary cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Milliseconds:</strong> {epochMilliseconds}
          </span>
          <button
            onClick={() => copyToClipboard(epochMilliseconds.toString())}
            className="shrink-0 text-neutral hover:text-primary cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="whitespace-nowrap min-w-0 truncate">
            <strong>Microseconds:</strong> {epochMicroseconds}
          </span>
          <button
            onClick={() => copyToClipboard(epochMicroseconds.toString())}
            className="shrink-0 text-neutral hover:text-primary cursor-pointer"
          >
            <ClipboardIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
