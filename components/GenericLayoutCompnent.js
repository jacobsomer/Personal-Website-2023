import React, { useEffect } from 'react';
import styles from './GenericLayoutComponent.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useWindowSize } from './helpers/windowSize';
import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useRouter } from 'next/router';

const isSmallWindow = (size) => {
  if (size.width < 762) {
    return true;
  }
  return false;
};

export default function GenericLayoutComponent(props) {
  const size = useWindowSize();
  const router = useRouter();
  const [menuClicked, _setMenuClicked] = useState(false);
  const setMenuClicked = (newMenuClicked) => {
    _setMenuClicked(newMenuClicked);
  };

  useEffect(() => {
    if (size > 762 && !menuClicked) {
      _setMenuClicked(false);
    }
  }, [menuClicked, size, size.width]);
  return (
    <div className={styles.appContainer}>
      {isSmallWindow(size) ? (
        <>
          <div className={styles.navbarContainer}>
            <div className={styles.contactContainer}>
              {!menuClicked ? (
                <Image
                  style={{ right: '0px', marginRight: '42px' }}
                  src="/menu.svg"
                  alt="Open Menu Button"
                  width={48}
                  height={48}
                  onClick={() => setMenuClicked(true)}
                />
              ) : (
                <>
                  <Image
                    style={{ right: '0px', marginRight: '42px' }}
                    src="/close.svg"
                    alt="Close Button"
                    width={48}
                    height={48}
                    onClick={() => setMenuClicked(false)}
                  />
                  {menuClicked ? (
                    <>
                      <div
                        className={styles.mobileNavbarContainer}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <RemoveScroll>
                        <div className={styles.scrollContainer}>
                          <div
                            style={{
                              position: 'fixed',
                              top: '60px',
                              width: '100vw',
                              height: String(size.height - 60) + 'px',
                              minHeight: '100vh',
                              zIndex: '2',
                              left: '0',
                              backgroundColor: '#0f172a',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              color: 'white',
                              overflow: 'scroll'
                            }}
                          >
                            <Link
                              className={styles.mobileNavbarLink}
                              onClick={() => setMenuClicked(false)}
                              href="/"
                            >
                              Home
                            </Link>
                            <Link
                              className={styles.mobileNavbarLink}
                              onClick={() => setMenuClicked(false)}
                              href="/work"
                            >
                              Work
                            </Link>
                            <Link
                              className={styles.mobileNavbarLink}
                              onClick={() => setMenuClicked(false)}
                              href="/blog"
                            >
                              Blog
                            </Link>
                            <Link
                              className={styles.mobileNavbarLink}
                              onClick={() => setMenuClicked(false)}
                              href="/about"
                            >
                              About
                            </Link>
                            <Link
                              className={styles.mobileNavbarLink}
                              href="https://calendly.com/somerjacob/30min"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Meet
                            </Link>
                            <Link href="https://github.com/jacobsomer">
                              <Image
                                className={styles.mobileNavbarLink}
                                src="/github.svg"
                                alt="Jacob's Github"
                                width={36}
                                height={36}
                              />
                            </Link>
                            <Link href="https://www.linkedin.com/in/jacob-somer/">
                              <Image
                                className={styles.mobileNavbarLink}
                                src="/linkedin.svg"
                                alt="Jacob's Linkedin Profile"
                                width={36}
                                height={36}
                              />
                            </Link>
                          </div>
                        </div>
                      </RemoveScroll>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.navbarContainer}>
            <Link className={styles.navbarLink} href="/">
              Home
            </Link>
            <Link className={styles.navbarLink} href="/work">
              Work
            </Link>
            <Link className={styles.navbarLink} href="/blog">
              Blog
            </Link>
            <Link className={styles.navbarLink} href="/about">
              About
            </Link>
          </div>
          <div className={styles.contactContainer}>
            <Link
              className={styles.meetButton}
              href="https://calendly.com/somerjacob/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Schedule Time{' '}
              {
                <Image
                  style={{ transform: 'translate(0,2px)' }}
                  src="/calendar.svg"
                  alt="Schedule Time with Jacob"
                  width={16}
                  height={16}
                />
              }{' '}
            </Link>
            <Link href="https://github.com/jacobsomer">
              <Image
                style={{ marginRight: '42px' }}
                src="/github.svg"
                alt="Jacob's Github"
                width={36}
                height={36}
              />
            </Link>

            <Link href="https://www.linkedin.com/in/jacob-somer/">
              <Image
                style={{ marginRight: '42px' }}
                src="/linkedin.svg"
                alt="Jacob's Linkedin Profile"
                width={36}
                height={36}
              />
            </Link>
          </div>
          <div className={styles.navbarLine} />
        </>
      )}
      {<props.innerComponent router={router} />}
    </div>
  );
}
