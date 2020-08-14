const React = require('react');

function Layout({ children }) {
  return (
    <html>
      <head>

      </head>
      <body style={{ backgroundColor: 'paleturquoise' }}>
        {children}
      </body>
    </html>
  )
}

module.exports = Layout;