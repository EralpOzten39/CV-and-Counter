import react, { useState } from "react";

const Clicker = () => {
  let tikSayisi = 0;

  const [tikSay, setCounter] = useState(tikSayisi);

  const clickHandlerInc = () => {
    setCounter(tikSay + 1);
    console.log(tikSay);
  };

  return (
    <div>
      <h4>Düğmeye Tıklama Sayınız</h4>
      <h2>{tikSay}</h2>
      <button onClick={clickHandlerInc}>Tıkla</button>
    </div>
  );
};

export default Clicker;
