import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Page from '../components/Layout/Page';
import Story from '../components/Story';

class StoryPage extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const storyId = query.id;
    let story;

    try {
      const data = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
      story = await data.json();
    } catch (e) {
      console.log('ERROR: ', e);
      story = null
    }

    return { story }
  }

  render() {
    const { story } = this.props;

    if (!story) {
      return <Error statusCode={503} />
    }

    console.log(story.title);

    return (
      <Page title={story.title} description="story.title" backButton>
        <Story story={story} />
      </Page>
    )
  }
}

export default StoryPage;