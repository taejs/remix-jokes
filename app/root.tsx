import {LiveReload} from 'remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>remix test</title>
      </head>
      <body>
        hello World
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
