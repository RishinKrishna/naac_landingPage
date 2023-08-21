import { allCards } from "../constants";
import styles from "../style";

const FeaturesSectionCard = () => {
  return (
    <section id="services" className={`services container section mb-12 `} >
      <h2
        className={`text-[#141824] flex justify-center font-LibreFranklin font-semibold text-[25px] py-[80px]`}
      >
       Our 3 EasyNAAC unique features that helps you build your leads.
      </h2>

      <div className={`featureCard_container grid  ${styles.flexStart} ${styles.boxWidth}`} >
        {allCards.map(({id, image , title ,description}) =>{
          return (
            <div className="services_card h-[300px] mb-10 flex flex-col justify-evenly items-center" key={id}>
              <img src={image} alt="" className="w-[65px]  items-center" />
              <h3 className="services_title text-[22px] mt-4 font-semibold text-[#141824] hover:text-[#990033]">
                {title}
              </h3>
              <p className="services_description text-[16px] mt-3 text-[#141824]">
                {description}
              </p>
            </div>
        )
        })}
      </div>
    </section>
  );
};

export default FeaturesSectionCard;
