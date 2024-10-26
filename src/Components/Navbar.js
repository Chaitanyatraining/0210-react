import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/listandkeys' class="nav-link">ListAndKeys</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='pagination' class="nav-link">Pagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='counter' class="nav-link">Counter</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='useeffectuser' class="nav-link">useEffect</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='paginationeffect' class="nav-link">paginationeffect</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='unmounting' class="nav-link">unmountingphase</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='usecontexthook' class="nav-link">contexthook</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='userefhook' class="nav-link">userefHook</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='usereducer' class="nav-link">usereducer</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='contactus' class="nav-link">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar