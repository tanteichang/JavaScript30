# JavaScript Drum Kit

### 一个纯 JS 实现的打鼓页面
[点我预览](https://tanteichang.github.io/JavaScript30/01-JavaScriptDrumKit/index-START.html)

- 添加键盘监听事件 监听 `keydown` 事件

```JavaScript
window.addEventListener('keydown', function(e) {

});
```
- 根据 `keyCode` 判断按下的键位
- 使用[属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)与[模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)使`keyCode`与`data-key`对应
```JavaScript
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
```
- 为 Element 添加 Class 可使用 [`Element.classList`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList) 接口

- 使按键恢复原状可用[`transitionend`](https://developer.mozilla.org/zh-CN/docs/Web/Events/transitionend)事件
