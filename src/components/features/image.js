import styles from "./Feature.module.css";

const Image = () => {
  const images = ["kurta1.jpeg", "kurta2.jpg", "kurta3.jpg"];

  return (
    <div className={styles.image}>
      {images.map((image) => {
        return (
          <>
            <Image
              width={90}
              height={90}
              className={styles.img}
              src={`/${image}`}
              alt="first"
            />
            <img alt="rating" src="/rating.jpg" />
          </>
        );
      })}
    </div>
  );
};

export default Image;
