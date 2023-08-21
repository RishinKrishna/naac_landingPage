import { CarouselSection, FeaturesCards, JoinSection } from "../components";
import styles from "../style";

const Home = () => {
  return (
    <>
      <div className="home-banner-img bg-no-repeat object-center text-center bg-top bg-cover overflow-hidden flex justify-center items-center  pb-12">
        <div className="">
          <h1 className="text-white font-LibreFranklin font-semibold text-[65px] leading-[82px]">
            Its Your Turn to Take a Easy <br /> Step to Get NAAC <br />{" "}
            Accreditation
          </h1>
          <p className="text-white font-normal ">
            Accreditation We build your Empire.Through the Easy path ,We takes
            you to the Zenith.
          </p>
          <button className="demo_btn mt-5 font-semibold">Get free demo</button>
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <FeaturesCards />
          <CarouselSection />
          <JoinSection/>
        </div>
      </div>
    </>
  );
};

export default Home;
