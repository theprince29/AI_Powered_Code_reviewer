#  AI-Powered Code Review Microservice

An MVP microservice that accepts user-submitted code, reviews it using **Gemini (Google Generative AI)**, parses the feedback into structured insights, and stores review sessions in MongoDB.
Includes a minimal frontend to submit code for review.

---

##  Features

- ✅ Submit code (with optional instructions) via frontend
- ✅ Generates review prompt for Gemini
- ✅ Calls Gemini API for feedback
- ✅ Parses response into:

* **Strengths**
* **Issues**
* **Suggestions**

✅ Stores review sessions in MongoDB
✅ Returns structured review result to the frontend

---

##  Tech Stack

* **Backend:** Express.js + TypeScript + Mongoose
* **AI Model:** Gemini Pro (`@google/generative-ai`)
* **Frontend:** Simple HTML + JS (or React)
* **Database:** MongoDB


---

##  Getting Started

### 1️ Clone the repo

```bash
git clone https://github.com/theprince29/AI_Powered_Code_reviewer.git
cd code-reviewer-backend
```

### 2️ Install dependencies

```bash
npm install
```

### 3️ Setup environment variables

Create a `.env` file:

```
GEMINI_API_KEY=your_gemini_api_key
MONGO_URI=mongodb://localhost:27017/code-reviewer
```

### 4️ Run the server

```bash
npm run dev
# or
npm run build
node dist/server.js
```

---

##  Frontend (minimal)

Open `frontend/index.html` in your browser:

* Paste your JS code
* (Optionally) add instructions
* Click "Submit for Review"
* View structured feedback

---

##  Example Prompt Sent to Gemini

```
Please review the following JavaScript code for:
code correctness, performance, best practices

Code:
function add(a, b) {
  return a + b;
}
```

---

##  MongoDB Review Session Schema

```json
{
  "code": "function add(a, b) { return a + b; }",
  "prompt": "...",
  "response": {
    "strengths": [ "..." ],
    "issues": [ "..." ],
    "suggestions": [ "..." ]
  },
  "createdAt": "2025-06-23T..."
}
```

---

##  Future Improvements

* Add user authentication
* Advanced prompt customization (e.g., security focus, style guide matching)
* Display review history in frontend
* Deploy on Vercel + Mongo Atlas + Google Cloud

---

##  How to contribute

Feel free to fork and contribute by:

* Improving the parser
* Adding tests
* Enhancing frontend UI

---

##  License

MIT License — use it freely!

