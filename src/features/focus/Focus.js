import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>What would you like to focus</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innercontainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
  },
  inputcontainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
});
