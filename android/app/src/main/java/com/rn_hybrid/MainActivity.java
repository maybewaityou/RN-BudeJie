package com.rn_hybrid;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import io.realm.react.RealmReactPackage;

import java.util.concurrent.ArrayBlockingQueue;

public class MainActivity extends ReactActivity {
    //构建一个阻塞的单一数据的队列
    public static ArrayBlockingQueue<String> mQueue = new ArrayBlockingQueue<>(1);

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rn_hybrid";
    }

    /**
     * 打开 带返回的Activity
     *
     * @param requestCode 请求码
     * @param resultCode 结果码
     * @param data 数据
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == 200) {
            String result = data.getStringExtra("data");
            if (result != null && !result.equals("")) {
                mQueue.add(result);
            } else {
                mQueue.add("无数据啦");
            }
        } else {
            mQueue.add("没有回调...");
        }
    }

}
