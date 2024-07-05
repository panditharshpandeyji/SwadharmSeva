import React from "react";

function ItemSection() {
  return (
    <div className="py-2 border-2 border-solid border-orange-500 sm:m-1 flex flex-col justify-center items-center">
      <img
        src="https://wallpapers.com/images/featured/lord-hanuman-hd-4vo187ifrqxrim0q.jpg"
        alt="Hanuman chalisa image"
        className="w-[40%] rounded-full mt-3"
      />
      <p className="text-orange-600 mt-3 text-xs">Hanuman Chalisa</p>
    </div>
  );
}

export default ItemSection;
