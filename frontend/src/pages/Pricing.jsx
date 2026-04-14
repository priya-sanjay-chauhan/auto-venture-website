import { Check, X, Shield, Zap, Sparkles, History, Trash2, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const { user, history, loadAnalysis, deleteAnalysis } = useAppContext();
  const navigate = useNavigate();

  const handleLoad = (id) => {
    loadAnalysis(id);
    navigate('/dashboard');
  };

  const plans = [
    {
      name: 'Starter',
      desc: 'Perfect for early-stage founders validating a single idea.',
      price: annual ? 29 : 39,
      icon: <Sparkles color="var(--accent-primary)" size={24} />,
      color: 'var(--accent-primary)',
      features: [
        { name: '1 Startup Analysis per month', included: true },
        { name: 'Basic Market & Financial Agents', included: true },
        { name: 'Standard Risk Heatmap', included: true },
        { name: 'OmniGuard Monitoring', included: false },
        { name: 'Supply Chain Simulation', included: false },
        { name: 'Advanced Multi-Agent Mode', included: false },
      ]
    },
    {
      name: 'Pro',
      desc: 'For growing teams requiring continuous validation.',
      price: annual ? 79 : 99,
      isPopular: true,
      icon: <Zap color="var(--accent-success)" size={24} />,
      color: 'var(--accent-success)',
      features: [
        { name: '5 Startup Analyses per month', included: true },
        { name: 'All 6 AI Analysis Agents', included: true },
        { name: 'Detailed Risk & Growth metrics', included: true },
        { name: 'OmniGuard Monitoring (Standard)', included: true },
        { name: 'Supply Chain Simulation (Regional)', included: true },
        { name: 'Advanced Multi-Agent Mode', included: false },
      ]
    },
    {
      name: 'Enterprise',
      desc: 'Full-scale autonomous protection and deep logistics.',
      price: annual ? 249 : 299,
      icon: <Shield color="var(--accent-warning)" size={24} />,
      color: 'var(--accent-warning)',
      features: [
        { name: 'Unlimited Analyses', included: true },
        { name: 'Custom AI Agents Configuration', included: true },
        { name: 'Predictive Multi-Market testing', included: true },
        { name: 'OmniGuard Self-Healing Pipelines', included: true },
        { name: 'Global Supply Chain Simulation', included: true },
        { name: 'Advanced Multi-Agent API', included: true },
      ]
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 2rem 4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple, transparent pricing</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Choose the plan that best fits your needs. Upgrade or downgrade at any time.
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--bg-tertiary)', padding: '0.3rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
          <button 
            className={`btn ${!annual ? 'btn-primary' : ''}`}
            style={{ padding: '0.5rem 1.5rem', background: !annual ? 'var(--bg-secondary)' : 'transparent', color: !annual ? 'var(--text-primary)' : 'var(--text-secondary)', boxShadow: !annual ? 'var(--shadow-sm)' : 'none' }}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button 
            className={`btn ${annual ? 'btn-primary' : ''}`}
            style={{ padding: '0.5rem 1.5rem', background: annual ? 'var(--bg-secondary)' : 'transparent', color: annual ? 'var(--text-primary)' : 'var(--text-secondary)', boxShadow: annual ? 'var(--shadow-sm)' : 'none' }}
            onClick={() => setAnnual(true)}
          >
            Annually <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-success)', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px', marginLeft: '0.5rem' }}>Save 20%</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {plans.map((plan, i) => (
          <div key={i} className="glass-panel" style={{ 
            padding: '2.5rem 2rem', 
            position: 'relative',
            transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
            border: plan.isPopular ? `2px solid ${plan.color}` : '1px solid var(--border-color)',
            boxShadow: plan.isPopular ? '0 10px 40px -10px rgba(16, 185, 129, 0.2)' : 'var(--shadow-lg)',
            zIndex: plan.isPopular ? 10 : 1
          }}>
            {plan.isPopular && (
               <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: plan.color, color: 'white', padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                 MOST POPULAR
               </div>
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', background: `${plan.color}22`, borderRadius: 'var(--radius-md)' }}>
                {plan.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{plan.name}</h3>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', minHeight: '3rem', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.5 }}>
              {plan.desc}
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>${plan.price}</span>
              <span style={{ color: 'var(--text-secondary)' }}>/mo</span>
            </div>

            <button 
              className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`} 
              style={{ width: '100%', padding: '1rem', marginBottom: '2.5rem', background: plan.isPopular ? plan.color : 'var(--bg-tertiary)', border: plan.isPopular ? 'none' : '1px solid var(--border-color)' }}
            >
              Get Started
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {plan.features.map((feature, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: feature.included ? 1 : 0.5 }}>
                  {feature.included ? (
                    <Check size={18} color={plan.color} />
                  ) : (
                    <X size={18} color="var(--text-tertiary)" />
                  )}
                  <span style={{ fontSize: '0.9rem', color: feature.included ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* History section for logged-in users */}
      {user && (
        <section style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
             <div>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', margin: 0 }}>
                   <History color="var(--accent-primary)" /> Analysis History
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Your previous ventures and their stored analysis results.</p>
             </div>
             <button className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>Download Data</button>
          </div>

          {history.length === 0 ? (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-tertiary)' }}>
               No saved analyses found. Start your first analysis to see it here!
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
               {history.map(item => (
                 <div key={item.id} className="glass-panel hover-row" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                       <div style={{ 
                         width: '40px', height: '40px', 
                         background: 'rgba(99, 102, 241, 0.1)', 
                         borderRadius: '8px', 
                         display: 'flex', alignItems: 'center', justifyContent: 'center',
                         color: 'var(--accent-primary)',
                         fontWeight: 'bold'
                       }}>
                          {item.metrics?.successScore || '??'}
                       </div>
                       <div>
                          <h4 style={{ margin: 0, fontSize: '1.05rem' }}>{item.inputs?.idea || 'Untitled Analysis'}</h4>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{item.timestamp} • {item.inputs?.field || 'General'}</span>
                       </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                       <button onClick={() => handleLoad(item.id)} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <ExternalLink size={14} /> Resume
                       </button>
                       <button onClick={() => deleteAnalysis(item.id)} className="btn btn-secondary" style={{ padding: '0.5rem', color: 'var(--accent-danger)' }}>
                          <Trash2 size={14} />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Pricing;
