در اینجا قالبی برای فایل **README.md** برای کلاسی که برای قابلیت کشیدن و رها کردن (drag & drop) طراحی شده است ارائه می‌شود. این فایل تمام جزئیات لازم درباره پروژه را شامل می‌شود:

```markdown
# JavaScript Draggable Class

A lightweight, customizable JavaScript class for implementing drag-and-drop functionality. This class allows you to create a draggable list with simple initialization and event handling.

## Features

- **Dynamic List Creation**: Generates list items dynamically from an array using a custom template function.
- **Drag-and-Drop Support**: Allows reordering of list items with smooth drag-and-drop interactions.
- **Customizable**: Easily integrate with your existing UI and data structure.
- **Lightweight**: Written in pure JavaScript with no external dependencies.

## Demo

Include a preview link or GIF to demonstrate how the drag-and-drop functionality works (optional).

## Installation

1. Clone the repository or copy the `draggable` class file:
   ```bash
   git clone https://github.com/yourusername/draggable.git
   ```
2. Include the JavaScript file in your project:
   ```html
   <script src="./draggable.js"></script>
   ```

## Usage

1. Create a container element for your list:
   ```html
   <ul id="listContainer"></ul>
   ```
2. Initialize the `draggable` class in your JavaScript:
   ```javascript
   const listData = [
       { id: 1, name: "Item 1" },
       { id: 2, name: "Item 2" },
       { id: 3, name: "Item 3" },
   ];

   new draggable({
       el: document.getElementById("listContainer"),
       list: listData,
       template: (item) => `<li class="list-item" id="${item.id}">${item.name}</li>`,
   });
   ```

## Customization

### Options

- **`el`**: The container element for the list (required).
- **`list`**: An array of objects representing the list data (required).
- **`template`**: A function that defines how each item should be rendered as HTML (required).

### CSS

You can style the list and its items by targeting the following classes:
- **`.list-item`**: Represents a draggable item.
- **`.dragElement`**: Applied to the item being dragged.
- **`.overElement`**: Applied to the item under the dragged element.

Example:
```css
.list-item {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    cursor: grab;
}
.list-item.dragElement {
    opacity: 0.5;
}
.list-item.overElement {
    border-color: #007bff;
}
```

## Events

The class automatically adds drag-and-drop events to all list items:
- **`dragstart`**: Starts the drag operation.
- **`dragover`**: Highlights the drop target.
- **`dragleave`**: Removes highlight from the drop target.
- **`drop`**: Handles the drop action and reorders the list.
- **`dragend`**: Cleans up after the drag operation.

## Example

A working example can look like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="draggable.js" defer></script>
</head>
<body>
    <ul id="listContainer"></ul>
    <script>
        const listData = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" },
        ];

        new draggable({
            el: document.getElementById("listContainer"),
            list: listData,
            template: (item) => `<li class="list-item" id="${item.id}">${item.name}</li>`,
        });
    </script>
</body>
</html>
```

## License

Released under the MIT License.
```

### توضیحات
- **نصب و استفاده**: شامل اطلاعاتی برای شروع سریع پروژه.
- **ویژگی‌ها**: قابلیت‌هایی که کلاس شما ارائه می‌دهد.
- **سفارشی‌سازی**: نحوه تغییر تنظیمات و ظاهر.
- **مجوز**: اطلاعات مربوط به استفاده از کد.
