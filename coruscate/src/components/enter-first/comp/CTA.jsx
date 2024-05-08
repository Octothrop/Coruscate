import styles from "./style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Into your spaceships Join us Now !!</h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
      A world where connections are forged in the heart of the universe, where collaboration is the language of the stars, 
      and where growth is as infinite as the galaxies.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
