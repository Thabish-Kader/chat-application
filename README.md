# Issue/Bug Tracker 
## React-Firebase Fullstack Web Application
This application was built for the purpose of learning and implementing react and firebase concepts. This isuue/bug tracking web application 
enable a user to post isssues. The issues posted can be discussed with other users in a chat room and can be resolved.
The application has CRUD functionalities implemented with the help of firebase functions. 

## Skills Aquired
- React Hooks (useState, useEffect, useRef)
- React Conditional Rendering
- React Router Dom
- Css styling, layout, custom animations
- Firebase functions (useAuthState, getFirestore, collection, getDocs)
- Learnt Javacript IntersectionObserver API
- Axios
- Folder structureing

### New Concept Introduced
- Framer motion
- Tailwind Css
- React Smooth scroll

### All CSS styling is done without bootstrap giveing it a very original look.

P.S If you want to see the implementaion of intersectionObserver (which has animate on scroll functionality) navigate to the animation branch. But there is a bug in it which sometimes does not render the 'hidden' and 'cards' div in order to avoid this follow the following steps:
1) Go to the Services.js under the Pages folder.
2)  You will see this line in line 14 console.log("observer working !!")
3) Just add another exclamatory like so console.log("observer working !!!") (For some reason changeing the content of the console log   allows the intersection object to work again.

