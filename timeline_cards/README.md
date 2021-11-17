This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

For the production build you can run: `yarn build:prod` and it will 
generate an `out` folder with your production build inside.

To deploy to github you need to do the following things:
1. Pull the changes from `master` into the `deployed` branch
2. cd into this directory then run the `./build_production.sh`
3. And that should be it, just make sure that your `assetPrefix` and `basePath` is set up correctly

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Bibliography

- Sword icon was borrowed from: https://www.flaticon.com/free-icon/sword_95606
- Starry night sky stand in was borrowed from: https://all-free-download.com/free-photos/download/stars-night-sky_596847.html
- Infinite carousel inspired by: https://koenvg.medium.com/infinite-carousel-with-framer-motion-b5f93b06ae9a
- Framer motion tutorial: https://www.geeksforgeeks.org/animated-expanding-card-using-framer-motion-and-reactjs/
- Framer motion tutorial series (super helpful): https://www.youtube.com/watch?v=cRmEbR8kjHQ