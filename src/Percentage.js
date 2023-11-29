function Percentage({ tip, onSetTip, children }) {
  return (
    <div>
      <p>
        {children}
        {/* Controlled elements*/}
        <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
          <option value={0}>I am dissatisfied... (0%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </p>
    </div>
  );
}

export default Percentage;
