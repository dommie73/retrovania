import React from 'react';
import * as S from './ErrorImageLocal.styles';

const ErrorImageLocal = () => (
  <S.ErrorImageLocalContainer>
    <img src='/images/no-signal-image.png' alt="error" data-test-id= "error-image"/>
    <S.ErrorImageLocalMessage>error</S.ErrorImageLocalMessage>
  </S.ErrorImageLocalContainer>
);

export { ErrorImageLocal };
