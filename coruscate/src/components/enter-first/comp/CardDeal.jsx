import { card } from "../../../assets";
import styles, { layout } from "./style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Unify. Contemplate. Elevate. <br className="sm:block hidden" />  A Symphony of Synergy!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Create meaningful connections, collaborate on diverse projects, and cultivate an environment 
      where every voice is heard and valued. Join us in building a vibrant and inclusive college 
      community where everyone can thrive and grow together.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
