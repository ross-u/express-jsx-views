### Express React SSR views



### Getting Started

https://www.npmjs.com/package/express-react-views



#### Create server

Using the `express` generator, create the basic server without views by running the following command:

```bash
express --no-view react-views-express-ssr

cd react-views-express-ssr
```





#### Install the dependencies

```bash
npm i
```



#### Install React dependencies

```bash
npm install express-react-views react react-dom
```





### Update folder structure

```bash
mkdir views
```

### Set the view engine

##### `app.js`
```js
const erv = require('express-react-views');

// SET THE JSX VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());
```


### Create the route

##### `app.js`
```js
// Basic home route rendering a view
app.get('/', function (req, res, next) {
  res.render('Home', { name: 'Your Name', list: ['React', 'Angular', 'NodeJS', 'SQL', 'MongoDB'] });
});
```


### Create a component

##### `views/Home.jsx`
```jsx
// We have to require React to allow Babel to transpile our JSX to HTML
const React = require('react'); 

function Home(props) {
  return (
    <div>
      <h2> Hello {props.name} ! </h2>
      {
        props.list.map((item) => <Card text={item} />)
      }
    </div>
  )
}

module.exports = Home;

```

### Start the server

```bash
npm run start:dev
```