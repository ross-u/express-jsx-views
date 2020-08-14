# Express JSX (React) views



## Getting Started



##### Clone the repository:

```bash
git clone https://github.com/ross-u/express-jsx-views.git
```



##### Install the dependencies:

```bash
npm i
```





##### Run the server:

```
npm run start:dev
```





## Step by step guide

If you are only interested in checking the code and running the example you may skip the below step by step guide, which is a step by step guide for creating a basic express server using a `express-react-views` view engine and JSX.



The end result of the below step by step guide would be a project more or less similar to what is included in this repo.



#### Create the server

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

You must explicitly install `react` and `react-dom` as a dependency, as it is not directly included in the `express-react-views` package.

```bash
npm install express-react-views react react-dom
```





### Update the folder structure

```bash
# Create a views folder
mkdir views

# Create a view file
touch views/Home.jsx

# Remove the routes folder - we won't be using them in this exapmle
rm -rf ./routes

```





### Set the view engine

Fist step is to import the `express-react-views` package and set the view engine.

Add the following code to your `app.js`:

##### `app.js`

```js
const erv = require('express-react-views');

// SET THE JSX VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());
```





### Create the route

Create a simple route to render the home `/` view.

Note that the `res.render` syntax is the same as with other view engines :

```jsx
// syntax example
res.render('ViewFileName', objectWithDataToInject )
```



Add the following code to your `app.js`:

##### `app.js`

```js
// Basic home route rendering a view
app.get('/', function (req, res, next) {
  res.render('Home', { name: 'Your Name', list: ['MongoDB', 'Express', 'React', 'JSX'] });
});
```





### Create a component

Next step is creating a function compoent which returns JSX.

The data passed to the render

##### `views/Home.jsx`

```jsx
// We have to require React to allow Babel to transpile our JSX to HTML
const React = require('react'); 

// Object with the data, injected to the view via `res.render`,is represented by the `props`
function Home(props) {  
  return (
    <div>
      <h2> Hello {props.name} ! </h2>
      {
        props.list.map((item) => <li>{item}</li>)
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





### Additional Views and Components

Refer to the code in this repository on the example of using multiple components in the place of partials. For example `components/Card.jsx` component can be used as a partial





## Main dependencies

[express](https://www.npmjs.com/package/express)

[express-react-views](https://www.npmjs.com/package/express-react-views)

