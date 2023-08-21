import { ContactForm } from "../components"
import styles from "../style"

const Contact = () => {
  return (
    <>
      <div className=" bg-[#14379A] w-full h-[500px] object-center text-center  flex justify-center items-center">
        <div className="">
          <h1 className="text-white font-LibreFranklin font-semibold text-[40px] heading">
          Book a free consultation on data management
          </h1>
          
          
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactForm/>
        </div>
      </div>
    </>
  )
}

export default Contact