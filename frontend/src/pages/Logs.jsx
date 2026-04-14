import { useState, useEffect, useRef } from 'react';
import { Terminal, Search, Trash2, StopCircle, PlayCircle, Download } from 'lucide-react';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Simulation logic for live system logs
  useEffect(() => {
    if (isPaused) return;

    const logTypes = ['INFO', 'WARN', 'ERROR', 'DEBUG', 'SYSTEM'];
    const services = ['AI_ENGINE', 'SERVER', 'AUTH_GATEWAY', 'ML_PIPELINE', 'DATA_LAYER'];
    const actions  = [
      'Token processing...', 
      'Embedding generated', 
      'Vector search completed', 
      'User authenticated', 
      'Heatmap updated', 
      'Cache hit: Analysis-ID-3921',
      'API Request: /api/analyze',
      'Model switch: llama-3.3-70b-versatile',
      'Memory cleanup: 1.2MB freed'
    ];

    const generateLog = () => {
      const type = logTypes[Math.floor(Math.random() * logTypes.length)];
      const service = services[Math.floor(Math.random() * services.length)];
      const msg = actions[Math.floor(Math.random() * actions.length)];
      const id = Date.now() + Math.random();

      setLogs(prev => [...prev, {
        id,
        timestamp: new Date().toLocaleTimeString(),
        type,
        service,
        msg
      }].slice(-100)); // Keep last 100 logs
    };

    const interval = setInterval(generateLog, 1500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const filteredLogs = logs.filter(l => 
    l.msg.toLowerCase().includes(filter.toLowerCase()) || 
    l.type.toLowerCase().includes(filter.toLowerCase()) ||
    l.service.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="logs-page animate-fade-in" style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem' }}>
      
      {/* Header section */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: 0 }}>
            <Terminal color="var(--accent-primary)" /> System Logs
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>
            Live diagnostic stream from NexusAI infrastructure
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => setIsPaused(!isPaused)} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {isPaused ? <PlayCircle size={16} /> : <StopCircle size={16} />}
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          <button onClick={() => setLogs([])} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-danger)' }}>
            <Trash2 size={16} /> Clear
          </button>
        </div>
      </header>

      {/* Toolbar */}
      <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
         <div style={{ position: 'relative', flex: 1 }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input 
              type="text" 
              placeholder="Filter logs by message, service or level..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
            />
         </div>
         <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', background: 'var(--bg-primary)', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
            {filteredLogs.length} Entries Shown
         </div>
      </div>

      {/* Terminal Display */}
      <section 
        ref={scrollRef}
        style={{ 
          flex: 1, 
          background: '#0a0a0a', 
          borderRadius: 'var(--radius-md)', 
          border: '1px solid var(--border-color)', 
          padding: '1.25rem', 
          overflowY: 'auto',
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.85rem',
          lineHeight: 1.6
        }}
      >
        {filteredLogs.length === 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
            No logs currently in buffer...
          </div>
        ) : (
          filteredLogs.map(log => (
            <div key={log.id} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #222', padding: '0.2rem 0' }}>
              <span style={{ color: '#666', flexShrink: 0 }}>[{log.timestamp}]</span>
              <span style={{ 
                color: log.type === 'ERROR' ? '#ff5555' : 
                      log.type === 'WARN'  ? '#ffb86c' : 
                      log.type === 'INFO'  ? '#50fa7b' : 
                      log.type === 'DEBUG' ? '#bd93f9' : '#8be9fd',
                fontWeight: 600,
                width: '60px',
                flexShrink: 0
              }}>
                {log.type}
              </span>
              <span style={{ color: '#ff79c6', fontWeight: 500, flexShrink: 0 }}>[{log.service}]</span>
              <span style={{ color: '#f8f8f2' }}>{log.msg}</span>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Logs;
