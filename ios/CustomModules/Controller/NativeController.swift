//
//  NativeController.swift
//  rn_hybrid
//
//  Created by ChunNan on 16/7/22.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import UIKit

class NativeController: UIViewController {

  // MARK: Lazy
  lazy var button: UIButton = {
    let button = UIButton.init(type: .Custom)
    button.setTitle("return to React Native", forState: .Normal)
    button.setTitleColor(UIColor.blackColor(), forState: .Normal)
    button.addTarget(self, action: #selector(NativeController.onClick), forControlEvents: .TouchUpInside)
    return button
  }()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    initialize()
  }
  
  func initialize() {
    initData()
    setupViews()
  }
  
  func initData() {
    
  }
  
  func setupViews() {
    
  }
  
  func onClick(view: UIButton) {
    print("=====>>> onClick")
    navigationController?.popViewControllerAnimated(true)
  }
  
}
