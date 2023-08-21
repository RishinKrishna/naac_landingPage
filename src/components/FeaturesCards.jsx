import { serviceCard } from "../constants";
import styles from "../style";

const FeaturesCards = () => {
  return (
    <section id="services" className={`services container section mb-12 `}>
      <h2
        className={`text-[#141824] flex justify-center font-LibreFranklin font-semibold text-[27px] py-[80px]`}
      >
        Our 3 EasyNAAC unique features that helps you build your leads.
      </h2>

      <div
        className={`services_container grid  ${styles.flexStart} ${styles.boxWidth}`}
      >
        {serviceCard.map(({ id, image, title, description }) => {
          return (
            <div
              className="services_card h-[250px] flex flex-col justify-center items-center"
              key={id}
            >
              <img src={image} alt="" className="w-[65px]  items-center" />
              <h3 className="services_title text-[22px] mt-4 font-semibold text-[#141824] hover:text-[#990033]">
                {title}
              </h3>
              <p className="services_description text-[16px] mt-3 text-[#141824]">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesCards;
