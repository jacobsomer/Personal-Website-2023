import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useWindowSize } from '../helpers/windowSize';
import styles from './BlogPage.module.css';
import { Article } from './MarkDown';
import Link from 'next/link';
import Head from 'next/head';

export type Blog = {
  topic: string;
  title: string;
  description: string;
  author: string;
  portraitUrl: string;
  dateCreated: string;
  lengthOfReadInMinutes: number;
  numberOfReads: number;
  markdown: String;
};

const imageURL= "/authors/jacob_somer.png"
export default function BlogPage(props) {
  const size = useWindowSize();

  const { router } = props;
  const [blog, setBlog]: any = useState('');

  const getBlogs = useCallback(async (slug: string) => {
    try {
      const endpoint = '/api/blog/' + slug;
      const resp = await fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const currentBlog = await resp.json();
      setBlog(currentBlog.data[0]);
    } catch (error) {
      console.log('error');
    }
  }, []);

  useEffect(() => {
    const slug = router.query.blogName;
    if (typeof slug === 'string') {
      getBlogs(slug);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>{blog.title || ''}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={blog.title || ''} />
        <meta property="og:title" content={blog.description || ''} />
        <meta property="og:description" content={blog.description || ''} />
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
      </Head>
      {!size.height ? (
        <div
          style={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'var(--primary)',
            height: 'fit-content'
          }}
        ></div>
      ) : (
        <div
          style={{
            width: '100%',
            minHeight: String(size.height - 60) + 'px',
            backgroundColor: 'var(--primary)',
            height: 'fit-content'
          }}
        >
          {blog && (
            <div className={styles.container}>
              <Link href={'/blog/topic/' + blog.topic.toLowerCase()}>
                <div className={styles.topicText}>{blog.topic + ' >'}</div>
              </Link>
              <div className={styles.blogContainer}>
                <div className={styles.titleText}>{blog.title}</div>
                <div className={styles.description}>{blog.description}</div>
                <div className={styles.bottomContainer}>
                  <Image
                    alt="profile picture"
                    className={styles.profileImage}
                    src={imageURL}
                    width={40}
                    height={40}
                  />
                  <div className={styles.circle} />
                  <div className={styles.dateCreated}>
                    {blog.dateCreated.substring(0, 10)}
                  </div>
                  <div className={styles.circle} />
                  <div className={styles.lengthOfReadInMinutes}>
                    {String(blog.lengthOfReadInMinutes) + ' minute read'}
                  </div>
                </div>
              </div>
              <div className={styles.markdownContainer}>
                {blog.markdown && <Article rawMarkDown={blog.markdown} />}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
