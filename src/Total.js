function Total({ bill, userTip, friendTip }) {
  //Derived state
  const tip1 = userTip === 0 ? 0 : bill * (userTip / 100);
  const tip2 = friendTip === 0 ? 0 : bill * (friendTip / 100);
  const totalTip = (tip1 + tip2) / 2;

  return (
    <div>
      <h1>
        You pay ${bill + totalTip} (${bill} + ${totalTip.toFixed(2)} tip)
      </h1>
    </div>
  );
}

export default Total;
