import styles from "../style";

const JoinSection = () => {
  return (
    <div
      className={`joinSection_container grid py-[100px] text-center ${styles.flexCenter} ${styles.boxWidth}`}
    >
      <div className="text-[35px] font-Montserrat font-semibold text-green-600">
        <h2>Party On</h2>
       
      </div>
      <div className="">
        <h2 className="text-[30px] font-Montserrat font-semibold text-[#141824]">Come join us .</h2>
        <h4 className="text-[18px] font-Montserrat font-semibold text-[#1418249d]">We together build it.</h4>
      </div>
      <div className="">
      <button className="demo_btn hover:text-[#141824]">Get free Demo</button>
      </div>
    </div>
  );
};

export default JoinSection;
