import styled from 'styled-components';

export const HomeMintWrapperStyled = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3.5),
}));

export const HomeMintStepsWrapperStyled = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: theme.spacing(4),
  position: 'relative',

  '.outer-div-linear': {
    width: '100% !important',
  },

  '.inner-div-linear': {
    width: '100% !important',
  },
}));

export const HomeMintFormWrapperStyled = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing(4)} 0`,
  borderBottom: '1px solid #E5E7EB',
  borderTop: '1px solid #E5E7EB',
}));

export const HomeMintButtonsWrapperStyled = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(4),
}));

export const HomeMintStepTitle = styled.h1({
  color: '#111827',
  fontSize: 24,
  fontFamily: "'Poppins', sans-serif",
  marginTop: 0,
  textAlign: 'center',
});

export const HomeMintStepDescription = styled.span({
  fontSize: 16,
  fontFamily: "'Poppins', sans-serif",
  color: '#6B7280',
  textAlign: 'center',
  marginBottom: '16px',
});

// export const HomeMintStepTitle = styled.p(({ theme }) => ({}));

export const HomeMintStepsRowStyled = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  alignSelf: 'center',
  top: -10,
});

export const HomeMintStepIndicator = styled.div<{ active?: boolean }>(({ active }) => ({
  width: '34px',
  height: '34px',
  fontSize: 16,
  fontFamily: "'Poppins', sans-serif",
  color: active ? 'white' : '#111827',
  borderRadius: '50%',
  backgroundColor: active ? '#e1a58e' : '#E5E7EB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
