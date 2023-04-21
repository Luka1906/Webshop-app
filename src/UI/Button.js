const Button = (props) => {
  return (
    <button
      type={props.type || "submit"}
      className=" flex items-center  bg-slate-100 px-9 py-2 rounded-md  uppercase lett tracking-wide "
    >
      {props.children}
    </button>
  );
};

export default Button;
