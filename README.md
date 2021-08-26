```
{"type":"error","code":"非法请求，已经记录请求信息，一切法律后果自负！","content":"非法请求，已经记录请求信息，一切法律后果自负！","anchor":"undefined","errorFields":[],"data":null}
```



# ZAFU_DDUP
每日一报

# 以下内容需要根据实际所在地作出修改， 经纬度可以在这里获取 => https://jingweidu.bmcx.com/
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20210202162841.png)

# 由此导致的一切问题自行负责，与本人无关

## 收费问题
### 按照此操作进行是不会产生任何费用的。

# 提前准备
## 1.当日的每日一报先登记好(之后就不需要了)
## 2.注册并登陆腾讯云，如实名认证等内容自行操作解决，在此不做赘述。
## 3.注册IYUU
### a.使用微信注册IYUU用来接收登记结果，打开https://iyuu.cn，点击开始使用
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-180529.jpg)
### b.出现二维码之后使用微信扫描并关注相关公众号。
### c.保存好网页上出现的令牌 IYUUXXXXXXXXX，等下要用到
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-180601.jpg)


# 使用方法
#### 1.注册之后点击右上角进入控制台
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-175710.jpg)
#### 2.选择云函数，可能会提示立即开通什么，开通即可。
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-175739.jpg)
#### 3.修改地区(也可以不修改，地区意味在哪里的机房运行函数) 然后点击新建
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-175812.jpg)
#### 4.如图，函数名称随意，运行环境选择Nodejs 12.16，选择空白函数
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-175840.jpg)
#### 5.将本项目下DDUP.js内所有内容复制到如下编辑器，并修改学号，登陆密码，与IYUU令牌，然后点击完成
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-175913.jpg)
#### 6.上述操作做完之后，可以点击一下测试，此时如果不出意外微信应该会接收到IYUU发来的一条信息
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-175947.jpg)
#### 7.点击触发管理，开始设置每日定时任务。
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-180004.jpg)
#### 8.点击创建触发器，并填写相关内容，任务名称任意，触发周期改为自定义，Cron表达式为 0 2 10 * * * * 每个人可以修改这里的 0 2 10 ，意为每天的10点02分00秒触发任务。不要直接使用0 2 10
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-180102.jpg)
#### 9.建议添加两个触发器，第一个触发器用于登记，第二个触发器用于校验登记状态

# 以下为IYUU提示样例
#### 1.登记失败
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-180402.jpg)
#### 2.登记成功
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-180426.jpg)
#### 3.今日已登记
![image](https://github.com/Debuffxb/ZAFU_DDUP/blob/main/images/Jietu20201011-180444.jpg)
