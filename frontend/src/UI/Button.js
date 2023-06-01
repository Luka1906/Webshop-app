
const Button = (props) => {
  return (
    <button
      type={props.type || "submit"}
      className={`${props.className} flex justify-center items-center font-semi-bold-lato  bg-white text-black tracking-wide hover:bg-slate-300 transition duration-150 active:scale-110`}
      onClick={props.onIncrease || props.onDecrease}
    >
      {props.children}
    </button>
  );
};

export default Button;
