//
//  CustomModule.m
//  rn_hybrid
//
//  Created by ChunNan on 16/7/21.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CustomModule.h"

@implementation CustomModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(call:(NSString *)input callback:(RCTResponseSenderBlock)callback)
{
  NSLog(@"===>>> %@",input);
  callback(@[@"mu ha ha ~"]);
}

RCT_EXPORT_METHOD(jumpToNative:(RCTResponseSenderBlock)callback)
{
  callback(@[@"mu ha ha ~"]);
}

@end
