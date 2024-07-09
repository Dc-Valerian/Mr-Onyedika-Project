import Discount from "../Discount/Discount";
import EditorPick from "../HomePage/EditorPick/EditorPick";
import Hero from "../HomePage/Hero/Hero";
import WhyChooseUs from "../HomePage/WhyChooseUs/WhyChooseUs";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <EditorPick/>
      <WhyChooseUs/>
      <Discount />
    </div>
  );
};

export default HomeScreen;
