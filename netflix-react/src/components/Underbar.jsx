/* Questo componente è usato per ricreare la sezione "sotto la barra principale" */
import React from 'react'
import { Dropdown } from 'react-bootstrap';

export default function Underbar() {
    return (
      <>
        <div className="d-flex mt-2">
          <h2 className="mb-4 mx-4 text-light">TV Shows</h2>
            <Dropdown>
                <Dropdown.Toggle className="border border-light rounded-0" variant="dark" id="dropdown-basic">
                    Genres
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-dark border border-light">
                    <Dropdown.Item className="bg-dark text-light" href="#/action-1">Comedy</Dropdown.Item>
                    <Dropdown.Item className="bg-dark text-light" href="#/action-2">Drama</Dropdown.Item>
                    <Dropdown.Item className="bg-dark text-light" href="#/action-3">Thriller</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </>
    );
  }
