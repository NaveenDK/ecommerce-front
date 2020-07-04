A frontend app with react - ecommerce - cart -add to cart and checkout!

#STEP 1 

1)  Setup react-router for the app
2) The header will link to "/" route which shuold display photos component
3) Click on shopping cart icon in the header to go to the "/cart" route, which should display the cart component

Branch to start `b4-react-router-setup` and check the solution `rftr-react-router-setup`    

#STEP 2

Set up the Context for our app.

1. In a new file, create a new context with React
2. In that same file, create a custom component that renders the Provider of the context you created
3. For now, just pass in an empty string "" as the context provider's value prop
4. Export the custom Provider component and the full context object (so we can pass it to the useContext hook eventually)
5. Set up your index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)

Branch to start `rftr-react-router-setup`  and check the solution `rftr-context-setup`
