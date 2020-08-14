const React = require('react'); // We have to require React to allow Babel to transpile our JSX to HTML
const Layout = require('./Layout'); // this is a function component with html layour and the background color
const Card = require('./components/Card'); // this is a simple function comopnent returning one <li></li> element

function Home(props) {
  return (
    <Layout>
      <h2> Hello {props.name} ! </h2>
      {
        props.list.map((item) => <Card text={item} />)
      }
    </Layout>
  )
}

module.exports = Home;