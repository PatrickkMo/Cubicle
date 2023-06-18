import { Head, useSyncData } from '@reactpwa/core';
import { FC } from 'react';
import { HomeData } from '../services/data';
import PhaserGame from './PhaserGame';

const Hello: FC = () => {
  const { data, syncScript } = useSyncData('home.data', HomeData);
  return (
    <>
      <Head>
        <title>Hello, World!!</title>
      </Head>
      <h2>{data.content}</h2>
      <PhaserGame />
      {syncScript}
    </>
  );
};

export default Hello;
