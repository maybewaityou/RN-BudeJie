package com.rn_hybrid.custom_modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * package: com.rn_hybrid.custom_modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 16/7/21 下午3:42
 * desc:
 */
public class CustomModule extends ReactContextBaseJavaModule {

    public CustomModule(ReactApplicationContext reactContext) {
        super(reactContext);

    }

    // Available as NativeModules.CustomModule.call
    @ReactMethod
    public void call(String input, Callback callback) {
        callback.invoke("mu ha ha ~~");
    }

    @Override
    public String getName() {
        return "CustomModule";
    }
}
