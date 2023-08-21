import styles from "../style";

const AboutAndImages = () => {
  return (
    <div
      className={`about_images_container grid py-[150px] text-center ${styles.flexCenter} ${styles.boxWidth}`}
    >
      <div className="">
        <img
          src="https://www.naac.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYour-Success-is-Our-Goal-scaled.9c0497bd.webp&w=3840&q=75"
          alt=""
          className="rounded-[10px]"
        />
      </div>
      <div className="">
        <h2 className="text-[40px] font-Montserrat font-semibold">Our goal</h2>
        <p className="text-start text-[18px] mt-5">
          Our goal is to provide support to the clients and ease their
          accreditation process using our very secured and safe ,Easiest tools
          that anybody can manage.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-[40px] font-Montserrat font-semibold">
          Our partners
        </h2>
        <p className="text-start text-[18px] mt-5">
          The best institutions have already partnered with us to improve their
          grades.With EasyNAAC , it have seen a quick increase in their leads.
        </p>
      </div>
      <div className="mt-5">
        <img
          src="https://www.naac.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funi_students.48c0ab10.jpg&w=1200&q=75"
          alt=""
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default AboutAndImages;
