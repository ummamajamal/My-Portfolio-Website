import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid 
} from 'recharts';
import { BarChart3, Clock, Zap, Cpu, Terminal } from 'lucide-react';

interface MetricItem {
  name: string;
  shortName: string;
  type: 'Python' | 'AI Automation' | 'Hybrid';
  complexity: number; // 0 - 100 scale
  timeHours: number;   // Hours spent
  description: string;
}

const METRICS_DATA: MetricItem[] = [
  {
    name: 'AI Automation Workflows',
    shortName: 'AI Workflows',
    type: 'AI Automation',
    complexity: 88,
    timeHours: 68,
    description: 'Webhook triggers, async event pipelines & multi-agent routing'
  },
  {
    name: 'Python Systems & FastAPIs',
    shortName: 'Python Core',
    type: 'Python',
    complexity: 84,
    timeHours: 85,
    description: 'FastAPI services, Pydantic validation & negative inventory logic'
  },
  {
    name: 'Intelligent Agent Teams',
    shortName: 'Agent Teams',
    type: 'AI Automation',
    complexity: 92,
    timeHours: 74,
    description: 'AdmitCrew multi-agent consensus & LLM decision structuring'
  },
  {
    name: 'Python Data Persistence',
    shortName: 'Data & RLS',
    type: 'Python',
    complexity: 78,
    timeHours: 58,
    description: 'Supabase PostgreSQL, Row-Level Security & schema integrity'
  },
  {
    name: 'AI Vet Diagnostic Assistant',
    shortName: 'AI Vet Logic',
    type: 'AI Automation',
    complexity: 86,
    timeHours: 62,
    description: 'Clinical triage checklist, symptom observation & safeguards'
  }
];

