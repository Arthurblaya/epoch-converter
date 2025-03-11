"use client";

import { useState } from "react";
import Spreadsheet, { CellBase, Matrix } from "react-spreadsheet";
import { formatInTimeZone } from "date-fns-tz";
import { useTimeZone } from "@/context/timeZoneContext";
import { useDateFormat } from "@/context/dateFormatContext";

const SpreadSheetConverter = () => {
  const { timeZone } = useTimeZone();
  const { dateFormat } = useDateFormat();

  const [data, setData] = useState<Matrix<CellBase>>([
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
    [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
  ]);

  const isTimestamp = (value: string): boolean => {
    return /^\d{10,16}$/.test(value);
  };

  const convertEpoch = (epoch: number): string => {
    if (epoch < 1e12) {
      epoch *= 1000;
    } else if (epoch > 1e15) {
      epoch = Math.floor(epoch / 1000);
    }
    const date = new Date(epoch);
    return isNaN(date.getTime())
      ? "Invalid date"
      : formatInTimeZone(date, timeZone, dateFormat);
  };

  const getConvertedData = (): Matrix<CellBase> => {
    return data.map((row) =>
      row.map((cell) => {
        if (cell?.value && isTimestamp(String(cell.value))) {
          return { value: convertEpoch(Number(cell.value)) };
        }
        return { value: cell?.value ?? "" };
      })
    );
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="overflow-x-auto w-full">
        <div className="min-w-[600px] w-full">
          <Spreadsheet data={data} onChange={setData} />
        </div>
      </div>

      <h3 className="text-secondary text-xl mt-4">
        Converted Data (Read-Only)
      </h3>

      <div className="overflow-x-auto w-full">
        <div className="min-w-[600px] w-full">
          <Spreadsheet data={getConvertedData()} />
        </div>
      </div>

      <p className="text-sm text-gray-400">
        Timestamps are automatically converted below.
      </p>
    </section>
  );
};

export default SpreadSheetConverter;
