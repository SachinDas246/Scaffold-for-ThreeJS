# Scaffold-for-Threejs
This a Three.js files arrangement which can be used to build complex 3d applications and games with ease.

# What is this?

Three js is javascript library for rendering 3d animations in browser. Writing games and app in three js can become hard if the project has complex logic.This folder structure provides the developers a clear format for writing apps similar to game engines.Certain rule will be mentioned below , but those are not compulsory.They are just to maintain a clear format and easy under standing.

# Usage
Clone or download the repo and start working on it.

# Understand the logic
Folder structure :
- js
  - control
    - Awake.js
    - End.js
    - start.js
    - update.js
  - library
    - keyboard.js 
  - program script
    - cube.js
    - cuboid.js
  - Three
- index.html
- main.css

1. Js - Folder containg all js files
2. Control - Folder containing all javascript files for the controlling the whole process. These files can also be edited, if requied.But not recommended as it can affect the whole logic
3.  Awake.js - this is the first imported script after threejs. it include variable which must be available for later process.
4.  End.js - last file to be imported, this function calls update which there after runs in loop using requestAnimationFrame callback.
5.  Start.js - this file contains variables and functions which must be called only once. this file is imported after awake.js. This is the file in which the scene and renderer is created. You may edit the variable names for scene and renderer in this file. By default , Renderer object is stored in "renderer" variable and Scene is stored in "scene". Also note that if you changing the variable name also update them in the update file also.
6.  Update.js - this file contains the code for looping through the logical updates and graphical updates
7.  Library - This folder can be used for storing the js files which contains special function and is shared between developers.Currently we have included a keyboard.js file which can be used for taking keyboard inputs.More details about keyboard.js will be explained below.
8.  Program scripts - this is is the folder in which developers can write their code.
9.  Three - This contains all the three js files
10.  index.html - html file
11.  main.css - css for the html

Usage
- After cloing this repo, you can create a js file of yourown inside program script file. Here as an example we have already create a cube.js file for reference.
- To add it to the app, just import it inside index.html.
![usageimg2.JPG](https://raw.githubusercontent.com/SachinDas246/Scaffold-for-Threejs/main/tutorial%20files/usageimg2.JPG)
- For proper working make sure you add it inbetween the library file imports and update.js file
- In most game engine , we write the code in a format such that it has two main parts the start function and Update function .The code in start function is ran only once during the stating stage, and the update function is called every frame. We also follow this format. To achive this, we write the code to be run at start simply inside the js file.To write the update function just write it as a function and pass it to the Add_to_Logic_Function(<Update function name>).To create a function which is called every frame you can use this method.below is an example :
- 
![usageimg1.JPG](https://raw.githubusercontent.com/SachinDas246/Scaffold-for-Threejs/main/tutorial%20files/usageimg1.JPG)
 - In above example you can see that we have created a cube and camera using threejs functions.Also we have change the camera position z value to 5 .These are done only once.
 - There are also two update functions "Update_cube()" and "updatecam()" they are called every frame since they have been added to the logic functions.In "Update_cube()" we rotate the cube by adding 0.01 to its x and y rotation. In "updatecam()" we update the position if camera based on input using the keyboard.js file which which is discussed below.

## Keyboard.js file
- Its an additional js script which we have written for working with keyboad interactions.Below mentions functions are some function which can be used for getting input from user.
- Is_on_Hold(key) - returns true if key on hold else false
- Is_on_Down(key) - returns true only at the instant when key is pressed else false
- Is_on_Up(key) - returns true only at the instant when the key is released else false
- Is_on_Hold(key) has been used in the cube.js example for moving the camera using wasd.
![usageimg2.JPG](https://raw.githubusercontent.com/SachinDas246/Scaffold-for-Threejs/main/tutorial%20files/usageimg1.JPG)

- Addition to these functions you can also make a function call at the instant only when key is pressed similar to javascript EventListener. For that use 'Add_to_DownScan()' for calling during key going down and  'Add_to_UpScan()' for calling during releasing. To do this write the function and use Add_to_DownScan(key,function) or Add_to_UpScan(key,function) , where char is the key to be checked and function is function to be called.
- ![usageimg3.JPG](https://raw.githubusercontent.com/SachinDas246/Scaffold-for-Threejs/main/tutorial%20files/usageimg3.JPG)
- In case,  in between if you want to remove a function just call "Remove_from_DownScan(char,fun)" or "Remove_from_UpScan(char,fun)"

thank you for using by repo, also this not fully developed project and there can be bugs or improvements can be made ,please share those ideas,😃
- 
