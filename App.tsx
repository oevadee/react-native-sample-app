import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components";

const SWrapper = styled(View)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SText = styled(Text)`
  color: white;
  font-size: 36px;
`;

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <SWrapper>
        <SText>Test</SText>
      </SWrapper>
    </SafeAreaView>
  );
};
