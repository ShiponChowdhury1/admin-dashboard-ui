'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ViewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemName: string;
  status: string;
}

export function ViewModal({ open, onOpenChange, itemName, status }: ViewModalProps) {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleApprove = () => setCurrentStatus('Approved');
  const handleReject = () => setCurrentStatus('Rejected');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">{itemName}</DialogTitle>
          <p className="text-sm text-gray-600">Current Status: {currentStatus}</p>
        </DialogHeader>
        <DialogFooter className="flex gap-3 justify-end">
          <Button variant="outline" onClick={handleReject} className="bg-red-100 text-red-700 hover:bg-red-200">
            Reject
          </Button>
          <Button variant="default" onClick={handleApprove} className="bg-green-100 text-green-700 hover:bg-green-200">
            Approve
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
