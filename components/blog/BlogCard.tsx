import React, { useEffect } from 'react';
import styles from './BlogCard.module.css';
import { Card } from './BlogContentComponent';
import Image from 'next/image';

const descriptionLength = 200;
const formatDescription = (description: string) => {
  const tmp = description.substring(0, descriptionLength);
  return tmp + '...' + ' '.repeat(descriptionLength - tmp.length);
};

export default function BlogCard(props) {
  const cardData: Card = props.cardData;
  useEffect(() => {
   console.log(cardData)
  }, [])
  
  return (
    <div className={styles.container}>
      <div className={styles.outerCardContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.textContainer}>
            <div className={styles.cardTitle}>{cardData.title}</div>
            <div className={styles.cardDescription}>
              {formatDescription(cardData.description)}
            </div>
          </div>
        </div>
        <div className={styles.outerBottomContainer}>
          <div className={styles.bottomContainer}>
            <Image
              alt="profile picture"
              className={styles.profileImage}
              src={cardData.portraitUrl}
              width={40}
              height={40}
            />
            <div className={styles.bottomText}>{cardData.author}</div>
            <div className={styles.circle} />
            <div className={styles.bottomText}>
              {cardData.dateCreated.substring(0, 10)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
