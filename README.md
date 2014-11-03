# ProtoSimple

A humble attempt at making JavaScript prototypes and inheritance hierarchies
slightly more sane to work with, especially in the Chrome debugger.

![A screenshot of sane console.dir output](http://i.imgur.com/LRUdrc4.png?1)


# Usage

Everything starts by extending from BasicObject.

```js
var Animal = BasicObject.extend("Animal", {
    initialize: function(name) {
        this.name = name;
    },
    legs: 2
});

var Dog = Animal.extend("Dog", {
    legs: 4
});

d = Dog.create("Ogden");
```


# Running the Tests

Open `test/test.html` in your browser.
