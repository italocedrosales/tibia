import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { PlayersData } from '.';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  margin: 30px 0 10px 0;
  align-items: flex-start;
  justify-content: center;
`;

export const Card = styled.ImageBackground`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const WolrdTitle = styled.Text`
  font-size: 52px;
  color: #fff;
  font-family: 'GrenzeGotisch-Bold';
`;

export const WorldCard = styled.View`
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  justify-content: space-around;
`;

export const WordlData = styled.View`
  /* flex-direction: row; */
  padding: 5px;
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

export const PlayersList = styled(
  FlatList as new () => FlatList<PlayersData>,
)``;

export const PlayerListContainer = styled.View`
  margin-top: 20px;
  height: 200px;
`;

export const PlayerTitle = styled.Text`
  text-align: center;
  color: #fff;
  font-family: 'GrenzeGotisch-Bold';
  font-size: 32px;
`;

export const PlayerTouch = styled.TouchableOpacity`
  margin-bottom: 5px;
  background: #fff;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Player = styled.View`
  flex-direction: row;
`;

export const PlayerLabel = styled.Text`
  font-family: 'GrenzeGotisch-Bold';
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
`;

export const PlayerData = styled.Text``;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerCentered = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(243, 237, 237, 0.048);
  padding: 35px;
`;

export const ModalView = styled.View`
  width: 200px;
  justify-content: space-around;
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export const TouchableButton = styled.TouchableHighlight`
  background-color: #da2121;
  border-radius: 8px;
  padding: 10px;
`;

export const TextButtom = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
