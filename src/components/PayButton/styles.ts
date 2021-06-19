/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  focused: boolean;
}

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<Props>`
  font-size: 12px;
  color: ${({ focused }) => focused ? '#000' : '#fff'};
`;
