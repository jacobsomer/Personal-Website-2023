import { useWindowSize } from './helpers/windowSize';
import Image from 'next/image';
import styles from './AboutContentComponent.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function AboutContentComponent() {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>{'Jacob Somer About Page'}</title>
        <meta
          name="description"
          content={
            "Here is an About Page that includes Jacob Somer's Tech Resume"
          }
        />
        <meta property="og:title" content={'Jacob Somer About Page'} />
        <meta
          property="og:description"
          content={
            "Here is an About Page that includes Jacob Somer's Tech Resume"
          }
        />
      </Head>

      <div
        style={{
          position: 'absolute',
          zIndex: '-1',
          top: '60px',
          width: '100%',
          backgroundColor: 'var(--primary)',
          height: String(size.height - 60) + 'px'
        }}
      >
        <div className={styles.AboutContentComponent}>
          <h2 className={styles.titleContainer}>Hi I am Jacob</h2>
          <div className={styles.textContainer}>
            I am an experienced software engineer with an interest in building
            solutions to real-world problems. Recently, I have been traveling to
            various places in the world to learn about the state-of-the-art in
            machine learning, fintech, and general software development. When I
            get back from traveling, I plan on writing numerous blog articles +
            tutorials to share my learnings from traveling abroad.
          </div>
          <Link
            className={styles.letschatbutton}
            href="/Resume.pdf"
            rel="noopener noreferrer"
          >
            <div>{'View my Resume'}</div>
          </Link>
          <Image
            alt="Image of Jacob Somer"
            src="/aboutImage.png"
            width={200}
            height={400}
            className={styles.imageContainer}
          ></Image>
        </div>
      </div>
    </>
  );
}
