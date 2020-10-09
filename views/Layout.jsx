const React = require('react');

function Layout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body style={{ backgroundColor: 'paleturquoise' }}>
        {children}
      </body>
    </html>
  )
}

module.exports = Layout;