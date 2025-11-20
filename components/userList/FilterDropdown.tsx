"use client";

import { useState } from "react";
import { SlidersHorizontal, UserCheck, UserX, CreditCard, Wallet } from "lucide-react";

type FilterDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function FilterDropdown({ value, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const filters = [
    { label: "Active User", value: "Active", icon: UserCheck },
    { label: "Inactive User", value: "Inactive", icon: UserX },
    { label: "Paid User", value: "Paid", icon: CreditCard },
    { label: "Unp aid User", value: "Free", icon: Wallet },
  ];

  const handleFilterChange = (filterValue: string) => {
    onChange(filterValue);
  };

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
      >
        <SlidersHorizontal className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Filter</span>
      </button>

      {/* Filter Modal/Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Filter Panel */}
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Filter</h3>

            <div className="space-y-3">
              {filters.map((filter) => {
                const Icon = filter.icon;
                const isSelected = value === filter.value;

                return (
                  <label
                    key={filter.value}
                    className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-700">{filter.label}</span>
                    </div>
                    <input
                      type="radio"
                      name="filter"
                      value={filter.value}
                      checked={isSelected}
                      onChange={() => handleFilterChange(filter.value)}
                      className="w-4 h-4 accent-gray-900 cursor-pointer"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
