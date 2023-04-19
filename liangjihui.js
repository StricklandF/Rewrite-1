/*************************************

项目名称：靓机汇
下载地址：https://t.cn/A6NMLjKA
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/guapi\.liangjihui\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/liangjihui.js

[mitm]
hostname = guapi.liangjihui.com

*************************************/


var body = $response.body;

body = body.replace(/\"is_member":\w+/g, '\"is_member":true');
body = body.replace(/\"end_time":\d+/g, '\"end_time":4092599349');
body = body.replace(/\"isVip":"\d"/g, '\"isVip":"1"');

$done({body});
