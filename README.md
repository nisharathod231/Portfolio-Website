# Portfolio-Website Setup & Hosting Guide
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

- ## Hosting
  I am using 000webhost powered by Hostinger, as it provides free Web Hosting For 1 Year, 150 unique visitors/day and provides 300 MB SSD Storage which is sufficient for this website.
  You can also use githubPages by defining workflow, you can make a deploy.yml file and host website via githubPages for free if your repository is public. For this project I have tried both and both the methods work equally good! Below is a step-by-step guide to host website via 000webhost.

First SignUp to this link: https://www.000webhost.com

  
<img width="1124" alt="Screenshot 2024-05-26 at 12 35 56 PM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/8d6ab69b-1d34-4d89-87c2-ff8b41195608">

After signing in, click on "Create New Site", and setup Name and password.
<img width="1173" alt="Screenshot 2024-05-26 at 12 39 46 PM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/7c155a93-b1c4-4c8d-b126-b39dff30860f">

Once done, go to "Manage Website" and click on "File Manager" under DashBoard
<img width="1090" alt="Screenshot 2024-05-26 at 12 42 02 PM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/ef64b87e-09c6-4741-8c98-e74ddf16c947">

Go to your terminal and run following command to create build:
```bash
    npm run build
```
  A directory named "dist" will be created once build is complete.
  Drag and Drop contents of dist to public_html directory of File Manager, like shown in screenshot below.
  
<img width="641" alt="Screenshot 2024-05-26 at 12 42 29 PM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/d6028f58-824a-4885-a8ac-b33985480faf">

Once done, your website is sucessfully hosted, go back to your dashboard, on the left panel you'll find link to your website!

<img width="238" alt="Screenshot 2024-05-26 at 12 45 08 PM" src="https://github.com/nisharathod231/Portfolio-Website/assets/163638504/356d8ca0-0ba9-43fe-a64f-c88d29e06b11">

You might encounter issue with images not loading properly, for that, upload your images to https://imgur.com and instead of adding source path to images copy url and use it.

  
  


  
