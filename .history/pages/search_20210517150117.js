
import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY }  from '../keys';

function Search({ results }) {

    console.log;

    return (
        <div>
            <Head>
                <title>
                    Search Results
                </title>
                <link rel="icon" href=""/>
            </Head>
{/* Header */}

<Header />

{/* Search Results */}

        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
   
    const useDummyData = false;

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}q=${context.query.term}&start=${startIndex}`).then((response) => response.json());

    // After the SERVER has rendered Pass the results to the client
    return {
        props: {
            results: data,
        }
        }
    }

