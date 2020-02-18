import React from 'react';

export default class Celebrity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="celebrity">
                <img src={this.props.photo}  alt={this.props.name}  />
                <div className="text">
                    <h2>{this.props.name} </h2>
                    <div className="earnings">
                        <h3>Earnings:</h3>{this.props.earnings} 
                    </div>
                    <div className="age">
                        <h3>Age:</h3>{this.props.age} 
                    </div>
                    <div className="citizenship">
                        <h3>Citizenship:</h3>{this.props.citizenship} 
                    </div>
                    <div className="events">
                        <ul>
                            {
                                this.props.events.map((event, i) => ( // item and then key of index in array
                                    <li key={i}>{event}</li>
                                )) // by using normal parenthesis we are automatically returining the value, if i were to use {} then i would need to write return 
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


// just takes props from Celebrities and displays it as HTML
// class to classNAme
// for to HTMLfor 
//all self closing must end with />
