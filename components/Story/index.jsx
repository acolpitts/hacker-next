import CommentList from '../CommentList'

import './styles.scss';

export default ({ story }) => (
  <main className="story">
    <h1 className="story__title">
      <a href={story.url}>{story.title}</a>
    </h1>
    <section className="story__details">
      <strong>{story.points} points</strong>
      <strong>{story.comments_count} comments</strong>
      <strong>{story.time_ago}</strong>
    </section>

    {story.comments.length > 0 ? (
      <CommentList comments={story.comments} />
    ) : (
      <div>No comments for this story</div>
    )}
  </main>
)