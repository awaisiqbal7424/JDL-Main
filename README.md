# Jafri Development Lab (JDL) - CivicGuard

A professional website featuring **CivicGuard**, an AI Legal Risk Auditor grounded in the **Prevention of Electronic Crimes Act (PECA) 2016** and its **2025 Amendments**.

## 🚀 Quick Start

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Start Frontend:**
    ```bash
    npm start
    ```

---

## 🐍 How to Connect Python (CivicAI Backend)

To make "CivicGuard" act as a conversational evaluator, you must send the full chat history to the backend.

### 1. Setup Python Environment
Create a folder `backend/` and install **FastAPI**:
```bash
pip install fastapi uvicorn
```

### 2. Create `main.py`
This updated code handles the conversation history, allowing the AI to understand follow-up questions (e.g., "Why is that safer?").

```python
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. Update Data Model to accept list of messages
class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@app.post("/audit")
async def audit_text(request: ChatRequest):
    # Get the latest user message
    last_user_msg = request.messages[-1].content
    
    # --- YOUR AI LOGIC HERE ---
    # 1. Construct prompt using 'request.messages' to keep context.
    # 2. If 'last_user_msg' looks like a post, output "Legal Risk Audit" format.
    # 3. If 'last_user_msg' is a question ("Why?", "Make it shorter"), respond conversationally.

    # Example Mock Response Logic:
    if len(last_user_msg) > 50:
        # Assume it's a post -> Return Audit Card
        score = random.randint(60, 90)
        response_content = f"""### 🚨 Legal Risk Audit [Score: {score}]
* **Violation Probability:** High
* **Specific PECA Section:** Section 26A - False/Fake Information
* **Reasoning:** Your text contains unverified claims.
* **Penalty Mention:** Up to 3 years imprisonment.

---

### ✨ Improved & Legally Safe Version
* **Rephrased Content:** "Reports suggest a developing situation. We await official updates."
* **Why it's Safer:** Avoids asserting facts without evidence.

---

### 🛡️ Civic Action Plan
1. **Source Verification:** Check official government handles.
2. **Authority:** Refer to SMPRA."""
    else:
        # Assume it's a follow-up question -> Return Text
        response_content = "That version is safer because it attributes the information to 'reports' rather than stating it as an absolute fact, which protects you under Section 26A."

    return {"reply": response_content}

# Run with: uvicorn main:app --reload
```

### 3. Update Frontend (`pages/CivicAI.tsx`)
Ensure your `handleSend` function sends the full `messages` array:

```typescript
try {
  // Send full conversation history for context
  const response = await fetch('http://localhost:8000/audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: [...messages, userMsg] }), 
  });
  
  const data = await response.json();
  // ... rest of code
```

## ⚖️ Legal Context (Grounding)

This application is designed to audit content based on:
1.  **Sec. 26A:** False/Fake Information (Penalty: 3 years / 2M PKR).
2.  **Sec. 2(iiia):** Aspersion (Damaging reputation).
3.  **Sec. 2R:** Unlawful/Offensive Content (Against Ideology/State).
4.  **Sec. 20:** Dignity of a natural person.

*Note: This tool provides risk estimation, not legal advice.*
