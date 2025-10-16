'use client';
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface StarRatingProps {
  rating: number;
  editable?: boolean;
  onRate?: (value: number, e: React.MouseEvent<HTMLSpanElement>) => void;
}

export default function StarRating({ rating, editable = false, onRate }: StarRatingProps) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(rating);

  const handleClick = (value: number, e: React.MouseEvent<HTMLSpanElement>) => {
    if (!editable) return;
    const newValue = selected === value ? 0 : value; // toggle rating
    setSelected(newValue);
    onRate?.(newValue, e);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= (hovered || selected);
    stars.push(
      <span
        key={i}
        onMouseEnter={() => editable && setHovered(i)}
        onMouseLeave={() => editable && setHovered(0)}
        onClick={(e) => handleClick(i, e as React.MouseEvent<HTMLSpanElement>)}
        className={`cursor-pointer inline-block text-2xl ${filled ? "text-yellow-400" : "text-gray-300"}`}
      >
        {filled ? <AiFillStar /> : <AiOutlineStar />}
      </span>
    );
  }

  return <div>{stars}</div>;
}
