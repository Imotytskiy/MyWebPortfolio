import React, { useState } from "react";
import Button from "../Button/Button";

const smiles = [
  {
    id: "1",
    smile: "😁",
    vote: 0,
  },
  {
    id: "2",
    smile: "😃",
    vote: 0,
  },
  {
    id: "3",
    smile: "😄",
    vote: 0,
  },
  {
    id: "4",
    smile: "😅",
    vote: 0,
  },
  {
    id: "5",
    smile: "😆",
    vote: 0,
  },
];

export default function Smilelist() {
  const [data, setData] = useState(smiles);
  const [winnerSmile, setWinnerSmile] = useState(null);

  const smileClick = (smilesId) => {
    const cloneData = [...data];
    const smile = cloneData.find((p) => p.id === smilesId);
    if (smile) {
      smile.vote += 1;
      setData(cloneData);
    }
  };

  const maxVote = Math.max(...data.map((smile) => smile.vote));
  const smileObj = data.find((smile) => smile.vote === maxVote);
  const drawVotes = data.filter(
    (smile) => smile.vote === maxVote && smile.vote !== 0
  ).length;

  const handleClick = () => {
    if (drawVotes > 1) {
      alert("Однакова кількість голосів, повторне голосування");
      window.location.reload();
    }
    setWinnerSmile(smileObj);
  };

  return (
    <div className="Smilelist">
      <h1>
        {winnerSmile && winnerSmile.vote > 0 && drawVotes < 2
          ? `ПЕРЕМОЖЕЦЬ: ${winnerSmile.smile} з кількістю голосів ${winnerSmile.vote}`
          : "SMILES"}
      </h1>
      {data.map((smile) => (
        <p className="Smile" key={smile.id}>
          {smile.smile}
          <button className="Vote-Button" onClick={() => smileClick(smile.id)}>
            {smile.vote}
          </button>
        </p>
      ))}
      <Button onClick={handleClick}>SHOW RESULT</Button>
    </div>
  );
}
