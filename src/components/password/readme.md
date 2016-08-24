### reference

[六位字符密码输入器](https://segmentfault.com/a/1190000006649563)


### usage

new Password(className, )

支持在页面初始化多个 password 组件

```
let password1 = new Password('.password-container-1', function(){})
password1.getRealValue()
let password2 = new Password('.password-container-2', function(){})
password2.getRealValue()
```