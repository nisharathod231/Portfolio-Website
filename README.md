# Portfolio-Website Setup Guide
- ## Create project with Vite and Tailwind:
    ```bash
    npm create vite@latest
    ```
    <img width="368" alt="Screenshot 2024-05-25 at 11 37 48 AM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/351866f9-7566-4192-b9f6-b97653e289b9">


  Tailwind CSS works by scanning all of  React files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

    ```bash
      npm install -D tailwindcss postcss autoprefixer
    ```
    ```bash
      npx tailwind init
    ```
    Your folder should look something like the screenshot below:
    <img width="696" alt="Screenshot 2024-05-25 at 11 46 24 AM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/f7d72548-5549-410b-add9-3b37e1a72f55">


Follow the link to get embed code of Pixelify Sans fonts https://fonts.google.com/selection/embed

<img width="1218" alt="Screenshot 2024-05-26 at 8 55 38 AM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/43dc4322-a19a-401f-be53-bed604e09fb3">

Now we can add this to our tailwind.config.js file 

<img width="446" alt="Screenshot 2024-05-26 at 9 20 15 AM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/0fbb1218-def7-40fa-b642-4ee37b05ff46">

Furhter setup steps can be followed from official documentation of tailwindcss: https://tailwindcss.com/docs/installation

<img width="1137" alt="Screenshot 2024-05-26 at 9 21 59 AM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/19dda9db-be14-47a9-bd69-6714bbcc0096">

- ## We have setup boilerplate now we will connect files

  Make a folder and name it components. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.Initialize components and connect them to App.jsx whenever required.

  <img width="209" alt="Screenshot 2024-05-26 at 9 27 33 AM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/67b305d5-09e2-4c64-8705-381d0e2e3ac1"> <img width="312" alt="Screenshot 2024-05-26 at 9 28 29 AM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/922f5d1c-195b-42fd-b46b-8832de19aadb">

  Go to the **src > assets** folders to dowload icons and images.


Now we are ready to write code for our website!

- ## Refrence Links:
  RectJs: https://www.w3schools.com/react/default.asp
  
  Javascript: https://www.w3schools.com/js/
  
  Tailwindcss: https://tailwindcss.com/docs/utility-first

  
  


  
