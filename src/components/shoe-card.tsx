"use client";

import clsx from "clsx";
import Image from "next/image";

interface ShoeCardProps {
  shoe: any;
  changeBigShoeImage: any;
  bigShoeImage: any;
}

export default function ShoeCard({
  shoe,
  changeBigShoeImage,
  bigShoeImage,
}: ShoeCardProps) {
  const handleClick = () => {
    if (bigShoeImage !== shoe.bigShoe) {
      changeBigShoeImage(shoe.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "border-2 rounded-xl cursor-pointer",
        bigShoeImage === shoe.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      )}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={shoe.thumbnail}
          width={127}
          height={103}
          className="object-contain"
          alt="shoe collection"
        />
      </div>
    </div>
  );
}
