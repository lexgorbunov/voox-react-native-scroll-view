import React from 'react';
import { findNodeHandle, UIManager, View } from 'react-native';
import { createRef, PureComponent } from 'react';
import type { ScrollViewProps } from './ScrollViewNative';
import {
  getViewManagerConfig,
  ScrollViewViewManager,
} from './ScrollViewNative';

export class NativeScrollView extends PureComponent<ScrollViewProps> {
  private activateKeyboardCommand =
    getViewManagerConfig().Commands.activateKeyboardCommand;
  private deactivateKeyboardCommand =
    getViewManagerConfig().Commands.deactivateKeyboardCommand;
  private scrollToViewCommand =
    getViewManagerConfig().Commands.scrollToViewCommand;

  private scrollView = createRef<any>();
  constructor(props: ScrollViewProps) {
    super(props);
  }

  activateKeyboard = () => {
    if (!this.scrollView.current) return;
    const node = findNodeHandle(this.scrollView.current);
    UIManager.dispatchViewManagerCommand(
      node,
      this.activateKeyboardCommand,
      []
    );
  };

  deactivateKeyboard = () => {
    if (!this.scrollView.current) return;
    const node = findNodeHandle(this.scrollView.current);
    UIManager.dispatchViewManagerCommand(
      node,
      this.deactivateKeyboardCommand,
      []
    );
  };

  scrollToView = (nativeId: string) => {
    if (!this.scrollView.current) return;
    const node = findNodeHandle(this.scrollView.current);
    UIManager.dispatchViewManagerCommand(node, this.scrollToViewCommand, [
      nativeId,
    ]);
  };

  render() {
    return (
      <ScrollViewViewManager ref={this.scrollView} {...this.props}>
        <View nativeID={'nativeScrollViewWrapper'}>{this.props.children}</View>
      </ScrollViewViewManager>
    );
  }
}
