package com.reactnativescrollview

import android.app.Activity
import android.content.Context
import android.view.View
import com.facebook.react.bridge.ReactContext
import com.facebook.react.views.scroll.ReactScrollView
import java.lang.ref.WeakReference
import java.util.*

class NativeScrollView(context: Context?, private val currentActivity: WeakReference<Activity>) : ReactScrollView(context as ReactContext?) {

  var shouldHideKeyboardOnScroll = false

  override fun onScrollChanged(x: Int, y: Int, oldX: Int, oldY: Int) {
    super.onScrollChanged(x, y, oldX, oldY)

  }

  fun scrollToView(view: View) {
    post {
      smoothScrollTo(0, view.top)
    }
  }
}
