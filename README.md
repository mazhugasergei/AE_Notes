<img src="https://ae-scripting.docsforadobe.dev/_images/objectmodel.png">

```jsx
// List all properties of an item
var propsWindow = new Window("palette", "")
var propsWindow_listBox = propsWindow.add("listbox", undefined, "")
var propsWindow_item = app.project.items[1].layers[1] // your item here
for(a in propsWindow_item) propsWindow_listBox.add("item", a)
propsWindow.show()
```

```jsx
// Application
app

// Current project
app.project

// Compositions, footages, folders
app.project.items // all
app.project.items[1] // 1st
app.project.item(1) // 1st

// Layers
app.project.items(1).layers // all
app.project.items(1).layers[1] // 1st
app.project.items(1).layer(1) // 1st

// !!! for items and layers
// type: Object
// properties names: 1, 2, ..., n
```