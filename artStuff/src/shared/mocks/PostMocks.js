import { kateFox, yuumei } from "./UserMocks";
import { Comments } from "./CommentsMocks";

import KateFoxPostImage from "../../../assets/imgs/art-test.jpg";
import YuumeiPostImage from "../../../assets/imgs/art-test4.jpg";
import KateFoxPostImage2 from "../../../assets/imgs/art-test2.jpg";

import PostData from "../dtos/PostData";

export const posts = [
    new PostData(kateFox, "Flying", KateFoxPostImage, Comments),
    new PostData(yuumei, "Flying", YuumeiPostImage, []),
    new PostData(kateFox, "Flying", KateFoxPostImage2, []),
];