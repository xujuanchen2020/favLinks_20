import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){ 
        super(props)
        /* Create state object for storing favLinks */
        this.state ={
            favLink: []
        }
        this.removeCharacter = this.removeCharacter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    removeCharacter = index => {
        /*
            Create logic for setting the state to 
            filter array and remove favLink at index
        */
        const favLink = [...this.state.favLink];
        favLink.splice(index, 1);
        this.setState({ favLink });
    }

    handleSubmit = favLink => {
        /*
            Create logic to setState and add 
            new favLink to favLinks array in state
        */
        this.setState( prevState => ({
            favLink: [...prevState.favLink, favLink]
        }));
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/* Add Table Component */}
                <Table linkData = {this.state.favLink}
                     removeLink = {this.removeCharacter} /> 
                <br/>

                <h3>Add New</h3>
                {/* Add Form Component */}
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;