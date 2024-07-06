import React from "react";
import ItemSection from "../ItemSection/ItemSection";
import AllTexts from "../../Storage/AllTexts";
function BookContainSection() {
  return (
    <div className="m-4">
      <div className="grid grid-cols-3 mb-[50px] ">
        {AllTexts.map((item, index) => (
          <ItemSection
            key={index}
            name={item.name}
            image={item.img}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default BookContainSection;
