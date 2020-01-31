import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import gitHubService from './services/GithubService';

class Heading extends Component {

    state = {
        bands: []
    }

    handleClick = () => {
        const bands = gitHubService.getMockUserProfile();
        this.setState({ bands });
    }

    render() {

        const bands = this.state.bands;
        const renderItems = () => {
            return bands && bands.map((b, index) => <li key={index}>{b}</li>)
        }

        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Demo App</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <p>Click the button below to make an API call</p>
                    <p className="lead">
                        <Button onClick={this.handleClick} color="primary">Get user Profile</Button>
                    </p>

                    {renderItems()}
                    
                </Jumbotron>
            </div>);
    }
}

export default Heading;