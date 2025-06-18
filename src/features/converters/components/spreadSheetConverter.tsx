"use client";
import Spreadsheet from "react-spreadsheet";
import { useSpreadsheetConverter } from "@/features/converters/hooks/useSpreadsheetConverter";

export default function SpreadSheetConverter() {
  const { data, setData, getConvertedData } = useSpreadsheetConverter();

  return (
    <section className="flex flex-col gap-4">
      <div className="overflow-x-auto w-full">
        <Spreadsheet data={data} onChange={setData} />
      </div>
      <h3 className="text-secondary text-xl mt-4">
        Converted Data
      </h3>
      <div className="overflow-x-auto w-full">
        <Spreadsheet data={getConvertedData()} />
      </div>
    </section>
  );
}
