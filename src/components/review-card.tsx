import Image from "next/image";
import { star } from "../../public/icons";

interface ReviewCardProps {
  imgURL: any;
  customerName: string;
  rating: number;
  feedback: string;
}

export default function ReviewCard({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="customer"
        width={120}
        height={120}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={star}
          alt="star for rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />

        <p className="text-slate-gray font-montserrat text-xl">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
}
