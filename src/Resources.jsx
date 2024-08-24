import React from 'react';

const resources = [
  {
    title: 'Code Style Guides',
    links: [
      { href: 'https://google.github.io/styleguide/jsguide.html', text: 'Google JavaScript Style Guide' },
      { href: 'https://airbnb.io/javascript/', text: 'Airbnb JavaScript Style Guide' },
    ],
  },
  {
    title: 'Linters and Formatters',
    links: [
      { href: 'https://eslint.org/', text: 'ESLint' },
      { href: 'https://prettier.io/', text: 'Prettier' },
    ],
  },
  {
    title: 'Testing Frameworks',
    links: [
      { href: 'https://jestjs.io/', text: 'Jest' },
      { href: 'https://mochajs.org/', text: 'Mocha' },
    ],
  },
  {
    title: 'Version Control',
    links: [
      { href: 'https://git-scm.com/', text: 'Git' },
    ],
  },
  {
    title: 'Documentation Tools',
    links: [
      { href: 'https://jsdoc.app/', text: 'JSDoc' },
      { href: 'https://typedoc.org/', text: 'TypeDoc' },
    ],
  },
];

function Resources() {
  return (
    <div className="container">
      <h1>Resources</h1>
  <p>This section provides valuable resources to help you write better and more maintainable code.</p>
      {resources.map((resource) => (
        <React.Fragment key={resource.title}>
          <h2>{resource.title}</h2>
  <ul className="list-group">
            {resource.links.map((link) => (
              <li className="list-group-item" key={link.href}>
                <a href={link.href}>{link.text}</a>
    </li>
            ))}
  </ul>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Resources;
