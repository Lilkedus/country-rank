import { Brightness6Rounded } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Ranks" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
    setTheme(localStorage.getItem("theme"));
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <img src="/logo.svg" alt="Logo" style={{ cursor: "pointer" }} />
        </Link>
        <button className={styles.themeSwitcher} onClick={toggleTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Made with ♥ by Lilkedus</footer>
    </div>
  );
}

export default Layout;