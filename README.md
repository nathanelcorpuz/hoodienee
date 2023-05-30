# 🏗️ _WIP_

A Next.js E-commerce sample website using MongoDB and NextAuth

## Installation

1. Fork and clone / Clone the repo
2. Run `npm i`
3. Run `npm run dev`

## Features

1. Cloned from [Next.js Commerce](https://nextjs.org/commerce)
2. E-commerce website (WIP)
3. Custom CMS with Next.js and MongoDB
4. Auth and image storage

## Tools

1. Next.js (app router)
2. Tailwind CSS
3. TypeScript
4. NextAuth
5. Cloudinary
6. PayPal
7. Vercel

## Directory Guide

### > `app`

--> _Contains components for root layout, components for home, and localized components per page_

### > `components`

--> _Contains the UI library for inputs, buttons, wrappers, and more_

### > `hooks`

--> _Contains all hooks_

### > `lib`

--> _Contains non-tsx code files used across all components and files of the entire project_

### > `providers`

--> _Contains all providers_

### > `public`

--> _Contains all project media assets_

### > `styles`

--> _Contains all CSS files_

### > `utils`

--> _Contains helper functions used across the entire project_

## Challenges

_Constantly updated_

### Unable to use router.push or Link from an intercept route

**Description**
When implementing the menu modal from the root header, it doesn't dismiss when using a different client-side navigation routing other than router.back. Same with cart to checkout navigation.

**Solution**

- Currently observing this GitHub issue: https://github.com/vercel/next.js/issues/49662
- Converting cart modal to non-url for now
