import React from "react";

const Button = ({ styles , }) => (
  <button
    type="button"
    className={`py-4 px-6 font-AIranianSans font-bold text-[18px] tracking-normal text-primary bg-blue-gradient rounded-[20px] outline-none ${styles}`}
  >
    !از همینجا شروع کن
  </button>
);

export default Button;
