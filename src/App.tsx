import React, { useState } from 'react';
import { Terminal, Code, Zap, Coffee, Github, Twitter, Heart, ArrowRight, Copy, CheckCircle, Search, Filter } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  description: string;
  memeText: string;
  solutions: {
    language: string;
    code: string;
    explanation: string;
  }[];
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Nightmare';
  memeLevel: number;
  category: 'Editor' | 'CSS' | 'JavaScript' | 'Git' | 'DevOps' | 'Debugging' | 'Career' | 'AI';
}

const solutions: Solution[] = [
  {
    id: 'exit-vim',
    title: 'How to Exit Vim',
    description: 'The eternal struggle that has trapped developers for decades',
    memeText: 'POV: You opened vim to edit one line... 3 hours ago',
    difficulty: 'Nightmare',
    memeLevel: 5,
    category: 'Editor',
    solutions: [
      {
        language: 'vim',
        code: ':q',
        explanation: 'Quit (only if no changes made)'
      },
      {
        language: 'vim',
        code: ':wq',
        explanation: 'Write and quit (save changes and exit)'
      },
      {
        language: 'vim',
        code: ':q!',
        explanation: 'Force quit (discard changes and exit)'
      },
      {
        language: 'vim',
        code: 'ZZ',
        explanation: 'Save and exit (if changes made)'
      },
      {
        language: 'bash',
        code: 'killall vim',
        explanation: 'Nuclear option (close all vim instances)'
      },
      {
        language: 'life',
        code: 'ctrl + alt + del',
        explanation: 'When all else fails... restart everything'
      }
    ]
  },
  {
    id: 'center-div',
    title: 'How to Center a Div',
    description: 'The CSS mystery that has confused developers since the dawn of web development',
    memeText: 'CSS: "I can center the universe, but not this div"',
    difficulty: 'Medium',
    memeLevel: 4,
    category: 'CSS',
    solutions: [
      {
        language: 'css',
        code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
        explanation: 'Flexbox - The modern way (works 99% of the time)'
      },
      {
        language: 'css',
        code: `.container {
  display: grid;
  place-items: center;
}`,
        explanation: 'CSS Grid - Even more modern and concise'
      },
      {
        language: 'css',
        code: `.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
        explanation: 'Absolute positioning - The classic approach'
      },
      {
        language: 'css',
        code: `.element {
  margin: 0 auto;
  width: fit-content;
}`,
        explanation: 'Auto margins - For horizontal centering only'
      },
      {
        language: 'html',
        code: '<center>This is deprecated</center>',
        explanation: '❌ The forbidden technique (please don\'t use this)'
      }
    ]
  },
  {
    id: 'equality-operators',
    title: 'Difference between == and ===',
    description: 'JavaScript\'s way of making you question your life choices',
    memeText: 'JavaScript: "0 == false is true, but 0 === false is false. Makes sense, right?"',
    difficulty: 'Medium',
    memeLevel: 3,
    category: 'JavaScript',
    solutions: [
      {
        language: 'javascript',
        code: `// == (loose equality) - type coercion happens
0 == false        // true
"5" == 5          // true
null == undefined // true`,
        explanation: 'Loose equality converts types before comparing'
      },
      {
        language: 'javascript',
        code: `// === (strict equality) - no type coercion
0 === false        // false
"5" === 5          // false
null === undefined // false`,
        explanation: 'Strict equality compares value AND type'
      },
      {
        language: 'javascript',
        code: `// Always use === unless you specifically need type coercion
if (user.id === 123) { /* safe */ }
if (user.id == 123) { /* dangerous */ }`,
        explanation: 'Best practice: Use === to avoid unexpected behavior'
      }
    ]
  },
  {
    id: 'npm-install',
    title: 'What does npm install actually do?',
    description: 'The mysterious ritual that downloads half the internet to your computer',
    memeText: 'npm install: "I need 500MB to display Hello World"',
    difficulty: 'Easy',
    memeLevel: 4,
    category: 'DevOps',
    solutions: [
      {
        language: 'bash',
        code: 'npm install',
        explanation: 'Installs all dependencies listed in package.json'
      },
      {
        language: 'bash',
        code: 'npm install package-name',
        explanation: 'Installs a specific package and adds it to dependencies'
      },
      {
        language: 'bash',
        code: 'npm install --save-dev package-name',
        explanation: 'Installs package as development dependency'
      },
      {
        language: 'explanation',
        code: `What actually happens:
1. Reads package.json
2. Downloads packages from npm registry
3. Creates node_modules folder
4. Generates package-lock.json
5. Your disk space disappears`,
        explanation: 'The magic behind the scenes'
      }
    ]
  },
  {
    id: 'console-log-not-printing',
    title: 'Why is my console.log() not printing?',
    description: 'The debugging method that works everywhere except when you need it most',
    memeText: 'console.log("WHY ARE YOU NOT WORKING?!") // *silence*',
    difficulty: 'Easy',
    memeLevel: 3,
    category: 'Debugging',
    solutions: [
      {
        language: 'javascript',
        code: `// Check if you're looking in the right place
console.log("Hello"); // Browser: F12 -> Console tab`,
        explanation: 'Make sure you have the developer console open'
      },
      {
        language: 'javascript',
        code: `// Check if code is actually running
function neverCalled() {
  console.log("This won't print"); // Function never called
}`,
        explanation: 'Code might not be executing at all'
      },
      {
        language: 'javascript',
        code: `// Check for errors before your console.log
console.error("Error here");
console.log("This might not print"); // Previous error stops execution`,
        explanation: 'JavaScript errors can prevent subsequent code from running'
      },
      {
        language: 'javascript',
        code: `// Alternative debugging methods
debugger; // Pauses execution in browser
alert("Old school debugging");
document.body.innerHTML += "Debug message";`,
        explanation: 'When console.log fails, try these alternatives'
      }
    ]
  },
  {
    id: 'undefined-property',
    title: 'How to fix "cannot read property of undefined"?',
    description: 'JavaScript\'s favorite way to ruin your day',
    memeText: 'TypeError: Cannot read property \'length\' of undefined. Me: "But I just checked it!"',
    difficulty: 'Medium',
    memeLevel: 4,
    category: 'JavaScript',
    solutions: [
      {
        language: 'javascript',
        code: `// Check if object exists before accessing property
if (user && user.name) {
  console.log(user.name);
}`,
        explanation: 'Guard clause - check if object exists first'
      },
      {
        language: 'javascript',
        code: `// Optional chaining (ES2020)
console.log(user?.name?.firstName);
// Returns undefined instead of throwing error`,
        explanation: 'Modern solution - optional chaining operator'
      },
      {
        language: 'javascript',
        code: `// Provide default values
const name = user?.name || 'Anonymous';
const items = data?.items || [];`,
        explanation: 'Use default values to prevent undefined access'
      },
      {
        language: 'javascript',
        code: `// Debugging: Log the object first
console.log('user object:', user);
console.log('user.name:', user?.name);`,
        explanation: 'Debug by logging the object structure first'
      }
    ]
  },
  {
    id: 'git-merge-branches',
    title: 'How to merge two branches in Git without breaking everything?',
    description: 'The art of combining code without creating a disaster',
    memeText: 'Git merge: "I\'ve successfully combined your code with chaos"',
    difficulty: 'Hard',
    memeLevel: 4,
    category: 'Git',
    solutions: [
      {
        language: 'bash',
        code: `# Safe merge process
git checkout main
git pull origin main
git checkout feature-branch
git rebase main  # Optional: clean up history
git checkout main
git merge feature-branch`,
        explanation: 'The safe way - always pull latest changes first'
      },
      {
        language: 'bash',
        code: `# Create merge commit (preserves branch history)
git checkout main
git merge --no-ff feature-branch`,
        explanation: 'Explicit merge commit - good for tracking features'
      },
      {
        language: 'bash',
        code: `# If things go wrong
git merge --abort  # Cancel the merge
git reset --hard HEAD~1  # Undo last commit`,
        explanation: 'Emergency exits when merge goes sideways'
      }
    ]
  },
  {
    id: 'revert-git-push',
    title: 'How to revert git push after accidentally deploying to production?',
    description: 'The "oh no" moment every developer experiences',
    memeText: 'git push origin main --force. *Slack notifications explode*',
    difficulty: 'Nightmare',
    memeLevel: 5,
    category: 'Git',
    solutions: [
      {
        language: 'bash',
        code: `# Revert the commit (safe for shared repos)
git revert HEAD
git push origin main`,
        explanation: 'Creates a new commit that undoes the changes'
      },
      {
        language: 'bash',
        code: `# Reset to previous commit (dangerous!)
git reset --hard HEAD~1
git push --force-with-lease origin main`,
        explanation: '⚠️ Only if no one else has pulled the bad commit'
      },
      {
        language: 'bash',
        code: `# Emergency hotfix
git checkout -b hotfix-emergency
# Fix the critical issue
git commit -m "Emergency fix"
git push origin hotfix-emergency
# Deploy hotfix branch instead`,
        explanation: 'Quick fix while you figure out the main branch'
      },
      {
        language: 'life',
        code: `# The nuclear option
1. Update your resume
2. Book a flight to another country
3. Change your identity`,
        explanation: 'When you accidentally rm -rf the production database'
      }
    ]
  },
  {
    id: 'recursion-explained',
    title: 'How does recursion work? (Asking recursively)',
    description: 'To understand recursion, you must first understand recursion',
    memeText: 'Recursion: "I keep calling myself until I don\'t"',
    difficulty: 'Hard',
    memeLevel: 5,
    category: 'JavaScript',
    solutions: [
      {
        language: 'javascript',
        code: `function factorial(n) {
  // Base case - stops the recursion
  if (n <= 1) return 1;
  
  // Recursive case - function calls itself
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120`,
        explanation: 'Classic example - factorial function'
      },
      {
        language: 'javascript',
        code: `function countdown(n) {
  console.log(n);
  
  // Base case
  if (n <= 0) {
    console.log("Blast off!");
    return;
  }
  
  // Recursive call
  countdown(n - 1);
}

countdown(3); // 3, 2, 1, 0, Blast off!`,
        explanation: 'Visual example - countdown function'
      },
      {
        language: 'javascript',
        code: `// Stack overflow example (don't run this)
function infiniteRecursion() {
  return infiniteRecursion(); // No base case!
}
// RangeError: Maximum call stack size exceeded`,
        explanation: '❌ What happens without a base case'
      },
      {
        language: 'philosophy',
        code: `To understand recursion:
1. Understand recursion
2. If you don't understand recursion, go to step 1`,
        explanation: 'The recursive definition of recursion'
      }
    ]
  },
  {
    id: 'var-let-const',
    title: 'What is the difference between let, var, and const?',
    description: 'JavaScript\'s three ways to confuse you about variables',
    memeText: 'var: "I exist everywhere!" let: "I have boundaries" const: "I never change... my reference"',
    difficulty: 'Medium',
    memeLevel: 3,
    category: 'JavaScript',
    solutions: [
      {
        language: 'javascript',
        code: `// var - function scoped, can be redeclared
var x = 1;
var x = 2; // OK
console.log(x); // 2

function test() {
  var y = 3;
  if (true) {
    var y = 4; // Same variable!
  }
  console.log(y); // 4
}`,
        explanation: 'var has function scope and can be redeclared'
      },
      {
        language: 'javascript',
        code: `// let - block scoped, cannot be redeclared
let a = 1;
// let a = 2; // SyntaxError!

if (true) {
  let b = 3;
  console.log(b); // 3
}
// console.log(b); // ReferenceError!`,
        explanation: 'let has block scope and prevents redeclaration'
      },
      {
        language: 'javascript',
        code: `// const - block scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // TypeError!

// But objects/arrays can be modified
const user = { name: 'John' };
user.name = 'Jane'; // OK - modifying property
user.age = 25; // OK - adding property`,
        explanation: 'const prevents reassignment but allows object mutation'
      }
    ]
  },
  {
    id: 'docker-exit-137',
    title: 'Why is Docker container "exited with code 137"?',
    description: 'When Docker decides your container has lived long enough',
    memeText: 'Docker: "Your container used too much memory. *SIGKILL*"',
    difficulty: 'Hard',
    memeLevel: 4,
    category: 'DevOps',
    solutions: [
      {
        language: 'bash',
        code: `# Exit code 137 = 128 + 9 (SIGKILL)
# Usually means out of memory (OOM)

# Check container logs
docker logs container-name

# Check system resources
docker stats`,
        explanation: 'Exit code 137 typically means the container was killed'
      },
      {
        language: 'dockerfile',
        code: `# Increase memory limit
docker run -m 512m your-image

# Or in docker-compose.yml
services:
  app:
    image: your-image
    mem_limit: 512m`,
        explanation: 'Allocate more memory to prevent OOM kills'
      },
      {
        language: 'bash',
        code: `# Debug memory usage
docker exec -it container-name top
docker exec -it container-name free -h

# Check for memory leaks in your application`,
        explanation: 'Monitor memory usage to identify the problem'
      }
    ]
  },
  {
    id: 'css-not-applying',
    title: 'Why does my CSS not apply?',
    description: 'The eternal battle between developer expectations and browser reality',
    memeText: 'CSS: "I\'m here, but I choose not to work today"',
    difficulty: 'Medium',
    memeLevel: 4,
    category: 'CSS',
    solutions: [
      {
        language: 'css',
        code: `/* Check CSS specificity */
.my-class { color: blue; }        /* Specificity: 10 */
#my-id { color: red; }            /* Specificity: 100 */
div.my-class { color: green; }    /* Specificity: 11 */

/* Use !important as last resort */
.my-class { color: blue !important; }`,
        explanation: 'Higher specificity rules override lower ones'
      },
      {
        language: 'html',
        code: `<!-- Check if CSS file is linked correctly -->
<link rel="stylesheet" href="styles.css">

<!-- Check browser cache -->
<link rel="stylesheet" href="styles.css?v=1.0">`,
        explanation: 'Verify CSS file is properly linked and not cached'
      },
      {
        language: 'css',
        code: `/* Check for typos */
.my-class {
  colr: blue;     /* ❌ Typo: should be 'color' */
  color: blue;    /* ✅ Correct */
}

/* Check for missing semicolons */
.my-class {
  color: blue     /* ❌ Missing semicolon */
  font-size: 16px;
}`,
        explanation: 'Common syntax errors that break CSS'
      },
      {
        language: 'devtools',
        code: `F12 -> Elements -> Styles panel
- See which styles are applied
- Check for crossed-out (overridden) styles
- Inspect computed styles`,
        explanation: 'Use browser dev tools to debug CSS issues'
      }
    ]
  },
  {
    id: 'cors-explained',
    title: 'What is CORS and why does it hate me?',
    description: 'The browser security feature that blocks everything you want to do',
    memeText: 'CORS: "You shall not pass!" Me: "But it\'s my own API!"',
    difficulty: 'Hard',
    memeLevel: 4,
    category: 'JavaScript',
    solutions: [
      {
        language: 'javascript',
        code: `// CORS error happens when:
// Frontend: http://localhost:3000
// API: http://localhost:8000
// Browser: "Nope, different origins!"

fetch('http://localhost:8000/api/data')
  .then(response => response.json())
  .catch(error => console.log('CORS error:', error));`,
        explanation: 'CORS blocks requests between different origins'
      },
      {
        language: 'javascript',
        code: `// Server-side fix (Express.js)
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Or allow all origins (development only!)
app.use(cors());`,
        explanation: 'Fix CORS on the server side by setting headers'
      },
      {
        language: 'javascript',
        code: `// Development workaround - proxy in package.json
{
  "name": "my-app",
  "proxy": "http://localhost:8000",
  "scripts": { ... }
}

// Now fetch from relative URLs
fetch('/api/data') // Proxied to localhost:8000`,
        explanation: 'Use proxy during development to avoid CORS'
      },
      {
        language: 'bash',
        code: `# Nuclear option - disable CORS in Chrome (DANGEROUS!)
chrome --disable-web-security --user-data-dir="/tmp/chrome"

# Don't do this in production!`,
        explanation: '⚠️ Last resort - disable browser security (dev only!)'
      }
    ]
  },
  {
    id: 'center-text-vertically',
    title: 'How to center text vertically AND horizontally?',
    description: 'The CSS challenge that has broken more developers than vim',
    memeText: 'CSS: "You want to center text? Here are 47 different ways that might work"',
    difficulty: 'Hard',
    memeLevel: 5,
    category: 'CSS',
    solutions: [
      {
        language: 'css',
        code: `.container {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center;     /* vertical */
  height: 100vh;
}`,
        explanation: 'Flexbox - the modern solution that actually works'
      },
      {
        language: 'css',
        code: `.container {
  display: grid;
  place-items: center;
  height: 100vh;
}`,
        explanation: 'CSS Grid - even more concise'
      },
      {
        language: 'css',
        code: `.container {
  position: relative;
  height: 100vh;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
        explanation: 'Absolute positioning - the classic approach'
      },
      {
        language: 'css',
        code: `.container {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  height: 100vh;
  width: 100vw;
}`,
        explanation: 'Table-cell method - works but feels wrong'
      }
    ]
  },
  {
    id: 'undefined-not-function',
    title: 'What does "undefined is not a function" mean?',
    description: 'JavaScript\'s polite way of saying you messed up',
    memeText: 'TypeError: undefined is not a function. Me: "But I swear it was working 5 minutes ago!"',
    difficulty: 'Medium',
    memeLevel: 3,
    category: 'JavaScript',
    solutions: [
      {
        language: 'javascript',
        code: `// Common cause: typo in function name
const user = {
  getName: function() { return 'John'; }
};

user.getname(); // TypeError: user.getname is not a function
user.getName(); // ✅ Works`,
        explanation: 'Check for typos in function names'
      },
      {
        language: 'javascript',
        code: `// Function doesn't exist on object
const arr = [1, 2, 3];
arr.push(4);    // ✅ Works
arr.append(4);  // TypeError: arr.append is not a function

// Check available methods
console.log(Object.getOwnPropertyNames(Array.prototype));`,
        explanation: 'Verify the function exists on the object'
      },
      {
        language: 'javascript',
        code: `// Async/timing issues
let myFunction;

setTimeout(() => {
  myFunction = () => console.log('Hello');
}, 1000);

myFunction(); // TypeError: myFunction is not a function
// Function not defined yet!`,
        explanation: 'Function might not be defined when you call it'
      },
      {
        language: 'javascript',
        code: `// Debug by logging the variable
console.log(typeof myFunction); // "undefined"
console.log(myFunction);        // undefined

if (typeof myFunction === 'function') {
  myFunction();
}`,
        explanation: 'Check if variable is actually a function before calling'
      }
    ]
  },
  {
    id: 'tech-interview-code-explanation',
    title: 'How do I explain my code during a tech interview?',
    description: 'The art of sounding smart while your brain turns to mush',
    memeText: 'Interviewer: "Explain this code" Me: "Well, it works... somehow"',
    difficulty: 'Hard',
    memeLevel: 4,
    category: 'Career',
    solutions: [
      {
        language: 'strategy',
        code: `// Structure your explanation:
1. "This function does X"
2. "I chose this approach because Y"
3. "The time complexity is O(n)"
4. "Here's how it handles edge cases"
5. "I could optimize it by Z"`,
        explanation: 'Follow a clear structure when explaining code'
      },
      {
        language: 'example',
        code: `function findMax(arr) {
  if (arr.length === 0) return null;
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Explanation: "This function finds the maximum value in an array.
// I handle the edge case of empty arrays first, then iterate through
// comparing each element. Time complexity is O(n), space is O(1)."`,
        explanation: 'Walk through your code step by step'
      },
      {
        language: 'tips',
        code: `✅ Do:
- Think out loud
- Explain your reasoning
- Mention trade-offs
- Discuss alternatives

❌ Don't:
- Say "it's obvious"
- Skip error handling
- Ignore edge cases
- Panic when stuck`,
        explanation: 'Interview best practices'
      }
    ]
  },
  {
    id: 'works-on-my-machine',
    title: 'How to debug "it works on my machine"?',
    description: 'The developer\'s most frustrating phrase',
    memeText: '"It works on my machine" - Famous last words before production deployment',
    difficulty: 'Hard',
    memeLevel: 5,
    category: 'Debugging',
    solutions: [
      {
        language: 'checklist',
        code: `Environment Differences:
□ Node.js version
□ Package versions (check package-lock.json)
□ Environment variables
□ Operating system
□ Database version/data
□ File paths (Windows vs Unix)`,
        explanation: 'Compare environments systematically'
      },
      {
        language: 'bash',
        code: `# Check versions
node --version
npm --version
npm list

# Check environment variables
printenv | grep NODE
echo $PATH`,
        explanation: 'Document your working environment'
      },
      {
        language: 'docker',
        code: `# Containerize to ensure consistency
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
        explanation: 'Use Docker to create identical environments'
      },
      {
        language: 'debugging',
        code: `// Add detailed logging
console.log('Environment:', process.env.NODE_ENV);
console.log('Platform:', process.platform);
console.log('Node version:', process.version);
console.log('Working directory:', process.cwd());`,
        explanation: 'Log environment details to compare'
      }
    ]
  },
  {
    id: 'variable-naming',
    title: 'How to name variables without hating myself later?',
    description: 'The art of writing code that future you won\'t curse',
    memeText: 'Past me: "temp1 is a great variable name!" Present me: "What does temp1 even do?!"',
    difficulty: 'Medium',
    memeLevel: 3,
    category: 'Career',
    solutions: [
      {
        language: 'javascript',
        code: `// ❌ Bad names
const d = new Date();
const u = users.filter(x => x.a);
const temp = calculateStuff();

// ✅ Good names
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
const monthlyRevenue = calculateMonthlyRevenue();`,
        explanation: 'Use descriptive names that explain purpose'
      },
      {
        language: 'javascript',
        code: `// Boolean variables - use is/has/can/should
const isLoading = true;
const hasPermission = false;
const canEdit = user.role === 'admin';
const shouldShowModal = errors.length > 0;

// Arrays - use plural nouns
const users = [];
const activeConnections = [];`,
        explanation: 'Follow naming conventions for different types'
      },
      {
        language: 'javascript',
        code: `// Functions - use verbs
function getUserById(id) { }
function validateEmail(email) { }
function calculateTotalPrice(items) { }

// Constants - use UPPER_SNAKE_CASE
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = 'https://api.example.com';`,
        explanation: 'Functions should describe actions, constants should be obvious'
      },
      {
        language: 'rules',
        code: `Golden Rules:
1. If you need a comment to explain a variable name, rename it
2. Avoid abbreviations (except common ones like 'id', 'url')
3. Use searchable names (not single letters)
4. Be consistent across your codebase
5. When in doubt, be more descriptive`,
        explanation: 'Guidelines for better variable naming'
      }
    ]
  },
  {
    id: 'kubernetes-explained',
    title: 'What is Kubernetes and why is it everywhere?',
    description: 'The container orchestration platform that everyone talks about but few understand',
    memeText: 'Kubernetes: "You have 3 containers? Let me give you 47 YAML files to manage them"',
    difficulty: 'Nightmare',
    memeLevel: 5,
    category: 'DevOps',
    solutions: [
      {
        language: 'explanation',
        code: `Kubernetes (k8s) is like a smart manager for containers:

🐳 Docker = Individual containers
🚢 Kubernetes = Fleet management for containers

It handles:
- Scaling (more traffic? More containers!)
- Load balancing (distribute requests)
- Self-healing (container died? Start a new one!)
- Rolling updates (deploy without downtime)`,
        explanation: 'Kubernetes manages containers at scale'
      },
      {
        language: 'yaml',
        code: `# Simple Kubernetes deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 3000`,
        explanation: 'Basic Kubernetes deployment configuration'
      },
      {
        language: 'reality',
        code: `Why it's everywhere:
✅ Scales automatically
✅ Handles failures gracefully  
✅ Industry standard
✅ Cloud provider support

Why it's complex:
❌ Steep learning curve
❌ YAML configuration hell
❌ Many moving parts
❌ Overkill for small projects`,
        explanation: 'The good and bad of Kubernetes adoption'
      }
    ]
  },
  {
    id: 'merge-conflicts',
    title: 'How to deal with merge conflicts without rage quitting?',
    description: 'Git\'s way of testing your patience and problem-solving skills',
    memeText: 'Git: "You and your teammate both changed line 42. Fight!"',
    difficulty: 'Hard',
    memeLevel: 4,
    category: 'Git',
    solutions: [
      {
        language: 'bash',
        code: `# When merge conflict occurs
git status  # See conflicted files

# Open conflicted file, look for:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name`,
        explanation: 'Identify conflicted files and conflict markers'
      },
      {
        language: 'resolution',
        code: `// Before (conflicted):
<<<<<<< HEAD
const API_URL = 'https://api-dev.example.com';
=======
const API_URL = 'https://api-staging.example.com';
>>>>>>> feature-branch

// After (resolved):
const API_URL = 'https://api-prod.example.com';`,
        explanation: 'Manually resolve conflicts by choosing or combining changes'
      },
      {
        language: 'bash',
        code: `# After resolving conflicts
git add conflicted-file.js
git commit -m "Resolve merge conflict in API URL"

# Or abort if it's too messy
git merge --abort
git rebase --abort`,
        explanation: 'Complete the merge or abort if needed'
      },
      {
        language: 'tools',
        code: `# Use merge tools for complex conflicts
git config --global merge.tool vscode
git mergetool

# Or use GUI tools:
- GitKraken
- SourceTree  
- VS Code built-in merge editor`,
        explanation: 'Visual tools make conflict resolution easier'
      }
    ]
  },
  {
    id: 'ai-replace-developers',
    title: 'Is ChatGPT going to replace me?',
    description: 'The existential crisis every developer faces in 2024',
    memeText: 'ChatGPT: "I can write code in 50 languages" Me: "But can you debug legacy PHP at 3 AM?"',
    difficulty: 'Medium',
    memeLevel: 4,
    category: 'AI',
    solutions: [
      {
        language: 'reality-check',
        code: `What AI is good at:
✅ Boilerplate code
✅ Code explanations
✅ Simple algorithms
✅ Documentation
✅ Learning new syntax

What AI struggles with:
❌ Complex business logic
❌ System architecture
❌ Debugging production issues
❌ Understanding user needs
❌ Code reviews and mentoring`,
        explanation: 'AI is a powerful tool, not a replacement'
      },
      {
        language: 'strategy',
        code: `How to stay relevant:
1. Learn to work WITH AI (prompt engineering)
2. Focus on problem-solving, not just coding
3. Develop soft skills (communication, leadership)
4. Understand business domains deeply
5. Stay curious and keep learning

AI won't replace developers.
Developers who use AI will replace those who don't.`,
        explanation: 'Adapt and evolve with the technology'
      },
      {
        language: 'humor',
        code: `AI: "I generated 1000 lines of perfect code"
Developer: "Great! Now make it work with our 15-year-old legacy system, handle edge cases, pass security review, and deploy without breaking production"
AI: "...I need a human"`,
        explanation: 'Real-world development is more complex than code generation'
      }
    ]
  },
  {
    id: 'ai-perfect-code',
    title: 'How to make AI write perfect production code?',
    description: 'The dream of every developer who discovered ChatGPT',
    memeText: 'Me: "Write perfect code" AI: "Here\'s a hello world that breaks in production"',
    difficulty: 'Hard',
    memeLevel: 4,
    category: 'AI',
    solutions: [
      {
        language: 'prompting',
        code: `// ❌ Vague prompt
"Write a function to handle user data"

// ✅ Specific prompt
"Write a TypeScript function that validates user registration data. 
It should:
- Accept email, password, and name
- Validate email format with regex
- Check password strength (8+ chars, special chars)
- Return validation errors as an array
- Handle edge cases like null/undefined inputs"`,
        explanation: 'Be specific about requirements and constraints'
      },
      {
        language: 'context',
        code: `// Provide context in your prompts
"I'm building a React e-commerce app using TypeScript and Tailwind CSS. 
I need a reusable ProductCard component that:
- Shows product image, name, price
- Handles loading states
- Follows our design system (attached)
- Is accessible (ARIA labels)
- Works on mobile and desktop"`,
        explanation: 'Give AI context about your tech stack and requirements'
      },
      {
        language: 'iteration',
        code: `Workflow:
1. Start with basic prompt
2. Review generated code
3. Ask for specific improvements:
   - "Add error handling"
   - "Make it more performant"
   - "Add TypeScript types"
   - "Include unit tests"
4. Test and refine
5. Code review (human still needed!)`,
        explanation: 'Iterate and refine rather than expecting perfection'
      },
      {
        language: 'reality',
        code: `AI limitations:
❌ Doesn't know your codebase
❌ Can't test in your environment  
❌ Doesn't understand business rules
❌ May use outdated patterns
❌ Can't handle complex architecture

Always review, test, and adapt AI-generated code!`,
        explanation: 'AI is a starting point, not a finish line'
      }
    ]
  },
  {
    id: 'ai-hallucination',
    title: 'Why does AI hallucinate random facts in the middle of an answer?',
    description: 'When AI decides to be creative with the truth',
    memeText: 'AI: "To center a div, use the ancient CSS property \'center-magic: true\'" Me: "That\'s not real!" AI: "Trust me bro"',
    difficulty: 'Medium',
    memeLevel: 5,
    category: 'AI',
    solutions: [
      {
        language: 'explanation',
        code: `Why AI hallucinates:
1. Pattern matching gone wrong
2. Training on incorrect information
3. Overconfidence in uncertain situations
4. Mixing up similar concepts
5. Trying to be helpful when it doesn't know

AI doesn't "know" things - it predicts what text should come next based on patterns.`,
        explanation: 'AI generates plausible-sounding but incorrect information'
      },
      {
        language: 'detection',
        code: `Red flags for AI hallucination:
🚩 Overly specific details without sources
🚩 "New" features that don't exist
🚩 Confident answers about recent events
🚩 Code using non-existent APIs
🚩 Historical "facts" that sound too convenient

Always verify:
✅ Check official documentation
✅ Test code before using
✅ Cross-reference with multiple sources`,
        explanation: 'How to spot and verify AI-generated information'
      },
      {
        language: 'mitigation',
        code: `Better prompting to reduce hallucination:
- "Only use well-documented APIs"
- "If you're not sure, say so"
- "Provide sources for your claims"
- "Stick to standard practices"
- "Don't make up function names"

Example:
"Show me how to fetch data in React using only standard, well-documented methods. If there are multiple approaches, explain the trade-offs."`,
        explanation: 'Prompt engineering to get more accurate responses'
      }
    ]
  }
];

