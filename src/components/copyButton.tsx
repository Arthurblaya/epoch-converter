"use client";

import { useState } from "react";
import ClipboardIcon from "@/lib/icons/clipBoardIcon";
import ClipBoardCheckIcon from "@/lib/icons/clipBoardChecIcon";

interface CopyButtonProps {
  text: string;
  size?: string;
}

export default function CopyButton({ text, size = "size-4" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`swap swap-rotate shrink-0 text-neutral cursor-pointer ${
        copied ? "swap-active" : ""
      }`}
    >
      <div className="swap-off">
        <ClipboardIcon className={`${size}`} />
      </div>
      <div className="swap-on">
        <ClipBoardCheckIcon className={`${size} text-primary`} />
      </div>
    </button>
  );
}
