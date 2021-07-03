import { requireNativeComponent, ViewStyle } from 'react-native';

type ScrollViewProps = {
  color: string;
  style: ViewStyle;
};

export const ScrollViewViewManager = requireNativeComponent<ScrollViewProps>(
'ScrollViewView'
);

export default ScrollViewViewManager;
