import axios from 'axios';

const gitHubService = {

    getMockUserProfile() {
        return ["KOL", "Led Zeppelin", "RHCP", "Modest Mouse"];
    },

    async getGithubProfile () {

        let response = {};
        try {
            response = await axios.get("http://localhost:9999/healthcheck");
            response.message = response.data.message;
            response.success = true;
        } catch(error) {
            response.message = 'Having trouble connecting to the service';
            response.success = false;
            console.error("snap fetching data", error);
        }
        
        return response;

    }
    
};

export default gitHubService;