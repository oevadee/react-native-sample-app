import React from "react";
import { View, Button } from "react-native";

export const CustomButton = () => {
  const handlePress = () => {
    console.log("press");
  };
  return (
    <View>
      <Button title="Click" onPress={handlePress} />
    </View>
  );
};
