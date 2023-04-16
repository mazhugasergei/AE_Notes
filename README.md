<img src="https://ae-scripting.docsforadobe.dev/_images/objectmodel.png">

List all properties
```jsx
var propsWindow = new Window("palette", "")
var propsWindow_listBox = propsWindow.add("listbox", undefined, "")
var propsWindow_item = app.project.items[1].layers[1] // your item here
for(a in propsWindow_item) propsWindow_listBox.add("item", a)
propsWindow.show()
```

Application

```jsx
app
```

Current project

```jsx
app.project
```

All compositions

```jsx
app.project.items
// type: Object
// properties names: 1, 2, ..., n
```

All layers

```jsx
app.project.items[1].layers
// type: Object
// properties names: 1, 2, ..., n
```