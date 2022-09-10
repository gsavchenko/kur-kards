import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.main}>
    <h1>Welcome to Kur Kards!</h1>
    <Link className={styles.title} href="/lobby">
      Play Game!
    </Link>
    <Link className={styles.title} href="/">
      About
    </Link>
  </div>
);

export default Home;
