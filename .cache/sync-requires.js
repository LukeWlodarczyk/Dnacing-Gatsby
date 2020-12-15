const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lukaszwlodarczyk/Desktop/gatsby_f2f/dg-basic-my/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/lukaszwlodarczyk/Desktop/gatsby_f2f/dg-basic-my/src/pages/index.jsx"))),
  "component---src-pages-instructors-jsx": hot(preferDefault(require("/Users/lukaszwlodarczyk/Desktop/gatsby_f2f/dg-basic-my/src/pages/instructors.jsx"))),
  "component---src-templates-dance-style-jsx": hot(preferDefault(require("/Users/lukaszwlodarczyk/Desktop/gatsby_f2f/dg-basic-my/src/templates/DanceStyle.jsx"))),
  "component---src-templates-instructor-jsx": hot(preferDefault(require("/Users/lukaszwlodarczyk/Desktop/gatsby_f2f/dg-basic-my/src/templates/Instructor.jsx")))
}

