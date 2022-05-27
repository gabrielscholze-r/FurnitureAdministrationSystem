
# Furniture Store Administration System

A little project integrating Node.js with MongoDB and React.js. Simulates the internal system of a furniture store, with features such as Add Furniture, Furniture List, Add to Shopping Cart, Finalize an Order and generate sales report 


## Login page
![login page](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/loginpage.png)

Login page, when trying to log in, check the database if the user exists and if the password is correct, there is a hash to keep the password safe.

## Furniture List
![List](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/home1.png)
Once logged in, the first page is a list of furniture, with the option to filter by type of furniture (there are three: chairs, tables and sofas) and add furniture to the shopping cart, adding only one item from that furniture.
![List options](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/home2.png)

## Add Furniture
By clicking in the Add option of the header, you head to the add furniture page
![add1](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/add1.png)
Here you can add the furniture with its type, name, price and quantity
![add2](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/add2.png)

## Shopping Cart
![shopping Cart](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/kart.png)
Shopping cart page, where you can view added items, delete one by one and complete the order

## Reports

![report page](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/reportpage.png)
Finally, there is a report page, where you can view a list of total sales, generate a CSV with this list and generate a CSV with a monthly report, with the sum of the amount of furniture sold and total price per month.
![report page2](https://github.com/gabrielscholze-r/FurnitureAdministrationSystem/blob/master/image/reportpage2.png)