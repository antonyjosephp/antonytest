# P&G IMS BoilerPlate NextJS

This is a boilerplate codebase for a Next.js 13.4.3 app with TypeScript support, styled-components, and ESLint configured.

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies:
   `npm install`

## Usage

`npm run dev`

This will start the server on http://localhost:3000. Open your browser and navigate to this URL to view the app.

## Technological stack

<ul> 
  <li>Typescript 5.0.4</li>
  <li>Next 13.4.3</li>
  <li>Redux-toolkit ^1.9.5</li>
  <li>Ant Design ^5.5.0</li>
  <li>Eslint</li>
  <li>Jest</li>
  <li>Husky</li>
  <li>Prettier</li>
  <li>Sass</li>
 </ul>
 
## Key Features

<ul> 
  <li>Standard Folder structure with NextJS 13 App Directory</li>
  <li>Prettier</li>
  <li>Ant Design Components usage</li>
  <li>Eslint</li>
  <li>Style lint</li>
  <li>Jest setup</li>
  <li>Husky configuration with Pre-commit hooks to enforce fixing of lint , prettier and style lint issues</li>
  <li>Base Style Configurations with IMS theme and Next Fonts</li>
  <li>Nextjs 13 App Directory based Routing</li>
  <li>Folders for Helpers, Data, constant, utility and config</li>
  <li>Categorized assets under Public folder</li> 
  <li>Basic Dockerfile</li>
  <li>Sass setup </li>
 </ul>

## Server-Side Rendering (SSR)

All components inside the app directory are React Server Components (RSC) by default.

Client Components enable you to add client-side interactivity to your application.
The "use client" directive can be used to make a component client side.

## When to use Server vs. Client Components?

It is recommend using Server Components (default in the app directory) until you have a need to use a Client Component.

| What do you need to do?                                                      | Server Component | Client Component |
| ---------------------------------------------------------------------------- | ---------------- | ---------------- |
| Fetch data                                                                   | ✅               | ⚠️               |
| Access backend resources (directly)                                          | ✅               | ❌               |
| Keep sensitive information on the server (access tokens, API keys, etc)      | ✅               | ❌               |
| Keep large dependencies on the server / Reduce client-side JavaScript        | ✅               | ❌               |
| Add interactivity and event listeners (onClick(), onChange(), etc)           | ❌               | ✅               |
| Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc) | ❌               | ✅               |
| Use browser-only APIs                                                        | ❌               | ✅               |
| Use custom hooks that depend on state, effects, or browser-only APIs         | ❌               | ✅               |
| Use React Class components                                                   | ❌               | ✅               |

## ABOUT SSR

-   SSR – Server Side Rendering: It will run a special function to fetch data from API on every page request from the server-side (before the page is loaded, that special function will run first, creating a delay. Only after that, it will serve the page).

**When to use SSR?**
SSR is to be used when an application has a very simple UI with fewer pages/features and less dynamic data.
