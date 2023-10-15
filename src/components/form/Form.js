import styles from "./Form.module.css";

const Form = () => {
  return (
    <>
      <div>
        <form className={styles.form}>
          <label htmlFor="fname">First name:</label>
          <input type="text" />
          <label htmlFor="lname">Last name:</label>
          <input type="text" />
          <label htmlFor="email">Email:</label>
          <input type="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" />
        </form>
      </div>
    </>
  );
};

export default Form;
