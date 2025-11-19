'use client';

import { Eye } from 'lucide-react';
import { useState } from 'react';
import { ViewModal } from './ViewModal';
import { TabType } from './Tabs';
import { RequestItem } from './types';


interface RequestsTableProps {
  data: RequestItem[];
  activeTab: TabType;
}

export function RequestsTable({ data, activeTab }: RequestsTableProps) {
  const filteredData = activeTab === 'All' ? data : data.filter(d => d.status === activeTab);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RequestItem | null>(null);

  const handleView = (item: RequestItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-fixed w-full border-separate border-spacing-x-4">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left px-4 py-2 font-medium text-sm">Users Name</th>
              <th className="text-left px-4 py-2 font-medium text-sm">Item Title</th>
              <th className="text-left px-4 py-2 font-medium text-sm">Model</th>
              <th className="px-4 py-2 font-medium text-sm">NSN</th>
              <th className="px-4 py-2 font-medium text-sm">LIN</th>
              <th className="px-4 py-2 font-medium text-sm">EIC</th>
              <th className="px-4 py-2 font-medium text-sm">Manual</th>
              <th className="px-4 py-2 font-medium text-sm">Status</th>
              <th className="px-4 py-2 font-medium text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-4 px-4 text-left">{item.requestUser}</td>
                <td className="py-4 px-4 text-left">{item.item}</td>
                <td className="py-4 px-4 text-left">{item.model}</td>
                <td className="py-4 px-4">{item.nsn}</td>
                <td className="py-4 px-4">{item.lin}</td>
                <td className="py-4 px-4">{item.eic}</td>
                <td className="py-4 px-4">{item.manual}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : item.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button
                    className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] rounded-full text-black hover:bg-gray-200 transition"
                    onClick={() => handleView(item)}
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedItem && (
        <ViewModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          itemName={selectedItem.item}
          status={selectedItem.status}
        />
      )}
    </>
  );
}
