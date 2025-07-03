# ⚙️ Instructions:

**🕹️To Run Project Locally:**

1. **Clone** this project from GitHub repository.
2. Make sure you have [Node.js](https://nodejs.org/) installed.
3. Install dependecies  using command ```npm install```
4. Run the following command to open in browser:

- ```npm run dev```

**🔨To Build The Final Files:**

This is a frontend project built with [Vite](https://vitejs.dev/).
The compiled files will be located in the **dist/** folder

1. Run following command to build final files:

- ```npm run build```

# ✍️Brief Describtion:

This project uses **Vite** as the build tool and development server. Vite provides fast, modern bundling with native ES modules support, enabling quick development startup and hot module replacement.

Following the project instructions, I utilized only **vanilla JavaScript**, which helped keep the code lightweight and easy to maintain. For animations, I integrated **GSAP** and **Swiper** to create smooth and engaging effects.

- For the **first scene**, I added extra animations and images to make the 8-second intro engaging and fun.
- The **second scene** is simple and clean, with the product centered to stand out, and an animated title to grab attention.
- In the **third scene**, I used the image alt text to determine where to place the video once a product was clicked.

To handle device orientation, I used `window.matchMedia` along with a small helper function to detect whether the user is on a mobile device or a larger screen. This allows prompting users on mobile to switch to portrait mode, without bothering desktop users.

Overall, I aimed to avoid overcomplicating the code, keeping everything neat, clean, and efficient.




**Author: 🐒 Markiyan Dmyterko**