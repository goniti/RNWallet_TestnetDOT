import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Title = styled(Text)`
  font-weight: bold;
`;

function TitleComponent({ children }: InferProps<typeof propTypes>): JSX.Element {
  return <Title>{children}</Title>;
}

TitleComponent.propTypes = propTypes;

export default TitleComponent;
