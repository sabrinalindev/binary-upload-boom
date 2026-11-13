# Binary Upload Boom

A social network web app where users can create an account, upload images with captions, and interact with each other's posts. Based on the 100Devs social network project, with image uploads stored on Cloudinary.

## Demo

Live: [LiveDemo](【你的网址】)

![Home Page](public/imgs/screenshot.png)

## Features

- Sign up and log in with a local account
- Create posts with a title, caption, and image upload
- Browse a feed of posts from all users

## Built With

- Node.js and Express
- MongoDB with Mongoose
- Passport.js (authentication)
- Cloudinary (image storage)
- EJS templates
- MVC architecture

## Project Structure

```
binary-upload-boom/
├── config/         # Database, Passport, and Cloudinary setup
├── controllers/    # Route handlers
├── middleware/     # Authentication and file upload helpers
├── models/         # Mongoose schemas
├── public/         # Static assets (CSS, images)
├── routes/         # Express routes
├── views/          # EJS templates
└── server.js       # App entry point
```

## Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/sabrinalindev/binary-upload-boom.git
   cd binary-upload-boom
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file in the `config` folder and add the following:
   ```
   PORT=2121
   DB_STRING=your_mongodb_connection_string
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   ```
4. Start the server
   ```bash
   npm start
   ```
5. Open `http://localhost:2121` in your browser

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port the server runs on (any free port works, for example 3000) |
| `DB_STRING` | MongoDB connection string |
| `CLOUD_NAME` | Cloudinary cloud name |
| `API_KEY` | Cloudinary API key |
| `API_SECRET` | Cloudinary API secret |

The `.env` file is ignored by Git, so your keys are never uploaded.


## What I Learned

- How to structure an Express app with the MVC pattern
- How to authenticate users with Passport.js
- How to upload images with Multer and store them on Cloudinary
- How to model data with Mongoose and render pages with EJS


## Credit

Forked from [100devs/binary-upload-boom](https://github.com/100devs/binary-upload-boom), the 100Devs Social Network project.

## License

See `LICENSE` for details.