import Image from "next/image";
import { User } from "./UserTable";

interface UserModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function UserModal({ user, isOpen, onClose }: UserModalProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between gap-4 p-4 rounded-lg border-[#C4C5C9]">
            <div className="flex items-center gap-4">
              <Image src={user.avatar} alt={user.name} width={48} height={48} className="rounded-full" />
              <div>
                <p className="font-bold text-foreground">{user.name}</p>
                <p className="text-muted-foreground text-sm">{user.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-[#2874FF1A] text-[#2874FF] px-3 py-1 rounded-lg font-semibold text-sm text-center">Active</div>
              <div className="bg-[#14AE001A] text-[#14AE00] px-3 py-1 rounded-lg font-semibold text-sm text-center">Paid</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 bg-gray-100 p-4 rounded-2xl">
          <div className="flex flex-col w-[70%]">
            <button className="bg-[#E1E1E1] text-[#878787] px-4 py-2 rounded-lg font-medium text-sm w-full text-left">Issue Date</button>
            <p className="text-[#878787] mt-2 text-sm px-2">{user.issueDate}</p>
          </div>
          <div className="flex flex-col w-[30%]">
            <button className="bg-[#E1E1E1] text-[#878787] px-4 py-2 rounded-lg font-medium text-sm w-full text-left">Amount</button>
            <p className="text-[#1CD37D] mt-2 font-semibold text-sm px-2">{user.amount}</p>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-foreground rounded-lg hover:bg-gray-300 transition-colors font-medium">Close</button>
        </div>
      </div>
    </div>
  );
}
