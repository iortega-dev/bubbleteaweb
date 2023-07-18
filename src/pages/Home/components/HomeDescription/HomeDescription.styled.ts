import styled from 'styled-components';

export const Title = styled.h1(({ theme }) => ({
  fontSize: theme.sizing.h1,
  alignSelf: 'flex-start',
  whiteSpace: 'pre-line',
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.h3,
    textAlign: 'center',
  },
}));

export const Subtitle = styled.h3(({ theme }) => ({
  fontSize: theme.sizing.h3,
  color: theme.utils.rgba(theme.palette.black, 0.6),
  width: '100%',

  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
    textAlign: 'center',
  },
}));

export const ButtonWrapper = styled.div(({ theme }) => ({
  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    alignSelf: 'center',
  },
}));

export const TypewritterWrapper = styled.div({
  span: {
    fontFamily: 'Gloria Hallelujah',
  },
});
