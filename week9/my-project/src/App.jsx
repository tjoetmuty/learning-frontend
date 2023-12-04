import React, { useEffect, useState } from "react";
import { Card } from "antd";
const { Meta } = Card;
import "./App.css";

function App() {
  const [music, setMusic] = useState({});
  const getMusic = () => {
    fetch("http://localhost:3001/songs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMusic(data);
      });
  };

  useEffect(() => {
    getMusic();
  }, []);
  return (
    <>
      <div className="flex justify-center gap-6">
        {music?.songs?.map((item) => (
          <Card
            key={item?.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={item?.img_url} />}
          >
            <Meta title={item?.title} description={item?.artist[0]} />
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
