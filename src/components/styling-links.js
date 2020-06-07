import React from 'react';

class StylingLinks extends React.Component {
    render() {
        return(
            <React.Fragment>
               <p>There are several browsers available, such as <a href="#">Mozilla
                Firefox</a>, <a href="#">Google Chrome</a>, and &nbsp;
                <a href="#">Microsoft Edge</a>.</p>

                {/* button styling */}
                <ul>
                <li><a href="#">Home</a></li><li><a href="#">Pizza</a></li><li><a href="#">Music</a></li><li><a href="#">Wombats</a></li><li><a href="#">Finland</a></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default StylingLinks
