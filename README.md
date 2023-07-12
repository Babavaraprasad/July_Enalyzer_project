# July_Enalyzer_project

## usage
- clone the github repository using command "git clone repoPath" into local folder
- install node module dependencies using command "npm install"
- install a react router dependency using command "npm install react-router-dom". This is used for navigation among components with React Hooks.
- start the development server using the command "npm start".Local host runs on the port:3000

## Architectural pattern chosen
- single Layered architecture: Includes only the presentation or view layer currently. However, In future while integrating with backend service can be transformed to Two-layered architecture. 

## Component Structure and concepts used
- Inside the src/homepage folder, I have created majorly 3 components.
MainPage: to display the JSX comprising of Input text field, keypad, keypadBackbutton & Submit button
Keypad: Mainpage component uses the concept of iterative rendering concept
KeypadBackButton: to remove the last user entered input

- Inside the src/distribution folder,I had created 2 components.
DistributionComp: It renders NotesandCoins component with iterative rendering concept.

## Testing (JEST)
- To ensure notes and coins are distributed correctly, I wrote 2 unit test cases in "Distribution.test.js" file.
  To test this scenarios, please use command "npm run test" and modify the input value to the function.

## Build
-  use "npm run build" to create a build package to deploy for the environment on cloud
- I had deployed the build package to netlify.
Link to netlify: https://enalyzer-atm-babavaraprasad.netlify.app/
 