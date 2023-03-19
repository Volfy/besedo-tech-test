Technologies: 

Client: React & TailwindCSS.

Server: NodeJS with Express.

---

To run app as a whole:

- cd server
- npm install
- npm start

Access from localhost:3001, 
access api from localhost:3001/api/movies

Client can also be run separately:

- cd client
- npm install
- npm run dev

Vite will set the client port itself, check console.

---

Note that client has not been tested using test suites, only manually. Server has been tested.

Known bug on client: when loading URL with search params, if 'type' does not match any of the accepted modalTypes ('add', 'edit', 'delete', 'closed'), the modal will appear with no content on load.
