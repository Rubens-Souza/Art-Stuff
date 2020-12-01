import axios from "axios";

import { POST_URLS } from "../../shared/utils/constants/Urls";

class PostService {
    static async savePost(postData) {
        axios.post(POST_URLS.savePost, { ...postData })
    }
}

export default PostService;