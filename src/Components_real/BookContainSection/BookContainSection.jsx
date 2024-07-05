import React from "react";
import ItemSection from "../ItemSection/ItemSection";
function BookContainSection() {
  return (
    <div className="m-4">
      <div className="grid grid-cols-3 mb-[50px] ">
        <ItemSection />
        <ItemSection />
        <ItemSection />
        <ItemSection />
        <ItemSection />
        <ItemSection />
        <ItemSection />
        <ItemSection />
        <ItemSection />
      </div>
    </div>
  );
}

export default BookContainSection;
