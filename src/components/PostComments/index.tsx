import { FormEvent, useState } from 'react';

import Comment from '../../models/Comment';
import { ButtonForm, CommentContent, FormComment, FormTextarea, PostComment, PostComments } from './styles';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <PostComments>
                {comments.map(({ comment, id }) => (
                    <PostComment key={id}>
                        <CommentContent>
                            {comment}
                        </CommentContent>
                    </PostComment>
                    
                ))}
            </PostComments>
            <FormComment onSubmit={handleAddComment}>
            <FormTextarea value={tempComment} onChange={e => setTempComment(e.target.value)} required></FormTextarea>   
                <ButtonForm>
                    Comentar
                </ButtonForm>
            </FormComment>
        </div>
    );
}

export default Post;