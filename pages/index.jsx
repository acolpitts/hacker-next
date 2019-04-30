import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import Error from 'next/error';
import StoryList from '../components/StoryList/StoryList';
import Page from '../components/Layout/Page'
import '../styles/main.scss';

class IndexPage extends React.Component {
  static async getInitialProps({req, res, query}) {
    let stories;
    let page;

    try {
      page = Number(query.page) || 1;
      const data = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = await data.json();
    } catch (e) {
      console.log(e);
      stories = [];
    }

    return { page, stories }
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful\n\t', registration)
        })
        .catch(err => {
          console.warn('service worker registration failed\n\t', err);
        })
    }
  }

  render() {
    const { page, stories } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />
    }

    return (
      <Page title="HaCKeR NeXT" description="A Hacker News clone made with Next.js">
        <StoryList stories={stories}/>
        <footer>
          <Link href={`/?page=${page + 1}`}><a>Next Page ({page + 1})</a></Link>
        </footer>
      </Page>
    )
  }
}

export default IndexPage;