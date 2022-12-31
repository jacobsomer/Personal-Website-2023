import React, { useCallback, useEffect, useState } from 'react';
import { useWindowSize } from '../helpers/windowSize';
import Link from 'next/link';
import BlogCard from './BlogCard';
import styles from './BlogContentComponent.module.css';
import { authorMapping, topics as topicNames } from '../helpers/consts';
import Head from 'next/head';

export type Card = {
  topic: string;
  title: string;
  description: string;
  author: string;
  dateCreated: string;
  lengthOfReadInMinutes: string;
  slug: string;
  portraitUrl: string;
};

function getTopicFromQueryString(topic: string) {
  return topicNames.filter(
    (t) =>
      t.toLocaleLowerCase() ===
      topic.toLocaleLowerCase().replaceAll('-', ' ').replaceAll('?', '')
  )[0];
}
export default function BlogContentComponent(props) {
  const size = useWindowSize();
  const { router } = props;
  const [blogCards, setBlogCards]: any = useState(undefined);
  const [topics, setTopics]: any = useState(undefined);
  const [topic, setTopic] = useState('');
  const getCards = useCallback(async (topic: string | undefined) => {
    try {
      let endpoint = '/api/blogs';
      if (topic !== undefined) {
        let requestTopic = getTopicFromQueryString(topic);
        endpoint = endpoint + '?topic=' + requestTopic;
      }
      const resp = await fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const currentBlogs = await resp.json();
      var tmpBlogs: Card[] = [];
      const topicSet = new Set();
      for (let i = 0; i < currentBlogs.data.length; i++) {
        const tmp = currentBlogs.data[i];
        const obj = Object.assign(tmp, {
          portraitUrl: authorMapping.filter(
            (e) => e.author === currentBlogs.data[i].author
          )[0].url
        });
        tmpBlogs.push(obj);
        topicSet.add(tmp.topic);
      }
      setTopics(Array.from(topicSet));
      setBlogCards(tmpBlogs as Card[]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    setTopic(router.query.topic || '');
    getCards(router.query.topic);
  }, [router]);

  return (
    <>
      <Head>
        <title>{"Jacob Somer's Blog"}</title>
        <meta
          name="description"
          content={
            "Here is blog that includes Jacob Somer's opinions on tech, AI, and the future of humanity"
          }
        />
        <meta property="og:title" content={"Jacob Somer's Blog"} />
        <meta
          property="og:description"
          content={
            "Here is blog that includes Jacob Somer's opinions on tech, AI, and the future of humanity"
          }
        />
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
      </Head>
      {size.height && (
        <div
          style={{
            width: '100vw',
            height: 'fit-content',
            minHeight: String(size.height - 60) + 'px',
            backgroundColor: 'var(--primary)'
          }}
        >
          {blogCards && (
            <div className={styles.blogContainer}>
              {topic === '' && (
                <>
                  <div className={styles.title}>Blog</div>
                  <div className={styles.topicTitle}>Topics</div>
                  <div className={styles.topicOuterContainer}>
                    <div className={styles.topicContainer}>
                      {topics.map((item) => {
                        return (
                          <Link
                            key={item}
                            href={
                              '/blog/topic/' +
                              item.toLocaleLowerCase().replace(' ', '-')
                            }
                          >
                            <div className={styles.topic}>{item}</div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
              {topic !== '' && (
                <div className={styles.title}>
                  {getTopicFromQueryString(topic) + ' Blog'}
                </div>
              )}
              <div className={styles.cardContainer}>
                {blogCards.map((cardData) => {
                  return (
                    <Link key={cardData.slug} href={'/blog/' + cardData.slug}>
                      <BlogCard cardData={cardData} />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
