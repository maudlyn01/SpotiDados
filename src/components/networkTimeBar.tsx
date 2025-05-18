// src/components/StatusBar.tsx

import { CellSignalFull } from "@phosphor-icons/react/dist/icons/CellSignalFull";

export const StatusBar = () => {
  const time = `${new Date().getHours()}:${String(
    new Date().getMinutes()
  ).padStart(2, "0")}`;

  return (
    <>
      <div className="absolute top-2 left-4 text-white text-sm">
        <CellSignalFull size={20} weight="fill" />
      </div>
      <div className="absolute top-2 right-4 text-white text-sm">
        {time}
      </div>
    </>
  );
};
