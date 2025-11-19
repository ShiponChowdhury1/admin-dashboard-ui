import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm w-full max-w-sm">
      <Search className="size-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search Here ..."
        className="outline-none w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
