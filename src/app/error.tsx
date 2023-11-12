'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 *
 * @param An error object
 * @param Reset function to try again
 *
 * @returns This error component
 */
const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <h3>An error occured!</h3>
      <p>{error.message}</p>

      <button onClick={reset}>Retry</button>
    </div>
  );
};

export default Error;
