## About

### Framework 🏗️

This is my attempt at a totally un-oppinionated CSS framework that takes provides everything you need out of the box to layout, align and position the perfect responsive website. There are a few tenants:

1. It must be simple - styles should be intuitive
2. Mixins are the foundation: when possible, classes are composed of mixins these mixins allow you to easily override any existing style or apply a style from the framework to your own CSS.
3. Un-oppinionated: no buttons, no cards, no colours, no fonts. The point is to leave design work to the designer.
4. Utility first mixins, while not strictly "utility first" framework the classes and mixins are generally broken into utilities. This has less to do with a utility first dogma and more to do with the un-oppinionated nature of the framework; most of the actual styling with be in components that you write with a mixture of CSS from scratch and reused mixins from Cardinal.

### NextJS

This project is using NextJS because it was the quickest way I could think of to spin up a running instance of a site, easily add SCSS and have live reloading eventually I'll pull the framework SCSS into its own repo. Being a NextJS thing you can easily start the development server with this:

```bash
npm run dev
# or
yarn dev
```

Put framework related styles in partials and custom styling in `app.scss` for demonstration purposes. Edit `index.js `directly for html.

### Name

Things have to be called something and Cardinal is the first thing I thought of, it is a red boid that lives in winter trees.
