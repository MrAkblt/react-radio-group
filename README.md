# react-radio-group
Use it however you want, the only condition is that the element has a value attribute.
If you want to do anything when selected your custom component, you can use `checked` prop.

## Usage
```js
<RadioGroup onChange={(v) => setValue(v)} value={value}>
  <CustomComponent value="test1" label="Test1"/>
  <input value="test2">Test2</input>
  <button value="test3">Test3</button>
</RadioGroup>
```
