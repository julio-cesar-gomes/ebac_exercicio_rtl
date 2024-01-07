
import PostComments from '../PostComments';
import { ReactNode } from 'react';
import { PostU, ImgPost, ParagrafoPost } from './styles';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <>
    <PostU>
        <ImgPost src={imageUrl}></ImgPost>
        <ParagrafoPost> {children}</ParagrafoPost>
        <PostComments />
    </PostU>
    
    </>
);

export default Post;