export const ProjectMetricsChart: React.FC = () => {
  const [filterType, setFilterType] = useState<'All' | 'Python' | 'AI Automation'>('All');

  const filteredData = METRICS_DATA.filter(item => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  // Calculate totals
  const totalHours = filteredData.reduce((acc, curr) => acc + curr.timeHours, 0);
  const avgComplexity = Math.round(
    filteredData.reduce((acc, curr) => acc + curr.complexity, 0) / (filteredData.length || 1)
  );

  return (
    <div className="mt-16 bg-[#381323] rounded-2xl border-2 border-[#D9DCE2]/20 p-6 sm:p-8 shadow-xl">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D9DCE2]/15">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E5370]">
            <BarChart3 className="w-4 h-4" />
            <span>Engineering Analytics</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#D9DCE2] mt-1">
            Project Complexity & Time Investment Breakdown
          </h3>
          <p className="text-xs sm:text-sm text-[#D9DCE2]/75 mt-1 max-w-xl">
            Visualizing technical complexity (0–100 scale) versus development hours invested across Python systems and AI Automation pipelines.
          </p>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#2C0D1B] rounded-xl border border-[#D9DCE2]/15 self-start md:self-auto">
          {(['All', 'Python', 'AI Automation'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilterType(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === tab
                  ? 'bg-[#9E5370] text-[#2C0D1B] font-bold shadow-md'
                  : 'text-[#D9DCE2]/70 hover:text-[#D9DCE2] hover:bg-[#4E1B31]'
              }`}
            >
              {tab === 'All' ? 'All Types' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Summary KPI Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
        <div className="p-3.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/15">
          <div className="text-[11px] font-mono text-[#D9DCE2]/70 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#9E5370]" /> Total Time
          </div>
          <div className="text-xl font-serif font-bold text-[#D9DCE2] mt-1">{totalHours} hrs</div>
          <div className="text-[10px] text-[#9E5370] mt-0.5">Tracked dev hours</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/15">
          <div className="text-[11px] font-mono text-[#D9DCE2]/70 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#9E5370]" /> Avg Complexity
          </div>
          <div className="text-xl font-serif font-bold text-[#D9DCE2] mt-1">{avgComplexity} / 100</div>
          <div className="text-[10px] text-[#9E5370] mt-0.5">High-impact architectures</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/15">
          <div className="text-[11px] font-mono text-[#D9DCE2]/70 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#9E5370]" /> Python Focus
          </div>
          <div className="text-xl font-serif font-bold text-[#D9DCE2] mt-1">143 hrs</div>
          <div className="text-[10px] text-[#9E5370] mt-0.5">Async FastAPI & Ledgers</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/15">
          <div className="text-[11px] font-mono text-[#D9DCE2]/70 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#9E5370]" /> AI Automation
          </div>
          <div className="text-xl font-serif font-bold text-[#D9DCE2] mt-1">204 hrs</div>
          <div className="text-[10px] text-[#9E5370] mt-0.5">Pipelines & Agent Teams</div>
        </div>
      </div>

      {/* Responsive Recharts Bar Chart */}
      <div className="h-72 sm:h-80 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{ top: 20, right: 20, left: -10, bottom: 25 }}
            barCategoryGap="25%"
          >
            <CartesianGrid 
              stroke="#D9DCE2" 
              strokeOpacity={0.12} 
              strokeDasharray="4 4" 
              vertical={false} 
            />

            <XAxis 
              dataKey="shortName" 
              stroke="#D9DCE2" 
              fontSize={11} 
              tickLine={false}
              axisLine={{ stroke: '#D9DCE2', strokeOpacity: 0.25 }}
              dy={8}
            />

            <YAxis 
              stroke="#D9DCE2" 
              fontSize={11} 
              tickLine={false}
              axisLine={{ stroke: '#D9DCE2', strokeOpacity: 0.25 }}
            />

            <Tooltip 
              cursor={{ fill: 'rgba(217, 220, 226, 0.05)' }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const dataItem = payload[0].payload as MetricItem;
                  return (
                    <div className="bg-[#2C0D1B] border-2 border-[#D9DCE2]/25 p-3 rounded-xl shadow-2xl text-left text-xs min-w-[200px]">
                      <div className="font-bold text-[#D9DCE2] text-sm font-serif">{dataItem.name}</div>
                      <div className="text-[10px] font-mono text-[#9E5370] mb-2">{dataItem.type} Focus</div>
                      
                      <div className="space-y-1.5 pt-1 border-t border-[#D9DCE2]/15">
                        <div className="flex items-center justify-between text-[#D9DCE2]">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-sm bg-[#9E5370]" />
                            <span>Complexity Score:</span>
                          </span>
                          <span className="font-bold font-mono text-[#9E5370]">{dataItem.complexity} / 100</span>
                        </div>

                        <div className="flex items-center justify-between text-[#D9DCE2]">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-sm bg-[#D9DCE2]" />
                            <span>Time Invested:</span>
                          </span>
                          <span className="font-bold font-mono text-[#D9DCE2]">{dataItem.timeHours} Hours</span>
                        </div>
                      </div>

                      <div className="text-[10px] text-[#D9DCE2]/65 mt-2 italic border-t border-[#D9DCE2]/10 pt-1.5">
                        {dataItem.description}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Legend 
              wrapperStyle={{ paddingTop: '16px' }}
              formatter={(value) => {
                const label = value === 'complexity' ? 'Technical Complexity (0-100)' : 'Time Spent (Hours)';
                return <span className="text-xs font-semibold text-[#D9DCE2] ml-1">{label}</span>;
              }}
            />

            {/* Bar 1: Complexity in Luxura Rose #9E5370 */}
            <Bar 
              dataKey="complexity" 
              name="complexity"
              fill="#9E5370" 
              radius={[6, 6, 0, 0]} 
            />

            {/* Bar 2: Time Invested in Shiny Silver #D9DCE2 */}
            <Bar 
              dataKey="timeHours" 
              name="timeHours"
              fill="#D9DCE2" 
              radius={[6, 6, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
