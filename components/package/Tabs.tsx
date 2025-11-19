'use client';

export type TabType = 'All' | 'Approved' | 'Pending' | 'Rejected';

interface TabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs: TabType[] = ['All', 'Approved', 'Pending', 'Rejected'];

  return (
    <div className="flex mb-4 w-full px-4">
      {tabs.map((tab, index) => {
        let roundedClass = '';
        if (index === 0) roundedClass = 'rounded-l-xl';
        else if (index === tabs.length - 1) roundedClass = 'rounded-r-xl';

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full py-2 font-medium transition ${roundedClass} ${
              activeTab === tab
                ? 'bg-[#144D2A] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
