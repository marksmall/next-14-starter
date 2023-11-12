'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Only to catch errors in the app|layout components.
 *
 * @param error object
 *
 * @returns this error component
 */
const GlobalError = ({ error, reset }: Props) => {
  return (
    <html lang="en">
      <head>
        <title>Something went very wrong!</title>
      </head>
      <body>
        <h2>Something went very wrong!</h2>

        <p>{error.message}</p>

        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
