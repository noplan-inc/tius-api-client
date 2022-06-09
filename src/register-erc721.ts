import {createClient} from "@urql/core";
import fetch from 'cross-fetch';
import {
    BlockchainsDocument,
    BlockchainsQuery, CreateErc721Document, CreateErc721Mutation, CreateErc721MutationVariables,
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


const registerErc721 = async () => {
    const verylongAnimals = "0xC52d9642260830055c986a97794B7b27393Edf5e";
    const results = await client
        .mutation<CreateErc721Mutation, CreateErc721MutationVariables>
        (CreateErc721Document, {contractAddress: verylongAnimals, chainId: 137}).toPromise();

    console.log(results);
}

const main = async () => {
    await registerErc721();
}

main().catch(console.error)
