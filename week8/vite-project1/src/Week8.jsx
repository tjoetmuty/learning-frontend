/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const people = [
  {
    id: 1,
    name: "muty",
  },
  {
    id: 2,
    name: "cut muty",
  },
  {
    id: 3,
    name: "tjoet muty",
  },
  {
    id: 4,
    name: "tj muty",
  },
];

const Week8 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return "loading...";
  if (error) return "error!";
  return (
    <div>
      {data.slice(0, 3).map((item) => {
        return (
          <div
            key={item?.id}
            style={{ background: "green", padding: 4, margin: 4 }}
          >
            <h1>{item?.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Week8;