function App() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(solutions.map(s => s.category)))];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || solution.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Hard': return 'bg-red-500/20 text-red-400';
      case 'Nightmare': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Editor': 'bg-blue-500/20 text-blue-400',
      'CSS': 'bg-pink-500/20 text-pink-400',
      'JavaScript': 'bg-yellow-500/20 text-yellow-400',
      'Git': 'bg-orange-500/20 text-orange-400',
      'DevOps': 'bg-green-500/20 text-green-400',
      'Debugging': 'bg-red-500/20 text-red-400',
      'Career': 'bg-purple-500/20 text-purple-400',
      'AI': 'bg-cyan-500/20 text-cyan-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-violet-500 p-3 rounded-2xl">
                <Terminal className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Dev <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Meme</span> Solutions
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Finally, the answers to questions that have haunted developers for generations. 
              With 100% more memes and 200% more sarcasm.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-purple-300">
              <div className="flex items-center">
                <Coffee className="h-4 w-4 mr-1" />
                Caffeinated Solutions
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                Meme-Powered
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                Made with Love & Frustration
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search developer problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 appearance-none cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-900">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-purple-200">
            Found {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''} 
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/30 hover:scale-105"
              onClick={() => setSelectedSolution(solution)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(solution.difficulty)}`}>
                    {solution.difficulty}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(solution.memeLevel)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <div className="mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(solution.category)}`}>
                  {solution.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{solution.title}</h3>
              <p className="text-purple-200 text-sm mb-4 line-clamp-2">{solution.description}</p>
              
              <div className="bg-black/30 rounded-xl p-3 mb-4">
                <p className="text-yellow-300 font-mono text-xs italic line-clamp-2">"{solution.memeText}"</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-300">{solution.solutions.length} solutions</span>
                <ArrowRight className="h-4 w-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredSolutions.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md mx-auto">
              <Code className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No solutions found</h3>
              <p className="text-purple-200 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}

        {/* Solution Detail Modal */}
        {selectedSolution && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedSolution.category)}`}>
                        {selectedSolution.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(selectedSolution.difficulty)}`}>
                        {selectedSolution.difficulty}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedSolution.title}</h2>
                    <p className="text-purple-200">{selectedSolution.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className="text-purple-300 hover:text-white transition-colors text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="bg-black/30 rounded-xl p-6 mb-8">
                  <p className="text-yellow-300 font-mono text-lg italic text-center">
                    "{selectedSolution.memeText}"
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Solutions (Ranked by Sanity Level)</h3>
                  {selectedSolution.solutions.map((sol, index) => (
                    <div key={index} className="bg-black/20 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                            {sol.language}
                          </span>
                          <span className="text-purple-200 text-sm">#{index + 1}</span>
                        </div>
                        <button
                          onClick={() => copyToClipboard(sol.code)}
                          className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors"
                        >
                          {copiedCode === sol.code ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                          <span className="text-sm">
                            {copiedCode === sol.code ? 'Copied!' : 'Copy'}
                          </span>
                        </button>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4 mb-3 overflow-x-auto">
                        <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                          {sol.code}
                        </pre>
                      </div>
                      
                      <p className="text-purple-200 text-sm">{sol.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-purple-200 mb-4">
              Made with ❤️ and excessive amounts of coffee for developers, by developers
            </p>
            
            {/* Built with Bolt.new Badge */}
            <div className="flex justify-center mb-6">
              <a 
                href="https://bolt.new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="bg-white/20 p-2 rounded-full">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-lg">Built with Bolt.new</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-purple-400 text-sm mt-4">
              "If it compiles, ship it" - Ancient Developer Proverb
            </p>
            <p className="text-purple-500 text-xs mt-2">
              Now featuring {solutions.length} ways to question your career choices
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;