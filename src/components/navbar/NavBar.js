import React from 'react';
import { StyledHeader } from '../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} />;

export default function NavBar() {
  return (
    <StyledHeader>
      <a href='#home'>{element} travel</a>
    </StyledHeader>
  );
}
