import Hero from "./component/Hero";
import Products from "./component/Product";
import Section from "./component/Section";
import Testimoni from "./component/Testimoni_One";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Section/>
      <Products/>
      <Testimoni/>
    </main>
  );
}
