//
//  UIImage+CustomSwiftModule.m
//  rn_hybrid
//
//  Created by ChunNan on 16/7/21.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CustomSwiftModule, NSObject)

RCT_EXTERN_METHOD(call:(NSString *)name callback:(RCTResponseSenderBlock)callback)

@end