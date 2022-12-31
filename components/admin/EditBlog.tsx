import React, { FormEventHandler, useState } from 'react';
import { marked } from 'marked';
import { Blog } from '../blog/BlogPage';
import styles from './EditBlog.module.css';
import { authorMapping, topics } from '../helpers/consts';

type BlogConstructor = {
  topic: string;
  title: string;
  description: string;
  author: string;
  markdown: String;
};

const markText = (text) => {
  var tmp = '';
  const arr = text.split('\\n').map((str) => str);
  for (let i = 0; i < arr.length; i++) {
    const tmp1 = arr[i] + '\n';
    tmp += tmp1;
  }
  let solution = marked(tmp, { sanitize: true });
  return { __html: solution };
};

export default function EditBlog(props) {
  const [topic, setTopic] = useState(topics[0]);
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Enter Description Here');
  const [author, setAuthor] = useState(authorMapping[0].author);
  const [markdown, setMarkdown] = useState('');
  const [status, setStatus] = useState('accessDenied');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading');
    if (
      topic === '' ||
      title === '' ||
      description === '' ||
      author === '' ||
      markdown === ''
    ) {
      setStatus('Failure');
    } else {
      const blogBody: BlogConstructor = {
        topic,
        title,
        description,
        author,
        markdown
      };
      try {
        const endpoint =
          '/api/blog/' +
          title.toLocaleLowerCase().replace(' ', '-');
        const resp = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogBody)
        });
        const json = await resp.json();
        console.log(json);
        if (!resp.ok) {
          setStatus('Failure');
        } else {
          setStatus('Success');
        }
      } catch (error) {
        setStatus('Failure');
      }
    }
  };

  return (
    <>
      
      {status === 'Loading' && (
        <div className={styles.assistContainer}>
          <h1> Loading </h1>
        </div>
      )}
      {status === 'Success' && (
        <div className={styles.assistContainer}>
          <h3>Yay a new blog was created!</h3>
          <button
            className={styles.buttonStyle}
            onClick={() => setStatus('writing')}
          >
            Return to Editor
          </button>
        </div>
      )}
      {status === 'Failure' && (
        <div className={styles.assistContainer}>
          <h3>Something Went Wrong!</h3>
          <button
            className={styles.buttonStyle}
            onClick={() => setStatus('writing')}
          >
            Return to Editor
          </button>
        </div>
      )}
      {status === 'writing' && (
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <label>Title</label>
            <input
              className={styles.textInput}
              type="text"
              placeholder={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description</label>
            <textarea
              name="textarea"
              className={styles.descriptionContainer}
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Author</label>
            <select
              className={styles.textInput}
              name="Author"
              onChange={(e) => setAuthor(e.target.value)}
            >
              {authorMapping.map((key) => {
                return (
                  <option key={key.author} value={key.author}>
                    {key.author}
                  </option>
                );
              })}
            </select>
            <label>Topic</label>
            <select
              className={styles.textInput}
              name="topic"
              onChange={(e) => setTopic(e.target.value)}
            >
              {topics.map((key) => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                );
              })}
            </select>
            <label>Markdown</label>
            <textarea
              name="textarea"
              className={styles.descriptionContainer}
              defaultValue={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
            <input
              className={styles.submitInput}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      )}
    </>
  );
}
