import { requireNativeComponent, UIManager, ViewStyle } from 'react-native';

export type ScrollViewProps = {
  style: ViewStyle;
  dismissKeyboardOnScroll?: boolean;
};

const VIEW_MANAGER_NAME = 'KScrollView';
export const KScrollViewViewManager =
  requireNativeComponent<ScrollViewProps>(VIEW_MANAGER_NAME);

export function getViewManagerConfig(viewManagerName = VIEW_MANAGER_NAME) {
  return UIManager.getViewManagerConfig(viewManagerName);
}
