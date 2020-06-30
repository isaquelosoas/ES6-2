import axios from 'axios';
class GitHub{
    static async getRepositorie(repositorie){
        try{
            const response = await axios.get(`http://api.github.com/repos/${repositorie}`);
            console.log(response);
        }
        catch{
            console.warn('repositório Inexistente');
        }
    }
}

export default GitHub;