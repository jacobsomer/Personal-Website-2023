import React from 'react';
import { useWindowSize } from './helpers/windowSize';
import styles from './HomeContentComponent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function HomeContentComponent(props) {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>{'Jacob Somer Personal Website Home Page'}</title>
        <meta
          name="description"
          content={
            "Here is the Home Page for Jacob Somer's Personal Website and Blog"
          }
        />
        <meta
          property="og:title"
          content={'Jacob Somer Personal Website Home Page'}
        />
        <meta
          property="og:description"
          content={
            "Here is the Home Page for Jacob Somer's Personal Website and Blog"
          }
        />
      </Head>

      <div className={styles.homeContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.titleText}>Hey, I am Jacob</div>
          <div className={styles.descriptionText}>
            Student, Coder, and Aspiring Builder.{' '}
          </div>

          <Link
            href="https://calendly.com/somerjacob/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.letschatbutton}>
              {"Let's Build Together"}
            </div>
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <div
            style={{
              position: 'relative',
              height: String(size.height - 60) + 'px'
            }}
          >
            <div className={styles.imageContainer}>
              <Image
                alt="Image of Jacob Somer"
                src="/portrait.jpg"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
