const Button = ({ label, click }) => {
  return (
    <button className="calc-btn" onClick={() => click(label)}>
      {label}
    </button>
  );
};

export default Button;
