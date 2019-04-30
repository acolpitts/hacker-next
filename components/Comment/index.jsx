import "./styles.scss";

const Comment = ({ comment }) => (
  <article className="comment">
    <h4 className="comment__user">{comment.user}</h4>
    <div className="commnet__content" dangerouslySetInnerHTML={{ __html: comment.content}} />

    {comment.comments && (
      <div className="comment__comments">
        {comment.comments.map(nestedComment => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </div>
    )}

  </article>
);

export default Comment;