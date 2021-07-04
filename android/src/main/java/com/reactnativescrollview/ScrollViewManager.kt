package com.reactnativescrollview

import android.view.ViewGroup
import android.view.WindowManager
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.util.ReactFindViewUtil
import java.lang.ref.WeakReference

class ScrollViewManager(private val reactContext: ReactContext) : ViewGroupManager<NativeScrollView>() {
  private val commands = mutableMapOf(
    "activateKeyboardCommand" to 1,
    "deactivateKeyboardCommand" to 2,
    "scrollToViewCommand" to 3
  )

  private val inverseCommands = mutableMapOf(
    1 to "activateKeyboardCommand",
    2 to "deactivateKeyboardCommand",
    3 to "scrollToViewCommand"
  )

  private var previousSoftInputMode: Int? = null

  override fun getName() = "ScrollView"

  override fun createViewInstance(reactContext: ThemedReactContext): NativeScrollView {
    return NativeScrollView(reactContext, WeakReference(reactContext.currentActivity!!))
  }

  @ReactProp(name = "dismissKeyboardOnScroll")
  fun setDismissKeyboardOnScroll(view: NativeScrollView, value: Boolean) {
    view.shouldHideKeyboardOnScroll = value
  }

  override fun receiveCommand(root: NativeScrollView, commandId: Int, args: ReadableArray?) {
    receiveCommand(root, inverseCommands[commandId], args)
  }

  override fun receiveCommand(root: NativeScrollView, commandId: String?, args: ReadableArray?) {
    args ?: return
    commandId ?: return
    when(commandId) {
      "activateKeyboardCommand" -> {
        previousSoftInputMode = reactContext.currentActivity?.window?.attributes?.softInputMode
        reactContext.currentActivity?.window?.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN)
      }
      "deactivateKeyboardCommand" -> {
        previousSoftInputMode?.let {
          reactContext.currentActivity?.window?.setSoftInputMode(it)
        }
      }
      "scrollToViewCommand" -> {
        println("")
        val r = (root.getChildAt(0) as? ViewGroup) ?: return
        val v = ReactFindViewUtil.findView(r, args.getString(0)) ?: return
        root.scrollToView(v)
      }
    }
  }

  override fun getCommandsMap(): MutableMap<String, Int> {
    return commands
  }
}
