import React from 'react';
import { 
  Package, Database, ArrowRight, ShieldCheck, CheckCircle2, 
  Sparkles, Users, FileCheck, Layers, Bot, Send, 
  Terminal, Play, Cpu, Workflow, GitBranch, RefreshCw, Layout, 
  Code2, ExternalLink, Activity
} from 'lucide-react';

interface ProjectVisualProps {
  type: 'stocksense' | 'admitcrew' | 'aivet' | 'python' | 'automation' | 'portfolio';
  title: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, title }) => {
  switch (type) {
    case 'stocksense':
      return (
        <div className="w-full h-64 sm:h-72 rounded-xl bg-[#381323] border border-[#D9DCE2]/25 p-4 flex flex-col justify-between overflow-hidden relative shadow-inner select-none font-sans">
          {/* Mock Window Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9E5370]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#521F35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9DCE2]" />
              <span className="text-xs font-semibold text-[#D9DCE2] ml-2 tracking-wide">StockSense // AI Dashboard</span>
            </div>
            <div className="text-[11px] font-mono text-[#9E5370] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded">
              Role: Manager [Full Audit]
            </div>
          </div>

          {/* Metric Row */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/15">
              <div className="text-[10px] text-[#D9DCE2]/70 font-medium">Active SKUs</div>
              <div className="text-lg font-bold text-[#D9DCE2] font-serif">1,420</div>
              <div className="text-[9px] text-[#9E5370] font-medium flex items-center gap-0.5 mt-0.5">
                <Database className="w-2.5 h-2.5" /> Supabase Synced
              </div>
            </div>
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/15">
              <div className="text-[10px] text-[#D9DCE2]/70 font-medium">Reorder Alerts</div>
              <div className="text-lg font-bold text-[#D9DCE2] font-serif">4 Items</div>
              <div className="text-[9px] text-[#9E5370] font-medium flex items-center gap-0.5 mt-0.5">
                <ShieldCheck className="w-2.5 h-2.5" /> No Neg-Stock
              </div>
            </div>
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/15">
              <div className="text-[10px] text-[#D9DCE2]/70 font-medium">AI Queries Today</div>
              <div className="text-lg font-bold text-[#D9DCE2] font-serif">86 Requests</div>
              <div className="text-[9px] text-[#9E5370] font-medium flex items-center gap-0.5 mt-0.5">
                <Sparkles className="w-2.5 h-2.5" /> FastAPI Ready
              </div>
            </div>
          </div>

          {/* AI Chat & Table Slice */}
          <div className="bg-[#44182B] rounded-lg p-2.5 border border-[#D9DCE2]/15 text-xs space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-[#D9DCE2]/90 pb-1 border-b border-[#D9DCE2]/15">
              <span className="font-semibold flex items-center gap-1">
                <Package className="w-3.5 h-3.5 text-[#9E5370]" /> Inventory Query
              </span>
              <span className="font-mono text-[10px] text-[#9E5370]">FastAPI + Supabase RLS</span>
            </div>
            <div className="bg-[#2C0D1B] p-2 rounded text-[11px] text-[#D9DCE2] flex items-center justify-between border border-[#D9DCE2]/15">
              <span className="italic text-[#D9DCE2]/90">"Show stock status for Grade-A Cotton yarn batches"</span>
              <span className="bg-[#9E5370] text-[#2C0D1B] text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">Verified</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#D9DCE2]/80 pt-0.5">
              <span>Remaining: <strong className="text-white">320 units</strong> · Threshold: 50 · Margin protected</span>
              <span className="text-[#9E5370] font-semibold">Ready for dispatch</span>
            </div>
          </div>
        </div>
      );

    case 'admitcrew':
      return (
        <div className="w-full h-64 sm:h-72 rounded-xl bg-[#381323] border border-[#D9DCE2]/25 p-4 flex flex-col justify-between overflow-hidden relative shadow-inner select-none font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9E5370]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#521F35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9DCE2]" />
              <span className="text-xs font-semibold text-[#D9DCE2] ml-2 tracking-wide">AdmitCrew // Multi-Agent Pipeline</span>
            </div>
            <div className="text-[11px] font-mono text-[#9E5370] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded flex items-center gap-1">
              <Bot className="w-3 h-3 text-[#9E5370]" /> 3 Agents Active
            </div>
          </div>

          {/* Agent Pipeline Flow */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-[#44182B] p-2 rounded-lg border border-[#D9DCE2]/15 text-center">
              <div className="w-6 h-6 mx-auto rounded-full bg-[#2C0D1B] border border-[#D9DCE2]/15 flex items-center justify-center text-[#9E5370] mb-1">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-semibold text-[#D9DCE2]">Greeter Agent</div>
              <div className="text-[9px] text-[#D9DCE2]/70">WhatsApp / Web Inquiry</div>
              <div className="mt-1 text-[9px] font-mono text-[#9E5370] bg-[#2C0D1B] rounded py-0.5">Inquiry intake</div>
            </div>

            <div className="bg-[#44182B] p-2 rounded-lg border border-[#D9DCE2]/15 text-center">
              <div className="w-6 h-6 mx-auto rounded-full bg-[#2C0D1B] border border-[#D9DCE2]/15 flex items-center justify-center text-[#D9DCE2] mb-1">
                <FileCheck className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-semibold text-[#D9DCE2]">Docs Screener</div>
              <div className="text-[9px] text-[#D9DCE2]/70">IELTS, Transcripts, SOP</div>
              <div className="mt-1 text-[9px] font-mono text-[#D9DCE2] bg-[#2C0D1B] rounded py-0.5">Checklist match</div>
            </div>

            <div className="bg-[#44182B] p-2 rounded-lg border border-[#D9DCE2]/15 text-center">
              <div className="w-6 h-6 mx-auto rounded-full bg-[#9E5370] text-[#2C0D1B] flex items-center justify-center mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-semibold text-[#D9DCE2]">Human Review</div>
              <div className="text-[9px] text-[#D9DCE2]/70">Counselor Sign-off</div>
              <div className="mt-1 text-[9px] font-mono text-[#9E5370] bg-[#2C0D1B] rounded py-0.5">High-intent lead</div>
            </div>
          </div>

          {/* Active Intake Dialogue preview */}
          <div className="bg-[#44182B] rounded-lg p-2.5 border border-[#D9DCE2]/15 text-xs">
            <div className="flex items-center justify-between text-[10px] text-[#D9DCE2]/80 pb-1">
              <span>Candidate: <strong className="text-white">ICS Grad / UK BSc Computing</strong></span>
              <span className="text-[#9E5370] font-semibold">Qualified for Spring 2027</span>
            </div>
            <div className="text-[11px] text-[#D9DCE2] bg-[#2C0D1B] border border-[#D9DCE2]/15 p-1.5 rounded flex items-center justify-between">
              <span>Automated response draft generated · Handover to counselor queued</span>
              <ArrowRight className="w-3 h-3 text-[#9E5370]" />
            </div>
          </div>
        </div>
      );

    case 'aivet':
      return (
        <div className="w-full h-64 sm:h-72 rounded-xl bg-[#381323] border border-[#D9DCE2]/25 p-4 flex flex-col justify-between overflow-hidden relative shadow-inner select-none font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9E5370]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#521F35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9DCE2]" />
              <span className="text-xs font-semibold text-[#D9DCE2] ml-2 tracking-wide">AI Vet Agent // Triage Interface</span>
            </div>
            <div className="text-[11px] font-mono text-[#9E5370] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded flex items-center gap-1">
              <Activity className="w-3 h-3 text-[#9E5370]" /> Non-Diagnostic Triage
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/15">
              <div className="text-[10px] text-[#D9DCE2]/70 font-medium">Pet Patient Card</div>
              <div className="text-sm font-bold text-[#D9DCE2] mt-0.5">Milo · Golden Retriever (3y)</div>
              <div className="text-[10px] text-[#D9DCE2]/75 mt-1 space-y-0.5">
                <div>• Weight: 31.4 kg · Diet: Dry Kibble</div>
                <div>• Symptoms: Lethargy, limping on front right paw</div>
              </div>
            </div>
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/15 flex flex-col justify-between">
              <div>
                <div className="text-[10px] text-[#D9DCE2]/70 font-medium">Visual Observation Notes</div>
                <div className="text-[11px] text-[#9E5370] font-semibold mt-1">Image input processed</div>
                <div className="text-[10px] text-[#D9DCE2]/75 mt-0.5">Mild swelling detected around pad. No bleeding visible.</div>
              </div>
              <div className="text-[9px] font-mono text-[#D9DCE2] bg-[#2C0D1B] border border-[#D9DCE2]/15 px-2 py-0.5 rounded mt-1">
                Triage: Non-critical, schedule clinic visit
              </div>
            </div>
          </div>

          <div className="bg-[#44182B] rounded-lg p-2.5 border border-[#D9DCE2]/15 text-xs">
            <div className="flex items-center justify-between text-[11px] text-[#D9DCE2]">
              <span className="font-semibold">Veterinary Clinic Handover Briefing</span>
              <span className="text-[10px] text-[#9E5370] font-mono">Formatted for Doctor</span>
            </div>
            <div className="text-[10px] text-[#D9DCE2]/70 mt-1 italic">
              "Structured summary generated with temperature timeline and photo observations for attending vet."
            </div>
          </div>
        </div>
      );

    case 'python':
      return (
        <div className="w-full h-64 sm:h-72 rounded-xl bg-[#381323] border border-[#D9DCE2]/25 p-4 flex flex-col justify-between overflow-hidden relative shadow-inner select-none font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9E5370]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#521F35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9DCE2]" />
              <span className="text-xs font-semibold text-[#D9DCE2] ml-2 tracking-wide font-sans">python_workspace // interactive_modules</span>
            </div>
            <div className="text-[10px] text-[#D9DCE2] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded flex items-center gap-1 font-mono">
              <Play className="w-2.5 h-2.5 fill-[#9E5370]" /> py 3.12
            </div>
          </div>

          <div className="bg-[#2C0D1B] rounded-lg p-3 border border-[#D9DCE2]/15 text-[11px] text-[#D9DCE2] space-y-1 overflow-x-auto">
            <div className="text-[#9E5370]">// Student Data CRUD & Game Loop Core</div>
            <div><span className="text-[#9E5370] font-bold">class</span> <span className="text-white font-semibold">StudentManager</span>:</div>
            <div className="pl-4">def __init__(self, db_source='students.json'):</div>
            <div className="pl-8">self.records = self.load_records(db_source)</div>
            <div className="pl-4">def update_grade(self, roll_no, marks_dict):</div>
            <div className="pl-8 text-[#D9DCE2]/70">record = self.lookup_by_id(roll_no)</div>
            <div className="pl-8 text-[#9E5370]">return record.calculate_gpa()</div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-sans">
            <div className="bg-[#44182B] p-1.5 rounded border border-[#D9DCE2]/15 text-[#D9DCE2]">
              <div className="font-bold">Space Shooter</div>
              <div className="text-[9px] text-[#9E5370]">Pygame 60fps Loop</div>
            </div>
            <div className="bg-[#44182B] p-1.5 rounded border border-[#D9DCE2]/15 text-[#D9DCE2]">
              <div className="font-bold">Student DB</div>
              <div className="text-[9px] text-[#9E5370]">Full CRUD Operations</div>
            </div>
            <div className="bg-[#44182B] p-1.5 rounded border border-[#D9DCE2]/15 text-[#D9DCE2]">
              <div className="font-bold">3D Black Hole</div>
              <div className="text-[9px] text-[#9E5370]">Vector Geometry</div>
            </div>
          </div>
        </div>
      );

    case 'automation':
      return (
        <div className="w-full h-64 sm:h-72 rounded-xl bg-[#381323] border border-[#D9DCE2]/25 p-4 flex flex-col justify-between overflow-hidden relative shadow-inner select-none font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9E5370]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#521F35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9DCE2]" />
              <span className="text-xs font-semibold text-[#D9DCE2] ml-2 tracking-wide">QuickFix // Workflow Pipeline</span>
            </div>
            <div className="text-[11px] font-mono text-[#9E5370] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded flex items-center gap-1">
              <Workflow className="w-3 h-3 text-[#9E5370]" /> Webhook Listener
            </div>
          </div>

          {/* Workflow nodes diagram */}
          <div className="flex items-center justify-between gap-1 my-2">
            <div className="bg-[#44182B] p-2 rounded-lg border border-[#D9DCE2]/15 text-center flex-1">
              <div className="text-[9px] font-mono text-[#9E5370]">EVENT INGEST</div>
              <div className="text-[11px] font-bold text-[#D9DCE2] mt-0.5">Webhook Trigger</div>
              <div className="text-[9px] text-[#D9DCE2]/60">HTTP POST payload</div>
            </div>

            <ArrowRight className="w-3.5 h-3.5 text-[#9E5370] shrink-0" />

            <div className="bg-[#44182B] p-2 rounded-lg border border-[#D9DCE2]/15 text-center flex-1">
              <div className="text-[9px] font-mono text-[#9E5370]">AI PARSER</div>
              <div className="text-[11px] font-bold text-[#D9DCE2] mt-0.5">Schema Extract</div>
              <div className="text-[9px] text-[#D9DCE2]/60">Pydantic validation</div>
            </div>

            <ArrowRight className="w-3.5 h-3.5 text-[#9E5370] shrink-0" />

            <div className="bg-[#44182B] p-2 rounded-lg border border-[#D9DCE2]/15 text-center flex-1">
              <div className="text-[9px] font-mono text-[#D9DCE2]">HUMAN GATE</div>
              <div className="text-[11px] font-bold text-[#D9DCE2] mt-0.5">One-Click Review</div>
              <div className="text-[9px] text-[#D9DCE2]/60">Approval loop</div>
            </div>
          </div>

          <div className="bg-[#44182B] rounded-lg p-2.5 border border-[#D9DCE2]/15 text-xs">
            <div className="flex items-center justify-between text-[11px] text-[#D9DCE2]">
              <span className="font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9E5370]" /> Automated Outcome
              </span>
              <span className="font-mono text-[10px] text-[#9E5370]">0 Data Loss · DB Synced</span>
            </div>
            <div className="text-[10px] text-[#D9DCE2]/70 mt-1">
              Document parsed, CRM table populated, conditional WhatsApp confirmation scheduled.
            </div>
          </div>
        </div>
      );

    case 'portfolio':
    default:
      return (
        <div className="w-full h-64 sm:h-72 rounded-xl bg-[#381323] border border-[#D9DCE2]/25 p-4 flex flex-col justify-between overflow-hidden relative shadow-inner select-none font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9E5370]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#521F35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9DCE2]" />
              <span className="text-xs font-semibold text-[#D9DCE2] ml-2 tracking-wide">Signature Palette // Dark Plum & Silver</span>
            </div>
            <div className="text-[11px] font-mono text-[#9E5370] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded flex items-center gap-1">
              <Layout className="w-3 h-3 text-[#9E5370]" /> React 19 + Vite
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 my-2 text-center text-xs">
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/20">
              <div className="w-4 h-4 rounded-full bg-[#521F35] border-2 border-[#D9DCE2] mx-auto mb-1" />
              <div className="text-[11px] font-semibold text-[#D9DCE2]">Darker Plum</div>
              <div className="text-[9px] font-mono text-[#D9DCE2]/70">#521F35</div>
            </div>
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/20">
              <div className="w-4 h-4 rounded-full bg-[#D9DCE2] border-2 border-[#9E5370] mx-auto mb-1 shadow-[0_0_8px_#D9DCE2]" />
              <div className="text-[11px] font-semibold text-[#D9DCE2]">Shiny Silver</div>
              <div className="text-[9px] font-mono text-[#D9DCE2]/70">#D9DCE2</div>
            </div>
            <div className="bg-[#44182B] p-2.5 rounded-lg border border-[#D9DCE2]/20">
              <div className="w-4 h-4 rounded-full bg-[#9E5370] border-2 border-white mx-auto mb-1 shadow-[0_0_8px_#9E5370]" />
              <div className="text-[11px] font-semibold text-[#D9DCE2]">Darker Luxora</div>
              <div className="text-[9px] font-mono text-[#9E5370]">#9E5370</div>
            </div>
          </div>

          <div className="bg-[#44182B] rounded-lg p-2.5 border border-[#D9DCE2]/15 text-xs">
            <div className="flex items-center justify-between text-[11px] text-[#D9DCE2]">
              <span className="font-semibold">Deep Velvet Plum Surfaces & Metallic Highlights</span>
              <span className="font-mono text-[10px] text-[#9E5370]">Tailwind v4</span>
            </div>
            <div className="text-[10px] text-[#D9DCE2]/70 mt-1">
              Editorial typography pairing Cormorant Garamond with Plus Jakarta Sans.
            </div>
          </div>
        </div>
      );
  }
};
