const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/clovisdasilvaneto/NevTec/nevTec-website/src/pages/index.jsx")))
}

