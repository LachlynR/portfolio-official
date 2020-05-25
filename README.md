# portfolio-official

[My portfolio website](https://lachlyn-reynolds.netlify.app/)

[My GitHub Repo](https://github.com/LachlynR/portfolio-official)

## Purpose

The purpose of my website is to give potential employers a platform to get to know who I am and my capabilities. Although the major purpose is for employers, but I also built it as a learning experience, to turn theory into something practical.

## Functionality / Features

All pages on my website are responsive.

### Applicable to all pages

The main text color comes from my shirt, and the grays come from the blazer from the image on the home page.

The font used is called Poppins which I embedded from Google Fonts.

The body has a linear gradient background from a dark gray to a lighter gray (from top to bottom).

The logo (L R) is a h1, which may be changed to an SVG in the future. The nav links can be accessed by clicking on the burger which will slide down the nav. This sliding funcion is provided to you by jQuery (a javascript libary). I utilised the slideToggle() effect which creates the smooth sliding transition. The unordered list in the nav element has a display of flex with a flex direction of column in order to list the items downwards in a single column. I then used justify-content and align-items center, to put the nav links in the center. All nav-links have a hover effect which makes the users cursor pointer, and makes the links color a little brighter.

The logo (L R) is a h1, which may be changes to an SVG in the future. The navigation links are presented horizontally along the header using a display of flex, justify content space around, and align items center. All nav-links have a hover effect which makes the users cursor pointer, and makes the links color a little brighter. This was created using the hover pseudoclass.

### Home Page (Mobile)

All the colors used on this page are sourced from the big round image of me.

The main content of the page is set up using flex with a flex direction of column, creating just one column which is optimal for hand held devices. My name is a h2 tag, and the "Web Developer" is a h3. My call-to-action is a div with a box-shadow that has an animation that changes the radius of the box shadow to create that blinking-glowing effect. I purposefully made this slow so that it isn't too obnoxious and doesn't put off the user. This call to action div contains an anchor tag that takes the user to my resume page and an icon from font-awesome. This has a hover effect which will turn the accent colors to a darker color.

The image of me has a border-radius of 50% to make the image into a circle.

Down the bottom I have list of anchor tags that contain the icons for GitHub, LinkedIn and Twitter which will take the user to my respective profile when clicked. They have a position of absolute to keep them to the bottom of the screen and centered. I had a bit of trouble getting them to work with the grid so that they don't just 'float' there, which may have prevented them from overlapping with the rest of the content when the menu is open.

### Home Page (Desktop)

The main content of the page is using a displat grid with three columns and one row. The first column contains my beautiful face, All the text and the call-to-action button is in the second column, and the third column is empty. I used the third row to give some space from the right side of the screen to prevent things from being crammed. Apart from everything being bigger and the header, there isn't too much of a difference regarding the actual content of the page compared to mobile.

The social links down the also have a position of absolute but that doesn't cause too many problems since there is no dropdown menu to push the content down.

### Projects Page (Mobile)

My projects page contains a h2 that says "Projects" and sections that contain an image of the project, the name of the project, and a brief description of the project. Some of the sections contain a link that will take the user to the respective github repository.

On the bottom of the page in the footer, there is the links to all the pages in the website that are displayed horizontally (using flex). There is also a little copyright symbol with my name next to it, to look professional.

### Projects Page (Desktop)

The same as describes in the mobile part but has the desktop nav bar. The reason I chose to stay with the single column for desktop is because I personally thought it looked better and a bit cleaner. Although an alternative could have been to make it like a grid with maybe two projects on each row, each one having it's own column.

### Blog Page (Mobile)

The blog page has a similar layout to the projects page but each section contains the title of the blog, an image for the blog, the blog text and publisher information such as the name of the author and the date it was published. Most of the blogs are using placeholder text (lorem ipsum), where some have very important information for the reader.

### Blog Page (Desktop)

Same as blog page (Mobile) but with desktop nav bar.

### Resume Page (Mobile)

My resume page isn't the most beautiful looking page of my website. I simply just used tables to present the information for each section. Toward the bottom of the page I have a "Download my resume" button which uses the download attribute to allow the user to actually download my resume to their systems.

### Resume Page (Desktop)

Same as mobile but with desktop nav bar

### Contact Page (Mobile)

For the contact page I used different inputs to create a form which a user can fill out in order to contact me. Netlify, which is the platform I deployed my website, has the ability to handle forms, meaning that when a user submits their response, I can see their message in the forms section of netlify. To enable this, I used the data-netlify attribute and set the value equal to true.

The user has the option to instead connect with me on social media by the links represented by the respective logo of each platform.

### Contact Page (Desktop)

Same as mobile but with desktop nav bar

## Sitemap

![Sitemap for website](https://raw.githubusercontent.com/LachlynR/portfolio-official/master/Planning/Wireframes/SITEMAP.png)

## Screenshots

### Home Mobile

![home-mobile](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/home-mobile.jpg?raw=true)

### Home Desktop

![home-desktop](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/home-desktop.png?raw=true)

### Home Mobile (with nav)

![home-nav-mobile](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/home-nav-mobile.jpg?raw=true)

### Projects Mobile

![projects-mobile](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/project-mobile.jpg?raw=true)

### Projects Desktop

![projects-desktop](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/projects-desktop.png?raw=true)

### Blog Mobile

![blog-mobile](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/blog-mobile.jpg?raw=true)

### Blog Desktop

![blog-desktop](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/blog-desktop.png?raw=true)

### Resume Mobile

![resume-mobile](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/resume-mobile.jpg?raw=true)

### Resume Desktop

![resume-desktop](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/resume-desktop.png?raw=true)

### Contact Mobile

![contact-mobile](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/contact-mobile.jpg?raw=true)

### Contact Desktop

![contact-desktop](https://github.com/LachlynR/portfolio-official/blob/master/images/website-screenshots/contact-desktop.png?raw=true)

## Tech Stack

In this project I used HTML for the main structure (skeleton) of the website. I created five HTML documents.
I used SCSS to style the HTML documents.
I used a little bit of Javascript utilising the jQuery library to create the slide effect on the mobile nav menus.
I used Netlify to deploy my website, also utilising their forms functionality in order to receive messages from visiting guests.
I used font-awesome for icons
I used google fonts for my Poppins font.
I used [Zinoui.com](https://zinoui.com/tools/sri-generator)'s SRI hash generator to add System Resource Integrity to my website. I used sha-512.

## Presentation
