import React from "react";

const Cards = ({ icon, text }) => {
  return (
    <div className="max-w-[440px] max-h-[354px] py-[30px] px-[10px] rounded-[10px] bg-[#FAFAFA] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <img src={icon} className="mx-auto max-w-[100px] pt-[10px]" alt="" />
      {text}
    </div>
  );
};

export default Cards;
