import React from "react";

export const ListboxWrapper = ({ children }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-divider bg-[#212121]">
    {children}
  </div>
);

export default ListboxWrapper;
