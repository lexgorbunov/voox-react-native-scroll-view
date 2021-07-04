#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>

@interface RCT_EXTERN_MODULE(ScrollViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(dismissKeyboardOnScroll, BOOL)
RCT_EXTERN_METHOD(activateKeyboardCommand:(nonnull NSNumber *)viewTag)
RCT_EXTERN_METHOD(deactivateKeyboardCommand:(nonnull NSNumber *)viewTag)
RCT_EXTERN_METHOD(scrollToViewCommand:(nonnull NSNumber *)viewTag
                  nativeId:(NSString*) nativeId)
@end
