
const Button = (props) => {
  return (
    <button
      type={props.type || "submit"}
      className={`${props.className} flex justify-center items-center  bg-white text-black tracking-wide`}
      onClick={props.onIncrease || props.onDecrease}
    >
      {props.children}
    </button>
  );
};

export default Button;
