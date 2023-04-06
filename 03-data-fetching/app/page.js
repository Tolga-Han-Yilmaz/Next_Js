import React from "react";

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    // next: { revalidate: 10 }, // 10 s de bi sayfayı generate ediyor
  });
  return res.json();
};
export const getData2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  return res.json();
};
export const getData3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  return res.json();
};

async function HomePage() {
  const data = getData();
  const data2 = getData2();
  const data3 = getData3();

  const [...dataResult] = await Promise.all([data, data2, data3]);
  // const [dataResult1, dataResult2, dataResult3] = await Promise.all([
  //   data,
  //   data2,
  //   data3,
  // ]);
  console.log(dataResult);
  return (
    <div>
      Home Page : <br />
    </div>
  );
}

export default HomePage;
