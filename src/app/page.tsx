import CustomerReviews from "@/components/customer-reviews";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PopularProducts from "@/components/popular-products";
import Services from "@/components/services";
import SpecialOffer from "@/components/special-offer";
import Subscribe from "@/components/subscribe";
import SuperQuality from "@/components/super-quality";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <section className="xl:p-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
}
