import React from 'react';

// Keep the existing emphasis and line breaks while animating readable whole words.
export default function AnimatedTitle({ as: Tag = 'h2', children, className = '', ...props }) {
  let index = 0;
  const label = nodes => React.Children.toArray(nodes).map(node => typeof node === 'string' || typeof node === 'number' ? String(node) : React.isValidElement(node) ? node.type === 'br' ? ' ' : label(node.props.children) : '').join('');
  function split(nodes) {
    return React.Children.map(nodes, node => {
      if (typeof node === 'string' || typeof node === 'number') return String(node).split(/(\s+)/).map((word, wordIndex) => /^\s+$/.test(word) ? word : <i className="rp-title-word" aria-hidden="true" key={wordIndex}>{Array.from(word).map(char => <i className="rp-title-letter" key={index} style={{ '--letter-delay': (index++ * .026) + 's' }}>{char}</i>)}</i>);
      if (React.isValidElement(node) && node.props.children) return React.cloneElement(node, {}, split(node.props.children));
      return node;
    });
  }
  return <Tag {...props} className={('rp-letter-title ' + className).trim()} aria-label={props['aria-label'] || label(children).replace(/\s+/g,' ').trim()}>{split(children)}</Tag>;
}
