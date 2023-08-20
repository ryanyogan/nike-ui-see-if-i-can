import Image from "next/image";
import { shoe8 } from "../../public/images";
import Button from "./button";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providng you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex justify-center items-center flex-1">
        <Image
          src={shoe8}
          alt="shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}
