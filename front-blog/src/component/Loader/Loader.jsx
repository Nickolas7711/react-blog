import React from 'react';
import { LoaderInner, LoaderWrapp } from './ModulLoaderStyle';

export default function Loader() {
  return (
    <LoaderWrapp>
      <LoaderInner></LoaderInner>
    </LoaderWrapp>
  );
};
