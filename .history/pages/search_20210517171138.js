
import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY }  from '../keys';
import Response from "../Response";

function Search({ results }) { 
    const router - useRo

        console.log(results);
      
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
   
    const useDummyData = true;
    const startIndex = context.query.start || '0';

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

    // After the SERVER has rendered Pass the results to the client
    return {
        props: {
            results: data,
        }
        }
    }

