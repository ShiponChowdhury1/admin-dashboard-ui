"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Circle, CreditCardIcon, SlidersHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserCheck, UserX, CreditCard,  } from "lucide-react";
import Image from "next/image";

export default function FilterModal() {
  const [selectedFilter, setSelectedFilter] = useState("active");

  const filters = [
    { id: "active", img:'/free.png', label: "Active User", icon: <Circle className="w-5 h-5" /> },
    { id: "unActive",img:'/free.png', label: "UnActive User", icon: <Circle className="w-5 h-5" /> },
    { id: "paid", img:'/free.png', label: "Paid User", icon: <Circle className="w-5 h-5" /> },
    { id: "unpaid", img:'/free.png', label: "Unpaid User", icon: <Circle className="w-5 h-5" />  },
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
    <RadioGroup
      value={selectedFilter}
      onValueChange={(value) => setSelectedFilter(value)}
      className="flex flex-col gap-4 mt-4"
    >
      {filters.map((filter) => (
        <div
          key={filter.id}
          className="flex items-center justify-between p-3 rounded-lg border-[#C4C5C9] hover:bg-gray-100 cursor-pointer"
        >
          {/* Left side: image/icon + label */}
          <div className="flex items-center gap-3">
            {filter.img && (
              <Image
                src={filter.img}
                alt={filter.label}
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            <span className="font-medium text-foreground">{filter.label}</span>
          </div>

          {/* Right side: Circle / Radio */}
          <RadioGroupItem value={filter.id} className="w-5 h-5 border border-[#C4C5C9] rounded-full" />
        </div>
      ))}
    </RadioGroup>

    <DialogFooter>
      <Button
        onClick={() => {
          console.log("Selected Filter:", selectedFilter);
        }}
      >
        Apply
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>


  );
}
