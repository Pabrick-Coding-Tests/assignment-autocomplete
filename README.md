# Sailpoint Autocomplete Exercise

You should implement an autocomplete component (suitable for a shared component library).

- Do not use any UI libraries such as Bootstrap/Material for the autocomplete logic/UI
- The UI shouldn't be fancy, but a nice-looking UI will be appreciated
- The component should be written using Angular
- Bonus - add meaningful unit tests for your work

To demonstrate it, you should write a minimal webserver in Go or Node.js that serves up the contents of world-cities.txt as required.

Please don't share this exercise or solution on any public profiles. Thanks!

## My approach to the task

My approach to this task has been guided by my ideal user experience I would like to find.
The component features an input field that dynamically displays a list of available options as the user types. This functionality alleviates the need for users to remember the complete field value.

Specifically, when the user begins to enter the name of a city, a scrollable list of suggestions will appear below the input field, offering potential matches. Selecting an option from this list will automatically populate the input field with the chosen value, thus enhancing the efficiency and convenience of the user interface.

## How to run the proyect

- Run `npm i` to install the proyect dependecies.
- Run `npm run serve` to run the server that enables the endpoint with the list of cities provided on the TXT file.
- Run `npm run start` to start the application.

## Room for improvements

I have notice that some cities on the TXT file are duplicated, so it would be nice in terms of the performance to remove those duplications to decrease the size of the list.

The Autocomplete component has been treated as its own module, that's why the sub components that it needs are inside, in this case 'list'. If those sub components where to be used in another part of the app they could be extracted. But to keep it tidy they are inside for now.

The component has its own styling. In case those styles belongs to a global theme, most of those should be extracted to a global styling.
