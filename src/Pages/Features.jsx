import styles from "../style";
import { AboutAndImages, FeaturesSectionCard, JoinSection } from "../components";

const Features = () => {
  return (
    <>
      <div className=" bg-[#14379A] w-full h-[500px] object-center text-center  flex justify-center items-center">
        <div className="">
          <h1 className="text-white font-LibreFranklin font-semibold text-[70px]">
            Expect only the best from us.
          </h1>
          <p className="text-[#ccc] mt-6 text-[18px] font-LibreFranklin font-normal">
            As we are so concerned about the quality, We have implemented it in
            our <span className="text-white">EasyNAAC</span> tools also.{" "}
            <br /> <span className="text-white">EasyNAAC</span> is easy to
            use with a lot of unique features.
          </p>
          <button className="demo_btn mt-6 font-semibold">Get free demo</button>
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <FeaturesSectionCard/>
          <AboutAndImages/>
          <JoinSection/>
        </div>
      </div>
    </>
  );
};

export default Features;
