import React from "react";
import { useMyContext } from "../Context/Content";

function Containt() {
  const { textId, setTextId } = useMyContext();
  return <div>Containt{textId}</div>;
}

export default Containt;
