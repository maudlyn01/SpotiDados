// src/components/StatusBar.tsx

import { BatteryHigh, CellSignalFull, WifiHigh} from "@phosphor-icons/react";

export const StatusBar = () => {
  const time = `${new Date().getHours()}:${String(
    new Date().getMinutes()
  ).padStart(2, "0")}`;

  return (
    <>
      <div className="absolute top-2 right-16 text-white text-sm">
        <CellSignalFull size={20} />
      </div>
      <div className="absolute top-2 right-10 text-white text-sm">
        <WifiHigh size={20} />
      </div>
      <div className="absolute top-2 right-4 text-white text-sm">
        <BatteryHigh size={20} weight="fill" />
      </div>
      <div className="absolute top-2 left-4 text-white text-sm" >
      {time} 
      </div>
    </>
  );
};
