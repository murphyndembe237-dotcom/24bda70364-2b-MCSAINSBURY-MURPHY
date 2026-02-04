"use client";

import { SelectOption } from "@/types";

type Props = {
  selectLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  groupLabel?: string;
  placeholder?: string;
};

export default function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <label className="text-lg font-medium">{selectLabel}</label>

      <select
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="h-10 px-3 text-lg bg-white border rounded-md"
      >
        <option value="">{placeholder || "Select"}</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
