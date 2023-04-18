import React from 'react';
import { ContainerInterface } from '../../../DTO/DTO-ui-components/container.dto';
import ContainerStyles from './Container.module.scss';

export const Container: React.FC<ContainerInterface> = ({ classNames, children }) => {

  return (
    <div className={`${ContainerStyles['container']}`}>
      {children}
    </div>
  )
}