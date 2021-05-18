
import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY }  from '../keys';

function Search({ results }) {

    console.log(results);

    return (
        <div>
            <Head>
                <title>
                    Search Results
                </title>
                <link rel="icon" href="/favicon.ico"/>
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
    const startIndex = context.query.start || "0";

    const data = await fetch(`https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_URL}q=${context.query.term}&start=${startIndex}`).then(response => response.json());

    return {
        props: {
            results: data,
        }
        }
    }

