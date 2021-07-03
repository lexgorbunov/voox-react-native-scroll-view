import * as React from 'react';
import { useEffect, useRef } from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeScrollView } from 'react-native-scroll-view';

export default function App() {
  const s = useRef<NativeScrollView>(null);

  useEffect(() => {
    s.current?.activateKeyboard();
    // console.log(
    //   s.current?.setNativeProps({
    //     scrollToViewId: 'someTestViewId',
    //   })
    // );
    //s.current?.scrollToView('someTestViewId');
  }, []);

  return (
    <View style={styles.container}>
      <NativeScrollView dismissKeyboardOnScroll style={styles.box} ref={s}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <TextInput style={{ width: '100%', maxHeight: 200 }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <View
          nativeID={'someTestViewId'}
          style={{ height: 100, width: '100%', backgroundColor: 'yellow' }}
        />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          animi architecto autem enim eveniet ipsum, iste laudantium quia, quod
          sed tempore totam. Incidunt, molestias, velit. Beatae enim incidunt
          porro! Maiores!
        </Text>
        <Text>last</Text>
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
    flex: 1,
    backgroundColor: 'red',
  },
});
