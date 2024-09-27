import React from "react";

interface CardsProps {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}

const Cards: React.FC<CardsProps> = ({ children, bg, className }) => {
  return <div className={`${bg} ${className} p-4 rounded-lg`}>{children}</div>;
};

export default Cards;
