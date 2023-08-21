import { reviews } from "@/constants";
import ReviewCard from "./review-card";

export default function CustomerReviews() {
  return (
    <section id="customer-reviews" className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="mt-4 max-w-lg info-text m-auto text-center">
        Hear genuine stories from our satisifed customers about their insane
        expereinces.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, idx) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
}
