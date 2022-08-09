import axios from 'axios';
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import History from './History';

class Index extends Component {

    constructor(props){
        super(props);
        this.state = {clicked_count:0,click_history:null}
    }

    //Life Cycle
    componentDidMount(){
        this.getClicks();
    }

    //Get the count 
    getClicks = () => {
        let self=this;
        axios.get('/get/clicks/count').then(function (response){
            self.setState(
                {
                    clicked_count:response.data.current,
                    click_history:response.data.all
                }
            );
        });
    }
    
    //Save the click in database
    Saveclicks= () => {
        let self=this;
        axios.post('/save/clicks', {
            no_of_clicks: this.state.clicked_count,
          })
          .then(function (response) {
            self.setState({clicked_count:response.data});
          })
          .catch(function (error) {
            console.log(error);
          });
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
                    <History datas={this.state.click_history} />
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
