import {createClient} from "@urql/core";
import fetch from 'cross-fetch';
import {
    BlockchainsDocument,
    BlockchainsQuery,
} from "./generated/graphql";

const {GRAPHQL_ENDPOINT} = process.env;

if (!GRAPHQL_ENDPOINT) {
    throw Error('GRAPHQL_ENDPOINT is not set');
}

const client = createClient({
    url: GRAPHQL_ENDPOINT,
    fetch,
    requestPolicy: 'network-only',
});


const fetchBlockchains = async () => {
    const results = await client.query<BlockchainsQuery>(BlockchainsDocument).toPromise();

    console.log(results.data.blockchains);
}

const main = async () => {
    await fetchBlockchains();
}

main().catch(console.error)
