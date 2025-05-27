# Lead Generation System with Email Notifications

This is a backend application for a **Lead Generation System** that processes contact form submissions and sends email notifications using **Nodemailer**.

## 🚀 Features

- Accepts contact form data via API
- Sends email notifications automatically
- Lightweight and easy to deploy

## 🛠️ Technologies Used

- Node.js
- Express.js
- Nodemailer
- CORS
- Dotenv

## 📁 Folder Structure

/contact-form-api
│
├── .env
├── package.json
├── server.js
└── README.md


## ⚙️ Installation and Usage

1. **Clone the repository**  
   ```bash
   git clone https://github.com/NAVITHASRI-KAMISETTY/Error-Technologies-Assignment.git
Navigate to the project folder

bash

cd contact-form-api
Install dependencies

bash

npm install
Create a .env file and add your email credentials:

env
Copy
Edit
EMAIL=navithasrik@gmail.com
PASSWORD=Navi@2002
Run the server

node server.js
📩 API Endpoint
POST /api/contact
Sends an email with the provided name, email, and message.

Example Request Body:
json
{
  "name": "Navitha",
  "email": "navitha@example.com",
  "message": "I'm interested in your services."
}


Developed By
Navitha Sri Kamisetty










