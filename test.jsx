var propsWindow = new Window("palette", "")
var propsWindow_listBox = propsWindow.add("listbox", undefined, "")
var propsWindow_item = app.project.items[1].layers[1]
for(a in propsWindow_item) propsWindow_listBox.add("item", a)
propsWindow.show()