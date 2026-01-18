## Table of contents

- [Overview](#overview)
  - [Scenario](#scenario)
- [Built with](#built-with)
- [Reflection](#reflection)
- [Author](#author)


## Overview

Lab 2 - Mongoose Models and Schemas

### Scenario

A local library wants to modernize its book tracking system. They have hired you to build the backend for a new “Digital Bookshelf” application. Your first task is to create a RESTful API that allows librarians to manage their book inventory. This API must support creating new book records, viewing the list of all books, finding a specific book by its ID, updating a book’s information, and removing a book from the collection.

## Built with

- Node.js
- Express
- MongoDB Atlas
- MongoDB Node.js Driver
- dotenv


## Reflection
1. Why is it beneficial to separate your routes, models, and database connection into different directories?

    -- Separating your routes, models, and database connection into different directories is a core backend architecture best practice because it improves clarity, scalability, and maintainability as an application grows.


2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
    
    --  PUT replaces an entire resource, while PATCH updates only specific fields. Although my endpoint uses PUT, it behaves more like PATCH because it performs a partial update by merging only the provided fields into the existing document.

3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

    -- Either a 204 No Content or a simple success message.

## Author

Patrice(Rice 🍚) Maxwell 
Backend & Full-Stack Software Engineer
([thegrainofrice.com](https://www.thegrainofrice.com/))
([Linkedin](https://www.linkedin.com/in/patrice-maxwell))
🌾 Grain of Rice — Building scalable systems one grain at a time