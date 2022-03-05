Here is hopefully a more technical exercise to apply your knockout knowledge to. The purpose is to get a better grasp on important concepts via a slightly less simple hello world tutorial on knockout.js

First off, this is copied from a codepen sandbox, so this won't run by itself. The codepen is here if it's still up: https://codepen.io/strommj/pen/xxPQaBP

The application has a couple parts. It shows a list of currently available car makes in the world (there are only 4, the world ended). Then it forces you to type in the car make you would like to learn more about.

This will then show a list of car models for that make. and you repeat the above process to show a list of features individual to each model. You have the opportunity to add or remove features from this list.

Happy coding!
-Matt

Here are the instructions for the exercise:
1) Loop through and display all models defined for the car make selected: https://codepen.io/strommj/pen/BamMXdY
 - Create variable to store the selected data from the input
 - Insert the necessary code to display this selection in the heading
 - Loop through and display all models defined in that make
2) Loop through and display all features for the model selected: https://codepen.io/strommj/pen/wvPNVrm
 - Repeat same steps for #1, but nested inside the previous html created. Comments show you where to put your code
3) Add and remove feature buttons: https://codepen.io/strommj/pen/NWwoQwB
 - Add functions within the "Model" model to update the features in that view model
 - Attach the front end input to the view model
 - Attach the front end "add" button to add the selected text to the feature array
 - Attach the front end "remove" button to remove the last feature in the list.
