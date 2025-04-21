import { useState, useEffect } from 'react';
import axios from "axios";
import dotenv from "dotenv"

import Pane from '../components/Pane'
import ResultCard from '../components/ResultCard';

import spongebob from '../assets/spongebob.png';

import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

dotenv.config();

/* UNUSED. For cosmetic purposes */
// Hints that will be displayed when the image is clicked (replce with actual hints)
/* const hints = [
  "SpongeBob SquarePants is a popular animated television series created by Stephen Hillenburg.",
  "The show first premiered on May 1, 1999, and has since become a cultural phenomenon.",
  "SpongeBob lives in a pineapple under the sea and works at the Krusty Krab restaurant.",
  "The show features a variety of characters, including SpongeBob's best friend Patrick Star and his boss Mr. Krabs.",
  "SpongeBob is known for his optimistic personality and love for jellyfishing."
]; */

// Character list
const characters = [
  { id: 'spongebob', name: 'Spongebob' },
  { id:'patrick', name: 'Patrick' },
  { id: 'squidward', name: 'Squidward' },
  { id: 'gary', name: 'Gary'},
  { id: 'sandy', name: 'Sandy'},
  { id: 'mr. krabs', name: 'Mr. Krabs' },
  { id: 'plankton', name: 'Plankton'},
  { id: 'mrs. puff', name: 'Mrs. Puff' },
  { id: 'larry', name: 'Larry' },
  { id: 'incidental', name: 'Incidentals' },
]

// Season list 
const seasons = [
  { id: 0, name: 'Other (movies, specials, etc...)' },
  { id: 1, name: 'Season 1' },
  { id: 2, name: 'Season 2' },
  { id: 3, name: 'Season 3' },
  { id: 4, name: 'Season 4' },
  { id: 5, name: 'Season 5' },
]


function Search() {

  const [keywords, setKeywords] = useState('');
  const [character, setCharacter] = useState('');
  const [season, setSeason] = useState('');
  const [match, setMatch] = useState('');
  const [results, setResults] = useState([]);

  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [modalMsg, setModalMsg] = useState('');


  /* UNUSED. For cosmetic purposes */
  /* Display a random hint when the image is clicked */
  /*const imageClicked = () => {
    let hint = hints[Math.floor(Math.random() * hints.length)];
    alert(`Spongebob fact: ${hint}\n(design still in progress)`);
  };*/

  const getResults = async () => {
    try {
      setLoad(true);
      // Specify search parameters
      let params = {};
      if (keywords) {
        params.keywords = keywords;
      }
      if (character) {
        params.character = character;
      }
      if (season) {
        params.season = season;
      }

      const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";

      const response = await axios.get(`${backendUrl}/dialogue/search`, {
        params: params,
      });

      console.log("# of results:", response.data.length);
      setResults(response.data);
      setMatch(keywords);
      setLoad(false);
    } catch (e) {
      console.error(e);
      setMatch('');
      setLoad(false);
    }
  }

  // Method to handle search/filter submissions.
  const handleSubmit = () => {

    // Check if no keywords were specified.
    if (keywords.length < 2){
      console.error("The keyword should be at least 2 characters.");
      setMatch('');
      setResults([]);
      return;
    }
    // Send search and filter data to the Backend API. 
    getResults();

  }

  // Method to handle modal closing.
  const handleClose = () => {
    setModalMsg("");
    setShow(false);
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
              <Form.Group>
                <Form.Label>Character</Form.Label>
                <Form.Control
                  as="select"
                  /*value={title}*/
                  onChange={(e) => setCharacter(e.target.value)}
                >
                  <option value="">All</option>
                  {characters.map((char) => (
                    <option key={char.id} value={char.id}>{char.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <br />
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
              <br />
              <Button variant="primary" type="button" onClick={handleSubmit} disabled={load}> 
                {load ? "Loading" : "Search"}
              </Button>
            </Form>

          </Pane>
        </div>
        {/* Results pane */}
        <div className='resultsPane'>
          <Pane>
            <h3>Results <span id="no-custom-font">({results.length})</span></h3>
            <div className='resultsList'>
              {results.length > 0 ?
                results.map((result) => (
                  <ResultCard result={result} highlight={match} />
                ))
                : <p>
                  <b>No results found.</b>
                  <br />
                  Try modifying your keywords, character, or season.
                </p>}
            </div>
          </Pane>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMsg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Unused Spongebob image */}
      {/* <img src={spongebob} alt="SpongeBob" className="spongebobImage" onClick={imageClicked} /> */}
    </div>
  )
}

export default Search
