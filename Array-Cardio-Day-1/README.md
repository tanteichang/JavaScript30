# Array Cardio Day 1

## Array mothods 练习


- [Array.prototype.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

  > filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。


- [Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  > map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。

- [Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
> sort() 方法在适当的位置对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。

- [Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
> reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。

## tip

- sort Exercise Sort the people alphabetically by last name
```JavaScript
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem'];
```
可利用[变量的解构赋值](http://es6.ruanyifeng.com/#docs/destructuring)提取`'Beddoes, Mick'`此类数组中的值
```JavaScript
const orderByLastName = people.sort( (a, b) => {
  const [alast, afirst] = a.split(', ');
  const [blast, bfirst] = b.split(', ');
  return alast > blast ? 1 : -1;
} );
```

- Reduce Exercise Sum up the instances of each of these
```JavaScript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
```
使用 Array.prototype.reduce() 可以计算数组各个值出现次数
```JavaScript
const transportation = data.reduce((all, item) => {
  if (item in all) {
    all[item]++;
  } else {
    all[item] = 1;
  }
  return all;
}, {});
```
