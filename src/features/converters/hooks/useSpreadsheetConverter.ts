import { useState } from "react";
import { useTimeZone } from "@/context/timeZoneContext";
import { useDateFormat } from "@/context/dateFormatContext";
import { CellBase, Matrix } from "react-spreadsheet";
import { DateConverter } from "../lib/dateConverter";

export function useSpreadsheetConverter() {
    const { timeZone } = useTimeZone();
    const { dateFormat } = useDateFormat();

    const generateEmptyMatrix = (rows: number, cols: number): Matrix<CellBase> => {
        return Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => ({ value: "" }))
        );
    };

    const [data, setData] = useState<Matrix<CellBase>>(generateEmptyMatrix(10, 11));

    const isTimestamp = (value: string): boolean => /^\d{10,16}$/.test(value);

    const convertEpoch = (epoch: number): string => {
        const date = DateConverter.fromEpoch(epoch);
        return isNaN(date.getTime()) ? "Invalid date" : DateConverter.format(date, dateFormat, timeZone);
    };

    const getConvertedData = (): Matrix<CellBase> =>
        data.map((row) =>
            row.map((cell) => {
                if (cell?.value && isTimestamp(String(cell.value))) {
                    return { value: convertEpoch(Number(cell.value)) };
                }
                return { value: cell?.value ?? "" };
            })
        );

    return {
        data,
        setData,
        getConvertedData,
    };
}
