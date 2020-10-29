import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
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

  useEffect(() => {
    api.get('worlds.json').then(response => {
      const { allworlds } = response.data.worlds;

      setWorlds(allworlds);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <ImageHeader source={logoImg} />
          <Title>Worlds</Title>
          {worlds.map(world => (
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

              <DetailsButton>
                <ButtonText>Ver mais de talhes</ButtonText>
                <Icon name="arrow-right" size={25} color="#da0c0c" />
              </DetailsButton>
            </WorldList>
          ))}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
