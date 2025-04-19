import { useState } from 'react'

import Pane from '../components/Pane'

import spongebob from '../assets/spongebob.png';


import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Hints that will be displayed when the image is clicked (replce with actual hints)
const hints = [
  "SpongeBob SquarePants is a popular animated television series created by Stephen Hillenburg.",
  "The show first premiered on May 1, 1999, and has since become a cultural phenomenon.",
  "SpongeBob lives in a pineapple under the sea and works at the Krusty Krab restaurant.",
  "The show features a variety of characters, including SpongeBob's best friend Patrick Star and his boss Mr. Krabs.",
  "SpongeBob is known for his optimistic personality and love for jellyfishing."
];

// Season list 
const seasons = [
  { id: 0, name: 'Other (movies, specials, etc...)' },
  { id: 1, name: 'Season 1' },
  { id: 2, name: 'Season 2' },
  { id: 3, name: 'Season 3' },
  { id: 4, name: 'Season 4' },
  { id: 5, name: 'Season 5' },
  { id: 6, name: 'Season 6' },
  { id: 7, name: 'Season 7' },
  { id: 8, name: 'Season 8' },
  { id: 9, name: 'Season 9' },
  { id: 10, name: 'Season 10' },
  { id: 11, name: 'Season 11' },
  { id: 12, name: 'Season 12' },
  { id: 13, name: 'Season 13' },
  { id: 14, name: 'Season 14' },
  { id: 15, name: 'Season 15' },
]


function Search() {

  const [keywords, setKeywords] = useState('');
  const [character, setCharacter] = useState('');
  const [season, setSeason] = useState('');

  /* Display a random hint when the image is clicked */
  const imageClicked = () => {
    let hint = hints[Math.floor(Math.random() * hints.length)];
    alert(`Spongebob fact: ${hint}\n(design still in progress)`);
  };

  const handleSubmit = () => {
    if (!keywords && (!character || !season))
    {
      console.error("If no keywords are specified, then a character and a season must be specified.");
      return;
    }

    console.log(`Keywords: ${keywords}\nCharacter: ${character}\nSeason: ${season}`);
  }
  return (
    <div>
      <div className="app">
        {/* Sidebar */}
        <div className="sidebar">
          <Pane>
            <h3>Search & Filter</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Keywords/Phrases</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter key words or phrases"
                  /*value={title}*/
                  onChange={(e) => setKeywords(e.target.value.toLowerCase())}
                />
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Label>Character</Form.Label>
                <Form.Control
                  as="select"
                   /*value={title}*/
                   onChange={(e) => setCharacter(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="spongebob">Spongebob</option>
                  <option value="patrick">Patrick</option>
                  <option value="squidward">Squidward</option>
                  <option value="mr. krabs">Mr. Krabs</option>
                </Form.Control>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Label>Season</Form.Label>
                <Form.Control
                  as="select"
                   /*value={title}*/
                  onChange={(e) => setSeason(e.target.value)}
                >
                  <option value="">All</option>
                  {seasons.map((season) => (
                    <option key={season.id} value={season.id}>{season.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <br/>
              <Button variant="primary" type="button" onClick={handleSubmit}> {/* disabled={adding}*/}
                Search
              </Button>
            </Form>

          </Pane>
        </div>
        {/* Results pane */}
        <div className='resultsPane'>
          <Pane>
            <h3>Results</h3>
            <p>Should display results in a list form (each row is a card containing: Episode Title - Season # - Character - Occurence - Image that links to the transcript page)</p>
          </Pane>
        </div>
      </div>

      {/* Unused Spongebob image */}
      {/* <img src={spongebob} alt="SpongeBob" className="spongebobImage" onClick={imageClicked} /> */}
    </div>
  )
}

export default Search
