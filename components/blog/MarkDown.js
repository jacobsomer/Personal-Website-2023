import React from 'react';
import { marked } from 'marked';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rawInput: props.rawMarkDown };
  }

  componentDidMount() {
    const x = this.state.rawInput;
  }

  markText(text) {
    var tmp = '';
    const arr = text.split('\\n').map((str) => str);
    for (let i = 0; i < arr.length; i++) {
      const tmp1 = arr[i] + '\n';
      tmp += tmp1;
    }
    let solution = marked(tmp, { sanitize: true });
    return { __html: solution };
  }

  render() {
    return (
      <>
        <div
          style={{
            color: 'var(--lightgrey)',
            lineHeight: '1.6'
          }}
          dangerouslySetInnerHTML={{ __html: this.state.rawInput }}
        />
      </>
    );
  }
}
