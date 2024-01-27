let axios = require('axios');

class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        try {
            const response = await axios.get(this.baseUrl + endpoint);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
}

class Comment {
    constructor(apiCaller) {
        this.apiCaller = apiCaller;
    }

    async getAll() {
        return await this.apiCaller.get('/comments');
    }

    async getOne(commentId) {
        return await this.apiCaller.get(`/comments/${commentId}`);
    }
}

let apiCaller = new APICaller('https://jsonplaceholder.typicode.com');
let commentService = new Comment(apiCaller);

commentService.getAll().then(comments => {
    console.log('All comments:', comments);
});

commentService.getOne(1).then(comment => {
    console.log('Comment with ID 1:', comment);
});
