import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);     
        /*
            set initial state for link name and URL 
        */
        this.state ={
            name: '',
            url: ''
        } 
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = (event) => {
        /*
            TODO - Logic for changing state based on form changes
        */
        const target = event.target;
        const value = target.value;
        const name = target.name;
   
        this.setState({
            [name]: value
        });

    } 

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            Logic for calling props to handle submission 
            and setting state changes
        */
        this.setState({
            name: "", 
            url: ""
        });

        this.props.handleSubmit(this.state);

    }

    render() {

        return(

            <form>
                {/* Logic for returning a form element 
                with labels and inputs for link name and URL */}

                <label for="name"> Name </label><br/>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                <label for="url"> URL </label><br/>
                <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleChange}/><br/>
                <input type="submit" value="Submit" onClick = {this.onFormSubmit}/> 

            </form>
        )
    
    }
}

export default Form;
