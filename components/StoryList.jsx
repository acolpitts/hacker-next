import Link from 'next/link';
import './StoryList.scss';

const StoryList = ({ stories }) => (
  <section className="story-list">
    {stories.map(story => (
      <article className="story-list__story" key={story.id}>
        <h2 className="story-list__story-title" >
          <a href={story.url}>{story.title}</a>
        </h2>
        <p className="story-list__story-details">
          <span>{story.points || 0} points</span>
          <Link href={`/story?id=${story.id}`}>
            <a>{story.comments_count || 0} comments</a>
          </Link>
        </p>
      </article>
    ))}
  </section>
);

export default StoryList;