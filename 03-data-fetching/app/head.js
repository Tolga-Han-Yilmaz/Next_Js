import React from "react";
import { getData } from "./page";

async function Head() {
  const data = await getData();
  return <title>{data.title}</title>;
}

export default Head;
