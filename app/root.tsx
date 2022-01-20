import {Links, LiveReload, Outlet} from 'remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>remix test</title>
        <Links />
      </head>
      <body>
        hello World
        <Outlet />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
