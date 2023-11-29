import { useState } from "react";
import Bill from "./Bill";
import Percentage from "./Percentage";
import Total from "./Total";
import ResetBtn from "./ResetBtn";

export default function App() {
  const [bill, setBill] = useState("");
  const [userTip, setUserTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBill("");
    setUserTip(0);
    setFriendTip(0);
  }

  return (
    <>
      <Bill bill={bill} onSetBill={setBill} />
      <Percentage tip={userTip} onSetTip={setUserTip}>
        How did you like the service?
      </Percentage>
      <Percentage tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <Total bill={bill} userTip={userTip} friendTip={friendTip} />
          <ResetBtn onReset={handleReset} />
        </>
      )}
    </>
  );
}
