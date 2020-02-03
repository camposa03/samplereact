import React, { Component } from 'react';
import { Jumbotron, Button, Alert } from 'reactstrap';
import gitHubService from './services/GithubService';
import { Spinner } from 'reactstrap';

class Heading extends Component {

    state = {
        isLoading: false,
        response: {
            message: "",
            success: false
        }
    }

    handleClick = async () => {
        this.setState({ isLoading: true })
        const response = await gitHubService.getGithubProfile();
        this.setState({ isLoading: false });

        this.setState({ response });
        
    }

    renderItems = () => {
        const response = this.state.response;

        let display = null;
        if (response.success) {
            display = <li>{response.message}</li>;
        } else if (response.message && !response.success) {
            display = <Alert color="danger"><strong>Sorry, </strong> having trouble reaching the service. Is the service up and running?</Alert>
                     
        } 
        return display;
    }

    render() {
 
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Demo App</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <p>Click the button below to make an API call</p>
                    <p className="lead">
                        <Button disabled={this.state.isLoading} 
                                onClick={this.handleClick}
                                color="primary">Get user Profile</Button>
                    </p>

                    {this.state.isLoading ? <div><Spinner color="primary" /></div> : this.renderItems()}
                    
                </Jumbotron>
            </div>);
    }
}

export default Heading;