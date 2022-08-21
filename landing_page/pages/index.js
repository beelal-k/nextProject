// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Switch from "@mui/material/Switch";
import { Button, Link, Container, TextField, Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
// import { sizing, borders } from '@mui/system'

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
              <Link href='/projects' underline='none' color="secondary" className={styles.links}>Pricing</Link>
              <Link href='/blog' underline='none' color="secondary" className={styles.links}>FAQ</Link>
              <Link href='/contact' underline='none' color="secondary" className={styles.links}>Contact</Link>
            </nav>
          </div>
          <div className={styles.headerRight}>
            <Link href='/login' underline='none' color="secondary" className={styles.links}>Login</Link>
            <Button variant='contained' className={styles.containedBtn}>Start Free Trial</Button>
          </div>
        </header>
        <section className={styles.main}>
          <div className={styles.mainLeft}>
            <h1 className={styles.moto}>The modern landing page<br />for<span className={styles.React}> React developer</span></h1>
            <p >The easiest way to build React landing page in seconds.<br />Save you time and focus on your product.</p>
            <TextField id='outlines-basic' variant="outlined" label="Enter your email address" size="small" className={styles.textInp} />
            <Button variant='contained' className={styles.containedBtn}>Start Free Trial</Button>
            <br />
            <div className={styles.inline}>
              <DoneIcon color='primary' className={styles.icons} />
              <p >No credit card required</p>
              <DoneIcon color='primary' className={styles.icons} />
              <p >14-day free trial</p>
              <DoneIcon color='primary' className={styles.icons} />
              <p >Cancel anytime</p>
            </div>
          </div>
          <Image src='/macWindow.png' width={600} height={300} className={styles.mainRight} />
        </section>


      </Container>

      <Container className={styles.secondSection}>
        <br />
        <br />
        <div className={styles.trusted}>
          <h1>Trusted by over 8000+ customers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div>
        <br />
        <br />
        <br />
        <Grid container className={styles.trusted2} spacing={12}>
          <Grid item xs={3}>
            <Image src='/netflixLogo.png' width={200} height={100} className={styles.customerLogo} />

          </Grid>
          <Grid item xs={3}>
            <Image src='/mongoDBlogo.png' width={200} height={100} className={styles.customerLogo} />
          </Grid>
          <Grid item xs={3}>
            <Image src='/reactLogo.png' width={300} height={100} className={styles.customerLogo} />
          </Grid>
          <Grid item xs={3}>
            <Image src='/vueLogo.png' width={100} height={100} className={styles.customerLogo} />
          </Grid>
          <Grid item xs={3}>
            <Image src='/nextLogo.png' width={200} height={100} className={styles.customerLogo} />
          </Grid>
          <Grid item xs={3}>
            <Image src='/angularLogo.png' width={200} height={100} className={styles.customerLogo} />
          </Grid>
          <Grid item xs={3}>
            <Image src='/svelteLogo.png' width={300} height={100} className={styles.customerLogo} />
          </Grid>
          <Grid item xs={3}>
            <Image src='/muiLogo.png' width={250} height={150} className={styles.customerLogo} />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />

      </Container>
      <Container className={styles.thirdSection} maxWidth='xl'>
        <div className={styles.tsLeft}>
          <span className={styles.primary}>Awesome feature</span>
          <h2>Your title here</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar libero enim, vel egestas odio rutrum sit amet. In a elit mollis, feugiat tortor quis, feugiat purus. Vestibulum condimentum neque quis arcu blandit facilisis.</p>
          <div className={styles.item}>
            <ViewInArIcon className={styles.tsIcons} fontSize="large" />
            <p><span className={styles.smolHeading}>Your title here</span><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar libero enim, vel egestas odio rutrum sit amet.</p>
          </div>
          <div className={styles.item}>
            <ViewInArIcon className={styles.tsIcons} fontSize="large" />
            <p><span className={styles.smolHeading}>Your title here</span><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar libero enim, vel egestas odio rutrum sit amet.</p>
          </div>
          <div className={styles.item}>
            <ViewInArIcon className={styles.tsIcons} fontSize="large" />
            <p><span className={styles.smolHeading}>Your title here</span><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar libero enim, vel egestas odio rutrum sit amet.</p>
          </div>
        </div>
        <div className={styles.tsRight}>
          <Image src='/presentationSVG.svg' width={500} height={400} />
        </div>
      </Container>

      <Container className={styles.fourthSection}>
        <div className={styles.fourLeft}>
          <Image src='/conferenceSVG.svg' width={500} height={400} />
        </div>
        <div className={styles.fourRight}>
          <span className={styles.primary}>Awesome feature</span>
          <h2>Your title here</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar libero enim, vel egestas odio rutrum sit amet.</p>
          <div className={styles.nestedFlex}>
            <div className={styles.fouritems}>
              <ViewInArIcon className={styles.tsIcons} fontSize="large" />
              <p><span className={styles.smolHeading}>Your title here</span><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar libero enim, vel egestas odio rutrum sit amet.</p>
            </div>
            <div className={styles.fouritems}>
              <ViewInArIcon className={styles.tsIcons} fontSize="large" />
              <p className={styles.smolHeading}>Your title here</p> 
              <p><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar libero enim, vel egestas odio rutrum sit amet.</p>
            </div>
          </div>
        </div>

      </Container>

    </>
  )
}
