import type {LoaderFunction} from 'remix';
import {useLoaderData, Link} from 'remix';
import type {Joke} from '@prisma/client';
import {db} from '~/utils/db.server';

type LoaderData = {randomJoke: Joke};

export const loader: LoaderFunction = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  const data: LoaderData = {randomJoke};
  return data;
};

export default function JokesIndexRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's a random joke:</p>
      <p>오리가 옳다고 인정을하면? 덕수궁</p>
    </div>
  );
}
