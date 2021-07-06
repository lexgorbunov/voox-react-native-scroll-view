import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeScrollView } from 'react-native-scroll-view';

export default function App() {
  const s = useRef<NativeScrollView>(null);

  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    s.current?.activateKeyboard();
    // console.log(

    //   s.current?.setNativeProps({
    //     scrollToViewId: 'someTestViewId',
    //   })
    // );
    // setTimeout(() => {
    //   s.current?.scrollToView('someTestViewId');
    // }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <NativeScrollView dismissKeyboardOnScroll style={styles.box} ref={s}>
        {items.map((i) => {
          return (
            <TouchableOpacity
              style={{ height: 50 }}
              key={i}
              onPress={() => {
                setItems(items.filter((im) => im !== i));
              }}
            >
              <Text>Items: {i}</Text>
            </TouchableOpacity>
          );
        })}
      </NativeScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    paddingTop: 100,
    backgroundColor: 'red',
  },
});
