import React from 'react';
import Celebrity from '../Celebrity/Celebrity.jsx';

export default class Celebrities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.props.url) { // checks that  url exists 
            this.setState({ 
                loading: true,
                data: []
            })

            fetch(this.props.url)
                .then(response => response.json()) //parses data as json
                .then(data => {
                    this.setState({ 
                        data: data
                    })
                })
                .finally(this.setState({  // this is to stop the loading if there is an error i guess
                    loading: false
                }));
        }
    }

    render() { //everytime there is a change, the render is happening 

        let content = (
            <div className="message">Loading...</div>
        )
        if (!this.state.loading) {
            content = (
                <>
                    <h1>The highest-paid celebrities 2019</h1>
                    {
                        this.state.data.map(item => (  //for  each item it got from the API endpoint 
                            <Celebrity key={ item.name } { ...item } />
                        ))
                    }
                </>
            )
        }
        
        return (
            <div className="celebrities">
                { content }
            </div>
        );
    }
}