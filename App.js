import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import { BaseTheme } from "./src/theme";
import config from "./nativebase.config";
import { Root } from "./src/components/RootComponent";
import { View, Text, Button, Modal } from "react-native";

const WithModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={visible}
        transparent={true}
        style={{ backgroundColor: "black" }}
      >
        <View style={{ height: 200, width: 200, backgroundColor: "pink" }}>
          <Text>opened modal</Text>
        </View>
      </Modal>

      <Button
        title="click"
        onPress={() => {
          setVisible((e) => !e);
        }}
      />
    </View>
  );
};
export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Text>nice</Text>
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Modal
          visible={visible}
          transparent={true}
          style={{ backgroundColor: "black" }}
        >
          <View style={{ height: 200, width: 200, backgroundColor: "pink" }}>
            <Text>opened modal</Text>
          </View>
        </Modal>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            title="click"
            onPress={() => {
              setVisible((e) => !e);
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <WithModal />
      </View>
    </View>
  );
  return (
    <NativeBaseProvider theme={BaseTheme} config={config}>
      <Root />
    </NativeBaseProvider>
  );
}
