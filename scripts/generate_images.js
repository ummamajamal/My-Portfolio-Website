import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. AI Automation Workflows Image (1920 x 1080)
const svgAutomation = `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad1" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#4E1B31" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#381323" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#240A16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9E5370"/>
      <stop offset="50%" stop-color="#D9DCE2"/>
      <stop offset="100%" stop-color="#9E5370"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="1920" height="1080" fill="url(#bgGrad1)"/>

  <!-- Background Technical Grid -->
  <g stroke="#D9DCE2" stroke-opacity="0.07" stroke-width="1.5">
    ${Array.from({ length: 24 }).map((_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="1080"/>`).join('')}
    ${Array.from({ length: 14 }).map((_, i) => `<line x1="0" y1="${i * 80}" x2="1920" y2="${i * 80}"/>`).join('')}
  </g>

  <!-- Title Badge -->
  <g transform="translate(120, 100)">
    <rect width="440" height="48" rx="24" fill="#2C0D1B" stroke="#B87591" stroke-width="2"/>
    <circle cx="28" cy="24" r="8" fill="#B87591"/>
    <text x="50" y="30" font-family="'JetBrains Mono', monospace, sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2" letter-spacing="2">AUTOMATION WORKFLOW ENGINE</text>
  </g>

  <!-- Flow connecting curves -->
  <g fill="none" stroke="url(#lineGrad1)" stroke-width="3" opacity="0.85">
    <path d="M 380 440 C 520 440, 560 320, 720 320" />
    <path d="M 380 440 C 520 440, 560 560, 720 560" />
    <path d="M 1120 320 C 1260 320, 1300 440, 1440 440" />
    <path d="M 1120 560 C 1260 560, 1300 440, 1440 440" />
    <path d="M 1440 440 L 1640 440" />
  </g>

  <!-- Node 1: Ingress Webhook Trigger -->
  <g transform="translate(120, 360)">
    <rect width="260" height="160" rx="20" fill="#3D1527" stroke="#D9DCE2" stroke-width="2" stroke-opacity="0.5"/>
    <rect x="16" y="16" width="36" height="36" rx="8" fill="#71334F"/>
    <text x="34" y="40" font-family="monospace" font-size="18" fill="#B87591" font-weight="bold" text-anchor="middle">⚡</text>
    <text x="64" y="34" font-family="sans-serif" font-size="14" font-weight="bold" fill="#D9DCE2">WEBHOOK INGRESS</text>
    <text x="64" y="48" font-family="monospace" font-size="10" fill="#B87591">POST /api/v1/trigger</text>
    <line x1="16" y1="64" x2="244" y2="64" stroke="#D9DCE2" stroke-opacity="0.2"/>
    <text x="20" y="90" font-family="monospace" font-size="11" fill="#D9DCE2">• Auth Token: Verified</text>
    <text x="20" y="112" font-family="monospace" font-size="11" fill="#D9DCE2">• Event: inquiry_received</text>
    <text x="20" y="134" font-family="monospace" font-size="11" fill="#B87591">Latency: 18ms</text>
  </g>

  <!-- Node 2A: Admission Evaluator (Top Branch) -->
  <g transform="translate(720, 240)">
    <rect width="400" height="160" rx="20" fill="#4E1B31" stroke="#B87591" stroke-width="2" filter="url(#glow)"/>
    <rect width="400" height="160" rx="20" fill="#381323" stroke="#B87591" stroke-width="2"/>
    <rect x="20" y="18" width="40" height="40" rx="10" fill="#71334F"/>
    <text x="40" y="44" font-family="monospace" font-size="20" fill="#D9DCE2" text-anchor="middle">🤖</text>
    <text x="72" y="38" font-family="sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2">AI ADMISSION AGENT</text>
    <text x="72" y="52" font-family="monospace" font-size="11" fill="#B87591">AdmitCrew Multi-Agent Team</text>
    <line x1="20" y1="70" x2="380" y2="70" stroke="#D9DCE2" stroke-opacity="0.2"/>
    <text x="24" y="96" font-family="monospace" font-size="12" fill="#D9DCE2">• Document parser: Verified</text>
    <text x="24" y="118" font-family="monospace" font-size="12" fill="#D9DCE2">• Eligibility rules: ICS Track 94%</text>
    <text x="24" y="140" font-family="monospace" font-size="12" fill="#B87591">Confidence Score: 0.982</text>
  </g>

  <!-- Node 2B: Stock & Inventory Check (Bottom Branch) -->
  <g transform="translate(720, 480)">
    <rect width="400" height="160" rx="20" fill="#381323" stroke="#D9DCE2" stroke-width="2" stroke-opacity="0.4"/>
    <rect x="20" y="18" width="40" height="40" rx="10" fill="#521F35"/>
    <text x="40" y="44" font-family="monospace" font-size="20" fill="#D9DCE2" text-anchor="middle">📦</text>
    <text x="72" y="38" font-family="sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2">STOCKSENSE LEDGER GUARD</text>
    <text x="72" y="52" font-family="monospace" font-size="11" fill="#B87591">Negative-Stock Prevent Engine</text>
    <line x1="20" y1="70" x2="380" y2="70" stroke="#D9DCE2" stroke-opacity="0.2"/>
    <text x="24" y="96" font-family="monospace" font-size="12" fill="#D9DCE2">• SKU verification: delta +40</text>
    <text x="24" y="118" font-family="monospace" font-size="12" fill="#D9DCE2">• Row-Level Security: Manager tier</text>
    <text x="24" y="140" font-family="monospace" font-size="12" fill="#B87591">Audit log transaction: Success</text>
  </g>

  <!-- Node 3: Supabase Commit & Realtime Sync -->
  <g transform="translate(1440, 360)">
    <rect width="360" height="160" rx="20" fill="#4E1B31" stroke="#D9DCE2" stroke-width="2"/>
    <rect x="20" y="18" width="40" height="40" rx="10" fill="#71334F"/>
    <text x="40" y="44" font-family="monospace" font-size="20" fill="#B87591" text-anchor="middle">💾</text>
    <text x="72" y="38" font-family="sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2">SUPABASE CLOUD SYNC</text>
    <text x="72" y="52" font-family="monospace" font-size="11" fill="#B87591">PostgreSQL Realtime Queue</text>
    <line x1="20" y1="70" x2="340" y2="70" stroke="#D9DCE2" stroke-opacity="0.2"/>
    <text x="24" y="96" font-family="monospace" font-size="12" fill="#D9DCE2">• Webhook broadcast: 200 OK</text>
    <text x="24" y="118" font-family="monospace" font-size="12" fill="#D9DCE2">• Status: Pipeline Complete</text>
    <text x="24" y="140" font-family="monospace" font-size="12" fill="#B87591">Auto-Archive in 24h</text>
  </g>

  <!-- Bottom Terminal Status Bar -->
  <g transform="translate(120, 920)">
    <rect width="1680" height="60" rx="14" fill="#240A16" stroke="#D9DCE2" stroke-width="1.5" stroke-opacity="0.3"/>
    <text x="32" y="36" font-family="'JetBrains Mono', monospace" font-size="14" fill="#D9DCE2">
      <tspan fill="#B87591">Ummama Jamal Qureshi</tspan> :: Pipeline Orchestrator v2.4 :: 5 Active Agent Nodes :: Latency 142ms :: Status 
      <tspan fill="#D9DCE2" font-weight="bold">[OPERATIONAL]</tspan>
    </text>
  </g>
