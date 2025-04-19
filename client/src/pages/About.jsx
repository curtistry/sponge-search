import { useState } from 'react'

import Pane from '../components/Pane'

function About() {
  return (
    <div className="app">
        <Pane>
        <h1>About</h1>
        <h2>What is SpongeSearch?</h2>
        <p><strong>SpongeSearch</strong> is a web app that allows you to search across multiple episode transcripts of <strong>SpongeBob SquarePants</strong> for any key words or phrases.</p>
        <p>It was initially developed for myself, but I've decided to make it available publicly.</p>
        <p>It was built using HTML, CSS, JavaScript (React + Bootstrap), and Vite and is designed to be fast and responsive.</p>
        <h2>Why was it built?</h2>
        <p>SpongeSearch was built as a personal project to learn more about web development and React, and to freshen my knowledge on HTML, CSS, and JavaScript.</p>
        <p>It is not affiliated with Nickelodeon or Paramount.</p>
        <h2>How does it work?</h2>
        </Pane>
    </div>
  )
}

export default About
