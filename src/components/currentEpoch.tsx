"use client";
import { useEffect, useState } from "react";

export default function CurrentEpoch() {
  const [epoch, setEpoch] = useState(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setEpoch((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-lg">
      <span>
        The current <span className="text-secondary">Unix epoch time</span> is
      </span>
      <span className="font-bold">
        {epoch}
      </span>
    </div>
  );
}
