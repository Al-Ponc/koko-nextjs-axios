"use client";
import Link from "next/link";
import styles from "./navegador.module.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import React, { useState } from "react";
import Image from "next/image";

export default function Navegador() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.navbarcontenedor}>
      <nav
        className={
          toggle ? `${styles.navbar} ${styles.expanded}` : `${styles.navbar}`
        }
      >
      <div className={styles.logocontenedor}>
        <Image
          src="/kokov.png"
          width="130"
          height="76"
          alt="koko"
          className={styles.koko}
        />
      </div>
        <div className={styles["toggle-icon"]} onClick={handleToggle}>
          {toggle ? (
            <Icon icon={x} size={28} />
          ) : (
            <Icon icon={menu} size={28} />
          )}
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/" className={styles.linki}>
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/productos" className={styles.linki}>
              PRODUCTOS
            </Link>
          </li>
          <li>
            <Link href="/recetas" className={styles.linki}>
              RECETAS
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className={styles.linki}>
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link href="/contacto" className={styles.linki}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
