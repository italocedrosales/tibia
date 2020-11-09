import React, { useCallback, useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Alert, Modal, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { format } from 'date-fns';

import api from '../../services/api';

import {
  Container,
  WolrdTitle,
  Card,
  WorldCard,
  Label,
  Data,
  WordlData,
  Button,
  PlayersList,
  PlayerListContainer,
  PlayerTitle,
  PlayerTouch,
  Player,
  PlayerLabel,
  PlayerData,
  ModalContainer,
  ContainerCentered,
  ModalView,
  ModalText,
  TouchableButton,
  TextButtom,
} from './styles';

interface RouteParams {
  name: string;
}
interface RecordDate {
  date: string;
  timezone_type: number;
  timezone: string;
}
interface OnlineRecord {
  players: number;
  date: RecordDate;
}

interface WorldData {
  name: string;
  players_online: number;
  online_record: OnlineRecord;
  creation_date: string;
  location: string;
  pvp_type: string;
  world_quest_titles: string[];
  battleye_status: string;
  Game_World_Type: string;
}

export interface PlayersData {
  name: string;
  level: number;
  vocation: string;
}
interface LastLogin {
  date: string;
  timezone_type: number;
  timezone: string;
}
interface CharacterData {
  name: string;
  title: string;
  sex: string;
  vocation: string;
  level: number;
  achievement_points: number;
  world: string;
  residence: string;
  last_login: Array<LastLogin>;
  comment: string;
  account_status: string;
  status: string;
}

const WorldDetails: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const { goBack } = useNavigation();

  const [world, setWorld] = useState<WorldData | null>(null);
  const [players, setPlayers] = useState<PlayersData[]>([]);
  const [character, setCharacter] = useState<CharacterData | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`world/${routeParams.name}.json`).then(response => {
      const { world_information, players_online } = response.data.world;

      setWorld(world_information);
      setPlayers(players_online);
      setLoading(false);
      setModalVisible(false);
    });
  }, [routeParams]);

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleViewPlayerData = useCallback((player: string) => {
    const name = player.replace(' ', '+');

    api.get(`characters/${name}.json`).then(response => {
      const { data } = response.data.characters;

      setCharacter(data);
    });

    setModalVisible(true);
  }, []);

  const handleHideModal = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  // const formatDate = useCallback(() => {}, []);

  return (
    <Container>
      <Button onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={25} color="#da0c0c" />
      </Button>

      <Card
        source={{
          uri:
            'https://s.glbimg.com/po/tt/f/original/2013/06/24/tibia-soul-points-runas.jpg',
        }}
        resizeMode="cover"
      >
        <WolrdTitle>{routeParams.name}</WolrdTitle>
      </Card>

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 250 }}
          size="large"
          color="#7159c1"
        />
      ) : (
        <>
          <WorldCard>
            <WordlData>
              <Label>Jogadores Online:</Label>
              <Data>{world?.players_online}</Data>
            </WordlData>
            <WordlData>
              <Label>Recorde de Jogadores Online:</Label>
              <Data>{world?.online_record.players}</Data>
            </WordlData>
            <WordlData>
              <Label>Data do Recorde:</Label>
              <Data>{world?.online_record.date.date}</Data>
            </WordlData>
            <WordlData>
              <Label>Data de Criação:</Label>
              <Data>{world?.creation_date}</Data>
            </WordlData>
            <WordlData>
              <Label>Localização:</Label>
              <Data>{world?.location}</Data>
            </WordlData>
            <WordlData>
              <Label>Tipo do PVP:</Label>
              <Data>{world?.pvp_type}</Data>
            </WordlData>

            <WordlData>
              <Label>Status de Batalha:</Label>
              <Data>{world?.battleye_status}</Data>
            </WordlData>
          </WorldCard>

          <PlayerListContainer>
            <PlayerTitle>Lista de Jogadores</PlayerTitle>
            <PlayersList
              data={players}
              horizontal
              keyExtractor={player => player.name}
              renderItem={({ item: players }) => (
                <>
                  <PlayerTouch
                    onPress={() => {
                      handleViewPlayerData(players.name);
                    }}
                  >
                    <Player>
                      <PlayerLabel>Name:</PlayerLabel>
                      <PlayerData>{players.name}</PlayerData>
                    </Player>
                    <Player>
                      <PlayerLabel>Level:</PlayerLabel>
                      <PlayerData>{players.level}</PlayerData>
                    </Player>
                    <Player>
                      <PlayerLabel>Vocação:</PlayerLabel>
                      <PlayerData>{players.vocation}</PlayerData>
                    </Player>
                  </PlayerTouch>
                </>
              )}
            />

            <ModalContainer>
              <Modal
                animationType="slide"
                transparent={false}
                statusBarTranslucent
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Fechar a janela antes de sair.');
                }}
              >
                <ContainerCentered>
                  <ModalView>
                    <View>
                      <ModalText>{character?.name}</ModalText>
                      <ModalText>{character?.status}</ModalText>
                      <ModalText>{character?.sex}</ModalText>
                      <ModalText>{character?.vocation}</ModalText>
                      <ModalText>{character?.level}</ModalText>
                    </View>

                    <TouchableButton onPress={handleHideModal}>
                      <TextButtom>Fechar</TextButtom>
                    </TouchableButton>
                  </ModalView>
                </ContainerCentered>
              </Modal>
            </ModalContainer>
          </PlayerListContainer>
        </>
      )}
    </Container>
  );
};

export default WorldDetails;
