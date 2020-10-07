# Squad Management Tool

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its framework, React.

## Dependencies

- **TypeScript**: it types the code at runtime
- **Styled Components**: it optimizes the styling experience for React components.
- **React-router-dom**: it provides a better rendering to the different routes inside a SPA.
- **Axios**: used to access APIs, it gives you the ability to take advantage of JavaScript's _async_ and _await_ for more readable asynchronous code.
- **React-icons**: an easier way to get svg icons as React components.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── manifest.json
│  └── robots.txt
├── src
│  ├── assets
│  │  └── images
│  │      └── logo.png
│  ├── components
│  │  ├── Footer
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  └── Header
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  ├── contexts
│  │  ├── teams.tsx
│  │  └── teamsReducer.tsx
│  ├── pages
│  │  ├── CreateTeam
│  │  │  ├── CirclePlus
│  │  │  │  ├── index.tsx
│  │  │  │  └── styles.ts
│  │  │  ├── FieldFormation
│  │  │  │  ├── index.tsx
│  │  │  │  └── styles.ts
│  │  │  ├── PlayersCard
│  │  │  │  ├── index.tsx
│  │  │  │  └── styles.ts
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  └── Home
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── services
│  │  └── apis.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── config.ts
│  ├── index.tsx
│  ├── react-app-env.d.ts
│  └── types.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the pages and that can be reusable
- **contexts**: global state
- **pages**: application screens
- **services**: API functions
- **styles**: global styles to be used in the entire application

The project is visually structured by two pages that can be navigated by `react-router-dom`. At the Homepage, there are all the informations about the teams. There's a top 5 players and a plus button that navigates to the **Create your team** page. Here it's possible to create a team and choose real players.

The state is controlled by _React Hooks_.

## To do

- Create responsive layout for Homepage;
- Finish state and connect it to the pages;
- Connect application to the API;
- Create Top 5 section at Homepage;
- Implement drag and drop buttons at Create page;
- Insert formation options in the input at Create page.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/squad-management-tool

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/squad-management-tool.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
