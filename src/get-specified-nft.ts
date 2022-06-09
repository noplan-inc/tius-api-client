import {createClient} from "@urql/core";
import fetch from 'cross-fetch';
import {
    Erc721ByContractAddressDocument,
    Erc721ByContractAddressQuery, Erc721ByContractAddressQueryVariables,
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


const fetchErc721 = async () => {
    const results = await client.query<Erc721ByContractAddressQuery, Erc721ByContractAddressQueryVariables>(Erc721ByContractAddressDocument, {address: '0xC52d9642260830055c986a97794B7b27393Edf5e'}).toPromise();
    console.log(results.data.erc721ByContractAddress);
}

const main = async () => {
    await fetchErc721();
}

main().catch(console.error)
