import { useState, useEffect } from 'react';
import { 
  GitBranch, Server, Settings, CheckCircle, Clock, 
  AlertTriangle, RefreshCw, Layers, Shield, Cpu, ExternalLink 
} from 'lucide-react';

const CICD = () => {
  const [pipelines, setPipelines] = useState([
    { id: 1, name: 'AI Engine (Groq/OpenAI)', status: 'Success', version: 'v1.4.2', branch: 'main', uptime: '99.9%', latency: '42ms' },
    { id: 2, name: 'Model Orchestrator', status: 'In-Progress', version: 'v1.3.1', branch: 'staging', uptime: '98.5%', latency: '156ms' },
    { id: 3, name: 'Data Pipeline (Vector DB)', status: 'Success', version: 'v2.1.0', branch: 'main', uptime: '100%', latency: '12ms' },
    { id: 4, name: 'Authentication API', status: 'Success', version: 'v1.0.5', branch: 'main', uptime: '99.9%', latency: '8ms' },
    { id: 5, name: 'Supply Chain Model', status: 'Warning', version: 'v0.9.8', branch: 'dev', uptime: '94.2%', latency: '488ms' },
  ]);

  const [isDeploying, setIsDeploying] = useState(false);

  const triggerDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setPipelines(prev => prev.map(p => p.id === 2 ? { ...p, status: 'Success' } : p));
    }, 3000);
  };

  return (
    <div className="cicd-page animate-fade-in" style={{ padding: '2rem' }}>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', margin: 0, fontSize: '2.2rem' }}>
             <GitBranch color="var(--accent-primary)" size={34} /> CI/CD Pipeline
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
             Automated DevOps & Model Orchestration Dashboard
          </p>
        </div>
        
        <button 
           onClick={triggerDeploy}
           disabled={isDeploying}
           className="btn btn-primary" 
           style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1.5rem', opacity: isDeploying ? 0.7 : 1 }}
        >
          {isDeploying ? <RefreshCw className="animate-spin" size={18} /> : <Settings size={18} />}
          {isDeploying ? 'Deploying Staging...' : 'Force Global Redeploy'}
        </button>
      </header>

      {/* Top row: Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
         <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
             <Server color="var(--accent-primary)" size={40} />
             <div>
                <p style={{ margin: 0, color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>System Status</p>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Healthy</h3>
             </div>
         </div>
         <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
             <Clock color="#bd93f9" size={40} />
             <div>
                <p style={{ margin: 0, color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Mean Uptime</p>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>99.98%</h3>
             </div>
         </div>
         <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
             <Cpu color="#50fa7b" size={40} />
             <div>
                <p style={{ margin: 0, color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Resource Load</p>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>34% <span style={{ fontSize: '0.8rem', color: '#50fa7b' }}>↓ 4%</span></h3>
             </div>
         </div>
         <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
             <Shield color="#ffb86c" size={40} />
             <div>
                <p style={{ margin: 0, color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Security Patch</p>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Current</h3>
             </div>
         </div>
      </div>

      {/* Main Table */}
      <section style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <h2 style={{ fontSize: '1.1rem', margin: 0 }}>Active Microservices</h2>
             <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Auto-refresh: 5s</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
             <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                   <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
                      <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Service Name</th>
                      <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Status</th>
                      <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Version</th>
                      <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Branch</th>
                      <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Avg Latency</th>
                      <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Action</th>
                   </tr>
                </thead>
                <tbody style={{ fontSize: '0.9rem' }}>
                   {pipelines.map(p => (
                      <tr key={p.id} className="hover-row" style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s' }}>
                         <td style={{ padding: '1.25rem 1.5rem', fontWeight: 500 }}>{p.name}</td>
                         <td style={{ padding: '1.25rem 1.5rem' }}>
                            <span style={{ 
                               display: 'inline-flex', 
                               alignItems: 'center', 
                               gap: '0.4rem', 
                               padding: '0.2rem 0.6rem', 
                               borderRadius: '100px', 
                               fontSize: '0.75rem',
                               fontWeight: 600,
                               background: p.status === 'Success' ? 'rgba(80,250,123,0.1)' : p.status === 'In-Progress' ? 'rgba(255,184,108,0.1)' : 'rgba(255,85,85,0.1)',
                               color: p.status === 'Success' ? '#50fa7b' : p.status === 'In-Progress' ? '#ffb86c' : '#ff5555',
                               border: p.status === 'Success' ? '1px solid rgba(80,250,123,0.3)' : '1px solid rgba(255,184,108,0.3)'
                            }}>
                               {p.status === 'Success' ? <CheckCircle size={12}/> : p.status === 'In-Progress' ? <RefreshCw className="animate-spin" size={12}/> : <AlertTriangle size={12}/>}
                               {p.status}
                            </span>
                         </td>
                         <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{p.version}</td>
                         <td style={{ padding: '1.25rem 1.5rem', color: 'var(--accent-primary)' }}>{p.branch}</td>
                         <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-primary)' }}>{p.latency}</td>
                         <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                            <button style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer' }}>
                               <ExternalLink size={16} />
                            </button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
      </section>

      {/* Orchestration Map snippet */}
      <section style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ marginTop: 0, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={16} /> Cluster Allocation
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                  {[
                    { label: 'Cloud-1 (Virginia)', val: 80, color: 'var(--accent-primary)' },
                    { label: 'Cloud-2 (Tokyo)', val: 45, color: '#bd93f9' },
                    { label: 'Edge-1 (London)', val: 92, color: '#ffb86c' }
                  ].map(c => (
                    <div key={c.label}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                          <span>{c.label}</span>
                          <span>{c.val}%</span>
                       </div>
                       <div style={{ height: '6px', width: '100%', background: 'var(--bg-primary)', borderRadius: '10px' }}>
                          <div style={{ height: '100%', width: `${c.val}%`, background: c.color, borderRadius: '10px', transition: 'width 1s ease-in-out' }}></div>
                       </div>
                    </div>
                  ))}
              </div>
          </div>
          <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
               <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'rgba(80,250,123,0.1)', color: '#50fa7b', marginBottom: '1rem' }}>
                  <CheckCircle size={40} />
               </div>
               <h3 style={{ margin: 0 }}>Auto-Optimization Active</h3>
               <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', maxWidth: '300px', marginTop: '0.5rem' }}>
                  NexusAI is currently balancing workloads across 3 global inference clusters for 0% downtime.
               </p>
          </div>
      </section>
    </div>
  );
};

export default CICD;
