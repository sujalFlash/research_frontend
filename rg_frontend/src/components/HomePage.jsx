import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import portfolio from './portfolio.webp';
import stats from './stats.webp';
import port2 from './port2.webp';
import logo from './logo.png'; // Make sure to import your assets correctly

/**
 * @author
 * @function HomePage
 **/

export const HomePage = (props) => {
  return (
    <div>
      <header>
        <nav
          style={{
            height: '100px',
            backgroundColor: '#2b7a78',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link // Use Link instead of a tag
              to="" // Set the route for login
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                id="pic"
                src={logo}
                alt="Logo"
                style={{
                  height: '70px',
                  width: '70px',
                  marginRight: '15px',
                  borderRadius: '5px',
                }}
              />
              <h2 style={{ fontSize: '1.8em', color: 'white', margin: '0' }}>
                SIT ResearchGate
              </h2>
            </Link>
          </div>
        </nav>
      </header>

      <section style={{ display: 'flex' }}>
        <article
          style={{
            width: '50%',
            float: 'left',
            paddingLeft: '100px',
            paddingTop: '100px',
            paddingRight: '100px',
          }}
        >
          <h1 style={{ fontSize: '60px' }}>Get started with your Next Paper!!</h1>

          <p>1. Master the skills required for academic writing, including structuring, citations, and ethical considerations.</p>
          <p>2. Build a portfolio of published or peer-reviewed research to enhance career opportunities.</p>
          <p>3. Develop confidence in presenting and defending research in both local and international forums.</p>

          <div className="sujal">
            <br />
            <Link to="/login"> {/* Use Link for navigation */}
              <button>ResearchGate Portfolio</button>
            </Link>
          </div>
        </article>

        <aside style={{ width: '45%', float: 'left', paddingTop: '200px' }}>
          <figure>
            <img
              src={portfolio}
              alt="Portfolio"
              style={{ width: '550px', height: '350px', borderRadius: '20px' }}
            />
          </figure>
        </aside>
      </section>

      <section style={{ alignItems: 'center', display: 'flex' }}>
        <article
          style={{
            width: '50%',
            float: 'left',
            paddingLeft: '100px',
            paddingTop: '100px',
            paddingRight: '100px',
          }}
        >
          <h1 style={{ fontSize: '2em', color: '#3b3b3b' }}>Current Stats</h1>
          <p>Third Years - 0</p>
          <p>Second Years - 0</p>
          <p>First Years - 0</p>
          <p>Publications - 0</p>
          <p>Papers Written - 0</p>
        </article>

        <aside style={{ width: '45%', float: 'left', paddingTop: '200px' }}>
          <figure>
            <img
              src={stats}
              alt="stats"
              style={{ width: '550px', height: '350px', borderRadius: '20px' }}
            />
          </figure>
        </aside>
      </section>

      <section style={{ alignItems: 'center', display: 'flex' }}>
        <article
          style={{
            width: '50%',
            float: 'left',
            paddingLeft: '100px',
            paddingTop: '100px',
            paddingRight: '100px',
          }}
        >
          <img
            src={port2}
            alt="Portfolio2"
            style={{ width: '550px', height: '350px', borderRadius: '20px' }}
          />
        </article>

        <article style={{ flex: 1, paddingLeft: '20px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2em', color: '#3b3b3b' }}>Annual Events</h1>
          <p>The Scholar's Script</p>
          <p>The Scholar's Bridge: Projects to Publications</p>
        </article>
      </section>
    </div>
  );
};