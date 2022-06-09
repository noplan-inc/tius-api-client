import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
};

export type BlockChain = {
  __typename?: 'BlockChain';
  _count: BlockChainCount;
  erc20s?: Maybe<Array<Erc20>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type BlockChainCount = {
  __typename?: 'BlockChainCount';
  erc20s: Scalars['Int'];
};

export type CreateErc1155Input = {
  chainId: Scalars['Int'];
  contractAddress: Scalars['String'];
};

export type Erc20 = {
  __typename?: 'ERC20';
  address: Scalars['String'];
  chain: BlockChain;
  chainId: Scalars['Int'];
  decimals: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Erc721 = {
  __typename?: 'ERC721';
  _count: Erc721Count;
  address: Scalars['String'];
  chain: BlockChain;
  chainId: Scalars['Int'];
  id: Scalars['ID'];
  lastBlockNumber: Scalars['Int'];
  name: Scalars['String'];
  tokens: Array<Erc721Token>;
};

export type Erc721Count = {
  __typename?: 'ERC721Count';
  tokens: Scalars['Int'];
};

export type Erc721Token = {
  __typename?: 'ERC721Token';
  erc721: Erc721;
  erc721Id: Scalars['Int'];
  id: Scalars['BigInt'];
  metadata: Scalars['String'];
  ownerAddress: Scalars['String'];
  tokenId: Scalars['String'];
  tokenUri: Scalars['String'];
};

export type Erc1155 = {
  __typename?: 'ERC1155';
  _count: Erc1155Count;
  address: Scalars['String'];
  chain: BlockChain;
  chainId: Scalars['Int'];
  id: Scalars['ID'];
  lastBlockNumber: Scalars['Int'];
  name: Scalars['String'];
  tokens: Array<Erc1155Token>;
};

export type Erc1155Count = {
  __typename?: 'ERC1155Count';
  tokens: Scalars['Int'];
};

export type Erc1155Token = {
  __typename?: 'ERC1155Token';
  balance: Scalars['String'];
  erc1155: Erc1155;
  erc1155Id: Scalars['Int'];
  id: Scalars['BigInt'];
  metadata: Scalars['String'];
  ownerAddress: Scalars['String'];
  tokenId: Scalars['String'];
  tokenUri: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createErc721: Erc721;
  createErc1155: Erc1155;
  updateEventErc721: Scalars['String'];
  updateEventErc1155: Scalars['String'];
  updateMetadataErc721: Scalars['String'];
  updateMetadataErc1155: Scalars['String'];
};


export type MutationCreateErc721Args = {
  chainId: Scalars['Int'];
  contractAddress: Scalars['String'];
};


export type MutationCreateErc1155Args = {
  createErc1155Input: CreateErc1155Input;
};


export type MutationUpdateEventErc721Args = {
  id: Scalars['Int'];
};


export type MutationUpdateEventErc1155Args = {
  id: Scalars['Int'];
};


export type MutationUpdateMetadataErc721Args = {
  id: Scalars['Int'];
};


export type MutationUpdateMetadataErc1155Args = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  blockchain?: Maybe<BlockChain>;
  blockchains: Array<BlockChain>;
  erc721AllToken: Array<Erc721Token>;
  erc721ByContractAddress: Erc721;
  erc721SpecifiedTokens: Array<Erc721Token>;
  erc721s: Array<Erc721>;
  erc721sByOwner: Array<Erc721>;
  erc1155: Erc1155;
  erc1155AllToken: Array<Erc1155Token>;
  erc1155SpecifiedTokens: Array<Erc1155Token>;
  erc1155s: Array<Erc1155>;
  erc1155sByOwner: Array<Erc1155>;
};


export type QueryBlockchainArgs = {
  id: Scalars['Int'];
};


export type QueryErc721AllTokenArgs = {
  contractAddress: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryErc721ByContractAddressArgs = {
  contractAddress: Scalars['String'];
};


export type QueryErc721SpecifiedTokensArgs = {
  contractAddress: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  tokenIds: Array<Scalars['String']>;
};


export type QueryErc721sArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryErc721sByOwnerArgs = {
  ownerAddress: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryErc1155Args = {
  id: Scalars['Int'];
};


export type QueryErc1155AllTokenArgs = {
  contractAddress: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryErc1155SpecifiedTokensArgs = {
  contractAddress: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  tokenIds: Array<Scalars['String']>;
};


export type QueryErc1155sArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryErc1155sByOwnerArgs = {
  ownerAddress: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChain: ResolverTypeWrapper<BlockChain>;
  BlockChainCount: ResolverTypeWrapper<BlockChainCount>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateErc1155Input: CreateErc1155Input;
  ERC20: ResolverTypeWrapper<Erc20>;
  ERC721: ResolverTypeWrapper<Erc721>;
  ERC721Count: ResolverTypeWrapper<Erc721Count>;
  ERC721Token: ResolverTypeWrapper<Erc721Token>;
  ERC1155: ResolverTypeWrapper<Erc1155>;
  ERC1155Count: ResolverTypeWrapper<Erc1155Count>;
  ERC1155Token: ResolverTypeWrapper<Erc1155Token>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  BlockChain: BlockChain;
  BlockChainCount: BlockChainCount;
  Boolean: Scalars['Boolean'];
  CreateErc1155Input: CreateErc1155Input;
  ERC20: Erc20;
  ERC721: Erc721;
  ERC721Count: Erc721Count;
  ERC721Token: Erc721Token;
  ERC1155: Erc1155;
  ERC1155Count: Erc1155Count;
  ERC1155Token: Erc1155Token;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BlockChainResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockChain'] = ResolversParentTypes['BlockChain']> = {
  _count?: Resolver<ResolversTypes['BlockChainCount'], ParentType, ContextType>;
  erc20s?: Resolver<Maybe<Array<ResolversTypes['ERC20']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockChainCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockChainCount'] = ResolversParentTypes['BlockChainCount']> = {
  erc20s?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc20Resolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC20'] = ResolversParentTypes['ERC20']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chain?: Resolver<ResolversTypes['BlockChain'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721Resolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721'] = ResolversParentTypes['ERC721']> = {
  _count?: Resolver<ResolversTypes['ERC721Count'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chain?: Resolver<ResolversTypes['BlockChain'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastBlockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Count'] = ResolversParentTypes['ERC721Count']> = {
  tokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Token'] = ResolversParentTypes['ERC721Token']> = {
  erc721?: Resolver<ResolversTypes['ERC721'], ParentType, ContextType>;
  erc721Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155Resolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155'] = ResolversParentTypes['ERC1155']> = {
  _count?: Resolver<ResolversTypes['ERC1155Count'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chain?: Resolver<ResolversTypes['BlockChain'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastBlockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['ERC1155Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155Count'] = ResolversParentTypes['ERC1155Count']> = {
  tokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155Token'] = ResolversParentTypes['ERC1155Token']> = {
  balance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  erc1155?: Resolver<ResolversTypes['ERC1155'], ParentType, ContextType>;
  erc1155Id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createErc721?: Resolver<ResolversTypes['ERC721'], ParentType, ContextType, RequireFields<MutationCreateErc721Args, 'chainId' | 'contractAddress'>>;
  createErc1155?: Resolver<ResolversTypes['ERC1155'], ParentType, ContextType, RequireFields<MutationCreateErc1155Args, 'createErc1155Input'>>;
  updateEventErc721?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateEventErc721Args, 'id'>>;
  updateEventErc1155?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateEventErc1155Args, 'id'>>;
  updateMetadataErc721?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateMetadataErc721Args, 'id'>>;
  updateMetadataErc1155?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateMetadataErc1155Args, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  blockchain?: Resolver<Maybe<ResolversTypes['BlockChain']>, ParentType, ContextType, RequireFields<QueryBlockchainArgs, 'id'>>;
  blockchains?: Resolver<Array<ResolversTypes['BlockChain']>, ParentType, ContextType>;
  erc721AllToken?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<QueryErc721AllTokenArgs, 'contractAddress'>>;
  erc721ByContractAddress?: Resolver<ResolversTypes['ERC721'], ParentType, ContextType, RequireFields<QueryErc721ByContractAddressArgs, 'contractAddress'>>;
  erc721SpecifiedTokens?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<QueryErc721SpecifiedTokensArgs, 'contractAddress' | 'tokenIds'>>;
  erc721s?: Resolver<Array<ResolversTypes['ERC721']>, ParentType, ContextType, Partial<QueryErc721sArgs>>;
  erc721sByOwner?: Resolver<Array<ResolversTypes['ERC721']>, ParentType, ContextType, RequireFields<QueryErc721sByOwnerArgs, 'ownerAddress'>>;
  erc1155?: Resolver<ResolversTypes['ERC1155'], ParentType, ContextType, RequireFields<QueryErc1155Args, 'id'>>;
  erc1155AllToken?: Resolver<Array<ResolversTypes['ERC1155Token']>, ParentType, ContextType, RequireFields<QueryErc1155AllTokenArgs, 'contractAddress'>>;
  erc1155SpecifiedTokens?: Resolver<Array<ResolversTypes['ERC1155Token']>, ParentType, ContextType, RequireFields<QueryErc1155SpecifiedTokensArgs, 'contractAddress' | 'tokenIds'>>;
  erc1155s?: Resolver<Array<ResolversTypes['ERC1155']>, ParentType, ContextType, Partial<QueryErc1155sArgs>>;
  erc1155sByOwner?: Resolver<Array<ResolversTypes['ERC1155']>, ParentType, ContextType, RequireFields<QueryErc1155sByOwnerArgs, 'ownerAddress'>>;
};

export type Resolvers<ContextType = any> = {
  BigInt?: GraphQLScalarType;
  BlockChain?: BlockChainResolvers<ContextType>;
  BlockChainCount?: BlockChainCountResolvers<ContextType>;
  ERC20?: Erc20Resolvers<ContextType>;
  ERC721?: Erc721Resolvers<ContextType>;
  ERC721Count?: Erc721CountResolvers<ContextType>;
  ERC721Token?: Erc721TokenResolvers<ContextType>;
  ERC1155?: Erc1155Resolvers<ContextType>;
  ERC1155Count?: Erc1155CountResolvers<ContextType>;
  ERC1155Token?: Erc1155TokenResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


export type CreateErc721MutationVariables = Exact<{
  contractAddress: Scalars['String'];
  chainId: Scalars['Int'];
}>;


export type CreateErc721Mutation = { __typename?: 'Mutation', createErc721: { __typename?: 'ERC721', name: string } };

export type Erc721sQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type Erc721sQuery = { __typename?: 'Query', erc721s: Array<{ __typename?: 'ERC721', id: string, chainId: number, address: string, name: string, lastBlockNumber: number, tokens: Array<{ __typename?: 'ERC721Token', tokenId: string, ownerAddress: string, metadata: string, tokenUri: string }> }> };

export type Erc721ByContractAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type Erc721ByContractAddressQuery = { __typename?: 'Query', erc721ByContractAddress: { __typename?: 'ERC721', name: string, chainId: number, address: string, tokens: Array<{ __typename?: 'ERC721Token', tokenId: string, ownerAddress: string, metadata: string, tokenUri: string }> } };

export type Erc1155sQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type Erc1155sQuery = { __typename?: 'Query', erc1155s: Array<{ __typename?: 'ERC1155', id: string, chainId: number, address: string, name: string, lastBlockNumber: number, tokens: Array<{ __typename?: 'ERC1155Token', tokenId: string, ownerAddress: string, metadata: string, tokenUri: string }> }> };

export type BlockchainsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlockchainsQuery = { __typename?: 'Query', blockchains: Array<{ __typename?: 'BlockChain', id: string, name: string }> };


export const CreateErc721Document = gql`
    mutation createErc721($contractAddress: String!, $chainId: Int!) {
  createErc721(contractAddress: $contractAddress, chainId: $chainId) {
    name
  }
}
    `;
export const Erc721sDocument = gql`
    query erc721s($take: Int, $skip: Int) {
  erc721s(take: $take, skip: $skip) {
    id
    chainId
    address
    name
    lastBlockNumber
    tokens {
      tokenId
      ownerAddress
      metadata
      tokenUri
    }
  }
}
    `;
export const Erc721ByContractAddressDocument = gql`
    query erc721ByContractAddress($address: String!) {
  erc721ByContractAddress(contractAddress: $address) {
    name
    chainId
    address
    tokens {
      tokenId
      ownerAddress
      metadata
      tokenUri
    }
  }
}
    `;
export const Erc1155sDocument = gql`
    query erc1155s($take: Int, $skip: Int) {
  erc1155s(take: $take, skip: $skip) {
    id
    chainId
    address
    name
    lastBlockNumber
    tokens {
      tokenId
      ownerAddress
      metadata
      tokenUri
    }
  }
}
    `;
export const BlockchainsDocument = gql`
    query blockchains {
  blockchains {
    id
    name
  }
}
    `;