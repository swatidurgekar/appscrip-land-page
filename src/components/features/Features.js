import styles from "./Feature.module.css";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className={styles.firstfeature}>
        <div className={styles.firstfeature1}>
          <div className={styles.heading}>
            Unlock your abc earning potential
          </div>
          <div className={styles.paragraph}>
            `Are you ready to take your earning potential to the next level?With
            ABC you have multiple avenues to monetize your content
            seamlessly.From subscription and tips to merchandise sales and
            NFT's, ABC helps you diversify your revenue streams and maximize
            your income.`
          </div>
          <Image width={190} height={30} src="/mobile.svg" alt="mobile" />
        </div>
        <div className={styles.firstfeature1}>
          <div className={styles.heading}>
            Boost your sales with built in ecommerce
          </div>
          <div className={styles.paragraph}>
            `Take control of your brand and boost your sales with ABC's built-in
            e-commerce functionality. Showcase and sell your exclusive products,
            whether it's merchandise, digital downloads, or personalized
            experiences. Integrate your store effortlessly and turn your
            creative ideas into profitable ventures.`
          </div>
          <div className={styles.image}>
            <Image width={30} height={20} src="credit.svg" alt="credit"></Image>
            <Image
              alt="photo1"
              width={30}
              height={20}
              src="/assets/photo1.svg"
            ></Image>
            <Image
              alt="photo2"
              width={30}
              height={20}
              src="/assets/photo2.svg"
            ></Image>
            <Image
              alt="photo3"
              width={30}
              height={20}
              src="/assets/photo3.svg"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.secondfeature}>
        <div className={styles.secondfeature1}>
          <div className={styles.image}>
            <Image
              width={90}
              height={90}
              src="/assets/automation.svg"
              alt="automation"
            />
          </div>
          <div className={styles.heading}>
            ` Save Time with Automation and Efficiency`
          </div>
          <div className={styles.paragraph}>
            `Supercharge your content creation with ABC's automation tools.
            Streamline scheduling, multi-platform management, and more. Save
            time on repetitive tasks, focus on exceptional content.`
          </div>
        </div>
        <div className={styles.secondfeature1}>
          <div className={styles.image}>
            <Image
              width={90}
              height={90}
              src="/assets/community.svg"
              alt="community"
            />
          </div>
          <div className={styles.heading}>Join a Supportive Community</div>
          <div className={styles.paragraph}>
            `Join ABC's vibrant creator community. Connect with like-minded
            individuals, collaborate, and share experiences. Access mental
            health services and resources for personal and professional growth.`
          </div>
        </div>
        <div className={styles.secondfeature1}>
          <div className={styles.image}>
            <Image width={90} height={90} src="/assets/prize.svg" alt="prize" />
          </div>
          <div className={styles.heading}>
            ` Unlock Exclusive Opportunities and Prizes`
          </div>
          <div className={styles.paragraph}>
            `Enjoy ABC contests and challenges for valuable prizes. Showcase
            your exceptional talent and win business grants, scholarships, and
            more. Thrive on our platform with recognition and rewards.`
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
