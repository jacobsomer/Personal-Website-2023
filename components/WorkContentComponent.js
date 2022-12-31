import { useWindowSize } from './helpers/windowSize';
import styles from './WorkContentComponent.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function WorkContentComponent() {
  const size = useWindowSize();
  return (
    <>
      <Head>
        <title>{'Jacob Somer Personal Website Work Showcase Page'}</title>
        <meta
          name="description"
          content={
            "Here is a Page for Jacob Somer's Personal Website that showcases his technical work."
          }
        />
        <meta
          property="og:title"
          content={'Jacob Somer Personal Website Work Showcase Page'}
        />
        <meta
          property="og:description"
          content={
            "Here is a Page for Jacob Somer's Personal Website that showcases his technical work."
          }
        />
      </Head>
      <div
        style={{
          position: 'absolute',
          zIndex: '-1',
          top: '60px',
          width: '100%'
        }}
      >
        <div
          style={{
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'var(--primary)',
            minHeight: String(size.height - 60) + 'px'
          }}
        >
          <h2
            style={{
              position: 'relative',
              color: 'white',
              width: '100%',
              textAlign: 'center'
            }}
          >
            AI Samples
          </h2>
          <div className={styles.imageContainer}>
            <div>
              <div className={styles.titleText}>Body Tracking</div>
              <Image
                alt="MoveNet AI"
                src="https://frdnoxefcxhbqneflzqj.supabase.co/storage/v1/object/sign/images/dance_vid.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZGFuY2VfdmlkLmdpZiIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDUzNzY3MywiZXhwIjoxOTg1ODk3NjczfQ.57AwssQco7o4h-3-UIJsKZDxoopMxvkLbvblbglXzmI"
                width={300}
                height={400}
                className={styles.image}
              />
            </div>
            <div>
              <div className={styles.titleText}>Monocular Depth Esitmation</div>
              <Image
                alt="Distance AI"
                src="https://frdnoxefcxhbqneflzqj.supabase.co/storage/v1/object/sign/images/distance.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZGlzdGFuY2UuZ2lmIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwNjY1NjM5LCJleHAiOjE5ODYwMjU2Mzl9.eE3EyPLRB6ORyK2Gwvh4Aro34Rt19ePTUMESwKd9yc8"
                width={300}
                height={400}
                className={styles.image}
              />
            </div>
            <div>
              <div className={styles.titleText}>Face Tracking</div>
              <Image
                alt="Face Recognition"
                src="https://frdnoxefcxhbqneflzqj.supabase.co/storage/v1/object/sign/images/face_recognition.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZmFjZV9yZWNvZ25pdGlvbi5naWYiLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzA4ODY2MjIsImV4cCI6MTk4NjI0NjYyMn0.SmxEFzs7cDOzzgjscOScX0mC_CIbHfoF_ollKRmBWkg&t=2022-12-12T23%3A10%3A22.700Z"
                width={300}
                height={400}
                className={styles.image}
              />
            </div>
            <div>
              <div className={styles.titleText}>Style Gan</div>
              <Image
                alt="Style Gan"
                src="https://frdnoxefcxhbqneflzqj.supabase.co/storage/v1/object/sign/images/style_transfer.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3R5bGVfdHJhbnNmZXIuZ2lmIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwODg2MTY5LCJleHAiOjE5ODYyNDYxNjl9.T27s6-P8PeJbV5MecLUm8QKGKiRrbHGrhU6C-SZTcww"
                width={300}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
