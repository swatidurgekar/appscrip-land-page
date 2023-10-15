"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/form/Form";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <>
      <section className={styles.section1}>
        <main className={styles.main}>
          <Navbar />
        </main>
        <div className={styles.partition}>
          <div className={styles.heading}>
            <h1>`A Creator's Paradise`</h1>
            <p>where creativity meats success.</p>
          </div>
          <Form />
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.heading2}>
          <h1>Elevate Your Craft</h1>
        </div>
        <Features />
      </section>
      <section className={styles.section3}>
        <div className={styles.actionword}>
          ` Don't miss out on ABC's incredible features and opportunities.`
        </div>
        <div className={styles.action}>
          <h1>Join us today and unlock your full potential as a creator</h1>
        </div>
        <div className={styles.join}>
          <button className={styles.joinnow}>Join now</button>
        </div>
      </section>
      <section className={styles.bannerSection}></section>
      <section className={styles.section4}>
        <div className={styles.frame1}>
          <div className={styles.frame1div1}>
            Ready to Cash in Your Connections? Join our affiliate programme
          </div>
          <div className={styles.frame1div2}>
            Join now and get
            <span className={styles.frame1div1span}> 7.5% </span> commission on
            all creator referrals for the entire year.
          </div>
          <div className={styles.button}>
            <button className={styles.earn}>Earn now</button>
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.frame2div1}>Join the ABC community</div>
          <div className={styles.frame2div2}>
            `Become part of a vibrant and supportive community of a like-minded
            creators by joining ABC's exclusive platform.`
          </div>
          <div className={styles.frame2div2}>
            Collaborate, learn and connect with fellow creators who share your
            passion for adult content creation.
          </div>
          <div className={styles.button}>
            <button className={styles.earn}>Learn More</button>
          </div>
        </div>
      </section>
      <section className={styles.section5}>
        <div className={styles.footerheading}>LOGO</div>
        <div>
          <div className={styles.footerheading}>Company</div>
          <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Login</li>
            <li>Signup</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div className={styles.footerheading}>Programs</div>
          <ul>
            <li>Affiliate Program</li>
            <li>Ambassador Program</li>
            <li>Partnership Program</li>
          </ul>
        </div>
        <div>
          <div className={styles.footerheading}>Policy</div>
          <ul>
            <li>Legal</li>
            <li>DMCA</li>
            <li>USC 2257</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <div className={styles.footerheading}>Follow Us</div>
          <div>
            <Image
              width={130}
              height={50}
              src="/assets/icons.svg"
              alt="icons"
            />
          </div>
        </div>
      </section>
    </>
  );
}
