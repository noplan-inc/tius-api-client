import {createClient} from "@urql/core";
import fetch from 'cross-fetch';
import {Erc721sDocument, Erc721sQuery, Erc721sQueryVariables} from "./generated/graphql";

const {GRAPHQL_ENDPOINT} = process.env;

if (!GRAPHQL_ENDPOINT) {
    throw Error('GRAPHQL_ENDPOINT is not set');
}

const client = createClient({
    url: GRAPHQL_ENDPOINT,
    fetch,
    requestPolicy: 'network-only',
});


const fetchErc721 = async () => {
    const results = await client.query<Erc721sQuery, Erc721sQueryVariables>(Erc721sDocument, {take: 1000}).toPromise();

    results.data.erc721s.forEach(erc721 => {
        console.log(erc721.id);
        console.log(erc721.name);
        console.log(erc721.chainId);
        console.log(erc721.address);
        erc721.tokens.forEach((token) => {
            console.log(token.tokenId);
            console.log(token.metadata);
            console.log(token.ownerAddress);
            console.log(token.tokenUri);
        })
    })
}

const main = async () => {
    await fetchErc721();
}

main().catch(console.error)
