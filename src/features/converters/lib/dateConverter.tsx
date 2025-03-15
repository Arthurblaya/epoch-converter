import { formatInTimeZone } from "date-fns-tz";
import { parseISO } from "date-fns";

export class DateConverter {
  static toEpoch(date: Date): number {
    return date.getTime();
  }

  static fromEpoch(epoch: number): Date {
    if (epoch < 1e12) {
      epoch *= 1000;
    } else if (epoch > 1e15) {
      epoch = Math.floor(epoch / 1000);
    }
    return new Date(epoch);
  }

  static format(date: Date, format: string, timeZone: string): string {
    return formatInTimeZone(date, timeZone, format);
  }

  static parseDateString(dateString: string): Date | null {
    try {
      let parsedDate = new Date(dateString);
      if (isNaN(parsedDate.getTime())) {
        parsedDate = parseISO(dateString);
      }
      return isNaN(parsedDate.getTime()) ? null : parsedDate;
    } catch {
      return null;
    }
  }

  static toDateObject(date: Date, format: string, timeZone: string) {
    const formattedDate = this.format(date, format, timeZone);
    const [datePart, timePart] = formattedDate.split("T");
    const [year, month, day] = datePart.split("-");
    const [hour, minute, second] = timePart.split(/[:.]/);
    return {
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond: timePart.split(".")[1]?.substring(0, 3) || "000",
    };
  }
}
