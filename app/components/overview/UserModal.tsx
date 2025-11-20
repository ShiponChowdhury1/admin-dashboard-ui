"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface UserModalProps {
  user: any;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function UserModal({ user, open, setOpen }: UserModalProps) {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white rounded-xl">
        <div className="space-y-6">
          <div className="flex justify-between items-center p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <Image src={user.avatar} alt={user.name} width={48} height={48} className="rounded-full" />
              <div>
                <p className="font-bold text-foreground">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-semibold text-sm text-center">Active</div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-semibold text-sm text-center">Paid</div>
            </div>
          </div>

          <DialogHeader>
            <DialogTitle className="text-foreground">User Details</DialogTitle>
          </DialogHeader>

          <div className="flex gap-4 bg-gray-100 p-4 rounded-2xl">
            <div className="flex flex-col w-[70%]">
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-medium text-sm w-full text-left">Issue Date</button>
              <p className="text-gray-600 mt-2 text-sm px-2">12 Sep, 2023</p>
            </div>
            <div className="flex flex-col w-[30%]">
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-medium text-sm w-full text-left">Amount</button>
              <p className="text-green-600 mt-2 font-semibold text-sm px-2">$250.00</p>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setOpen(false)} className="border-border text-foreground">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
