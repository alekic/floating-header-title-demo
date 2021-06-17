import React from 'react';
import { HeaderButton, HeaderButtons } from 'react-navigation-header-buttons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function MaterialHeaderButton(props) {
  return (
    <HeaderButton
      IconComponent={MaterialIcons}
      iconSize={24}
      {...props}
    />
  );
}

export function MaterialHeaderButtons(props) {
  return (
    <HeaderButtons
      HeaderButtonComponent={MaterialHeaderButton}
      {...props}
    />
  );
}
