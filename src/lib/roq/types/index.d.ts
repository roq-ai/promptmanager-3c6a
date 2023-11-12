/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model api_call
 *
 */
export type api_call = $Result.DefaultSelection<Prisma.$api_callPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model prompt
 *
 */
export type prompt = $Result.DefaultSelection<Prisma.$promptPayload>;
/**
 * Model request
 *
 */
export type request = $Result.DefaultSelection<Prisma.$requestPayload>;
/**
 * Model response
 *
 */
export type response = $Result.DefaultSelection<Prisma.$responsePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Api_calls
 * const api_calls = await prisma.api_call.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Api_calls
   * const api_calls = await prisma.api_call.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.api_call`: Exposes CRUD operations for the **api_call** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Api_calls
   * const api_calls = await prisma.api_call.findMany()
   * ```
   */
  get api_call(): Prisma.api_callDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.prompt`: Exposes CRUD operations for the **prompt** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Prompts
   * const prompts = await prisma.prompt.findMany()
   * ```
   */
  get prompt(): Prisma.promptDelegate<ExtArgs>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **request** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Requests
   * const requests = await prisma.request.findMany()
   * ```
   */
  get request(): Prisma.requestDelegate<ExtArgs>;

  /**
   * `prisma.response`: Exposes CRUD operations for the **response** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Responses
   * const responses = await prisma.response.findMany()
   * ```
   */
  get response(): Prisma.responseDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    api_call: 'api_call';
    company: 'company';
    prompt: 'prompt';
    request: 'request';
    response: 'response';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'api_call' | 'company' | 'prompt' | 'request' | 'response' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      api_call: {
        payload: Prisma.$api_callPayload<ExtArgs>;
        fields: Prisma.api_callFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.api_callFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.api_callFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload>;
          };
          findFirst: {
            args: Prisma.api_callFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.api_callFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload>;
          };
          findMany: {
            args: Prisma.api_callFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload>[];
          };
          create: {
            args: Prisma.api_callCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload>;
          };
          createMany: {
            args: Prisma.api_callCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.api_callDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload>;
          };
          update: {
            args: Prisma.api_callUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload>;
          };
          deleteMany: {
            args: Prisma.api_callDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.api_callUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.api_callUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callPayload>;
          };
          aggregate: {
            args: Prisma.Api_callAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApi_call>;
          };
          groupBy: {
            args: Prisma.api_callGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Api_callGroupByOutputType>[];
          };
          count: {
            args: Prisma.api_callCountArgs<ExtArgs>;
            result: $Utils.Optional<Api_callCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      prompt: {
        payload: Prisma.$promptPayload<ExtArgs>;
        fields: Prisma.promptFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.promptFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.promptFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload>;
          };
          findFirst: {
            args: Prisma.promptFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.promptFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload>;
          };
          findMany: {
            args: Prisma.promptFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload>[];
          };
          create: {
            args: Prisma.promptCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload>;
          };
          createMany: {
            args: Prisma.promptCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.promptDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload>;
          };
          update: {
            args: Prisma.promptUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload>;
          };
          deleteMany: {
            args: Prisma.promptDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.promptUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.promptUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$promptPayload>;
          };
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePrompt>;
          };
          groupBy: {
            args: Prisma.promptGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PromptGroupByOutputType>[];
          };
          count: {
            args: Prisma.promptCountArgs<ExtArgs>;
            result: $Utils.Optional<PromptCountAggregateOutputType> | number;
          };
        };
      };
      request: {
        payload: Prisma.$requestPayload<ExtArgs>;
        fields: Prisma.requestFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.requestFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.requestFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload>;
          };
          findFirst: {
            args: Prisma.requestFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.requestFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload>;
          };
          findMany: {
            args: Prisma.requestFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload>[];
          };
          create: {
            args: Prisma.requestCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload>;
          };
          createMany: {
            args: Prisma.requestCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.requestDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload>;
          };
          update: {
            args: Prisma.requestUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload>;
          };
          deleteMany: {
            args: Prisma.requestDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.requestUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.requestUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$requestPayload>;
          };
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRequest>;
          };
          groupBy: {
            args: Prisma.requestGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RequestGroupByOutputType>[];
          };
          count: {
            args: Prisma.requestCountArgs<ExtArgs>;
            result: $Utils.Optional<RequestCountAggregateOutputType> | number;
          };
        };
      };
      response: {
        payload: Prisma.$responsePayload<ExtArgs>;
        fields: Prisma.responseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.responseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.responseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload>;
          };
          findFirst: {
            args: Prisma.responseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.responseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload>;
          };
          findMany: {
            args: Prisma.responseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload>[];
          };
          create: {
            args: Prisma.responseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload>;
          };
          createMany: {
            args: Prisma.responseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.responseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload>;
          };
          update: {
            args: Prisma.responseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload>;
          };
          deleteMany: {
            args: Prisma.responseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.responseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.responseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$responsePayload>;
          };
          aggregate: {
            args: Prisma.ResponseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateResponse>;
          };
          groupBy: {
            args: Prisma.responseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ResponseGroupByOutputType>[];
          };
          count: {
            args: Prisma.responseCountArgs<ExtArgs>;
            result: $Utils.Optional<ResponseCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Api_callCountOutputType
   */

  export type Api_callCountOutputType = {
    request: number;
    response: number;
  };

  export type Api_callCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | Api_callCountOutputTypeCountRequestArgs;
    response?: boolean | Api_callCountOutputTypeCountResponseArgs;
  };

  // Custom InputTypes

  /**
   * Api_callCountOutputType without action
   */
  export type Api_callCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_callCountOutputType
     */
    select?: Api_callCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Api_callCountOutputType without action
   */
  export type Api_callCountOutputTypeCountRequestArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: requestWhereInput;
  };

  /**
   * Api_callCountOutputType without action
   */
  export type Api_callCountOutputTypeCountResponseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: responseWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    user: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type PromptCountOutputType
   */

  export type PromptCountOutputType = {
    api_call: number;
  };

  export type PromptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_call?: boolean | PromptCountOutputTypeCountApi_callArgs;
  };

  // Custom InputTypes

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptCountOutputType
     */
    select?: PromptCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountApi_callArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: api_callWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model api_call
   */

  export type AggregateApi_call = {
    _count: Api_callCountAggregateOutputType | null;
    _min: Api_callMinAggregateOutputType | null;
    _max: Api_callMaxAggregateOutputType | null;
  };

  export type Api_callMinAggregateOutputType = {
    id: string | null;
    prompt_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Api_callMaxAggregateOutputType = {
    id: string | null;
    prompt_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Api_callCountAggregateOutputType = {
    id: number;
    prompt_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Api_callMinAggregateInputType = {
    id?: true;
    prompt_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Api_callMaxAggregateInputType = {
    id?: true;
    prompt_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Api_callCountAggregateInputType = {
    id?: true;
    prompt_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Api_callAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_call to aggregate.
     */
    where?: api_callWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_calls to fetch.
     */
    orderBy?: api_callOrderByWithRelationInput | api_callOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: api_callWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_calls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_calls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned api_calls
     **/
    _count?: true | Api_callCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Api_callMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Api_callMaxAggregateInputType;
  };

  export type GetApi_callAggregateType<T extends Api_callAggregateArgs> = {
    [P in keyof T & keyof AggregateApi_call]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_call[P]>
      : GetScalarType<T[P], AggregateApi_call[P]>;
  };

  export type api_callGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_callWhereInput;
    orderBy?: api_callOrderByWithAggregationInput | api_callOrderByWithAggregationInput[];
    by: Api_callScalarFieldEnum[] | Api_callScalarFieldEnum;
    having?: api_callScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Api_callCountAggregateInputType | true;
    _min?: Api_callMinAggregateInputType;
    _max?: Api_callMaxAggregateInputType;
  };

  export type Api_callGroupByOutputType = {
    id: string;
    prompt_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Api_callCountAggregateOutputType | null;
    _min: Api_callMinAggregateOutputType | null;
    _max: Api_callMaxAggregateOutputType | null;
  };

  type GetApi_callGroupByPayload<T extends api_callGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_callGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Api_callGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Api_callGroupByOutputType[P]>
          : GetScalarType<T[P], Api_callGroupByOutputType[P]>;
      }
    >
  >;

  export type api_callSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        prompt_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        prompt?: boolean | promptDefaultArgs<ExtArgs>;
        request?: boolean | api_call$requestArgs<ExtArgs>;
        response?: boolean | api_call$responseArgs<ExtArgs>;
        _count?: boolean | Api_callCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['api_call']
    >;

  export type api_callSelectScalar = {
    id?: boolean;
    prompt_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type api_callInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | promptDefaultArgs<ExtArgs>;
    request?: boolean | api_call$requestArgs<ExtArgs>;
    response?: boolean | api_call$responseArgs<ExtArgs>;
    _count?: boolean | Api_callCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $api_callPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'api_call';
    objects: {
      prompt: Prisma.$promptPayload<ExtArgs>;
      request: Prisma.$requestPayload<ExtArgs>[];
      response: Prisma.$responsePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        prompt_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['api_call']
    >;
    composites: {};
  };

  type api_callGetPayload<S extends boolean | null | undefined | api_callDefaultArgs> = $Result.GetResult<
    Prisma.$api_callPayload,
    S
  >;

  type api_callCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    api_callFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Api_callCountAggregateInputType | true;
  };

  export interface api_callDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_call']; meta: { name: 'api_call' } };
    /**
     * Find zero or one Api_call that matches the filter.
     * @param {api_callFindUniqueArgs} args - Arguments to find a Api_call
     * @example
     * // Get one Api_call
     * const api_call = await prisma.api_call.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends api_callFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, api_callFindUniqueArgs<ExtArgs>>,
    ): Prisma__api_callClient<
      $Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Api_call that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {api_callFindUniqueOrThrowArgs} args - Arguments to find a Api_call
     * @example
     * // Get one Api_call
     * const api_call = await prisma.api_call.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends api_callFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, api_callFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__api_callClient<
      $Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Api_call that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callFindFirstArgs} args - Arguments to find a Api_call
     * @example
     * // Get one Api_call
     * const api_call = await prisma.api_call.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends api_callFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, api_callFindFirstArgs<ExtArgs>>,
    ): Prisma__api_callClient<
      $Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Api_call that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callFindFirstOrThrowArgs} args - Arguments to find a Api_call
     * @example
     * // Get one Api_call
     * const api_call = await prisma.api_call.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends api_callFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, api_callFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__api_callClient<
      $Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Api_calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_calls
     * const api_calls = await prisma.api_call.findMany()
     *
     * // Get first 10 Api_calls
     * const api_calls = await prisma.api_call.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const api_callWithIdOnly = await prisma.api_call.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends api_callFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, api_callFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Api_call.
     * @param {api_callCreateArgs} args - Arguments to create a Api_call.
     * @example
     * // Create one Api_call
     * const Api_call = await prisma.api_call.create({
     *   data: {
     *     // ... data to create a Api_call
     *   }
     * })
     *
     **/
    create<T extends api_callCreateArgs<ExtArgs>>(
      args: SelectSubset<T, api_callCreateArgs<ExtArgs>>,
    ): Prisma__api_callClient<$Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Api_calls.
     *     @param {api_callCreateManyArgs} args - Arguments to create many Api_calls.
     *     @example
     *     // Create many Api_calls
     *     const api_call = await prisma.api_call.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends api_callCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, api_callCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Api_call.
     * @param {api_callDeleteArgs} args - Arguments to delete one Api_call.
     * @example
     * // Delete one Api_call
     * const Api_call = await prisma.api_call.delete({
     *   where: {
     *     // ... filter to delete one Api_call
     *   }
     * })
     *
     **/
    delete<T extends api_callDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, api_callDeleteArgs<ExtArgs>>,
    ): Prisma__api_callClient<$Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Api_call.
     * @param {api_callUpdateArgs} args - Arguments to update one Api_call.
     * @example
     * // Update one Api_call
     * const api_call = await prisma.api_call.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends api_callUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, api_callUpdateArgs<ExtArgs>>,
    ): Prisma__api_callClient<$Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Api_calls.
     * @param {api_callDeleteManyArgs} args - Arguments to filter Api_calls to delete.
     * @example
     * // Delete a few Api_calls
     * const { count } = await prisma.api_call.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends api_callDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, api_callDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Api_calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_calls
     * const api_call = await prisma.api_call.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends api_callUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, api_callUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Api_call.
     * @param {api_callUpsertArgs} args - Arguments to update or create a Api_call.
     * @example
     * // Update or create a Api_call
     * const api_call = await prisma.api_call.upsert({
     *   create: {
     *     // ... data to create a Api_call
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_call we want to update
     *   }
     * })
     **/
    upsert<T extends api_callUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, api_callUpsertArgs<ExtArgs>>,
    ): Prisma__api_callClient<$Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Api_calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callCountArgs} args - Arguments to filter Api_calls to count.
     * @example
     * // Count the number of Api_calls
     * const count = await prisma.api_call.count({
     *   where: {
     *     // ... the filter for the Api_calls we want to count
     *   }
     * })
     **/
    count<T extends api_callCountArgs>(
      args?: Subset<T, api_callCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_callCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Api_call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_callAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Api_callAggregateArgs>(
      args: Subset<T, Api_callAggregateArgs>,
    ): Prisma.PrismaPromise<GetApi_callAggregateType<T>>;

    /**
     * Group by Api_call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends api_callGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_callGroupByArgs['orderBy'] }
        : { orderBy?: api_callGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, api_callGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApi_callGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the api_call model
     */
    readonly fields: api_callFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_call.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_callClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    prompt<T extends promptDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, promptDefaultArgs<ExtArgs>>,
    ): Prisma__promptClient<
      $Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    request<T extends api_call$requestArgs<ExtArgs> = {}>(
      args?: Subset<T, api_call$requestArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'findMany'> | Null>;

    response<T extends api_call$responseArgs<ExtArgs> = {}>(
      args?: Subset<T, api_call$responseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the api_call model
   */
  interface api_callFieldRefs {
    readonly id: FieldRef<'api_call', 'String'>;
    readonly prompt_id: FieldRef<'api_call', 'String'>;
    readonly created_at: FieldRef<'api_call', 'DateTime'>;
    readonly updated_at: FieldRef<'api_call', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * api_call findUnique
   */
  export type api_callFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * Filter, which api_call to fetch.
     */
    where: api_callWhereUniqueInput;
  };

  /**
   * api_call findUniqueOrThrow
   */
  export type api_callFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * Filter, which api_call to fetch.
     */
    where: api_callWhereUniqueInput;
  };

  /**
   * api_call findFirst
   */
  export type api_callFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * Filter, which api_call to fetch.
     */
    where?: api_callWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_calls to fetch.
     */
    orderBy?: api_callOrderByWithRelationInput | api_callOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for api_calls.
     */
    cursor?: api_callWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_calls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_calls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of api_calls.
     */
    distinct?: Api_callScalarFieldEnum | Api_callScalarFieldEnum[];
  };

  /**
   * api_call findFirstOrThrow
   */
  export type api_callFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * Filter, which api_call to fetch.
     */
    where?: api_callWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_calls to fetch.
     */
    orderBy?: api_callOrderByWithRelationInput | api_callOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for api_calls.
     */
    cursor?: api_callWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_calls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_calls.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of api_calls.
     */
    distinct?: Api_callScalarFieldEnum | Api_callScalarFieldEnum[];
  };

  /**
   * api_call findMany
   */
  export type api_callFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * Filter, which api_calls to fetch.
     */
    where?: api_callWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_calls to fetch.
     */
    orderBy?: api_callOrderByWithRelationInput | api_callOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing api_calls.
     */
    cursor?: api_callWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_calls from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_calls.
     */
    skip?: number;
    distinct?: Api_callScalarFieldEnum | Api_callScalarFieldEnum[];
  };

  /**
   * api_call create
   */
  export type api_callCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * The data needed to create a api_call.
     */
    data: XOR<api_callCreateInput, api_callUncheckedCreateInput>;
  };

  /**
   * api_call createMany
   */
  export type api_callCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_calls.
     */
    data: api_callCreateManyInput | api_callCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * api_call update
   */
  export type api_callUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * The data needed to update a api_call.
     */
    data: XOR<api_callUpdateInput, api_callUncheckedUpdateInput>;
    /**
     * Choose, which api_call to update.
     */
    where: api_callWhereUniqueInput;
  };

  /**
   * api_call updateMany
   */
  export type api_callUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_calls.
     */
    data: XOR<api_callUpdateManyMutationInput, api_callUncheckedUpdateManyInput>;
    /**
     * Filter which api_calls to update
     */
    where?: api_callWhereInput;
  };

  /**
   * api_call upsert
   */
  export type api_callUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * The filter to search for the api_call to update in case it exists.
     */
    where: api_callWhereUniqueInput;
    /**
     * In case the api_call found by the `where` argument doesn't exist, create a new api_call with this data.
     */
    create: XOR<api_callCreateInput, api_callUncheckedCreateInput>;
    /**
     * In case the api_call was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_callUpdateInput, api_callUncheckedUpdateInput>;
  };

  /**
   * api_call delete
   */
  export type api_callDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    /**
     * Filter which api_call to delete.
     */
    where: api_callWhereUniqueInput;
  };

  /**
   * api_call deleteMany
   */
  export type api_callDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_calls to delete
     */
    where?: api_callWhereInput;
  };

  /**
   * api_call.request
   */
  export type api_call$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    where?: requestWhereInput;
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[];
    cursor?: requestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[];
  };

  /**
   * api_call.response
   */
  export type api_call$responseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    where?: responseWhereInput;
    orderBy?: responseOrderByWithRelationInput | responseOrderByWithRelationInput[];
    cursor?: responseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[];
  };

  /**
   * api_call without action
   */
  export type api_callDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    image: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    image: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      image?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | company$userArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    image?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | company$userArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        image: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends company$userArgs<ExtArgs> = {}>(
      args?: Subset<T, company$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly image: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.user
   */
  export type company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null;
    _min: PromptMinAggregateOutputType | null;
    _max: PromptMaxAggregateOutputType | null;
  };

  export type PromptMinAggregateOutputType = {
    id: string | null;
    message: string | null;
    options: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PromptMaxAggregateOutputType = {
    id: string | null;
    message: string | null;
    options: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PromptCountAggregateOutputType = {
    id: number;
    message: number;
    options: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PromptMinAggregateInputType = {
    id?: true;
    message?: true;
    options?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PromptMaxAggregateInputType = {
    id?: true;
    message?: true;
    options?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PromptCountAggregateInputType = {
    id?: true;
    message?: true;
    options?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prompt to aggregate.
     */
    where?: promptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prompts to fetch.
     */
    orderBy?: promptOrderByWithRelationInput | promptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: promptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prompts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prompts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned prompts
     **/
    _count?: true | PromptCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PromptMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PromptMaxAggregateInputType;
  };

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
    [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>;
  };

  export type promptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: promptWhereInput;
    orderBy?: promptOrderByWithAggregationInput | promptOrderByWithAggregationInput[];
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum;
    having?: promptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PromptCountAggregateInputType | true;
    _min?: PromptMinAggregateInputType;
    _max?: PromptMaxAggregateInputType;
  };

  export type PromptGroupByOutputType = {
    id: string;
    message: string;
    options: string;
    created_at: Date;
    updated_at: Date;
    _count: PromptCountAggregateOutputType | null;
    _min: PromptMinAggregateOutputType | null;
    _max: PromptMaxAggregateOutputType | null;
  };

  type GetPromptGroupByPayload<T extends promptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PromptGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
          : GetScalarType<T[P], PromptGroupByOutputType[P]>;
      }
    >
  >;

  export type promptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      message?: boolean;
      options?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      api_call?: boolean | prompt$api_callArgs<ExtArgs>;
      _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['prompt']
  >;

  export type promptSelectScalar = {
    id?: boolean;
    message?: boolean;
    options?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type promptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_call?: boolean | prompt$api_callArgs<ExtArgs>;
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $promptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'prompt';
    objects: {
      api_call: Prisma.$api_callPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        message: string;
        options: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['prompt']
    >;
    composites: {};
  };

  type promptGetPayload<S extends boolean | null | undefined | promptDefaultArgs> = $Result.GetResult<
    Prisma.$promptPayload,
    S
  >;

  type promptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    promptFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PromptCountAggregateInputType | true;
  };

  export interface promptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prompt']; meta: { name: 'prompt' } };
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {promptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends promptFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, promptFindUniqueArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Prompt that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {promptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends promptFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, promptFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends promptFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, promptFindFirstArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends promptFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, promptFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promptFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     *
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends promptFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, promptFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Prompt.
     * @param {promptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     *
     **/
    create<T extends promptCreateArgs<ExtArgs>>(
      args: SelectSubset<T, promptCreateArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Prompts.
     *     @param {promptCreateManyArgs} args - Arguments to create many Prompts.
     *     @example
     *     // Create many Prompts
     *     const prompt = await prisma.prompt.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends promptCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, promptCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Prompt.
     * @param {promptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     *
     **/
    delete<T extends promptDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, promptDeleteArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Prompt.
     * @param {promptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends promptUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, promptUpdateArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Prompts.
     * @param {promptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends promptDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, promptDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends promptUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, promptUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Prompt.
     * @param {promptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     **/
    upsert<T extends promptUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, promptUpsertArgs<ExtArgs>>,
    ): Prisma__promptClient<$Result.GetResult<Prisma.$promptPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
     **/
    count<T extends promptCountArgs>(
      args?: Subset<T, promptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PromptAggregateArgs>(
      args: Subset<T, PromptAggregateArgs>,
    ): Prisma.PrismaPromise<GetPromptAggregateType<T>>;

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends promptGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: promptGroupByArgs['orderBy'] }
        : { orderBy?: promptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, promptGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the prompt model
     */
    readonly fields: promptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__promptClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    api_call<T extends prompt$api_callArgs<ExtArgs> = {}>(
      args?: Subset<T, prompt$api_callArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the prompt model
   */
  interface promptFieldRefs {
    readonly id: FieldRef<'prompt', 'String'>;
    readonly message: FieldRef<'prompt', 'String'>;
    readonly options: FieldRef<'prompt', 'String'>;
    readonly created_at: FieldRef<'prompt', 'DateTime'>;
    readonly updated_at: FieldRef<'prompt', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * prompt findUnique
   */
  export type promptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * Filter, which prompt to fetch.
     */
    where: promptWhereUniqueInput;
  };

  /**
   * prompt findUniqueOrThrow
   */
  export type promptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * Filter, which prompt to fetch.
     */
    where: promptWhereUniqueInput;
  };

  /**
   * prompt findFirst
   */
  export type promptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * Filter, which prompt to fetch.
     */
    where?: promptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prompts to fetch.
     */
    orderBy?: promptOrderByWithRelationInput | promptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prompts.
     */
    cursor?: promptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prompts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prompts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[];
  };

  /**
   * prompt findFirstOrThrow
   */
  export type promptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * Filter, which prompt to fetch.
     */
    where?: promptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prompts to fetch.
     */
    orderBy?: promptOrderByWithRelationInput | promptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prompts.
     */
    cursor?: promptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prompts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prompts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[];
  };

  /**
   * prompt findMany
   */
  export type promptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * Filter, which prompts to fetch.
     */
    where?: promptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prompts to fetch.
     */
    orderBy?: promptOrderByWithRelationInput | promptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing prompts.
     */
    cursor?: promptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prompts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prompts.
     */
    skip?: number;
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[];
  };

  /**
   * prompt create
   */
  export type promptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * The data needed to create a prompt.
     */
    data: XOR<promptCreateInput, promptUncheckedCreateInput>;
  };

  /**
   * prompt createMany
   */
  export type promptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prompts.
     */
    data: promptCreateManyInput | promptCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * prompt update
   */
  export type promptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * The data needed to update a prompt.
     */
    data: XOR<promptUpdateInput, promptUncheckedUpdateInput>;
    /**
     * Choose, which prompt to update.
     */
    where: promptWhereUniqueInput;
  };

  /**
   * prompt updateMany
   */
  export type promptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prompts.
     */
    data: XOR<promptUpdateManyMutationInput, promptUncheckedUpdateManyInput>;
    /**
     * Filter which prompts to update
     */
    where?: promptWhereInput;
  };

  /**
   * prompt upsert
   */
  export type promptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * The filter to search for the prompt to update in case it exists.
     */
    where: promptWhereUniqueInput;
    /**
     * In case the prompt found by the `where` argument doesn't exist, create a new prompt with this data.
     */
    create: XOR<promptCreateInput, promptUncheckedCreateInput>;
    /**
     * In case the prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<promptUpdateInput, promptUncheckedUpdateInput>;
  };

  /**
   * prompt delete
   */
  export type promptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
    /**
     * Filter which prompt to delete.
     */
    where: promptWhereUniqueInput;
  };

  /**
   * prompt deleteMany
   */
  export type promptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prompts to delete
     */
    where?: promptWhereInput;
  };

  /**
   * prompt.api_call
   */
  export type prompt$api_callArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_call
     */
    select?: api_callSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: api_callInclude<ExtArgs> | null;
    where?: api_callWhereInput;
    orderBy?: api_callOrderByWithRelationInput | api_callOrderByWithRelationInput[];
    cursor?: api_callWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Api_callScalarFieldEnum | Api_callScalarFieldEnum[];
  };

  /**
   * prompt without action
   */
  export type promptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prompt
     */
    select?: promptSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: promptInclude<ExtArgs> | null;
  };

  /**
   * Model request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null;
    _min: RequestMinAggregateOutputType | null;
    _max: RequestMaxAggregateOutputType | null;
  };

  export type RequestMinAggregateOutputType = {
    id: string | null;
    api_call_id: string | null;
    variables: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RequestMaxAggregateOutputType = {
    id: string | null;
    api_call_id: string | null;
    variables: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RequestCountAggregateOutputType = {
    id: number;
    api_call_id: number;
    variables: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RequestMinAggregateInputType = {
    id?: true;
    api_call_id?: true;
    variables?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RequestMaxAggregateInputType = {
    id?: true;
    api_call_id?: true;
    variables?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RequestCountAggregateInputType = {
    id?: true;
    api_call_id?: true;
    variables?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which request to aggregate.
     */
    where?: requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` requests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned requests
     **/
    _count?: true | RequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RequestMaxAggregateInputType;
  };

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
    [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>;
  };

  export type requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestWhereInput;
    orderBy?: requestOrderByWithAggregationInput | requestOrderByWithAggregationInput[];
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum;
    having?: requestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RequestCountAggregateInputType | true;
    _min?: RequestMinAggregateInputType;
    _max?: RequestMaxAggregateInputType;
  };

  export type RequestGroupByOutputType = {
    id: string;
    api_call_id: string;
    variables: string | null;
    created_at: Date;
    updated_at: Date;
    _count: RequestCountAggregateOutputType | null;
    _min: RequestMinAggregateOutputType | null;
    _max: RequestMaxAggregateOutputType | null;
  };

  type GetRequestGroupByPayload<T extends requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RequestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
          : GetScalarType<T[P], RequestGroupByOutputType[P]>;
      }
    >
  >;

  export type requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      api_call_id?: boolean;
      variables?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      api_call?: boolean | api_callDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['request']
  >;

  export type requestSelectScalar = {
    id?: boolean;
    api_call_id?: boolean;
    variables?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_call?: boolean | api_callDefaultArgs<ExtArgs>;
  };

  export type $requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'request';
    objects: {
      api_call: Prisma.$api_callPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        api_call_id: string;
        variables: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['request']
    >;
    composites: {};
  };

  type requestGetPayload<S extends boolean | null | undefined | requestDefaultArgs> = $Result.GetResult<
    Prisma.$requestPayload,
    S
  >;

  type requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    requestFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RequestCountAggregateInputType | true;
  };

  export interface requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['request']; meta: { name: 'request' } };
    /**
     * Find zero or one Request that matches the filter.
     * @param {requestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends requestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, requestFindUniqueArgs<ExtArgs>>,
    ): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Request that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {requestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends requestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, requestFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__requestClient<
      $Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends requestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, requestFindFirstArgs<ExtArgs>>,
    ): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends requestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, requestFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     *
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends requestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, requestFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Request.
     * @param {requestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     *
     **/
    create<T extends requestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, requestCreateArgs<ExtArgs>>,
    ): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Requests.
     *     @param {requestCreateManyArgs} args - Arguments to create many Requests.
     *     @example
     *     // Create many Requests
     *     const request = await prisma.request.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends requestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, requestCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Request.
     * @param {requestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     *
     **/
    delete<T extends requestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, requestDeleteArgs<ExtArgs>>,
    ): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Request.
     * @param {requestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends requestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, requestUpdateArgs<ExtArgs>>,
    ): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Requests.
     * @param {requestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends requestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, requestDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends requestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, requestUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Request.
     * @param {requestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     **/
    upsert<T extends requestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, requestUpsertArgs<ExtArgs>>,
    ): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
     **/
    count<T extends requestCountArgs>(
      args?: Subset<T, requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RequestAggregateArgs>(
      args: Subset<T, RequestAggregateArgs>,
    ): Prisma.PrismaPromise<GetRequestAggregateType<T>>;

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends requestGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: requestGroupByArgs['orderBy'] }
        : { orderBy?: requestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, requestGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the request model
     */
    readonly fields: requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__requestClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    api_call<T extends api_callDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, api_callDefaultArgs<ExtArgs>>,
    ): Prisma__api_callClient<
      $Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the request model
   */
  interface requestFieldRefs {
    readonly id: FieldRef<'request', 'String'>;
    readonly api_call_id: FieldRef<'request', 'String'>;
    readonly variables: FieldRef<'request', 'String'>;
    readonly created_at: FieldRef<'request', 'DateTime'>;
    readonly updated_at: FieldRef<'request', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * request findUnique
   */
  export type requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * Filter, which request to fetch.
     */
    where: requestWhereUniqueInput;
  };

  /**
   * request findUniqueOrThrow
   */
  export type requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * Filter, which request to fetch.
     */
    where: requestWhereUniqueInput;
  };

  /**
   * request findFirst
   */
  export type requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * Filter, which request to fetch.
     */
    where?: requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for requests.
     */
    cursor?: requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` requests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[];
  };

  /**
   * request findFirstOrThrow
   */
  export type requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * Filter, which request to fetch.
     */
    where?: requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for requests.
     */
    cursor?: requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` requests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[];
  };

  /**
   * request findMany
   */
  export type requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * Filter, which requests to fetch.
     */
    where?: requestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing requests.
     */
    cursor?: requestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` requests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` requests.
     */
    skip?: number;
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[];
  };

  /**
   * request create
   */
  export type requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * The data needed to create a request.
     */
    data: XOR<requestCreateInput, requestUncheckedCreateInput>;
  };

  /**
   * request createMany
   */
  export type requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many requests.
     */
    data: requestCreateManyInput | requestCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * request update
   */
  export type requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * The data needed to update a request.
     */
    data: XOR<requestUpdateInput, requestUncheckedUpdateInput>;
    /**
     * Choose, which request to update.
     */
    where: requestWhereUniqueInput;
  };

  /**
   * request updateMany
   */
  export type requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update requests.
     */
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyInput>;
    /**
     * Filter which requests to update
     */
    where?: requestWhereInput;
  };

  /**
   * request upsert
   */
  export type requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * The filter to search for the request to update in case it exists.
     */
    where: requestWhereUniqueInput;
    /**
     * In case the request found by the `where` argument doesn't exist, create a new request with this data.
     */
    create: XOR<requestCreateInput, requestUncheckedCreateInput>;
    /**
     * In case the request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<requestUpdateInput, requestUncheckedUpdateInput>;
  };

  /**
   * request delete
   */
  export type requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
    /**
     * Filter which request to delete.
     */
    where: requestWhereUniqueInput;
  };

  /**
   * request deleteMany
   */
  export type requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which requests to delete
     */
    where?: requestWhereInput;
  };

  /**
   * request without action
   */
  export type requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: requestInclude<ExtArgs> | null;
  };

  /**
   * Model response
   */

  export type AggregateResponse = {
    _count: ResponseCountAggregateOutputType | null;
    _min: ResponseMinAggregateOutputType | null;
    _max: ResponseMaxAggregateOutputType | null;
  };

  export type ResponseMinAggregateOutputType = {
    id: string | null;
    api_call_id: string | null;
    data: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ResponseMaxAggregateOutputType = {
    id: string | null;
    api_call_id: string | null;
    data: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ResponseCountAggregateOutputType = {
    id: number;
    api_call_id: number;
    data: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ResponseMinAggregateInputType = {
    id?: true;
    api_call_id?: true;
    data?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ResponseMaxAggregateInputType = {
    id?: true;
    api_call_id?: true;
    data?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ResponseCountAggregateInputType = {
    id?: true;
    api_call_id?: true;
    data?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which response to aggregate.
     */
    where?: responseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of responses to fetch.
     */
    orderBy?: responseOrderByWithRelationInput | responseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: responseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` responses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned responses
     **/
    _count?: true | ResponseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ResponseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ResponseMaxAggregateInputType;
  };

  export type GetResponseAggregateType<T extends ResponseAggregateArgs> = {
    [P in keyof T & keyof AggregateResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponse[P]>
      : GetScalarType<T[P], AggregateResponse[P]>;
  };

  export type responseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: responseWhereInput;
    orderBy?: responseOrderByWithAggregationInput | responseOrderByWithAggregationInput[];
    by: ResponseScalarFieldEnum[] | ResponseScalarFieldEnum;
    having?: responseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResponseCountAggregateInputType | true;
    _min?: ResponseMinAggregateInputType;
    _max?: ResponseMaxAggregateInputType;
  };

  export type ResponseGroupByOutputType = {
    id: string;
    api_call_id: string;
    data: string;
    created_at: Date;
    updated_at: Date;
    _count: ResponseCountAggregateOutputType | null;
    _min: ResponseMinAggregateOutputType | null;
    _max: ResponseMaxAggregateOutputType | null;
  };

  type GetResponseGroupByPayload<T extends responseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ResponseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ResponseGroupByOutputType[P]>
          : GetScalarType<T[P], ResponseGroupByOutputType[P]>;
      }
    >
  >;

  export type responseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        api_call_id?: boolean;
        data?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        api_call?: boolean | api_callDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['response']
    >;

  export type responseSelectScalar = {
    id?: boolean;
    api_call_id?: boolean;
    data?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type responseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_call?: boolean | api_callDefaultArgs<ExtArgs>;
  };

  export type $responsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'response';
    objects: {
      api_call: Prisma.$api_callPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        api_call_id: string;
        data: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['response']
    >;
    composites: {};
  };

  type responseGetPayload<S extends boolean | null | undefined | responseDefaultArgs> = $Result.GetResult<
    Prisma.$responsePayload,
    S
  >;

  type responseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    responseFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ResponseCountAggregateInputType | true;
  };

  export interface responseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['response']; meta: { name: 'response' } };
    /**
     * Find zero or one Response that matches the filter.
     * @param {responseFindUniqueArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends responseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, responseFindUniqueArgs<ExtArgs>>,
    ): Prisma__responseClient<
      $Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Response that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {responseFindUniqueOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends responseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, responseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__responseClient<
      $Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responseFindFirstArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends responseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, responseFindFirstArgs<ExtArgs>>,
    ): Prisma__responseClient<
      $Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responseFindFirstOrThrowArgs} args - Arguments to find a Response
     * @example
     * // Get one Response
     * const response = await prisma.response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends responseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, responseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__responseClient<
      $Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responses
     * const responses = await prisma.response.findMany()
     *
     * // Get first 10 Responses
     * const responses = await prisma.response.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const responseWithIdOnly = await prisma.response.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends responseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, responseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Response.
     * @param {responseCreateArgs} args - Arguments to create a Response.
     * @example
     * // Create one Response
     * const Response = await prisma.response.create({
     *   data: {
     *     // ... data to create a Response
     *   }
     * })
     *
     **/
    create<T extends responseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, responseCreateArgs<ExtArgs>>,
    ): Prisma__responseClient<$Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Responses.
     *     @param {responseCreateManyArgs} args - Arguments to create many Responses.
     *     @example
     *     // Create many Responses
     *     const response = await prisma.response.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends responseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, responseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Response.
     * @param {responseDeleteArgs} args - Arguments to delete one Response.
     * @example
     * // Delete one Response
     * const Response = await prisma.response.delete({
     *   where: {
     *     // ... filter to delete one Response
     *   }
     * })
     *
     **/
    delete<T extends responseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, responseDeleteArgs<ExtArgs>>,
    ): Prisma__responseClient<$Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Response.
     * @param {responseUpdateArgs} args - Arguments to update one Response.
     * @example
     * // Update one Response
     * const response = await prisma.response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends responseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, responseUpdateArgs<ExtArgs>>,
    ): Prisma__responseClient<$Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Responses.
     * @param {responseDeleteManyArgs} args - Arguments to filter Responses to delete.
     * @example
     * // Delete a few Responses
     * const { count } = await prisma.response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends responseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, responseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responses
     * const response = await prisma.response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends responseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, responseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Response.
     * @param {responseUpsertArgs} args - Arguments to update or create a Response.
     * @example
     * // Update or create a Response
     * const response = await prisma.response.upsert({
     *   create: {
     *     // ... data to create a Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Response we want to update
     *   }
     * })
     **/
    upsert<T extends responseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, responseUpsertArgs<ExtArgs>>,
    ): Prisma__responseClient<$Result.GetResult<Prisma.$responsePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responseCountArgs} args - Arguments to filter Responses to count.
     * @example
     * // Count the number of Responses
     * const count = await prisma.response.count({
     *   where: {
     *     // ... the filter for the Responses we want to count
     *   }
     * })
     **/
    count<T extends responseCountArgs>(
      args?: Subset<T, responseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ResponseAggregateArgs>(
      args: Subset<T, ResponseAggregateArgs>,
    ): Prisma.PrismaPromise<GetResponseAggregateType<T>>;

    /**
     * Group by Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {responseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends responseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: responseGroupByArgs['orderBy'] }
        : { orderBy?: responseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, responseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the response model
     */
    readonly fields: responseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__responseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    api_call<T extends api_callDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, api_callDefaultArgs<ExtArgs>>,
    ): Prisma__api_callClient<
      $Result.GetResult<Prisma.$api_callPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the response model
   */
  interface responseFieldRefs {
    readonly id: FieldRef<'response', 'String'>;
    readonly api_call_id: FieldRef<'response', 'String'>;
    readonly data: FieldRef<'response', 'String'>;
    readonly created_at: FieldRef<'response', 'DateTime'>;
    readonly updated_at: FieldRef<'response', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * response findUnique
   */
  export type responseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * Filter, which response to fetch.
     */
    where: responseWhereUniqueInput;
  };

  /**
   * response findUniqueOrThrow
   */
  export type responseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * Filter, which response to fetch.
     */
    where: responseWhereUniqueInput;
  };

  /**
   * response findFirst
   */
  export type responseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * Filter, which response to fetch.
     */
    where?: responseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of responses to fetch.
     */
    orderBy?: responseOrderByWithRelationInput | responseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for responses.
     */
    cursor?: responseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` responses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[];
  };

  /**
   * response findFirstOrThrow
   */
  export type responseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * Filter, which response to fetch.
     */
    where?: responseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of responses to fetch.
     */
    orderBy?: responseOrderByWithRelationInput | responseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for responses.
     */
    cursor?: responseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` responses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of responses.
     */
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[];
  };

  /**
   * response findMany
   */
  export type responseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * Filter, which responses to fetch.
     */
    where?: responseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of responses to fetch.
     */
    orderBy?: responseOrderByWithRelationInput | responseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing responses.
     */
    cursor?: responseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` responses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` responses.
     */
    skip?: number;
    distinct?: ResponseScalarFieldEnum | ResponseScalarFieldEnum[];
  };

  /**
   * response create
   */
  export type responseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * The data needed to create a response.
     */
    data: XOR<responseCreateInput, responseUncheckedCreateInput>;
  };

  /**
   * response createMany
   */
  export type responseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many responses.
     */
    data: responseCreateManyInput | responseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * response update
   */
  export type responseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * The data needed to update a response.
     */
    data: XOR<responseUpdateInput, responseUncheckedUpdateInput>;
    /**
     * Choose, which response to update.
     */
    where: responseWhereUniqueInput;
  };

  /**
   * response updateMany
   */
  export type responseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update responses.
     */
    data: XOR<responseUpdateManyMutationInput, responseUncheckedUpdateManyInput>;
    /**
     * Filter which responses to update
     */
    where?: responseWhereInput;
  };

  /**
   * response upsert
   */
  export type responseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * The filter to search for the response to update in case it exists.
     */
    where: responseWhereUniqueInput;
    /**
     * In case the response found by the `where` argument doesn't exist, create a new response with this data.
     */
    create: XOR<responseCreateInput, responseUncheckedCreateInput>;
    /**
     * In case the response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<responseUpdateInput, responseUncheckedUpdateInput>;
  };

  /**
   * response delete
   */
  export type responseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
    /**
     * Filter which response to delete.
     */
    where: responseWhereUniqueInput;
  };

  /**
   * response deleteMany
   */
  export type responseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which responses to delete
     */
    where?: responseWhereInput;
  };

  /**
   * response without action
   */
  export type responseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the response
     */
    select?: responseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: responseInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    company_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      company_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    company_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        company_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly company_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Api_callScalarFieldEnum: {
    id: 'id';
    prompt_id: 'prompt_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Api_callScalarFieldEnum = (typeof Api_callScalarFieldEnum)[keyof typeof Api_callScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    image: 'image';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const PromptScalarFieldEnum: {
    id: 'id';
    message: 'message';
    options: 'options';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum];

  export const RequestScalarFieldEnum: {
    id: 'id';
    api_call_id: 'api_call_id';
    variables: 'variables';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum];

  export const ResponseScalarFieldEnum: {
    id: 'id';
    api_call_id: 'api_call_id';
    data: 'data';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ResponseScalarFieldEnum = (typeof ResponseScalarFieldEnum)[keyof typeof ResponseScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    company_id: 'company_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type api_callWhereInput = {
    AND?: api_callWhereInput | api_callWhereInput[];
    OR?: api_callWhereInput[];
    NOT?: api_callWhereInput | api_callWhereInput[];
    id?: UuidFilter<'api_call'> | string;
    prompt_id?: UuidFilter<'api_call'> | string;
    created_at?: DateTimeFilter<'api_call'> | Date | string;
    updated_at?: DateTimeFilter<'api_call'> | Date | string;
    prompt?: XOR<PromptRelationFilter, promptWhereInput>;
    request?: RequestListRelationFilter;
    response?: ResponseListRelationFilter;
  };

  export type api_callOrderByWithRelationInput = {
    id?: SortOrder;
    prompt_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    prompt?: promptOrderByWithRelationInput;
    request?: requestOrderByRelationAggregateInput;
    response?: responseOrderByRelationAggregateInput;
  };

  export type api_callWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: api_callWhereInput | api_callWhereInput[];
      OR?: api_callWhereInput[];
      NOT?: api_callWhereInput | api_callWhereInput[];
      prompt_id?: UuidFilter<'api_call'> | string;
      created_at?: DateTimeFilter<'api_call'> | Date | string;
      updated_at?: DateTimeFilter<'api_call'> | Date | string;
      prompt?: XOR<PromptRelationFilter, promptWhereInput>;
      request?: RequestListRelationFilter;
      response?: ResponseListRelationFilter;
    },
    'id'
  >;

  export type api_callOrderByWithAggregationInput = {
    id?: SortOrder;
    prompt_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: api_callCountOrderByAggregateInput;
    _max?: api_callMaxOrderByAggregateInput;
    _min?: api_callMinOrderByAggregateInput;
  };

  export type api_callScalarWhereWithAggregatesInput = {
    AND?: api_callScalarWhereWithAggregatesInput | api_callScalarWhereWithAggregatesInput[];
    OR?: api_callScalarWhereWithAggregatesInput[];
    NOT?: api_callScalarWhereWithAggregatesInput | api_callScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'api_call'> | string;
    prompt_id?: UuidWithAggregatesFilter<'api_call'> | string;
    created_at?: DateTimeWithAggregatesFilter<'api_call'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'api_call'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      image?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    image?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
  };

  export type promptWhereInput = {
    AND?: promptWhereInput | promptWhereInput[];
    OR?: promptWhereInput[];
    NOT?: promptWhereInput | promptWhereInput[];
    id?: UuidFilter<'prompt'> | string;
    message?: StringFilter<'prompt'> | string;
    options?: StringFilter<'prompt'> | string;
    created_at?: DateTimeFilter<'prompt'> | Date | string;
    updated_at?: DateTimeFilter<'prompt'> | Date | string;
    api_call?: Api_callListRelationFilter;
  };

  export type promptOrderByWithRelationInput = {
    id?: SortOrder;
    message?: SortOrder;
    options?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    api_call?: api_callOrderByRelationAggregateInput;
  };

  export type promptWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: promptWhereInput | promptWhereInput[];
      OR?: promptWhereInput[];
      NOT?: promptWhereInput | promptWhereInput[];
      message?: StringFilter<'prompt'> | string;
      options?: StringFilter<'prompt'> | string;
      created_at?: DateTimeFilter<'prompt'> | Date | string;
      updated_at?: DateTimeFilter<'prompt'> | Date | string;
      api_call?: Api_callListRelationFilter;
    },
    'id'
  >;

  export type promptOrderByWithAggregationInput = {
    id?: SortOrder;
    message?: SortOrder;
    options?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: promptCountOrderByAggregateInput;
    _max?: promptMaxOrderByAggregateInput;
    _min?: promptMinOrderByAggregateInput;
  };

  export type promptScalarWhereWithAggregatesInput = {
    AND?: promptScalarWhereWithAggregatesInput | promptScalarWhereWithAggregatesInput[];
    OR?: promptScalarWhereWithAggregatesInput[];
    NOT?: promptScalarWhereWithAggregatesInput | promptScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'prompt'> | string;
    message?: StringWithAggregatesFilter<'prompt'> | string;
    options?: StringWithAggregatesFilter<'prompt'> | string;
    created_at?: DateTimeWithAggregatesFilter<'prompt'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'prompt'> | Date | string;
  };

  export type requestWhereInput = {
    AND?: requestWhereInput | requestWhereInput[];
    OR?: requestWhereInput[];
    NOT?: requestWhereInput | requestWhereInput[];
    id?: UuidFilter<'request'> | string;
    api_call_id?: UuidFilter<'request'> | string;
    variables?: StringNullableFilter<'request'> | string | null;
    created_at?: DateTimeFilter<'request'> | Date | string;
    updated_at?: DateTimeFilter<'request'> | Date | string;
    api_call?: XOR<Api_callRelationFilter, api_callWhereInput>;
  };

  export type requestOrderByWithRelationInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    variables?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    api_call?: api_callOrderByWithRelationInput;
  };

  export type requestWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: requestWhereInput | requestWhereInput[];
      OR?: requestWhereInput[];
      NOT?: requestWhereInput | requestWhereInput[];
      api_call_id?: UuidFilter<'request'> | string;
      variables?: StringNullableFilter<'request'> | string | null;
      created_at?: DateTimeFilter<'request'> | Date | string;
      updated_at?: DateTimeFilter<'request'> | Date | string;
      api_call?: XOR<Api_callRelationFilter, api_callWhereInput>;
    },
    'id'
  >;

  export type requestOrderByWithAggregationInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    variables?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: requestCountOrderByAggregateInput;
    _max?: requestMaxOrderByAggregateInput;
    _min?: requestMinOrderByAggregateInput;
  };

  export type requestScalarWhereWithAggregatesInput = {
    AND?: requestScalarWhereWithAggregatesInput | requestScalarWhereWithAggregatesInput[];
    OR?: requestScalarWhereWithAggregatesInput[];
    NOT?: requestScalarWhereWithAggregatesInput | requestScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'request'> | string;
    api_call_id?: UuidWithAggregatesFilter<'request'> | string;
    variables?: StringNullableWithAggregatesFilter<'request'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'request'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'request'> | Date | string;
  };

  export type responseWhereInput = {
    AND?: responseWhereInput | responseWhereInput[];
    OR?: responseWhereInput[];
    NOT?: responseWhereInput | responseWhereInput[];
    id?: UuidFilter<'response'> | string;
    api_call_id?: UuidFilter<'response'> | string;
    data?: StringFilter<'response'> | string;
    created_at?: DateTimeFilter<'response'> | Date | string;
    updated_at?: DateTimeFilter<'response'> | Date | string;
    api_call?: XOR<Api_callRelationFilter, api_callWhereInput>;
  };

  export type responseOrderByWithRelationInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    data?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    api_call?: api_callOrderByWithRelationInput;
  };

  export type responseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: responseWhereInput | responseWhereInput[];
      OR?: responseWhereInput[];
      NOT?: responseWhereInput | responseWhereInput[];
      api_call_id?: UuidFilter<'response'> | string;
      data?: StringFilter<'response'> | string;
      created_at?: DateTimeFilter<'response'> | Date | string;
      updated_at?: DateTimeFilter<'response'> | Date | string;
      api_call?: XOR<Api_callRelationFilter, api_callWhereInput>;
    },
    'id'
  >;

  export type responseOrderByWithAggregationInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    data?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: responseCountOrderByAggregateInput;
    _max?: responseMaxOrderByAggregateInput;
    _min?: responseMinOrderByAggregateInput;
  };

  export type responseScalarWhereWithAggregatesInput = {
    AND?: responseScalarWhereWithAggregatesInput | responseScalarWhereWithAggregatesInput[];
    OR?: responseScalarWhereWithAggregatesInput[];
    NOT?: responseScalarWhereWithAggregatesInput | responseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'response'> | string;
    api_call_id?: UuidWithAggregatesFilter<'response'> | string;
    data?: StringWithAggregatesFilter<'response'> | string;
    created_at?: DateTimeWithAggregatesFilter<'response'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'response'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      company_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    company_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type api_callCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    prompt: promptCreateNestedOneWithoutApi_callInput;
    request?: requestCreateNestedManyWithoutApi_callInput;
    response?: responseCreateNestedManyWithoutApi_callInput;
  };

  export type api_callUncheckedCreateInput = {
    id?: string;
    prompt_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    request?: requestUncheckedCreateNestedManyWithoutApi_callInput;
    response?: responseUncheckedCreateNestedManyWithoutApi_callInput;
  };

  export type api_callUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    prompt?: promptUpdateOneRequiredWithoutApi_callNestedInput;
    request?: requestUpdateManyWithoutApi_callNestedInput;
    response?: responseUpdateManyWithoutApi_callNestedInput;
  };

  export type api_callUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    request?: requestUncheckedUpdateManyWithoutApi_callNestedInput;
    response?: responseUncheckedUpdateManyWithoutApi_callNestedInput;
  };

  export type api_callCreateManyInput = {
    id?: string;
    prompt_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type api_callUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type api_callUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type promptCreateInput = {
    id?: string;
    message: string;
    options: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    api_call?: api_callCreateNestedManyWithoutPromptInput;
  };

  export type promptUncheckedCreateInput = {
    id?: string;
    message: string;
    options: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    api_call?: api_callUncheckedCreateNestedManyWithoutPromptInput;
  };

  export type promptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    options?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    api_call?: api_callUpdateManyWithoutPromptNestedInput;
  };

  export type promptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    options?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    api_call?: api_callUncheckedUpdateManyWithoutPromptNestedInput;
  };

  export type promptCreateManyInput = {
    id?: string;
    message: string;
    options: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type promptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    options?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type promptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    options?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type requestCreateInput = {
    id?: string;
    variables?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    api_call: api_callCreateNestedOneWithoutRequestInput;
  };

  export type requestUncheckedCreateInput = {
    id?: string;
    api_call_id: string;
    variables?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type requestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    variables?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    api_call?: api_callUpdateOneRequiredWithoutRequestNestedInput;
  };

  export type requestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    api_call_id?: StringFieldUpdateOperationsInput | string;
    variables?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type requestCreateManyInput = {
    id?: string;
    api_call_id: string;
    variables?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type requestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    variables?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type requestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    api_call_id?: StringFieldUpdateOperationsInput | string;
    variables?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type responseCreateInput = {
    id?: string;
    data: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    api_call: api_callCreateNestedOneWithoutResponseInput;
  };

  export type responseUncheckedCreateInput = {
    id?: string;
    api_call_id: string;
    data: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type responseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    api_call?: api_callUpdateOneRequiredWithoutResponseNestedInput;
  };

  export type responseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    api_call_id?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type responseCreateManyInput = {
    id?: string;
    api_call_id: string;
    data: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type responseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type responseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    api_call_id?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PromptRelationFilter = {
    is?: promptWhereInput;
    isNot?: promptWhereInput;
  };

  export type RequestListRelationFilter = {
    every?: requestWhereInput;
    some?: requestWhereInput;
    none?: requestWhereInput;
  };

  export type ResponseListRelationFilter = {
    every?: responseWhereInput;
    some?: responseWhereInput;
    none?: responseWhereInput;
  };

  export type requestOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type responseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type api_callCountOrderByAggregateInput = {
    id?: SortOrder;
    prompt_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type api_callMaxOrderByAggregateInput = {
    id?: SortOrder;
    prompt_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type api_callMinOrderByAggregateInput = {
    id?: SortOrder;
    prompt_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type Api_callListRelationFilter = {
    every?: api_callWhereInput;
    some?: api_callWhereInput;
    none?: api_callWhereInput;
  };

  export type api_callOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type promptCountOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    options?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type promptMaxOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    options?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type promptMinOrderByAggregateInput = {
    id?: SortOrder;
    message?: SortOrder;
    options?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Api_callRelationFilter = {
    is?: api_callWhereInput;
    isNot?: api_callWhereInput;
  };

  export type requestCountOrderByAggregateInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    variables?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type requestMaxOrderByAggregateInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    variables?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type requestMinOrderByAggregateInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    variables?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type responseCountOrderByAggregateInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    data?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type responseMaxOrderByAggregateInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    data?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type responseMinOrderByAggregateInput = {
    id?: SortOrder;
    api_call_id?: SortOrder;
    data?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type CompanyNullableRelationFilter = {
    is?: companyWhereInput | null;
    isNot?: companyWhereInput | null;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type promptCreateNestedOneWithoutApi_callInput = {
    create?: XOR<promptCreateWithoutApi_callInput, promptUncheckedCreateWithoutApi_callInput>;
    connectOrCreate?: promptCreateOrConnectWithoutApi_callInput;
    connect?: promptWhereUniqueInput;
  };

  export type requestCreateNestedManyWithoutApi_callInput = {
    create?:
      | XOR<requestCreateWithoutApi_callInput, requestUncheckedCreateWithoutApi_callInput>
      | requestCreateWithoutApi_callInput[]
      | requestUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: requestCreateOrConnectWithoutApi_callInput | requestCreateOrConnectWithoutApi_callInput[];
    createMany?: requestCreateManyApi_callInputEnvelope;
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[];
  };

  export type responseCreateNestedManyWithoutApi_callInput = {
    create?:
      | XOR<responseCreateWithoutApi_callInput, responseUncheckedCreateWithoutApi_callInput>
      | responseCreateWithoutApi_callInput[]
      | responseUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: responseCreateOrConnectWithoutApi_callInput | responseCreateOrConnectWithoutApi_callInput[];
    createMany?: responseCreateManyApi_callInputEnvelope;
    connect?: responseWhereUniqueInput | responseWhereUniqueInput[];
  };

  export type requestUncheckedCreateNestedManyWithoutApi_callInput = {
    create?:
      | XOR<requestCreateWithoutApi_callInput, requestUncheckedCreateWithoutApi_callInput>
      | requestCreateWithoutApi_callInput[]
      | requestUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: requestCreateOrConnectWithoutApi_callInput | requestCreateOrConnectWithoutApi_callInput[];
    createMany?: requestCreateManyApi_callInputEnvelope;
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[];
  };

  export type responseUncheckedCreateNestedManyWithoutApi_callInput = {
    create?:
      | XOR<responseCreateWithoutApi_callInput, responseUncheckedCreateWithoutApi_callInput>
      | responseCreateWithoutApi_callInput[]
      | responseUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: responseCreateOrConnectWithoutApi_callInput | responseCreateOrConnectWithoutApi_callInput[];
    createMany?: responseCreateManyApi_callInputEnvelope;
    connect?: responseWhereUniqueInput | responseWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type promptUpdateOneRequiredWithoutApi_callNestedInput = {
    create?: XOR<promptCreateWithoutApi_callInput, promptUncheckedCreateWithoutApi_callInput>;
    connectOrCreate?: promptCreateOrConnectWithoutApi_callInput;
    upsert?: promptUpsertWithoutApi_callInput;
    connect?: promptWhereUniqueInput;
    update?: XOR<
      XOR<promptUpdateToOneWithWhereWithoutApi_callInput, promptUpdateWithoutApi_callInput>,
      promptUncheckedUpdateWithoutApi_callInput
    >;
  };

  export type requestUpdateManyWithoutApi_callNestedInput = {
    create?:
      | XOR<requestCreateWithoutApi_callInput, requestUncheckedCreateWithoutApi_callInput>
      | requestCreateWithoutApi_callInput[]
      | requestUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: requestCreateOrConnectWithoutApi_callInput | requestCreateOrConnectWithoutApi_callInput[];
    upsert?: requestUpsertWithWhereUniqueWithoutApi_callInput | requestUpsertWithWhereUniqueWithoutApi_callInput[];
    createMany?: requestCreateManyApi_callInputEnvelope;
    set?: requestWhereUniqueInput | requestWhereUniqueInput[];
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[];
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[];
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[];
    update?: requestUpdateWithWhereUniqueWithoutApi_callInput | requestUpdateWithWhereUniqueWithoutApi_callInput[];
    updateMany?: requestUpdateManyWithWhereWithoutApi_callInput | requestUpdateManyWithWhereWithoutApi_callInput[];
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[];
  };

  export type responseUpdateManyWithoutApi_callNestedInput = {
    create?:
      | XOR<responseCreateWithoutApi_callInput, responseUncheckedCreateWithoutApi_callInput>
      | responseCreateWithoutApi_callInput[]
      | responseUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: responseCreateOrConnectWithoutApi_callInput | responseCreateOrConnectWithoutApi_callInput[];
    upsert?: responseUpsertWithWhereUniqueWithoutApi_callInput | responseUpsertWithWhereUniqueWithoutApi_callInput[];
    createMany?: responseCreateManyApi_callInputEnvelope;
    set?: responseWhereUniqueInput | responseWhereUniqueInput[];
    disconnect?: responseWhereUniqueInput | responseWhereUniqueInput[];
    delete?: responseWhereUniqueInput | responseWhereUniqueInput[];
    connect?: responseWhereUniqueInput | responseWhereUniqueInput[];
    update?: responseUpdateWithWhereUniqueWithoutApi_callInput | responseUpdateWithWhereUniqueWithoutApi_callInput[];
    updateMany?: responseUpdateManyWithWhereWithoutApi_callInput | responseUpdateManyWithWhereWithoutApi_callInput[];
    deleteMany?: responseScalarWhereInput | responseScalarWhereInput[];
  };

  export type requestUncheckedUpdateManyWithoutApi_callNestedInput = {
    create?:
      | XOR<requestCreateWithoutApi_callInput, requestUncheckedCreateWithoutApi_callInput>
      | requestCreateWithoutApi_callInput[]
      | requestUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: requestCreateOrConnectWithoutApi_callInput | requestCreateOrConnectWithoutApi_callInput[];
    upsert?: requestUpsertWithWhereUniqueWithoutApi_callInput | requestUpsertWithWhereUniqueWithoutApi_callInput[];
    createMany?: requestCreateManyApi_callInputEnvelope;
    set?: requestWhereUniqueInput | requestWhereUniqueInput[];
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[];
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[];
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[];
    update?: requestUpdateWithWhereUniqueWithoutApi_callInput | requestUpdateWithWhereUniqueWithoutApi_callInput[];
    updateMany?: requestUpdateManyWithWhereWithoutApi_callInput | requestUpdateManyWithWhereWithoutApi_callInput[];
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[];
  };

  export type responseUncheckedUpdateManyWithoutApi_callNestedInput = {
    create?:
      | XOR<responseCreateWithoutApi_callInput, responseUncheckedCreateWithoutApi_callInput>
      | responseCreateWithoutApi_callInput[]
      | responseUncheckedCreateWithoutApi_callInput[];
    connectOrCreate?: responseCreateOrConnectWithoutApi_callInput | responseCreateOrConnectWithoutApi_callInput[];
    upsert?: responseUpsertWithWhereUniqueWithoutApi_callInput | responseUpsertWithWhereUniqueWithoutApi_callInput[];
    createMany?: responseCreateManyApi_callInputEnvelope;
    set?: responseWhereUniqueInput | responseWhereUniqueInput[];
    disconnect?: responseWhereUniqueInput | responseWhereUniqueInput[];
    delete?: responseWhereUniqueInput | responseWhereUniqueInput[];
    connect?: responseWhereUniqueInput | responseWhereUniqueInput[];
    update?: responseUpdateWithWhereUniqueWithoutApi_callInput | responseUpdateWithWhereUniqueWithoutApi_callInput[];
    updateMany?: responseUpdateManyWithWhereWithoutApi_callInput | responseUpdateManyWithWhereWithoutApi_callInput[];
    deleteMany?: responseScalarWhereInput | responseScalarWhereInput[];
  };

  export type userCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type api_callCreateNestedManyWithoutPromptInput = {
    create?:
      | XOR<api_callCreateWithoutPromptInput, api_callUncheckedCreateWithoutPromptInput>
      | api_callCreateWithoutPromptInput[]
      | api_callUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: api_callCreateOrConnectWithoutPromptInput | api_callCreateOrConnectWithoutPromptInput[];
    createMany?: api_callCreateManyPromptInputEnvelope;
    connect?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
  };

  export type api_callUncheckedCreateNestedManyWithoutPromptInput = {
    create?:
      | XOR<api_callCreateWithoutPromptInput, api_callUncheckedCreateWithoutPromptInput>
      | api_callCreateWithoutPromptInput[]
      | api_callUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: api_callCreateOrConnectWithoutPromptInput | api_callCreateOrConnectWithoutPromptInput[];
    createMany?: api_callCreateManyPromptInputEnvelope;
    connect?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
  };

  export type api_callUpdateManyWithoutPromptNestedInput = {
    create?:
      | XOR<api_callCreateWithoutPromptInput, api_callUncheckedCreateWithoutPromptInput>
      | api_callCreateWithoutPromptInput[]
      | api_callUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: api_callCreateOrConnectWithoutPromptInput | api_callCreateOrConnectWithoutPromptInput[];
    upsert?: api_callUpsertWithWhereUniqueWithoutPromptInput | api_callUpsertWithWhereUniqueWithoutPromptInput[];
    createMany?: api_callCreateManyPromptInputEnvelope;
    set?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    disconnect?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    delete?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    connect?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    update?: api_callUpdateWithWhereUniqueWithoutPromptInput | api_callUpdateWithWhereUniqueWithoutPromptInput[];
    updateMany?: api_callUpdateManyWithWhereWithoutPromptInput | api_callUpdateManyWithWhereWithoutPromptInput[];
    deleteMany?: api_callScalarWhereInput | api_callScalarWhereInput[];
  };

  export type api_callUncheckedUpdateManyWithoutPromptNestedInput = {
    create?:
      | XOR<api_callCreateWithoutPromptInput, api_callUncheckedCreateWithoutPromptInput>
      | api_callCreateWithoutPromptInput[]
      | api_callUncheckedCreateWithoutPromptInput[];
    connectOrCreate?: api_callCreateOrConnectWithoutPromptInput | api_callCreateOrConnectWithoutPromptInput[];
    upsert?: api_callUpsertWithWhereUniqueWithoutPromptInput | api_callUpsertWithWhereUniqueWithoutPromptInput[];
    createMany?: api_callCreateManyPromptInputEnvelope;
    set?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    disconnect?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    delete?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    connect?: api_callWhereUniqueInput | api_callWhereUniqueInput[];
    update?: api_callUpdateWithWhereUniqueWithoutPromptInput | api_callUpdateWithWhereUniqueWithoutPromptInput[];
    updateMany?: api_callUpdateManyWithWhereWithoutPromptInput | api_callUpdateManyWithWhereWithoutPromptInput[];
    deleteMany?: api_callScalarWhereInput | api_callScalarWhereInput[];
  };

  export type api_callCreateNestedOneWithoutRequestInput = {
    create?: XOR<api_callCreateWithoutRequestInput, api_callUncheckedCreateWithoutRequestInput>;
    connectOrCreate?: api_callCreateOrConnectWithoutRequestInput;
    connect?: api_callWhereUniqueInput;
  };

  export type api_callUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<api_callCreateWithoutRequestInput, api_callUncheckedCreateWithoutRequestInput>;
    connectOrCreate?: api_callCreateOrConnectWithoutRequestInput;
    upsert?: api_callUpsertWithoutRequestInput;
    connect?: api_callWhereUniqueInput;
    update?: XOR<
      XOR<api_callUpdateToOneWithWhereWithoutRequestInput, api_callUpdateWithoutRequestInput>,
      api_callUncheckedUpdateWithoutRequestInput
    >;
  };

  export type api_callCreateNestedOneWithoutResponseInput = {
    create?: XOR<api_callCreateWithoutResponseInput, api_callUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: api_callCreateOrConnectWithoutResponseInput;
    connect?: api_callWhereUniqueInput;
  };

  export type api_callUpdateOneRequiredWithoutResponseNestedInput = {
    create?: XOR<api_callCreateWithoutResponseInput, api_callUncheckedCreateWithoutResponseInput>;
    connectOrCreate?: api_callCreateOrConnectWithoutResponseInput;
    upsert?: api_callUpsertWithoutResponseInput;
    connect?: api_callWhereUniqueInput;
    update?: XOR<
      XOR<api_callUpdateToOneWithWhereWithoutResponseInput, api_callUpdateWithoutResponseInput>,
      api_callUncheckedUpdateWithoutResponseInput
    >;
  };

  export type companyCreateNestedOneWithoutUserInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    connect?: companyWhereUniqueInput;
  };

  export type companyUpdateOneWithoutUserNestedInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    upsert?: companyUpsertWithoutUserInput;
    disconnect?: companyWhereInput | boolean;
    delete?: companyWhereInput | boolean;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutUserInput, companyUpdateWithoutUserInput>,
      companyUncheckedUpdateWithoutUserInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type promptCreateWithoutApi_callInput = {
    id?: string;
    message: string;
    options: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type promptUncheckedCreateWithoutApi_callInput = {
    id?: string;
    message: string;
    options: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type promptCreateOrConnectWithoutApi_callInput = {
    where: promptWhereUniqueInput;
    create: XOR<promptCreateWithoutApi_callInput, promptUncheckedCreateWithoutApi_callInput>;
  };

  export type requestCreateWithoutApi_callInput = {
    id?: string;
    variables?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type requestUncheckedCreateWithoutApi_callInput = {
    id?: string;
    variables?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type requestCreateOrConnectWithoutApi_callInput = {
    where: requestWhereUniqueInput;
    create: XOR<requestCreateWithoutApi_callInput, requestUncheckedCreateWithoutApi_callInput>;
  };

  export type requestCreateManyApi_callInputEnvelope = {
    data: requestCreateManyApi_callInput | requestCreateManyApi_callInput[];
    skipDuplicates?: boolean;
  };

  export type responseCreateWithoutApi_callInput = {
    id?: string;
    data: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type responseUncheckedCreateWithoutApi_callInput = {
    id?: string;
    data: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type responseCreateOrConnectWithoutApi_callInput = {
    where: responseWhereUniqueInput;
    create: XOR<responseCreateWithoutApi_callInput, responseUncheckedCreateWithoutApi_callInput>;
  };

  export type responseCreateManyApi_callInputEnvelope = {
    data: responseCreateManyApi_callInput | responseCreateManyApi_callInput[];
    skipDuplicates?: boolean;
  };

  export type promptUpsertWithoutApi_callInput = {
    update: XOR<promptUpdateWithoutApi_callInput, promptUncheckedUpdateWithoutApi_callInput>;
    create: XOR<promptCreateWithoutApi_callInput, promptUncheckedCreateWithoutApi_callInput>;
    where?: promptWhereInput;
  };

  export type promptUpdateToOneWithWhereWithoutApi_callInput = {
    where?: promptWhereInput;
    data: XOR<promptUpdateWithoutApi_callInput, promptUncheckedUpdateWithoutApi_callInput>;
  };

  export type promptUpdateWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    options?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type promptUncheckedUpdateWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    options?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type requestUpsertWithWhereUniqueWithoutApi_callInput = {
    where: requestWhereUniqueInput;
    update: XOR<requestUpdateWithoutApi_callInput, requestUncheckedUpdateWithoutApi_callInput>;
    create: XOR<requestCreateWithoutApi_callInput, requestUncheckedCreateWithoutApi_callInput>;
  };

  export type requestUpdateWithWhereUniqueWithoutApi_callInput = {
    where: requestWhereUniqueInput;
    data: XOR<requestUpdateWithoutApi_callInput, requestUncheckedUpdateWithoutApi_callInput>;
  };

  export type requestUpdateManyWithWhereWithoutApi_callInput = {
    where: requestScalarWhereInput;
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyWithoutApi_callInput>;
  };

  export type requestScalarWhereInput = {
    AND?: requestScalarWhereInput | requestScalarWhereInput[];
    OR?: requestScalarWhereInput[];
    NOT?: requestScalarWhereInput | requestScalarWhereInput[];
    id?: UuidFilter<'request'> | string;
    api_call_id?: UuidFilter<'request'> | string;
    variables?: StringNullableFilter<'request'> | string | null;
    created_at?: DateTimeFilter<'request'> | Date | string;
    updated_at?: DateTimeFilter<'request'> | Date | string;
  };

  export type responseUpsertWithWhereUniqueWithoutApi_callInput = {
    where: responseWhereUniqueInput;
    update: XOR<responseUpdateWithoutApi_callInput, responseUncheckedUpdateWithoutApi_callInput>;
    create: XOR<responseCreateWithoutApi_callInput, responseUncheckedCreateWithoutApi_callInput>;
  };

  export type responseUpdateWithWhereUniqueWithoutApi_callInput = {
    where: responseWhereUniqueInput;
    data: XOR<responseUpdateWithoutApi_callInput, responseUncheckedUpdateWithoutApi_callInput>;
  };

  export type responseUpdateManyWithWhereWithoutApi_callInput = {
    where: responseScalarWhereInput;
    data: XOR<responseUpdateManyMutationInput, responseUncheckedUpdateManyWithoutApi_callInput>;
  };

  export type responseScalarWhereInput = {
    AND?: responseScalarWhereInput | responseScalarWhereInput[];
    OR?: responseScalarWhereInput[];
    NOT?: responseScalarWhereInput | responseScalarWhereInput[];
    id?: UuidFilter<'response'> | string;
    api_call_id?: UuidFilter<'response'> | string;
    data?: StringFilter<'response'> | string;
    created_at?: DateTimeFilter<'response'> | Date | string;
    updated_at?: DateTimeFilter<'response'> | Date | string;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userCreateManyCompanyInputEnvelope = {
    data: userCreateManyCompanyInput | userCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateManyWithWhereWithoutCompanyInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type api_callCreateWithoutPromptInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    request?: requestCreateNestedManyWithoutApi_callInput;
    response?: responseCreateNestedManyWithoutApi_callInput;
  };

  export type api_callUncheckedCreateWithoutPromptInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    request?: requestUncheckedCreateNestedManyWithoutApi_callInput;
    response?: responseUncheckedCreateNestedManyWithoutApi_callInput;
  };

  export type api_callCreateOrConnectWithoutPromptInput = {
    where: api_callWhereUniqueInput;
    create: XOR<api_callCreateWithoutPromptInput, api_callUncheckedCreateWithoutPromptInput>;
  };

  export type api_callCreateManyPromptInputEnvelope = {
    data: api_callCreateManyPromptInput | api_callCreateManyPromptInput[];
    skipDuplicates?: boolean;
  };

  export type api_callUpsertWithWhereUniqueWithoutPromptInput = {
    where: api_callWhereUniqueInput;
    update: XOR<api_callUpdateWithoutPromptInput, api_callUncheckedUpdateWithoutPromptInput>;
    create: XOR<api_callCreateWithoutPromptInput, api_callUncheckedCreateWithoutPromptInput>;
  };

  export type api_callUpdateWithWhereUniqueWithoutPromptInput = {
    where: api_callWhereUniqueInput;
    data: XOR<api_callUpdateWithoutPromptInput, api_callUncheckedUpdateWithoutPromptInput>;
  };

  export type api_callUpdateManyWithWhereWithoutPromptInput = {
    where: api_callScalarWhereInput;
    data: XOR<api_callUpdateManyMutationInput, api_callUncheckedUpdateManyWithoutPromptInput>;
  };

  export type api_callScalarWhereInput = {
    AND?: api_callScalarWhereInput | api_callScalarWhereInput[];
    OR?: api_callScalarWhereInput[];
    NOT?: api_callScalarWhereInput | api_callScalarWhereInput[];
    id?: UuidFilter<'api_call'> | string;
    prompt_id?: UuidFilter<'api_call'> | string;
    created_at?: DateTimeFilter<'api_call'> | Date | string;
    updated_at?: DateTimeFilter<'api_call'> | Date | string;
  };

  export type api_callCreateWithoutRequestInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    prompt: promptCreateNestedOneWithoutApi_callInput;
    response?: responseCreateNestedManyWithoutApi_callInput;
  };

  export type api_callUncheckedCreateWithoutRequestInput = {
    id?: string;
    prompt_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    response?: responseUncheckedCreateNestedManyWithoutApi_callInput;
  };

  export type api_callCreateOrConnectWithoutRequestInput = {
    where: api_callWhereUniqueInput;
    create: XOR<api_callCreateWithoutRequestInput, api_callUncheckedCreateWithoutRequestInput>;
  };

  export type api_callUpsertWithoutRequestInput = {
    update: XOR<api_callUpdateWithoutRequestInput, api_callUncheckedUpdateWithoutRequestInput>;
    create: XOR<api_callCreateWithoutRequestInput, api_callUncheckedCreateWithoutRequestInput>;
    where?: api_callWhereInput;
  };

  export type api_callUpdateToOneWithWhereWithoutRequestInput = {
    where?: api_callWhereInput;
    data: XOR<api_callUpdateWithoutRequestInput, api_callUncheckedUpdateWithoutRequestInput>;
  };

  export type api_callUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    prompt?: promptUpdateOneRequiredWithoutApi_callNestedInput;
    response?: responseUpdateManyWithoutApi_callNestedInput;
  };

  export type api_callUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    response?: responseUncheckedUpdateManyWithoutApi_callNestedInput;
  };

  export type api_callCreateWithoutResponseInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    prompt: promptCreateNestedOneWithoutApi_callInput;
    request?: requestCreateNestedManyWithoutApi_callInput;
  };

  export type api_callUncheckedCreateWithoutResponseInput = {
    id?: string;
    prompt_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    request?: requestUncheckedCreateNestedManyWithoutApi_callInput;
  };

  export type api_callCreateOrConnectWithoutResponseInput = {
    where: api_callWhereUniqueInput;
    create: XOR<api_callCreateWithoutResponseInput, api_callUncheckedCreateWithoutResponseInput>;
  };

  export type api_callUpsertWithoutResponseInput = {
    update: XOR<api_callUpdateWithoutResponseInput, api_callUncheckedUpdateWithoutResponseInput>;
    create: XOR<api_callCreateWithoutResponseInput, api_callUncheckedCreateWithoutResponseInput>;
    where?: api_callWhereInput;
  };

  export type api_callUpdateToOneWithWhereWithoutResponseInput = {
    where?: api_callWhereInput;
    data: XOR<api_callUpdateWithoutResponseInput, api_callUncheckedUpdateWithoutResponseInput>;
  };

  export type api_callUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    prompt?: promptUpdateOneRequiredWithoutApi_callNestedInput;
    request?: requestUpdateManyWithoutApi_callNestedInput;
  };

  export type api_callUncheckedUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    request?: requestUncheckedUpdateManyWithoutApi_callNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpsertWithoutUserInput = {
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutUserInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type requestCreateManyApi_callInput = {
    id?: string;
    variables?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type responseCreateManyApi_callInput = {
    id?: string;
    data: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type requestUpdateWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    variables?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type requestUncheckedUpdateWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    variables?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type requestUncheckedUpdateManyWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    variables?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type responseUpdateWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type responseUncheckedUpdateWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type responseUncheckedUpdateManyWithoutApi_callInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type api_callCreateManyPromptInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type api_callUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    request?: requestUpdateManyWithoutApi_callNestedInput;
    response?: responseUpdateManyWithoutApi_callNestedInput;
  };

  export type api_callUncheckedUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    request?: requestUncheckedUpdateManyWithoutApi_callNestedInput;
    response?: responseUncheckedUpdateManyWithoutApi_callNestedInput;
  };

  export type api_callUncheckedUpdateManyWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use Api_callCountOutputTypeDefaultArgs instead
   */
  export type Api_callCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Api_callCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PromptCountOutputTypeDefaultArgs instead
   */
  export type PromptCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PromptCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use api_callDefaultArgs instead
   */
  export type api_callArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    api_callDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use promptDefaultArgs instead
   */
  export type promptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    promptDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use requestDefaultArgs instead
   */
  export type requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    requestDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use responseDefaultArgs instead
   */
  export type responseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    responseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
