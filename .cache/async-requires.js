// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-jsx": () => import("./../../../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-instructors-jsx": () => import("./../../../src/pages/instructors.jsx" /* webpackChunkName: "component---src-pages-instructors-jsx" */),
  "component---src-templates-dance-style-jsx": () => import("./../../../src/templates/DanceStyle.jsx" /* webpackChunkName: "component---src-templates-dance-style-jsx" */),
  "component---src-templates-instructor-jsx": () => import("./../../../src/templates/Instructor.jsx" /* webpackChunkName: "component---src-templates-instructor-jsx" */)
}

