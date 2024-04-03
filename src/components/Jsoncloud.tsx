import type { FunctionalComponent } from 'preact';

const data = await fetch('https://res.cloudinary.com/magiaslabcdn/image/list/mensana.json').then((response) =>
  response.json()
);

// Components that are build-time rendered also log to the CLI.
// When rendered with a client:* directive, they also log to the browser console.
 
const Movies: FunctionalComponent = () => {
// Output the result to the page
  return <div>{JSON.stringify(data.object)}</div>;
};

export default Movies;