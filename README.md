# Build and Deploy: WizEcho with React, Tailwind, Next, Prisma, Mongo, NextAuth & Vercel (2023)
This is a repository for a FullStack app where innovative   individuals to share their daily learning experiences and insights with a like-minded community. The platform encourages users to post updates on what they have learned, fostering an environment of knowledge exchange and growth. Users can interact by leaving comments and providing valuable suggestions on each other's posts. Additionally, for those facing doubts or seeking clarification, they can freely ask questions, inviting others to respond and share their expertise. With a vibrant and user-friendly interface, "WizEcho" aims to create a collaborative space where wisdom echoes through meaningful interactions, fostering a sense of collective learning and support.  using React, NextJS, TailwindCSS & Prisma.


We are going to learn funcionalities such as:

- Authentication system
- Notification system
- Image Upload using Base64 strings
- Prisma ORM with MongoDB
- Responsive Layout
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Following functionality
- Comments / Replies
- Likes functionality
- Vercel Deployment

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/Furquan712/WizEcho-Dockized-.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
