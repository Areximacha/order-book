# Order Book

A mini build of a small React based application that takes streaming Order Book data and renders it depending on user selected instruments.

# Project Set-up

- Navigate to the root directory
- Run 'npm install'
- Run 'npm run server' to spin up the express server
- In another terminal window at the same dir, run 'npm run start' to spin up the local dev environment
- Go to 'http://localhost:8080/' in your browser to view page (it should open automatically)

- Run 'npm run build' to compile for production. The compiled app will be found in the /dist directory.

# Build choices

Quickly threw together an express node server to interface directly with the BitStamp API and get around that pesky CORS.
On launch, the app immediately fetches a list of intrument pairs from the API endpoint provided and defaults selected intrument to the first on the list. It will then connect the provided websocket and subscribe to the default channel.
Limited unit testing has been included on the component level using React Testing Library. Higher level testing has not been included as mocking the API and websocket may have become time consuming.
Styling is done with css-in-js using emotion.
