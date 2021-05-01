import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ScrollView, View, Text } from 'react-native';
import { QuestionService } from '../../services';
import { MainButton } from '../../components';
import Alternative from './Alternative';

import {
  SafeAreaContainer,
  HeaderContainer,
  Tip,
  Title,
  GoBack,
  ImageContainer,
  Image,
  Separator,
  AlternativesContainer,
  AlternativeButton,
  AlternativeText,
  MainButtonBackground,
  MainButtonContainer,
} from './styles';
import { COLORS } from '../../constansts/colors';

const Question = () => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  const Containers = ({ children }) => {
    return <SafeAreaContainer>{children}</SafeAreaContainer>;
  };

  const handleAlternativeOnPress = (alternative) => {
    let tempAnswers = answers.map((item, indice) => {
      if (item.id === alternative.id) {
        item.selected = !alternative.selected;
      }

      return item;
    });

    setAnswers(tempAnswers);
  };

  useEffect(() => {
    (async () => {
      const _questions = await QuestionService.getQuestions();
      setQuestion(_questions[0]);

      let answers = _questions[0].data.answers;
      answers.map((item, indice) => {
        item.id = indice.toString();
        item.selected = false;
      });

      setAnswers(_questions[0].data.answers);
    })();
  }, []);

  return (
    <>
      <Containers>
        <HeaderContainer>
          <Tip source={require('../../assets/tip.png')} />
          <Title>Título da questão?</Title>
          <GoBack>X</GoBack>
        </HeaderContainer>

        <ImageContainer>
          {question && (
            <Image source={{ uri: question.data.image.url ?? '' }} />
          )}
        </ImageContainer>

        <Separator />

        <AlternativesContainer>
          {answers.map((item) => {
            return (
              <Alternative
                data={item}
                key={Math.random()}
                onPress={() => {
                  handleAlternativeOnPress(item);
                }}
              />
            );
          })}
          {/* data={answers}
          //extraData={(c) => c.id}
          renderItem={({ item }) => (
            <Alternative
              data={item}
              onPress={() => {
                handleAlternativeOnPress(item);
              }}
            />
          )} */}
        </AlternativesContainer>
      </Containers>

      <MainButtonBackground>
        <MainButtonContainer>
          <MainButton text='CONTINUAR' />
        </MainButtonContainer>
      </MainButtonBackground>
    </>
  );
};

export default Question;
