type FilterDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function FilterDropdown({ value, onChange }: FilterDropdownProps) {
  return (
    <select
      className="px-3 py-2 border bg-white rounded-lg shadow-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option className="text-[#88939F1A]" value="All">All Users</option>
      <option className="text-[#88939F1A]" value="Paid">Paid Users</option>
      <option className="text-[#88939F1A]" value="Free">Free Users</option>
    </select>
  );
}
