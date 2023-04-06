"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("initial");

  useEffect(() => {
    setMessage("use effect manipule etti");
    console.log("useeffect");
  }, []);
  console.log("homepage");
  return (
    <div>
      Home Page
      <br /> 
      <h2>{message}</h2>
    </div>
  );
}
