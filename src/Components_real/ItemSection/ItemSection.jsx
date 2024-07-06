import React from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../Context/Content";

function ItemSection({ name, image, id }) {
  const navigate = useNavigate();
  const { textId, setTextId } = useMyContext();

  const handleClickText = (id) => {
    setTextId(id);
    navigate("/containt");
  };

  return (
    <div
      onClick={() => handleClickText(id)}
      className="py-2 border-2 border-solid border-orange-500 sm:m-1 flex flex-col justify-center items-center"
    >
      <img src={image} alt="image" className="w-[40%] rounded-[50%] mt-3" />
      <p className="text-orange-600 mt-3 text-xs">{name}</p>
    </div>
  );
}

export default ItemSection;
