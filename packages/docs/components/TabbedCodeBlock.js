import { stripIndent } from 'common-tags';
import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Editor from '@monastic.panic/component-playground/Editor';


function unescape(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function TabbedCodeBlock({ children }) {
  return (
    <Tabs defaultActiveKey={0}>
      {React.Children.map(children, ({ props }, idx) => {
        return (
          <Tab title={props.title} eventKey={idx}>
            <Editor
              codeText={stripIndent([unescape(props.children)])}
              mode={props.lang || 'jsx'}
              lineWrapping
              theme="one-light"
              readOnly="nocursor"
              className={'pg-code-section'}
            />
          </Tab>
        )
      })}
    </Tabs>
  );
}

export default TabbedCodeBlock;