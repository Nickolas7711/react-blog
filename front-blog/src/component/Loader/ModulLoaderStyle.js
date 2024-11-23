import { styled, keyframes } from '@mui/system';

// Анимации
const pulsA = keyframes`
  0% { box-shadow: inset 0 0 0 var(--Loader-offset) var(--Loader-color); opacity: 1; }
  50%, 100% { box-shadow: inset 0 0 0 0 var(--Loader-color); opacity: 0; }
`;

const pulsB = keyframes`
  0%, 50% { box-shadow: 0 0 0 0 var(--Loader-color); opacity: 0; }
  100% { box-shadow: 0 0 0 var(--Loader-offset) var(--Loader-color); opacity: 1; }
`;

// Контейнер Loader
export const LoaderWrapp = styled('div')(() => ({
  width: '100%',
  height: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Компонент Loader
export const LoaderInner = styled('div')(() => ({
  '--Loader-color': '#72F8FF',
  '--Loader-size': '13.6rem',
  '--Loader-offset': '1.7rem',
  '--Loader-timing': 'ease-in-out',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 'var(--Loader-size)',
  marginTop: 'calc(var(--Loader-size) / 2)',
  marginBottom: 'calc(var(--Loader-size) / 2)',

  '&:before, &:after': {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'var(--Loader-timing)',
    filter: 'drop-shadow(0 0 calc(var(--Loader-offset) / 2.25) rgba(255, 255, 255, 0.75))',
  },

  '&:before': {
    width: '100%',
    paddingBottom: '100%',
    boxShadow: `inset 0 0 0 var(--Loader-offset) var(--Loader-color)`,
    animationName: pulsA,
  },

  '&:after': {
    width: `calc(100% - (var(--Loader-offset) * 2))`,
    paddingBottom: `calc(100% - (var(--Loader-offset) * 2))`,
    boxShadow: `0 0 0 0 var(--Loader-color)`,
    animationName: pulsB,
  },
}));