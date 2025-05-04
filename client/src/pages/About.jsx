import { useState } from 'react'

import Pane from '../components/Pane'

function About() {
  return (
    <div className="app">
      <div className="aboutPane">
        <Pane>
          <h1>About</h1>
          <h2>What is SpongeSearch?</h2>
          <p>
            <strong>SpongeSearch</strong> is a web app that allows you to search across multiple episode transcripts of <strong>SpongeBob SquarePants</strong> for any key words or phrases.
            <br />
            It was initially developed for myself to help find specific clips for video editing, but I've decided to make it available to the public.
          </p>
          <p>This project was also inspired by a Python script/app that was showcased in one of <i>SpongeDubs</i>' YouTube videos.</p>
          <h2>Why was it built?</h2>
          <p>
            SpongeSearch was built as a personal project to learn more about web development and React, and to freshen my knowledge on HTML, CSS, and JavaScript.
          </p>
          <h2>How do I use this?</h2>
          <p>
            To use this web app, you can simply fill in the search form and it will display all occurrences of the dialogue based on your filters.
            <br/>
            Due to performance reasons, searches are limited to <b>150 results</b>. This will be improved once I learn how to optimize searches.
            <br/>
            All seasons/epsidoes, excluding movies and specials, have been added as of May 4, 2025.
          </p>
          <p>Each card in the list will display the following: </p>
          <ul>
          <li>Episode name</li>
          <li>Season number</li>
          <li>Character (who said the line)</li>
          <li>The dialogue</li>
          <li>Title Card image (Desktop only)</li>
          </ul>
          <p>Clicking on the Title Card image will redirect you to the transcript page.</p>
          <br />
          <b>This project is not affiliated with <i>Nickelodeon</i>, <i>Paramount</i>, or <i>Encyclopedia SpongeBobia</i>.</b>
        </Pane>
      </div>
    </div>
  )
}

export default About
