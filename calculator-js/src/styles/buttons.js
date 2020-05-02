import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: #333;
  justify-content: center;
  border-width: 0.3px;
  border-color: #000;
`;

export const ButtonIcon = styled.TouchableOpacity`
  flex: 1;
  background-color: #333;
  justify-content: center;
  align-items: center;
  border-width: 0.3px;
  border-color: #000;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 40px;
  text-align: center;
`;