</svg>
`;

// 2. Python Programming Image (1920 x 1080)
const svgPython = `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad2" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#44182B" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#32101F" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#1C0611" stop-opacity="1"/>
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#bgGrad2)"/>

  <!-- Left Code Editor Window -->
  <g transform="translate(100, 100)">
    <rect width="1120" height="880" rx="20" fill="#250917" stroke="#D9DCE2" stroke-width="2" stroke-opacity="0.3"/>
    
    <!-- Window Bar -->
    <rect width="1120" height="54" rx="20" fill="#381323"/>
    <circle cx="30" cy="27" r="7" fill="#B87591"/>
    <circle cx="52" cy="27" r="7" fill="#71334F"/>
    <circle cx="74" cy="27" r="7" fill="#D9DCE2" opacity="0.6"/>
    <text x="110" y="33" font-family="'JetBrains Mono', monospace" font-size="14" fill="#D9DCE2" font-weight="bold">
      fastapi_admitcrew_agent.py — Python 3.11
    </text>

    <!-- Syntax Code lines -->
    <g transform="translate(40, 90)" font-family="'JetBrains Mono', monospace" font-size="18" line-height="32">
      <text y="30" fill="#B87591" font-weight="bold">from <tspan fill="#D9DCE2">fastapi</tspan> import <tspan fill="#D9DCE2">FastAPI, BackgroundTasks, Depends</tspan></text>
      <text y="64" fill="#B87591" font-weight="bold">from <tspan fill="#D9DCE2">pydantic</tspan> import <tspan fill="#D9DCE2">BaseModel, Field</tspan></text>
      <text y="98" fill="#B87591" font-weight="bold">from <tspan fill="#D9DCE2">agents.orchestrator</tspan> import <tspan fill="#D9DCE2">AdmitCrewEngine</tspan></text>
      <text y="132" fill="#B87591" font-weight="bold">from <tspan fill="#D9DCE2">db.supabase</tspan> import <tspan fill="#D9DCE2">SupabaseClient</tspan></text>

      <text y="190" fill="#D9DCE2" opacity="0.4"># Initialize intelligent automation router</text>
      <text y="224" fill="#D9DCE2">app = FastAPI(title=<tspan fill="#B87591">"Ummama AI Automation Engine"</tspan>, version=<tspan fill="#B87591">"2.0"</tspan>)</text>

      <text y="280" fill="#B87591">@app.post(<tspan fill="#D9DCE2">"/api/v1/automate/applicant"</tspan>)</text>
      <text y="314" fill="#B87591" font-weight="bold">async def <tspan fill="#D9DCE2">evaluate_candidate</tspan>(payload: CandidateStream):</text>
      <text y="348" fill="#D9DCE2">    <tspan fill="#B87591" font-weight="bold">async with</tspan> AdmitCrewEngine() <tspan fill="#B87591" font-weight="bold">as</tspan> team:</text>
      <text y="382" fill="#D9DCE2">        evaluation = <tspan fill="#B87591" font-weight="bold">await</tspan> team.assess_eligibility(payload)</text>
      <text y="416" fill="#D9DCE2">        <tspan fill="#B87591" font-weight="bold">if</tspan> evaluation.meets_criteria:</text>
      <text y="450" fill="#D9DCE2">            record = <tspan fill="#B87591" font-weight="bold">await</tspan> SupabaseClient.save_applicant(evaluation)</text>
      <text y="484" fill="#D9DCE2">            <tspan fill="#B87591" font-weight="bold">return</tspan> {"status": "enrolled", "id": record.id}</text>
      <text y="518" fill="#D9DCE2">        <tspan fill="#B87591" font-weight="bold">return</tspan> {"status": "review_needed", "reason": evaluation.notes}</text>
    </g>
  </g>

  <!-- Right Terminal & Module Inspect Window -->
  <g transform="translate(1260, 100)">
    <rect width="560" height="420" rx="20" fill="#250917" stroke="#B87591" stroke-width="2"/>
    <rect width="560" height="50" rx="20" fill="#381323"/>
    <text x="30" y="32" font-family="'JetBrains Mono', monospace" font-size="14" fill="#D9DCE2" font-weight="bold">
      Terminal: /home/ummama/projects
    </text>

    <g transform="translate(30, 80)" font-family="'JetBrains Mono', monospace" font-size="14">
      <text y="24" fill="#B87591">$ python3 -m pytest tests/test_automation.py</text>
      <text y="54" fill="#D9DCE2">================= 14 passed in 0.82s =================</text>
      <text y="90" fill="#B87591">$ uvicorn main:app --reload --port 8000</text>
      <text y="120" fill="#D9DCE2">INFO: Started server process [PID 4192]</text>
      <text y="146" fill="#D9DCE2">INFO: Waiting for application startup.</text>
      <text y="172" fill="#B87591">INFO: Connected to Supabase DB instance: PostgreSQL</text>
      <text y="198" fill="#D9DCE2">INFO: Application startup complete.</text>
      <text y="224" fill="#D9DCE2">INFO: Uvicorn running on http://127.0.0.1:8000</text>
    </g>
  </g>

  <!-- Right Lower: Architecture Stats -->
  <g transform="translate(1260, 560)">
    <rect width="560" height="420" rx="20" fill="#3D1527" stroke="#D9DCE2" stroke-width="1.5" stroke-opacity="0.3"/>
    <text x="36" y="50" font-family="sans-serif" font-size="18" font-weight="bold" fill="#D9DCE2">PYTHON DEVELOPMENT STACK</text>
    <line x1="36" y1="70" x2="520" y2="70" stroke="#D9DCE2" stroke-opacity="0.2"/>

    <g transform="translate(36, 100)" font-family="'JetBrains Mono', monospace" font-size="14">
      <text y="30" fill="#B87591">Core: <tspan fill="#D9DCE2">Python 3.11 • AsyncIO • Typing</tspan></text>
      <text y="70" fill="#B87591">Backend: <tspan fill="#D9DCE2">FastAPI • Pydantic v2 • Uvicorn</tspan></text>
      <text y="110" fill="#B87591">Database: <tspan fill="#D9DCE2">Supabase • PostgreSQL • RLS</tspan></text>
      <text y="150" fill="#B87591">Agents: <tspan fill="#D9DCE2">LangChain • Gemini Pro • Embeddings</tspan></text>
      <text y="190" fill="#B87591">Dev Tools: <tspan fill="#D9DCE2">Git • PyTest • Black • Flake8</tspan></text>
    </g>
  </g>
