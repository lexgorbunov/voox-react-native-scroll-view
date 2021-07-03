import { requireNativeComponent, UIManager, ViewStyle } from 'react-native';

export type ScrollViewProps = {
  style: ViewStyle;
  dismissKeyboardOnScroll?: boolean;
};

const VIEW_MANAGER_NAME = 'ScrollViewView';
export const ScrollViewViewManager =
  requireNativeComponent<ScrollViewProps>(VIEW_MANAGER_NAME);

export function getViewManagerConfig(viewManagerName = VIEW_MANAGER_NAME) {
  return UIManager.getViewManagerConfig(viewManagerName);
}
