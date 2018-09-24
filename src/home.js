import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Simple.css';
class Home extends Component {

    render() {
        return (
            <div className="main">
                <nav className="navT">
                    <Link className="navL" to="/">Home</Link>
                    <Link className="navL" to="/about">About</Link>
                    <Link className="navL" to="/contact">Contact</Link>

                </nav>
                <div className="imageMain">
                
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/as.jpg'} />

                        <p>Puppy days </p>
                    </div>
                     <div className="item">
                        <img alt="cute dog" src="https://github.com/cavapoo2/flex-example/public/images/aa.jpg"/>

                        <p>Pozing </p>
                    </div>
                    {/*
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/aa.jpg'} />

                        <p>Pozing </p>
                    </div>
                    */}
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/bs.jpg'} />

                        <p>Snoozing </p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/cs.jpg'} />

                        <p>Wanting treat </p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ds.jpg'} />

                        <p>Playing </p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/es.jpg'} />

                        <p>After Operation, still looking for treat</p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/fs.jpg'} />

                        <p>Looking like a poodle not a cavapoo</p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/gs.jpg'} />

                        <p>Chicken </p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/hs.jpg'} />

                        <p>Sad, has to go for walk </p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/is.jpg'} />

                        <p>Wolf in sheeps clothing</p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/js.jpg'} />

                        <p>Lazy day</p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ks.jpg'} />

                        <p>On the shoulder </p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ls.jpg'} />

                        <p>Guilty, been digging hole eating mud </p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ms.jpg'} />

                        <p>After brush</p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/os.jpg'} />

                        <p>Puppy, on the shoulder </p>
                    </div>


                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ps.jpg'} />

                        <p>Looking like teddy bear</p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/qs.jpg'} />

                        <p>Snoozing </p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ss.jpg'} />

                        <p>Found a cool spot </p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ts.jpg'} />

                        <p>A new place, at the cabin </p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/us.jpg'} />

                        <p>Looking out the window </p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/vs.jpg'} />

                        <p>Looking out the window with her green ball </p>
                    </div>
                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/ws.jpg'} />

                        <p>Looking out the window with her sock </p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/xs.jpg'} />

                        <p>Looking out the window with her dummy</p>
                    </div>

                    <div className="item">
                        <img alt="cute dog" src={window.location.origin + '/images/qs.jpg'} />

                        <p>Snoozin</p>
                    </div>
















                </div>

            </div>
        );
    }

}

 export default Home;