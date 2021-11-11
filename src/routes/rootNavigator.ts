import * as React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(screen:string, type:string) {
  navigationRef.current?.navigate(type, { screen: screen });
}