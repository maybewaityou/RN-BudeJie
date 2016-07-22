package com.rn_hybrid.custom_modules;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.rn_hybrid.MainActivity;
import com.rn_hybrid.activity.NativeActivity;

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

    @Override
    public String getName() {
        return "CustomModule";
    }

    // Available as NativeModules.CustomModule.call
    @ReactMethod
    public void call(String input, Callback callback) {
        System.out.println("=====>>>> " + input);
        callback.invoke("mu ha ha ~");
    }

    @ReactMethod
    public  void jumpToNative(Callback callback) {
        try {
            // TODO 可以使用EventBus或者RxBus进行回调
            Activity context = getCurrentActivity();
            Intent intent = new Intent(context, NativeActivity.class);
            assert context != null;
            context.startActivityForResult(intent, 200);
            callback.invoke(MainActivity.mQueue.take());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
