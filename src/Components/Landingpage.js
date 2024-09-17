import React from "react";
import styles from "./Landingpage.module.css";
import NotesImage from "./Notes.png"

function Landingpage() {
  return (
    <div className={`${styles["background-wrapper"]}`}>
      <div className={`${styles.background}`}></div>
      <div className={`${styles.content}`}></div>
      <section className={styles.section1}>
        <div className={styles.flex}>
          <div
            className={`${styles.topleft} ${styles.flex} ${styles["justify-center"]} ${styles["flex-col"]}  ${styles["px-2"]}`}
          >
            <h1 className={`${styles["my-1"]}`}>
              Welcome to iNotes - Your personal notes app
            </h1>
            <p>Take notes, organize them, and access them anywhere</p>
          </div>
          <div className={styles.topright}>
            <img src={NotesImage} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
