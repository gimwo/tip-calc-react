function Bill({ bill, onSetBill }) {
  return (
    <div>
      <p>
        How much was the bill?
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        ></input>
      </p>
    </div>
  );
}

export default Bill;
