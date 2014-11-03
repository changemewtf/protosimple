var BasicObject = (function(){

    var copyProperties = function(source, target) {
        Object.getOwnPropertyNames(source).forEach(function(propName){
            target[propName] = source[propName];
        });
    }

    var hackyConstructor = function(name, proto) {
        eval("var constructor = function " + name + "(){};"); // Sorry not sorry
        constructor.prototype = proto; // This breaks ".constructor", sadly.
        return constructor;
    }

    var createInstancePrototype = function(className, properties, parentProto) {
        var oneOff = hackyConstructor(className + "Prototype", parentProto);
        var instanceProto = new oneOff;
        copyProperties(properties, instanceProto);
        return instanceProto;
    }

    function Class(className, instanceProto) {
        this.instanceBuilder = hackyConstructor(className, instanceProto);
    }

    Class.prototype.instanceBuilder = Object;

    Class.prototype.extend = function(className, properties) {
        return new Class(className, createInstancePrototype(
            className, properties, this.instanceBuilder.prototype
        ));
    };

    Class.prototype.create = function() {
        var obj = new this.instanceBuilder;
        obj.initialize.apply(obj, arguments);
        return obj;
    };

    var BasicObject = Class.prototype.extend("BasicObject", {});

    Object.defineProperty(BasicObject.instanceBuilder.prototype, 'initialize', {
        value: function(){},
        enumerable: false,      // don't show in console.dir or when enumerating
        writable: true          // otherwise descendants can't override it!
    });

    return BasicObject;

})();
