let BASE_URL = 'http://localhost:3000/api'
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000/api'
} else {
  BASE_URL = 'http://localhost:prod/api'
}

// if (import.meta.env.PROD) {
//   BASE_URL = "http://codercba.dev:5173";
// } else {
//   BASE_URL = "http://localhost:5173/api";
//   // BASE_URL = "http://codercba.prod:5173";
// }
export { BASE_URL, TIME_OUT }
