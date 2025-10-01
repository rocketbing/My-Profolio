import { useEffect, useState } from 'react'

export default function About() {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const birthTime = new Date('1992-03-24 14:50:00').getTime()
  const seconds = Math.floor((now - birthTime) / 1000)
  const days = String(Math.floor(seconds / 86400)).padStart(2, '0')
  const hours = String(Math.floor((seconds % 86400) / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')

  return (
    <section>
      <br />
      <div className="d-flex justify-content-between">
        <div className="d-lg-none d-block text-center mb-5" id="myInfo">
          <h1>My Info</h1>
          <p>My name is Steve, I am a junior frontend developer with strong skillset in modern web development using JavaScript, Python, and Java, with hands-on experience building responsive UIs using Vue.js (2 & 3), React.js, Bootstrap, HTML5, CSS3, and SCSS.</p>
          <p>I am also Proficient in frontend engineering tools and frameworks including Vue Router, Pinia, Element Plus, Axios, Vite, ECharts, React Native, and MySQL, with experience in API integration, state management, cross-platform UI development, and mock server setup using vite-plugin-mock and Mock.js. Additionally, I had a Strong understanding of code quality and versioning practices, with practical use of ESLint, Prettier, Stylelint, Husky, and Commitlint; certified in JavaScript Algorithms and Data Structures (FreeCodeCamp)</p>
          <div id="setense"></div>
        </div>
        <div className="aboutMeContent d-none d-lg-block mb-3" id="myInfo">
          <h1 className="text-start">My Info</h1>
          <p>My name is Steve, I am a junior frontend developer with strong skillset in modern web development using JavaScript, Python, and Java, with hands-on experience building responsive UIs using Vue.js (2 & 3), React.js, Bootstrap, HTML5, CSS3, and SCSS.</p>
          <p>I am also Proficient in frontend engineering tools and frameworks including Vue Router, Pinia, Element Plus, Axios, Vite, ECharts, React Native, and MySQL, with experience in API integration, state management, cross-platform UI development, and mock server setup using vite-plugin-mock and Mock.js. Additionally, I had a Strong understanding of code quality and versioning practices, with practical use of ESLint, Prettier, Stylelint, Husky, and Commitlint; certified in JavaScript Algorithms and Data Structures (FreeCodeCamp)</p>
        </div>
        <div className="end me-3">
          <img src="/img/artPhoto.jpg" alt="" className="myPhoto d-none d-lg-block" />
        </div>
      </div>
      <div className="text-center mt-3" aria-live="polite">{`Alived for ${days} days, ${hours} hours, ${minutes}m, ${secs}s`}</div>
    </section>
  )
}


