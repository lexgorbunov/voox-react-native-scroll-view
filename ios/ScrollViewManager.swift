import UIKit
import React
import IQKeyboardManagerSwift

@objc(KScrollViewManager)
class ScrollViewManager: RCTViewManager {
    override class func requiresMainQueueSetup() -> Bool {
        true
    }
    
    override func view() -> ScrollView {
        return ScrollView(bridge: bridge)
    }
    
    @objc
    func activateKeyboardCommand(_ viewTag: NSNumber) {
        DispatchQueue.main.async {
            if IQKeyboardManager.shared.enable { return }
            IQKeyboardManager.shared.enable = true
            IQKeyboardManager.shared.enableAutoToolbar = false
            IQKeyboardManager.shared.keyboardDistanceFromTextField = 0
        }
    }
    
    @objc
    private func deactivateKeyboardCommand(_ viewTag: NSNumber) {
        DispatchQueue.main.async {
            if !IQKeyboardManager.shared.enable { return }
            IQKeyboardManager.shared.enable = false
        }
    }
    
    @objc
    private func scrollToViewCommand(_ viewTag: NSNumber, nativeId: String) {
        bridge.uiManager.addUIBlock { (manager, viewRegistry) in
            if let scrollView = viewRegistry?[viewTag] as? ScrollView,
               let rootView = scrollView.subviews.first(where: { $0.nativeID == "nativeScrollViewWrapper" }),
               let scrollToView = rootView.subviews.first(where: { $0.nativeID == nativeId }) {
                scrollView.scrollToView(view: scrollToView, animated: true)
            }
        }
    }
}

class ScrollView : UIScrollView {
    private weak var bridge: RCTBridge?
    
    init(bridge: RCTBridge) {
        self.bridge = bridge
        super.init(frame: .zero)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc
    func setDismissKeyboardOnScroll(_ value: Bool) {
        keyboardDismissMode = value ? .onDrag : .none
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()

        let newContentSize = CGSize(width: frame.width, height: subviews.first?.frame.height ?? 0)
        if contentSize != newContentSize {
            contentSize = newContentSize
            IQKeyboardManager.shared.reloadLayoutIfNeeded()
        }
    }
}


extension UIScrollView {

    // Scroll to a specific view so that it's top is at the top our scrollview
    func scrollToView(view: UIView, animated: Bool) {
        if let origin = view.superview {
            // Get the Y position of your child view
            let childStartPoint = origin.convert(view.frame.origin, to: self)
            // Scroll to a rectangle starting at the Y of your subview, with a height of the scrollview
            self.scrollRectToVisible(CGRect(x:0, y:childStartPoint.y,width: 1,height: self.frame.height), animated: animated)
        }
    }
}
