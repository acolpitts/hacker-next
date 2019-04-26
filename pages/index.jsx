import fetch from 'isomorphic-fetch';
import Error from 'next/error';

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
      stories = await res.json();
    } catch (e) {
      console.log(e);
      stories = [];
    }

    return { stories }
  }

  render() {
    const { stories } = this.props;
    console.log({stories})

    if (stories.length === 0) {
      return <Error statusCode={503} />
    }

    return (
      <main>
        <h1>-H-A-C-K-E-R- -N-E-X-T-</h1>
        <section>
          {stories.map(story => (
            <h2 key={story.id}>{story.title}</h2>
          ))}
        </section>
      </main>
    )
  }
}

export default Index;