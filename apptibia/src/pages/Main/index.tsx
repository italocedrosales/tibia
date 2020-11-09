import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import logoImg from '../../assets/tibia-logo.png';

import {
  Container,
  Title,
  ImageHeader,
  WorldList,
  WorldData,
  Label,
  Data,
  DetailsButton,
  ButtonText,
} from './styles';

interface Worlds {
  name: string;
  online: number;
  location: string;
  worldtype: string;
}

const Main: React.FC = () => {
  const [worlds, setWorlds] = useState<Worlds[]>([]);
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    setLoading(true);
    api.get('worlds.json').then(response => {
      const { allworlds } = response.data.worlds;

      setWorlds(allworlds);
      setLoading(false);
    });
  }, []);

  const navigateToWorldDetail = useCallback(
    (name: string) => {
      navigate('Details', { name });
    },
    [navigate],
  );

  return (
    <ScrollView>
      <Container>
        <ImageHeader source={logoImg} />

        <Title> Lista de Mundos</Title>

        {loading ? (
          <ActivityIndicator
            style={{ marginTop: 170 }}
            size="large"
            color="#7159c1"
          />
        ) : (
          worlds.map(world => (
            <WorldList key={world.name}>
              <WorldData>
                <Label>Nome:</Label>
                <Data>{world.name}</Data>
              </WorldData>
              <WorldData>
                <Label>Online:</Label>
                <Data>{world.online}</Data>
              </WorldData>
              <WorldData>
                <Label>Localização:</Label>
                <Data>{world.location}</Data>
              </WorldData>
              <WorldData>
                <Label>Tipo do Mundo:</Label>
                <Data>{world.worldtype}</Data>
              </WorldData>

              <DetailsButton onPress={() => navigateToWorldDetail(world.name)}>
                <ButtonText>Ver mais detalhes</ButtonText>
                <Icon name="arrow-right" size={25} color="#da0c0c" />
              </DetailsButton>
            </WorldList>
          ))
        )}
      </Container>
    </ScrollView>
  );
};

export default Main;
