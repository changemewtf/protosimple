describe "ProtoSimple", ->
    beforeEach ->
        @Animal = BasicObject.extend "Animal",
            legs: 2

        @animal = @Animal.create()
        @animal2 = @Animal.create()

        @Dog = @Animal.extend "Dog",
            initialize: (name) ->
                @name = name

            legs: 4

        @dog = @Dog.create "Ogden"

    it "outputs to console", ->
        # One thing we can't test is the way it looks in Chrome's debug
        # console, which is half the point of doing this at all. So, this
        # is a dumb test that just outputs to the console if present, allowing
        # you to eyeball it.

        if console? and console.dir?
            console.dir @dog

        expect(true).toBe true

    it "inherits non-overridden properties", ->
        expect(@animal.legs).toBe 2

    it "does not override other sibling type properties", ->
        @animal.legs = 6
        expect(@animal2.legs).toBe 2

    it "overrides properties when extending", ->
        expect(@dog.legs).toBe 4

    it "runs initialize() on creation", ->
        expect(@dog.name).toBe "Ogden"


