import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.navitems}>
          <div className={styles.navtabs}>
            <div>Home</div>
            <div>About Us</div>
            <div>Our Blog</div>
            <div>Support</div>
            <div>Affiliate</div>
            <div>Programs</div>
          </div>
          <div className={styles.loginsignup}>
            <div>Login</div>
            <div>Sign Up</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
