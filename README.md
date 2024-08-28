# BrainyPlay

This is a website of a toy marketplace. Basically it is focused on Educational Toys. 

---

### Developer: Kawsar Uddin Patoary
### Live Site: <https://brainyplay-10374.web.app>


---
This site is developed using :

1. HTML
2. CSS
3. Javascript
4. Tailwind css(Daisy UI)
5. ReactJS
6. NodeJS
7. ExpressJs

---

## Basic overview of this sites functionality and features

- Full responsive
- Connected with server side
- All data is dynamic
- Login and register user with firebase
- Vibrant design and color
- Navbar and Footer fixed for all pages

#### Pages

##### Home Page
- `Banner section` with image and text, responsive.

- `Shop` All toys added by sellers are displayed here each in a card. each card have an image, name, description, price, rating and view details button. 

- `Category tabs` allows to filter toys by categories, there are 9 categories and selecting any of these will filter out only items of that category

- `Features` Shows the features of toys.

- `Gallery` Displays some images to attract user.


---
##### All Toys Page

- This page shows all the toys in an tabular format

- Each row represents one toy.

- Each row has an image, name, price, category, seller name, seller email, available quantity and details button.

---
##### Toy Details Page

- Clicking on `details` button on homepage shop section or All toys pages details button, both will redirect to this page

- This page shows all info about any toy clicked

- Here shows an image, toy name, category, description, available quantity, price, seller name, seller email, price and rating.

---
##### Add Toy Page

- This page is private so login is must to add a toy.
- There is a simple form to collect data about a toy
- Only one toy add a time.
- Data given here will directly add to database with seller email and name.
---

##### My Toys Page

- Only logged in user can visit this route, without logging in, this route is unavailable
- Here shows the toys a seller added.
- This is basically own shop with cutomization and remove feature.
- All toys added by an user is shown here in an tabular format.
- There is a `sort by Price` feature. by clicking on arrows on right side of price column header, the table can be sorted both ascending or descending by price.
- Besides toy info, each row has an `delete` and an `update` button
- clicking `delete` button deletes that specific toy from database completele (there is a confirmation before that).
- clicking `update` button redirects to Update Toy page with some update feature. 

---

##### Update A Toy Page

- This page will allow to update that one toy selected from my toys page
- This is also a private route so without login this page is not accesible
- Here is a simple form to collect update data from user.
- A seller is allowed to update Price, available quantity and description
- After submitting the form collected data updates the data stored in database.

---

##### Login/Register Page

- Both Page have a form to login/register.
- Login page have a redirect link to register page and vice versa
- Register page requires name, email and a password
- Login page only requires email and password to authenticate
- Sign in with `Google` is also an option.

---

##### Blogs Page
- This is a simple page with some blogs
- Here is some basic question answered about frontend development.

