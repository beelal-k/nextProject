import Image from 'next/image'
import styles from '../styles/Pricing.module.css'
import { Button, Link, Container, TextField, Grid } from '@mui/material';

const Pricing = () => {
    return (
        <>
            <Container maxWidth='xl' className={styles.headContainer}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <Image src='/logo.png' className={styles.logo} width={100} height={45} />
                        <h2>Starter</h2>
                        <nav className={styles.navbar}>
                            <Link href='/pricing' underline='none' color="secondary" className={styles.links}>Pricing</Link>
                            <Link href='/faq' underline='none' color="secondary" className={styles.links}>FAQ</Link>
                            <Link href='/contact' underline='none' color="secondary" className={styles.links}>Contact</Link>
                        </nav>
                    </div>
                    <div className={styles.headerRight}>
                        <Link href='/login' underline='none' color="secondary" className={styles.links}>Login</Link>
                        <Button variant='contained' className={styles.containedBtn}>Start Free Trial</Button>
                    </div>
                </header>
            </Container>
            <Container className={styles.mainContainer} maxWidth='xl'>
                <p className={styles.primary}>Pricing</p>
                <h1>Flexible Plans</h1>
                <section className={styles.priceFlex}>
                    <div className={styles.flexItem}>
                        <h4>FREE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p><span className={styles.price}>$0</span>/mo</p>
                        <Button variant='contained' className={styles.priceBtn}>Get Started</Button>
                    </div>
                    <div className={styles.flexItem}>
                        <h4>FREE</h4>
                    </div>

                </section>
            </Container>
        </>

    );
}

export default Pricing;