</svg>
`;

// 3. AI Agents and Intelligent Systems Image (1920 x 1080)
const svgAgents = `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad3" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#4E1B31" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#32101F" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#18040F" stop-opacity="1"/>
    </radialGradient>
    <filter id="glowAgent" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="1920" height="1080" fill="url(#bgGrad3)"/>

  <!-- Center Hub: Orchestrator Agent -->
  <g transform="translate(960, 540)">
    <!-- Radiating connection lines to outer agents -->
    <line x1="0" y1="0" x2="-480" y2="-240" stroke="#B87591" stroke-width="3" stroke-dasharray="6 6"/>
    <line x1="0" y1="0" x2="480" y2="-240" stroke="#D9DCE2" stroke-width="3" stroke-dasharray="6 6"/>
    <line x1="0" y1="0" x2="-480" y2="240" stroke="#D9DCE2" stroke-width="3" stroke-dasharray="6 6"/>
    <line x1="0" y1="0" x2="480" y2="240" stroke="#B87591" stroke-width="3" stroke-dasharray="6 6"/>

    <!-- Central Outer Pulse Circle -->
    <circle r="130" fill="none" stroke="#B87591" stroke-width="2" opacity="0.4"/>
    <circle r="100" fill="#3D1527" stroke="#D9DCE2" stroke-width="3" filter="url(#glowAgent)"/>
    <circle r="100" fill="#71334F" stroke="#D9DCE2" stroke-width="3"/>
    
    <text text-anchor="middle" y="-15" font-family="sans-serif" font-size="22" font-weight="bold" fill="#D9DCE2">
      AGENT
    </text>
    <text text-anchor="middle" y="15" font-family="sans-serif" font-size="22" font-weight="bold" fill="#D9DCE2">
      ORCHESTRATOR
    </text>
    <text text-anchor="middle" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#B87591">
      Autonomous Router
    </text>
  </g>

  <!-- Agent Node 1: AdmitCrew Admissions Agent (Top-Left) -->
  <g transform="translate(480, 300)">
    <rect x="-180" y="-80" width="360" height="160" rx="20" fill="#2C0D1B" stroke="#B87591" stroke-width="2"/>
    <circle cx="-130" cy="-20" r="24" fill="#71334F"/>
    <text x="-130" y="-12" font-family="monospace" font-size="20" fill="#D9DCE2" text-anchor="middle">🎓</text>
    <text x="-90" y="-22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2">ADMITCREW AGENT</text>
    <text x="-90" y="-4" font-family="monospace" font-size="11" fill="#B87591">Student Inquiries &amp; Pipeline</text>
    <text x="-150" y="32" font-family="monospace" font-size="12" fill="#D9DCE2">• Autonomous triage</text>
    <text x="-150" y="52" font-family="monospace" font-size="12" fill="#D9DCE2">• Requirements mapping</text>
  </g>

  <!-- Agent Node 2: StockSense AI Inventory Agent (Top-Right) -->
  <g transform="translate(1440, 300)">
    <rect x="-180" y="-80" width="360" height="160" rx="20" fill="#2C0D1B" stroke="#D9DCE2" stroke-width="2"/>
    <circle cx="-130" cy="-20" r="24" fill="#521F35"/>
    <text x="-130" y="-12" font-family="monospace" font-size="20" fill="#D9DCE2" text-anchor="middle">📊</text>
    <text x="-90" y="-22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2">STOCKSENSE AGENT</text>
    <text x="-90" y="-4" font-family="monospace" font-size="11" fill="#B87591">Threshold &amp; Reorder Logic</text>
    <text x="-150" y="32" font-family="monospace" font-size="12" fill="#D9DCE2">• Predictive reorder warnings</text>
    <text x="-150" y="52" font-family="monospace" font-size="12" fill="#D9DCE2">• Anti-underflow validation</text>
  </g>

  <!-- Agent Node 3: AI Vet Diagnostic Assistant (Bottom-Left) -->
  <g transform="translate(480, 780)">
    <rect x="-180" y="-80" width="360" height="160" rx="20" fill="#2C0D1B" stroke="#D9DCE2" stroke-width="2"/>
    <circle cx="-130" cy="-20" r="24" fill="#521F35"/>
    <text x="-130" y="-12" font-family="monospace" font-size="20" fill="#D9DCE2" text-anchor="middle">🐾</text>
    <text x="-90" y="-22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2">AI VET ASSISTANT</text>
    <text x="-90" y="-4" font-family="monospace" font-size="11" fill="#B87591">Symptom Observation Triage</text>
    <text x="-150" y="32" font-family="monospace" font-size="12" fill="#D9DCE2">• Structured safety checklist</text>
    <text x="-150" y="52" font-family="monospace" font-size="12" fill="#D9DCE2">• Vet confirmation workflow</text>
  </g>

  <!-- Agent Node 4: Vector Knowledge Engine (Bottom-Right) -->
  <g transform="translate(1440, 780)">
    <rect x="-180" y="-80" width="360" height="160" rx="20" fill="#2C0D1B" stroke="#B87591" stroke-width="2"/>
    <circle cx="-130" cy="-20" r="24" fill="#71334F"/>
    <text x="-130" y="-12" font-family="monospace" font-size="20" fill="#D9DCE2" text-anchor="middle">🧠</text>
    <text x="-90" y="-22" font-family="sans-serif" font-size="16" font-weight="bold" fill="#D9DCE2">VECTOR KNOWLEDGE</text>
    <text x="-90" y="-4" font-family="monospace" font-size="11" fill="#B87591">Supabase pgvector &amp; RAG</text>
    <text x="-150" y="32" font-family="monospace" font-size="12" fill="#D9DCE2">• Semantic similarity search</text>
    <text x="-150" y="52" font-family="monospace" font-size="12" fill="#D9DCE2">• Fast context injection</text>
  </g>
</svg>
`;

async function generateAll() {
  console.log('Rendering 3 high-res PNG image files with sharp...');

  await sharp(Buffer.from(svgAutomation))
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'ai-automation.png'));
  console.log('Created: public/images/ai-automation.png');

  await sharp(Buffer.from(svgPython))
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'python-programming.png'));
  console.log('Created: public/images/python-programming.png');

  await sharp(Buffer.from(svgAgents))
    .png({ quality: 95 })
    .toFile(path.join(outDir, 'ai-agents.png'));
  console.log('Created: public/images/ai-agents.png');

  console.log('All 3 image files physically created successfully!');
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
