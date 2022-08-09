import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Index extends Component {

    constructor(props){
        super(props);
        this.state = {clicked_count:0}
    }

    render() {
        return (
            <div className="container">
                <div className="row react_test_row">
                    <div className="col-md-12 react_test_column">
                        <h1>ZenSmart React/Laravel FullStack Test</h1>
                        <button type="button" onClick={this.Saveclicks} className="btn btn-primary clickmebtn">Click Me!</button>
                        <p className="lead button_value">Number of times the button was clicked since midnight today:{this.state.clicked_count}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

if (document.getElementById('rootcontainer')) {
    const container = document.getElementById('rootcontainer');
    //Current React Render method
    const root = createRoot(container); 
    root.render(<Index />);
}
