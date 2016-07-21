//
//  CustomSwiftModule.swift
//  rn_hybrid
//
//  Created by ChunNan on 16/7/21.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import UIKit

@objc(CustomSwiftModule)
class CustomSwiftModule: NSObject {

  @objc func call(input: String, callback: RCTResponseSenderBlock) -> Void {
    print("=====>>> \(input)")
    callback(["mu ha ha ~"])
  }
  
}
