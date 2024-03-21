import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Mortgage Loan Module</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Schemes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Customer login</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="adminPage">Admin login</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar