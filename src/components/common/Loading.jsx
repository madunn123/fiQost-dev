import React from 'react';
import { RaceBy } from '@uiball/loaders';

export default function Loading() {
  return (
    <RaceBy
      size={80}
      lineWeight={8}
      speed={2}
      color="white"
      className="mx-auto"
    />
  );
}
