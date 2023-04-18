import React from 'react';

type ClassNames = {
  className: string | object;
}

export interface ContainerInterface {
  classNames?: ClassNames;
  children: React.ReactNode;
}