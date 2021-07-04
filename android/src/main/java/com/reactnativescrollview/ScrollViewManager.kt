package com.reactnativescrollview

import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import com.facebook.react.R
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

  override fun getName() = "KScrollView"

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
        val nativeId = args.getString(0) ?: return
        val v = r.findView(nativeId) ?: return
        root.scrollToView(v)
      }
    }
  }

  override fun getCommandsMap(): MutableMap<String, Int> {
    return commands
  }
}


/**
 * Finds a view that is tagged with {@param nativeId} as its nativeID prop under the {@param root}
 * view hierarchy. Returns the view if found, null otherwise.
 *
 * @param root root of the view hierarchy from which to find the view
 */
fun View.findView(nativeId: String): View? {
  if (contentDescription == nativeId) return this
  val tag = getNativeId(this)
  if (tag != null && tag == nativeId) return this
  if (this is ViewGroup) {
    val viewGroup = this
    for (i in 0 until viewGroup.childCount) {
      val view = viewGroup.getChildAt(i).findView(nativeId)
      if (view != null) return view
    }
  }
  return null
}

private fun getNativeId(view: View): String? {
  val tag = view.getTag(R.id.view_tag_native_id)
  return if (tag is String) tag else null
}
