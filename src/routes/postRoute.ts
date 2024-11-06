import { Router } from 'express'
import upload from '../middlewares/upload'
import { getAllPost , createPost , getPostByID , deletePostById , updatePost} from '../controllers/postController'
import { VerifyToken } from '../middlewares/token'
const postRouter = Router()
postRouter.get("/posts", VerifyToken ,getAllPost);
postRouter.get("/posts/:id", VerifyToken, getPostByID);
postRouter.delete("/posts/:id", VerifyToken, deletePostById);
postRouter.post("/post", VerifyToken, upload.single("file"), createPost);
postRouter.put("/post/:id", VerifyToken, upload.single("file"), updatePost);

export default postRouter