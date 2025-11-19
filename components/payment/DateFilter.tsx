"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar"; // ShadCN Calendar import
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function DateFilter() {
  const [selectedFilter, setSelectedFilter] = useState("thisMonth");
  const [customDate, setCustomDate] = useState<Date | undefined>(new Date());

  const filters = [
    { id: "thisMonth", label: "This Month" },
    { id: "thisYear", label: "This Year" },
    { id: "custom", label: "Custom" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-[#F5F5F5] text-[#000000] hover:bg-gray-800 hover:text-white"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        {/* Visually hidden title for accessibility */}
        <DialogTitle>
          <VisuallyHidden>Date Filter</VisuallyHidden>
        </DialogTitle>

        <RadioGroup
          value={selectedFilter}
          onValueChange={(value) => setSelectedFilter(value)}
          className="flex flex-col gap-4 mt-4"
        >
          {filters.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
            >
              <span className="font-medium text-foreground">{filter.label}</span>

              <RadioGroupItem
                value={filter.id}
                className="w-5 h-5 border border-gray-300 rounded-full"
              />
            </div>
          ))}
        </RadioGroup>

        {/* Custom Date Picker */}
        {selectedFilter === "custom" && (
          <div className="mt-4">
            <Calendar
              mode="single"
              selected={customDate}
              onSelect={setCustomDate}
              className="rounded-md border shadow-sm"
              captionLayout="dropdown"
            />
          </div>
        )}

        <DialogFooter>
          <Button
            onClick={() => {
              console.log("Selected Filter:", selectedFilter);
              if (selectedFilter === "custom") {
                console.log("Custom Date:", customDate);
              }
            }}
          >
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
