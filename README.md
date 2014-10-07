宁波鄞州高级中学14级10班班级系统
======
这个小东西是我花30min搞出来的，代码就混乱的堆在一起了**（强烈要求Meteor提供一种简单的方式创建一个结构合理的app！）**。
亲们可以自己搞定啊，不过先说一下，配置方法在此：

准备工作
--------
按照正常方式部署好meteor app，然后链接到你家的mongo。。。。。（什么你用的是meteor free server？！终于看到一只穷屌作伴了233333333）

部署在Meteor.com的用这个方法连接mongo：`meteor mongo yourawesomeclass.meteor.com`

注册初始管理员
--------------
注册啦。。。。。

设置为管理员
------------
在mongo shell里`db.users.find()`，没什么问题的话就会有（且只有？）一个账户，记下它的`_id`，然后执行：
`db.users.update({_id:'YOUR_USER_ID'},{$set:{roles:['admin']}});`

没问题的话你已经能在用户管理页面看到管理了。。。。。

-卒-

此处做一下广告：赶脚Meteor的accounts-ui没中文不爽？快来用accounts-t9n和accounts-template的组合拳！由laosb创建的简中翻译！Piet&宁波鄞州高级中学14级10班班级系统御用package！
------------

License
-------

**GPL**
