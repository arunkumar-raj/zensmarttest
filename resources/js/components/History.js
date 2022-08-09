import React, { Component } from 'react';


class History extends Component {

    constructor(props){
        super(props);
        this.state = {history_count:null,history_date:null}
    }

    //Set state to show values on date click
    Showhistoricvalues= (value) => {
        this.setState(
            {
                history_count:value.click_count,
                history_date:value.clicked_date
            });
    }

    render() {
        let dropdown = this.props.datas;
        if(dropdown != null){
            
            //Dropdown menu creation
            let dropdown_list = dropdown.length > 0 && dropdown.map((item, i) => {
                return (
                    <a className="dropdown-item" onClick={()=>this.Showhistoricvalues(item)} key={i} href="javascript:viod(0)">{item.clicked_date}</a>
                )
            }, this);

            return (
                <div className="col-md-12 react_history_column">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            History of Clicks
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {dropdown_list}
                        </div>
                    </div>

                    { this.state.history_count !=null &&

                        <div className="card history_card">
                            <div className="card-header">
                                Archived Counts
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Date: {this.state.history_date}</h5>
                                <p className="card-text"><b>{this.state.history_count}</b> of times the button was clicked.</p>
                            </div>
                        </div>
                    }
                </div>
            );

        }else{
            return '';
        }
    }

}

export default History;
