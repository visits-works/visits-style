import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';
import Container from '../../components/Grid/Container';

const Temp = styled.p`
  background-color: ${({ theme, sub }) => sub ? theme.greyLight : theme.primary};
  color: ${({ theme }) => theme.white};

  padding: 1.25rem 0;
  position: relative;
  text-align: center;

  border-radius: 4px;
`;

storiesOf('ideagram|Components/Grid', module)
  .add('default', () => (
    <Container>
      <Row>
        <Col><Temp>1</Temp></Col>
        <Col><Temp>2</Temp></Col>
        <Col><Temp>3</Temp></Col>
        <Col><Temp>4</Temp></Col>
      </Row>
    </Container>
  ))
  .add('Col size', () => (
    <Container>
      <Row>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={2}><Temp>size=2</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={3}><Temp>size=3</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={4}><Temp>size=4</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={5}><Temp>size=5</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={6}><Temp>size=6</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={7}><Temp>size=7</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={8}><Temp>size=8</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={9}><Temp>size=9</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={10}><Temp>size=10</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={11}><Temp>size=11</Temp></Col>
        <Col><Temp sub>1</Temp></Col>
      </Row>
      <Row>
        <Col size={12}><Temp>size=12</Temp></Col>
      </Row>
    </Container>
  ))
  .add('offset', () => (
    <Container>
      <Row>
        <Col offset={2} size={4}><Temp>size=4, offset=2</Temp></Col>
        <Col offset={1} size={2}><Temp>size=2, offset=1</Temp></Col>
        <Col offset={1} size={2}><Temp>size=2, offset=1</Temp></Col>
      </Row>
    </Container>
  ))
  .add('multiline', () => (
    <Container>
      <Row>
        <Col><Temp>Lorem</Temp></Col>
        <Col><Temp>ipsum</Temp></Col>
        <Col><Temp>dolor</Temp></Col>
        <Col><Temp>sit</Temp></Col>
        <Col><Temp>amet</Temp></Col>
        <Col><Temp>,</Temp></Col>
        <Col><Temp>consectetur</Temp></Col>
        <Col><Temp>adipiscing</Temp></Col>
        <Col><Temp>elit</Temp></Col>
        <Col><Temp>.</Temp></Col>
        <Col />
        <Col><Temp>Nulla</Temp></Col>
        <Col><Temp>ac</Temp></Col>
        <Col><Temp>rutrum</Temp></Col>
        <Col><Temp>lorem</Temp></Col>
        <Col><Temp>.</Temp></Col>
      </Row>
    </Container>
  ))