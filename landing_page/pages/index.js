import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Switch from "@mui/material/Switch";
import { Button, Link, Container, Grid } from '@mui/material';

export default function Home() {

  // const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Container maxWidth="" className={styles.firstSection}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <Image src='/logo.png' className={styles.logo} width={100} height={45} />
            <h2>Starter</h2>
            <nav className={styles.navbar}>
              <Link href='/projects' underline='none' color="secondary" className={styles.links}>Products</Link>
              <Link href='/blog' underline='none' color="secondary" className={styles.links}>Blog</Link>
              <Link href='/contact' underline='none' color="secondary" className={styles.links}>Contact</Link>
            </nav>
          </div>
          <div className={styles.headerRight}>
            <Link href='/login' underline='none' color="secondary" className={styles.links}>Login</Link>
            <Button variant='contained' className={styles.containedBtn}>Start Free Trial</Button>
          </div>
        </header>
        <section>
            <h1>The modern landing page<br/>for React developer</h1>
        </section>
        
      </Container>
    </>
  )
}
