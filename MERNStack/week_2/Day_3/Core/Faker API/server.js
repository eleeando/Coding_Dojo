const express = require('express')
const { faker } = require('@faker-js/faker');
const app = express()
const port = 8000
//MiddleWare
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createNewUser = () => {
    const newUser = {
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker. person.firstName(),
        firstName:faker.person.lastName()  
    };
    return newUser;
}

const createNewCompany = () => {
    const newCompany = {
        name:faker.company.name(),
        address:{
            street:faker.location.street(),
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country
            } 
    };
    return newCompany;
};
    

app.get('/api/newuser', 
(req,res)=>{
    const newUser = createNewUser();
    return res.json({newUser:newUser})
})

app.get('/api/newcompany', 
(req,res)=>{
    const newCompany = createNewCompany();
    return res.json({newCompany:newCompany})
})
