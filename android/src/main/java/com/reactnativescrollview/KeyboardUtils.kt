package com.reactnativescrollview

import android.app.Activity
import android.content.Context
import android.content.res.Resources
import android.graphics.Rect
import android.util.Log
import android.view.View
import android.view.Window
import android.view.inputmethod.InputMethodManager
import kotlin.math.abs

object UtilsBridge {
  /**
   * Return the navigation bar's height.
   *
   * @return the navigation bar's height
   */
  fun getNavBarHeight(context: Context): Int {
    val res: Resources = context.resources
    val resourceId: Int = res.getIdentifier("navigation_bar_height", "dimen", "android")
    return if (resourceId != 0) {
      res.getDimensionPixelSize(resourceId)
    } else {
      0
    }
  }

  /**
   * Return the status bar's height.
   *
   * @return the status bar's height
   */
  fun getStatusBarHeight(context: Context): Int {
    val resources: Resources = context.resources
    val resourceId = resources.getIdentifier("status_bar_height", "dimen", "android")
    return resources.getDimensionPixelSize(resourceId)
  }
}

object KeyboardUtils {
  private var sDecorViewDelta = 0

  private fun getDecorViewInvisibleHeight(window: Window): Int {
    val decorView: View = window.decorView
    val outRect = Rect()
    decorView.getWindowVisibleDisplayFrame(outRect)
    Log.d("KeyboardUtils", "getDecorViewInvisibleHeight: "
      + (decorView.bottom - outRect.bottom))
    val delta: Int = abs(decorView.bottom - outRect.bottom)
    if (delta <= UtilsBridge.getNavBarHeight(window.context) + UtilsBridge.getStatusBarHeight(window.context)) {
      sDecorViewDelta = delta
      return 0
    }
    return delta - sDecorViewDelta
  }

  fun isSoftInputVisible(activity: Activity): Boolean {
    //return getDecorViewInvisibleHeight(activity.window) > 0
    val imm = activity.getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
    return imm.isAcceptingText
  }

  fun hideKeyboard(view: View, context: Context) {
    val imm = context.getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
    imm.hideSoftInputFromWindow(view.windowToken, 0)
  }

}
