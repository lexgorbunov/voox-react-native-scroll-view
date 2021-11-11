import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeScrollView } from 'react-native-scroll-view';

export default function App() {
  const s = useRef<NativeScrollView>(null);

  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    //s.current?.activateKeyboard();
    // console.log(

    //   s.current?.setNativeProps({
    //     scrollToViewId: 'someTestViewId',
    //   })
    // );
    setTimeout(() => {
      s.current?.scrollToView('someTestViewId');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <NativeScrollView dismissKeyboardOnScroll style={styles.box} ref={s}>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 350, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 250, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 150, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>

        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <View>
          <View>

            <View>
              <Text nativeID={'someTestViewId'} style={{height: 50, width: '100%', backgroundColor: 'yellow', marginBottom: 10}}>Items</Text>
            </View>
          </View>
        </View>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
        <Text style={{height: 50, width: '100%', backgroundColor: 'red', marginBottom: 10}}>Items</Text>
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
