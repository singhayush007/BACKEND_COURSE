// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)✅
// ? tRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED


// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered


// SOLUTION

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Object to keep track of how many times each event is emitted
const eventCounts = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileUpdate: 0,
};

// 1. Event Listeners
emitter.on('login', (username) => {
  eventCounts.login++;
  console.log(`🔐 ${username} logged in`);
});

emitter.on('logout', (username) => {
  eventCounts.logout++;
  console.log(`👋 ${username} logged out`);
});

emitter.on('purchase', (username, item) => {
  eventCounts.purchase++;
  console.log(`🛒 ${username} purchased ${item}`);
});

emitter.on('profileUpdate', (username, field) => {
  eventCounts.profileUpdate++;
  console.log(`👤 ${username} updated profile field: ${field}`);
});

// 2. Summary Event Listener
emitter.on('summary', () => {
  console.log('\n📊 EVENT SUMMARY REPORT:');
  console.log(`Login events: ${eventCounts.login}`);
  console.log(`Logout events: ${eventCounts.logout}`);
  console.log(`Purchase events: ${eventCounts.purchase}`);
  console.log(`Profile Update events: ${eventCounts.profileUpdate}`);
});


// 3. Emit Events (Multiple times, different users/items)
emitter.emit('login', 'Ayush');
emitter.emit('purchase', 'Ayush', 'Laptop');
emitter.emit('profileUpdate', 'Ayush', 'Profile Picture');
emitter.emit('logout', 'Ayush');

emitter.emit('login', 'Pankhudi');
emitter.emit('purchase', 'Pankhudi', 'Book');
emitter.emit('logout', 'Pankhudi');

emitter.emit('login', 'Rohan');
emitter.emit('profileUpdate', 'Rohan', 'Email');
emitter.emit('logout', 'Rohan');

// 4. Emit Summary
emitter.emit('summary');
