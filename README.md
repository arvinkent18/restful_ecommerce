# restful_ecommerce
# RESTful Web Application

A simple RESTful web application perfectly use as a starter for E-commerce web applications

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Clone or Download as Zip then run **npm install** to install dependencies
To start application please run **npm run start**

Create a **nodemon.json** file for the environment variable **"MONGO_ATLAS_URI"**. Put your database connection string.
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198606-021fb980-346b-11ea-89b7-f5bfa8013c36.PNG)

## Fetching Sellers ##
**Use Postman**
Type in the address bar **http://localhost:5000/sellers**
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198290-65f3b380-3466-11ea-8726-9c993d4d828d.PNG)

## Creating Seller ##
Type in the address bar **http://localhost:5000/sellers/create**
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198455-89b7f900-3468-11ea-9847-b0a5b43e2498.PNG)

## Fetching Seller's Information ##
Type in the address bar **http://localhost:5000/sellers/sellerId** - **"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198361-2d080e80-3467-11ea-97e7-0308ef45cbee.PNG)

## Updating Seller's Information ##
Type in the address bar **http://localhost:5000/sellers/sellerId/update** **"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198421-04344900-3468-11ea-8ccd-2bd188588f51.PNG)

## Deleting Seller ##
Type in the address bar **http://localhost:5000/sellers/delete/sellerId** - **"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198455-89b7f900-3468-11ea-9847-b0a5b43e2498.PNG)

## Create Seller's Product ##
Type in the address bar **http://localhost:5000/sellers/sellerId/product/create** - **"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198634-76f2f380-346b-11ea-9555-37697d9fd733.PNG)

## Fetching Seller's Products ##
Type in the address bar **http://localhost:5000/sellers/sellerId/products** - **"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198666-eff24b00-346b-11ea-83c8-cc207e3d6abb.PNG)

## Updating Seller's Products ##
Type in the address bar **http://localhost:5000/sellers/sellerId/product/productId**
**"sellerId"** is the ID of the seller and **productId** is the ID of the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198786-752a2f80-346d-11ea-8d96-afe78ed60349.PNG)

### Prerequisites

* [Node.js](https://www.nodejs.org/)
* [MongoDB](https://www.mongodb.com)

## Testing
* [Postman](https://www.getpostman.com/) - The application used for testing RESTFul APIs

## Built With

* [Express](https://www.express.com/) - The web framework used
* [Node.js](https://nodejs.org/) - Dependency Management/Back-end
* [MongoDB](https://www.mongodb.com) - The database driver used

## Authors

* **Arvin Kent S. Lazaga** - *Initial work* - (https://github.com/arvinkent18)

## Acknowledgments

* Thanks to [MOSCORD](https://www.moscord.com/) company for giving me the opportunity to showcase my skills
