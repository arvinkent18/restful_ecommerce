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
Type in the address bar **http://localhost:5000/sellers/sellerId**
**"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198361-2d080e80-3467-11ea-97e7-0308ef45cbee.PNG)

## Updating Seller's Information ##
Type in the address bar **http://localhost:5000/sellers/sellerId/update** 
**"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198421-04344900-3468-11ea-8ccd-2bd188588f51.PNG)

## Deleting Seller ##
Type in the address bar **http://localhost:5000/sellers/delete/sellerId**
**"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198455-89b7f900-3468-11ea-9847-b0a5b43e2498.PNG)

## Create Seller's Product ##
Type in the address bar **http://localhost:5000/sellers/sellerId/product/create**
**"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198634-76f2f380-346b-11ea-9555-37697d9fd733.PNG)

## Fetching Seller's Products ##
Type in the address bar **http://localhost:5000/sellers/sellerId/products**
**"sellerId"** is the ID of the seller
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198666-eff24b00-346b-11ea-83c8-cc207e3d6abb.PNG)

## Updating Seller's Products ##
Type in the address bar **http://localhost:5000/sellers/sellerId/product/productId**
**"sellerId"** is the ID of the seller and **productId** is the ID of the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72198786-752a2f80-346d-11ea-8d96-afe78ed60349.PNG)

## Deleting Seller's Products ##
Type in the address bar **http://localhost:5000/sellers/sellerId/product/delete/productId**
**"sellerId"** is the ID of the seller and **productId** is the ID of the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72206250-62901480-34c6-11ea-9ead-35e45653bf5c.PNG)

## Fetching Products ##
Type in the address bar **http://localhost:5000/products**
**"sellerId"** is the ID of the seller and **productId** is the ID of the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72206254-70459a00-34c6-11ea-9b67-da7848f47159.PNG)

## Fetching Product's Details ##
Type in the address bar **http://localhost:5000/products/productId**
**productId** is the ID of the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72206252-6754c880-34c6-11ea-8e53-cdfbd7abc556.PNG)

## Searching Product by Name or Description ##
Type in the address bar **http://localhost:5000/products/search/nameOrdescription**
**nameOrDdescription** is the title or the description found in the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72206327-23ae8e80-34c7-11ea-9ad4-1a27d7ffb686.PNG)

## Fetching Products in Cart ##
Type in the address bar **http://localhost:5000/products/productId/report**
**productId** is the ID of the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72206253-6d4aa980-34c6-11ea-999e-cf88c6526514.PNG)

## Generating Report per Product ## -- it shows how many times it was added in the carts
Type in the address bar **http://localhost:5000/products/productId/report**
**productId** is the ID of the product
![ScreenShot](https://user-images.githubusercontent.com/32665778/72206359-8b64d980-34c7-11ea-9e55-354480eb9091.PNG)

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
