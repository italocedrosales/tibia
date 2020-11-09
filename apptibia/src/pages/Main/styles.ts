import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 32px;
  flex: 1;
  align-items: center;
`;

export const ImageHeader = styled.Image`
  margin-top: 30px;
  width: 255px;
  height: 145px;
`;

export const Title = styled.Text`
  margin: 30px 0 20px 0;

  text-align: center;
  font-size: 52px;
  color: #fff;
  font-family: 'GrenzeGotisch-Medium';
`;

export const WorldList = styled.View`
  /* width: 100%; */
  flex: 1;
  height: 170px;
  margin-bottom: 15px;
  padding: 15px;
  background: #fff;
  border-radius: 8px;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const WorldData = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 22px;
  font-family: 'GrenzeGotisch-Bold';
  margin-right: 15px;
`;

export const Data = styled.Text`
  font-size: 20px;
  font-family: 'GrenzeGotisch-Light';
`;

export const DetailsButton = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #da0c0c;
  font-weight: bold;
  font-size: 18px;
`;
