# ProtoSimple

A humble attempt at making JavaScript prototypes and inheritance hierarchies
slightly more sane to work with, especially in the Chrome debugger.


# Usage

Everything starts by extending from BasicObject.

```js
var Animal = BasicObject.extend("Animal", {
    initialize: function(name) {
        this.name = name;
    },
    legs: 2
});

a = Animal.create("Ogden");
```


# Running the Tests

Open `test/test.html` in your browser.
