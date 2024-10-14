---
title: "Integrating MongoDB and Mongoose with Nuxt 3"
date: "2024-10-13"
image: "/images/blog/add-mongodb-mongoose-support-in-nuxt.png"
meta_description: "Step-by-step guide to using MongoDB & Mongoose with Nuxt 3"
author: "Pheak"
tags: ["Nuxt", "MongoDB", "Mongoose", "Database"]
---

Building dynamic web applications often requires seamless integration with a robust database solution. When it comes to creating powerful server-side applications, MongoDB has emerged as a popular choice among developers due to its flexibility and scalability. Combined with the Vue.js framework, Nuxt.js provides a solid foundation for building fast, server-rendered applications. However, incorporating MongoDB and its object modeling tool, Mongoose, into a Nuxt project might seem like a daunting task for those new to the stack.

In this blog post, we'll explore two simple yet effective methods to add MongoDB and Mongoose to your Nuxt 3 project. Whether you're a seasoned developer or just starting your journey in full-stack web development, this guide will help you leverage the capabilities of MongoDB and Mongoose within the Nuxt ecosystem.

## Prerequisites
xx
Before we get started, make sure you have a working nuxt 3 project. If you don't have one already, you can create a new project using the following command:

```bash
npx nuxi init <project-name>
```

Once the project is created, navigate to the project directory and install the dependencies:

```bash
cd <project-name>
npm install // or yarn install
```

Now that we have a working nuxt 3 project, let's explore the two methods of adding MongoDB and Mongoose to our project.

## Method 1: Using the nuxt-server-utils module

This is the easiest way to add MongoDB and Mongoose to your Nuxt 3 project. The [nuxt-server-utils](https://nuxt-server-utils.jahid.dev) module provides a set of utilities that allow you to interact with your MongoDB database from within your Nuxt 3 application. It also provides a simple API for creating and managing your MongoDB collections.

To get started, install the nuxt-server-utils module using the following command:

```bash
npm install nuxt-server-utils mongoose
```

Next, Add the nuxt-server-utils module to the `modules` section of your `nuxt.config.ts` file:

Add `nuxt-server-utils` to the `modules` section of `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  // ...
  modules: ["nuxt-server-utils"],
});
```

Finally, add the MongoDB connection string to the `.env` file of your nuxt app:

```bash [.env]

MONGODB_URI=<your-mongodb-connection-string>

```

That's it! Now you can use mongoose in your Nuxt 3 server routes like how it is normally used in Express.
For example, let's create a simple server route that returns all the documents from a MongoDB collection:

**Defining the Mongoose model** in `server/models/user.model.ts`:

```ts [server/models/User.ts]
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
});

export const User = model("User", UserSchema);
```

Now let's create the **API Route** in `server/api/users.get.ts`:

```ts [server/api/users.get.ts]
import { User } from "~~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const users = await User.find();

  return Users;
});
```

If you navigate to the `/api/users` route, you should see a list of all the users in your database.

## Method 2: Creating a Nitro plugin

Nuxt 3 uses [Nitro](https://nitro.unjs.io/) under the hood to power its server-side rendering capabilities. Nitro provides a simple API for creating plugins that can be used to extend the functionality of your Nuxt 3 application.
In this section, we'll create a Nitro plugin that will allow us to use MongoDB and Mongoose in our Nuxt 3 project.

First, let's create a new plugin file in the `server/plugins` directory:

```bash
touch server/plugins/mongodb.ts
```

Then let's install the required dependencies:

```bash
npm install mongoose
```

Next, let's add the following code to the newly created plugin file:

```ts [server/plugins/mongodb.ts]
import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
};
```

Finally, let's add the plugin to the `plugins` section of our `nuxt.config.ts` file:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  // ...
  nitro: {
    plugins: ["~/server/plugins/mongodb.ts"],
  },
});
```

That's it! Now you can use mongoose in your Nuxt 3 server routes like how it is normally used in Express.


## Conclusion

In this blog post, we explored two simple yet effective methods to add MongoDB and Mongoose to your Nuxt 3 project. Whether you're a seasoned developer or just starting your journey in full-stack web development, this guide will help you leverage the capabilities of MongoDB and Mongoose within the Nuxt ecosystem.
