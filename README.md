A frontend app with react - ecommerce - cart -add to cart and checkout!

# STEP 1 

1)  Setup react-router for the app
2) The header will link to "/" route which shuold display photos component
3) Click on shopping cart icon in the header to go to the "/cart" route, which should display the cart component

Branch to start `b4-react-router-setup` and check the solution `rftr-react-router-setup`    

# STEP 2

Set up the Context for our app.

1. In a new file, create a new context with React
2. In that same file, create a custom component that renders the Provider of the context you created
3. For now, just pass in an empty string "" as the context provider's value prop
4. Export the custom Provider component and the full context object (so we can pass it to the useContext hook eventually)
5. Set up your index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)

Branch to start `rftr-react-router-setup`  and check the solution `rftr-context-setup`

# STEP 3

Add state to our context and pass it through the Provider

1. Add state to hold the array of all photos our app gets from the API
2. Pass the array of all photos through the value of the provider so it's available anywhere the app accesses the context


Branch to start `rftr-context-setup`  and check the solution `rftr-state-context`

# STEP 4

Get the JSON data with the photos information from the API and save it to context state

1. As soon as the ContextProvider component renders, get the JSON data from this url: 
https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json

2. Save the array of data that comes back to state.

Branch to start `rftr-state-context` and check the solution `rftr-json-fetch`

# Step 5

Using the data in context state, map over it in the Photos page and display the images.

Branch to start `rftr-json-fetch` and check the solution
`rftr-pics-mapped` 

# Step 6

On the Image component, track the hover state

1. Create state boolean for "hovered"
2. When the mouse enters the Image's div, set "hovered" to true
3. When the mouse leaves the Image's div, set "hovered" to false
4. Log "hovered" to the console so you know it's changing successfully.


Branch to start `rftr-pics-mapped` and check the solution
`rftr-hovered` 

# Step 7


Conditionally render the heart and plus icons when an Image component is being hovered on

1. Icon to render for the heart:
<i className="ri-heart-line favorite"></i>

2. Icon to render for the plus:
<i className="ri-add-circle-line cart"></i>

Branch to start `rftr-hovered` and check the solution
`rftr-adding-icons-hovered` 

# Step 8

Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)

1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
    a. Have this function also console.log something so we know it's running correctly
    b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
2. Make it so clicking the heart icon on any given image runs this method

Branch to start `rftr-adding-icons-hovered` and check the solution
`rftr-favorited-added`

# Step 9


Make the image display the filled heart icon when it's already favorited

Logic to follow:
* If the image is favorited, display the filled heart icon always
* Otherwise, if the image being hovered on, display the heart outline instead
* If it isn't favorited OR hovered on, don't display anything

Remember to make it so clicking the filled heart icon ALSO runs the toggleFavorite function!

Filled heart icon:
<i className="ri-heart-fill favorite"></i>

Branch to start `rftr-favourted-added` , and check the solution `display-favs`
# Step 10


Add propTypes to the Image component

1. className should be a string
2. img should be an object, specifically an object with `id`, `url`, and `isFavorite` properties
    a. Hint: Specifying the properties of an object is called and object's "shape"

https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

Branch to start `display-favs` , and check the solution `add-image-to-cart`

# Step 11


Setup context to manage items in an array called `cartItems`. This will be an array of image objects.

1. Add the `cartItems` state to context. (Array)
2. Add function to add an image to the cart. (Takes the full image object as parameter)
3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)

 
 Branch to start `add-image-to-cart` , and check the solution `rftr-add-to-cart`

 # Step 12


Change the plus icon to a full shopping cart icon when an image is already in the cart. This should display whether the image is being hovered or not (like the favorite icon).

Icon to use when item already in cart:
<i className="ri-shopping-cart-fill cart"></i>

Hints: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://stackoverflow.com/a/8217584

Branch to start `rftr-add-to-cart` , and check the solution `rftr-fill-cart`

# Step 13

Make it so clicking the little shopping cart icon on the image removes the item from the cart

Branch to start `rftr-fill-cart` , and check the solution `rftr-cart-page-setup`

# Step 14

Cart Page Setup git 

# Step 15 

Make it so clicking the trash icon on the Cart page removes that item from the cart

# Step 16

Calculate the total cost of the items in the cart and display it on the Cart page

1. Usually the item in the database will have it's own cost saved, but we're assuming every item we sell costs $5.99, so you can just hard code that cost in
2. To very easily display the total cost in US dollars (or whatever currency you want), use the following:

`<number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

Branch to start `start-at-16` , and check the solution `after-16`

# STEP 17


Let our user place their order!

Clicking the "Place Order" button should:
1. Change the text to "Ordering..."
2. Timeout for 3 seconds (to simulate an order being placed)
3. Log "Order placed!" to the console
4. Empty out the cart

Branch to start `after-16` , and check the solution `place-order-done`

# STEP 18

1. Only render the "Place Order" button if there are items in the cart

2. Change the trash icon to a filled-in trash icon when hovering over it

Filled trash icon to use when hovering:
<i className="ri-delete-bin-fill"></i>

Empty trash icon to use when NOT hovering:
<i className="ri-delete-bin-line"></i>

Branch to start `after-16` , and check the solution `minor-ux-fix-done`

# STEP 19 

Custom Hook - hover logic


Branch to start `after-16` , and check the solution `hover-hook-done`