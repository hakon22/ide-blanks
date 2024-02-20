import { createContext } from 'react';
import { isMobile } from 'react-device-detect';

export const MobileContext = createContext<boolean>(isMobile);

export const f = () => {};
