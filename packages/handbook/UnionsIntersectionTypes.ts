/**
 * Union Types
 */

function padLeft(value: string, padding: string | number) {
  // ...
}

//   let indentedString = padLeft("Hello world", true);

/**
 * Unions with Common Fields
 */

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// Only available in one of the two possible types
// pet.swim();

/**
 * Discriminating Unions
 */

type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkFromCachedState = {
  state: "from_cache";
  id: string;
  response: NetworkSuccessState["response"];
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NetworkFromCachedState;

// function logger(state: NetworkState): string {
//     switch (state.state) {
//       case "loading":
//         return "Downloading...";
//       case "failed":
//         // The type must be NetworkFailedState here,
//         // so accessing the `code` field is safe
//         return `Error ${state.code} downloading`;
//       case "success":
//         return `Downloaded ${state.response.title} - ${state.response.summary}`;
//     }
//   }
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function logger(s: NetworkState): string {
  // Function lacks ending return statement and return type does not include 'undefined'.
  switch (s.state) {
    case "loading":
      return "loading request";
    case "failed":
      return `failed with code ${s.code}`;
    case "success":
      return "got response";
    default:
    //   return assertNever(s);
  }
}

/**
 * Intersction Types
 */

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// These interfaces are composed to have
// consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};
