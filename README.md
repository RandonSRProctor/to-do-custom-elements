# Stage 1: To Do with Custom Elements, Tailwind CSS, and Redux

This app is part of a BBR series in which I explore different styles of creating a React app.

My primary goal is to ensure parity among the important hierarchal structures:

- Code Organization and Abstraction
- DOM Tree
- Accessability Tree
- State Tree

The Custom Element...

At the heart of all HTML elements is a fundamental question: is this a block or inline? Also known as "Is this a div or a span?"

From a layout perspective, those are the two fundamental categories, all semantic html is just one of those two elements with added encapsulated logic.

To create custom elements should be very natural.

There are two primary reasons why we have specified names for elements:

1. Naming helps the reader understand intention. (Humans get more readable code, and bots get semantic meaning, and assistive technology helps guide users)

2. Encapsulating logic.

To keep in line with HTML standards should feel natural. We can even keep the robust modularity of HTML elements if we abide by their same general rules:

- Nearly all elements are capable of nesting (branches on the node tree)
- Non-nestable exceptions are where the content lives, typically works or imiages. (Leaf of a node tree)
- Encapsulate logic, not other elements (there is certainly a place for that, there will be more on that later)
- Prefer composition to polymorphism. Passing in props/attributes should be for minor changes, or changes very specific to the element's purpose. If you need lots of varying functionality, make lots of custom elements.

I have to decide if I want to have the className an internal value to the customElements, or let them be passeed in. It hurts a little to say my answer, but the answer is a clear winner for me: let the styles be passed in.

It is hard for me to say this, because it might seem like a pointless endeavor to go to the work of naming custom elements, only to have nothing unique about them and still be passing in their UI implementation anyway. (even more, not many people know that you can simply make up your own element names in valid HTML and it will simply be turned into a div with your custom moniker added as a classname!)

As much as I don't like to prematurely optimize, what I have found is that in large applications nearly every single componenet has a very large ammount of logic inside.

The reason for these custom elements to be created is for their ability to have functionality encapsulated. The custom elements are defined by their functionality, not their style. (Consider the fact that most folks use css resets to get rid of assumed design details that are added by browsers and operating systems--I'm looking at you Apple)

With the ability to pass in classNames come two benefits:

- I still get the amazing ability to modularize my code. I can move and change styles with very few keystrokes.
- When looking at the React Devtools I can see the classnames, this makes the React Devtools a more powerful tool that begins to resemble the DOM inspector.

--To that point, there are plent of primitive HTML elements that I have left in place. If an element does not seem that it will ever have any encasulated functinoaly (container divs), or it already has encapsulated functionality that meets my needs (img, header, h1, p, etc...) then I can leave it be. It can always be "promoted" to a custom element at a later point.--

Strike that thought, I think that I'm going to make them all custom. Why? because in a large applciation a design system is likely to have custom versions of all primitive elements to assist in consistent design accross your application.

There is one that kind of hurts to do, but I think that it is useful: `<Container>`. I have gone back and forth on this one for a long time. It just feels so much like overengineering. It feels like I'm just trying to hard to make everything a nice green component. I fight the urge to make changes just because I am wrapped up in a pattern, however, I find that I actually appreciate the Container element.

I want my code to be readable, I want it to be as intuitive as possible. When a developer uses a Container element, the developer's intentions are explicit. Just a moment ago I found two divs wrapped around my logo: one was adding padding left and the other padding top. My eyes got lost in a sea of divs, and I needed padding top, so I just thought to throw a container around it and problem solved.

This would not have happened if I had seen the Container. There should only be one Container around anything. I have flipped back and forth on this issue for a long time, and today I am flopping back to being cool with Container custom elements. I raise my pinky and drink my tea. Today I am a fancy developer with brand new, name brand, custom Container elements that look great and feature zero internal functionality.

---

I noticed that I must create custom elements for each of my html elements in order to keep my Componnent dev tool making sense.

---

I am considering adding an internal div wrapper to every component and calling it a gutter. I would love the way that it is used, but also think that it might not be very intuitive. I'll have to think on it.

---

At first I thought unit testing would be nearly impossible in one giant file, but everything is still abstracted into its own file, so actually it'll be cool?

# Thoughts

UI Reusability is for the birds. I work on one of the largest ecommerce platforms in America and the only UI components that we reuse are the primitives, and those are handled by our design system components.

Everything else is extremely custom. The moment that we try to start making our components polymorphic I feel like we run into the same problem that inheritence has: finding patterns in hierarchal systems is not something worth nailing down. As customization happens and iterations occur, the differences grow and it does not take long at all for two once-similar concepts to have entirely different needs.

If you have two siilar concepts, just make two things that are similar. Only nail down the things that will never change, or are very minimal.

- If you know how many of something will be displayed in the static code, then you should make sure that each instance has its own unique component. Don't let repetition lead you to exclusively render dynamically. If it's instance is important enough to know ahead of time, then it will (eventually) have enough unique qualitites to be worthy of it's own codespace. (If you do it dynamically once, then you are trapped to do it dynamically down the line. I'm thinking of dynamic sub-category titles)

- A reason why you always want your abstraction to be represented via children or folder structure is because names get very repretive and you quickly run out of good ways to name things in a creatively unique way. Nest it

- A while ago I got really tripped up on whether or not a menu is part of an app. Of course it is part of the program, but a loading page is not the game, it is abstractly outsoude of the game/app. I think that a good paradigm to use is separating content from non-content. Menus, options, configuration pages, these are not the content. They are a part of the app, but put the actual part of the application that has the central focus of why the user is using the app inside of some area or boundary that is called "content".
