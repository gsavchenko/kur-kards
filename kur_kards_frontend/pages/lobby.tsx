import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

import styles from "../styles/Home.module.css";

const Lobby: NextPage = () => (
  <div className={styles.main}>
    <h1>Lobby</h1>
    <Link className={styles.title} href="/">
      Home
    </Link>
  </div>
);

export default Lobby;
