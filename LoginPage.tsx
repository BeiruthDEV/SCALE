import { useState, FormEvent } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

  /* ── NOVO BACKGROUND: AMBIENTE DE GINÁSIO HARDCORE ── */
  .il-page-bg {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    position: relative;
    font-family: 'DM Sans', sans-serif;
    
    /* Cor base super escura */
    background-color: #050505;
    background-image: 
      /* 1. Vinheta escura e pesada nas bordas para focar a atenção no centro */
      radial-gradient(ellipse at center, rgba(5,5,5,0.2) 0%, #050505 100%),
      /* 2. Filtro laranja sutil da marca IronLog cruzando a tela */
      linear-gradient(135deg, rgba(255, 90, 40, 0.15) 0%, rgba(5, 5, 5, 0.8) 100%),
      /* 3. Imagem real de anilhas/ferro (Unsplash livre de direitos) */
      url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop');
    
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* Essa propriedade mistura as cores do gradiente com a foto para não ficar estourada */
    background-blend-mode: multiply, normal, normal;
  }

  /* Atualize a classe .il-root para o efeito de vidro */
  .il-root {
    width: 100%;
    max-width: 900px;
    min-height: 600px;
    /* Fundo semi-transparente para o Glassmorphism */
    background: rgba(13, 13, 15, 0.65); 
    /* Desfoque do fundo que passa por trás do card */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    color: #f0ede8;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    /* Borda ligeiramente mais clara e translúcida para realçar o efeito de vidro */
    border: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 1;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.02);
  }

  .il-bg-texture {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,90,40,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 40% 40% at 10% 90%, rgba(255,90,40,0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  /* LEFT PANEL */
  .il-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 48px 40px;
    position: relative;
    min-width: 0;
  }

  .il-barbell-bg {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.12;
    pointer-events: none;
  }

  .il-barbell-bg svg {
    width: 80%;
    height: 80%;
  }

  .il-brand-tag {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 13px;
    letter-spacing: 4px;
    color: #ff5a28;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .il-headline {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(36px, 5vw, 60px);
    line-height: 1;
    color: #f0ede8;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .il-headline span {
    color: #ff5a28;
  }

  .il-sub {
    margin-top: 12px;
    font-size: 14px;
    color: #6b6b72;
    font-weight: 300;
    line-height: 1.6;
    max-width: 280px;
  }

  .il-stats {
    display: flex;
    gap: 24px;
    margin-top: 32px;
  }

  .il-stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .il-stat-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    color: #ff5a28;
  }

  .il-stat-label {
    font-size: 11px;
    color: #555;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  /* RIGHT PANEL */
  .il-right {
    width: 380px;
    min-width: 320px;
    /* Fundo ligeiramente transparente em vez de sólido */
    background: rgba(19, 19, 22, 0.5);
    border-left: 0.5px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 40px;
    position: relative;
  }

  .il-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 36px;
    animation: il-fadeUp 0.5s ease 0.05s both;
  }

  .il-logo-icon {
    width: 36px;
    height: 36px;
    background: #ff5a28;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .il-logo-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 26px;
    letter-spacing: 2px;
    color: #f0ede8;
  }

  .il-form-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 30px;
    letter-spacing: 1px;
    color: #f0ede8;
    margin-bottom: 4px;
    animation: il-fadeUp 0.5s ease 0.10s both;
  }

  .il-form-sub {
    font-size: 13px;
    color: #555;
    margin-bottom: 28px;
    font-weight: 300;
    animation: il-fadeUp 0.5s ease 0.12s both;
  }

  .il-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }

  .il-field:nth-child(4) { animation: il-fadeUp 0.5s ease 0.18s both; }
  .il-field:nth-child(5) { animation: il-fadeUp 0.5s ease 0.22s both; }

  .il-field label {
    font-size: 12px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #555;
    font-weight: 500;
  }

  .il-field input {
    background: #0d0d0f;
    border: 0.5px solid #2a2a32;
    border-radius: 8px;
    padding: 12px 14px;
    font-size: 14px;
    color: #f0ede8;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
  }

  .il-field input:focus {
    border-color: #ff5a28;
    box-shadow: 0 0 0 3px rgba(255,90,40,0.1);
  }

  .il-field input::placeholder { color: #333; }

  .il-field input.il-error {
    border-color: #c0392b;
    box-shadow: 0 0 0 3px rgba(192,57,43,0.1);
  }

  .il-error-msg {
    font-size: 11px;
    color: #c0392b;
    margin-top: 2px;
  }

  .il-forgot {
    text-align: right;
    margin-top: -8px;
    margin-bottom: 20px;
    animation: il-fadeUp 0.5s ease 0.26s both;
  }

  .il-forgot button {
    background: none;
    border: none;
    font-size: 12px;
    color: #555;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: color 0.2s;
    padding: 0;
  }

  .il-forgot button:hover { color: #ff5a28; }

  .il-btn-login {
    width: 100%;
    padding: 14px;
    background: #ff5a28;
    border: none;
    border-radius: 8px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s, opacity 0.2s;
    margin-bottom: 12px;
    animation: il-fadeUp 0.5s ease 0.30s both;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .il-btn-login:hover:not(:disabled) { background: #e04d20; }
  .il-btn-login:active:not(:disabled) { transform: scale(0.98); }
  .il-btn-login:disabled { opacity: 0.6; cursor: not-allowed; }

  .il-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: il-spin 0.7s linear infinite;
  }

  .il-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0;
    animation: il-fadeUp 0.5s ease 0.33s both;
  }

  .il-divider::before,
  .il-divider::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: #1e1e24;
  }

  .il-divider span {
    font-size: 11px;
    color: #333;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .il-btn-google {
    width: 100%;
    padding: 12px;
    background: transparent;
    border: 0.5px solid #2a2a32;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #888;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: border-color 0.2s, color 0.2s;
    animation: il-fadeUp 0.5s ease 0.36s both;
  }

  .il-btn-google:hover { border-color: #444; color: #ccc; }

  .il-signup {
    text-align: center;
    margin-top: 24px;
    font-size: 13px;
    color: #444;
    animation: il-fadeUp 0.5s ease 0.40s both;
  }

  .il-signup button {
    background: none;
    border: none;
    color: #ff5a28;
    font-weight: 500;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    padding: 0;
  }

  .il-signup button:hover { text-decoration: underline; }

  .il-success-banner {
    background: rgba(39,174,96,0.12);
    border: 0.5px solid rgba(39,174,96,0.4);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    color: #2ecc71;
    margin-bottom: 16px;
    animation: il-fadeUp 0.3s ease both;
  }

  @keyframes il-fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes il-spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 640px) {
    .il-left  { display: none; }
    .il-right { width: 100%; border: none; }
    .il-page-bg { padding: 0; background-image: none; background-color: #0d0d0f; }
    .il-root { border-radius: 0; border: none; box-shadow: none; background: #0d0d0f; backdrop-filter: none; -webkit-backdrop-filter: none; }
  }
`;

interface FormState {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.email.trim()) {
      errs.email = "E-mail obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "E-mail inválido.";
    }
    if (!form.password) {
      errs.password = "Senha obrigatória.";
    } else if (form.password.length < 6) {
      errs.password = "Mínimo de 6 caracteres.";
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simula chamada de API
    await new Promise(res => setTimeout(res, 1500));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <>
      <style>{styles}</style>
      
      {/* ── BACKGROUND WRAPPER ── */}
      <div className="il-page-bg">
        <div className="il-root">
          <div className="il-bg-texture" />

          {/* ── LEFT PANEL ── */}
          <div className="il-left">
            <div className="il-barbell-bg">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="180" width="280" height="20" rx="10" fill="#ff5a28" />
                <rect x="40" y="160" width="40" height="60" rx="8" fill="#ff5a28" />
                <rect x="320" y="160" width="40" height="60" rx="8" fill="#ff5a28" />
                <rect x="20" y="150" width="30" height="80" rx="6" fill="#ff5a28" opacity="0.6" />
                <rect x="350" y="150" width="30" height="80" rx="6" fill="#ff5a28" opacity="0.6" />
                <ellipse cx="200" cy="260" rx="60" ry="10" fill="#ff5a28" opacity="0.15" />
                <rect x="185" y="200" width="30" height="70" rx="4" fill="#ff5a28" opacity="0.3" />
              </svg>
            </div>

            <p className="il-brand-tag">Seu treino. Sua evolução.</p>
            <h1 className="il-headline">
              Construa<br />
              seu <span>físico</span><br />
              ideal
            </h1>
            <p className="il-sub">
              Registre, analise e supere seus limites. Seu histórico de treinos em um só lugar.
            </p>

            <div className="il-stats">
              <div className="il-stat">
                <span className="il-stat-num">12K+</span>
                <span className="il-stat-label">Exercícios</span>
              </div>
              <div className="il-stat">
                <span className="il-stat-num">98%</span>
                <span className="il-stat-label">Satisfação</span>
              </div>
              <div className="il-stat">
                <span className="il-stat-num">∞</span>
                <span className="il-stat-label">Progresso</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="il-right">
            <div className="il-logo">
              <div className="il-logo-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="9" width="14" height="2.5" rx="1.25" fill="white" />
                  <rect x="1" y="7.5" width="3" height="5" rx="1" fill="white" />
                  <rect x="16" y="7.5" width="3" height="5" rx="1" fill="white" />
                </svg>
              </div>
              <span className="il-logo-name">IronLog</span>
            </div>

            <h2 className="il-form-title">Entrar</h2>
            <p className="il-form-sub">Bem-vindo de volta, atleta.</p>

            {success && (
              <div className="il-success-banner">
                ✓ Login realizado com sucesso! Redirecionando...
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="il-field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "il-error" : ""}
                />
                {errors.email && <span className="il-error-msg">{errors.email}</span>}
              </div>

              <div className="il-field">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  className={errors.password ? "il-error" : ""}
                />
                {errors.password && <span className="il-error-msg">{errors.password}</span>}
              </div>

              <div className="il-forgot">
                <button type="button" onClick={() => alert("Fluxo de recuperação de senha")}>
                  Esqueceu a senha?
                </button>
              </div>

              <button className="il-btn-login" type="submit" disabled={loading || success}>
                {loading ? <span className="il-spinner" /> : "Entrar"}
              </button>
            </form>

            <div className="il-divider"><span>ou</span></div>

            <button
              className="il-btn-google"
              type="button"
              onClick={() => alert("Integrar Google OAuth aqui")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266,9.765C6.199,6.939 8.854,4.909 12,4.909C13.691,4.909 15.218,5.509 16.418,6.491L19.909,3C17.782,1.145 15.055,0 12,0C7.27,0 3.198,2.698 1.24,6.65L5.266,9.765Z" />
                <path fill="#34A853" d="M16.041,18.013C14.951,18.716 13.566,19.091 12,19.091C8.866,19.091 6.219,17.077 5.277,14.268L1.237,17.335C3.193,21.294 7.265,24 12,24C14.933,24 17.735,22.957 19.834,20.999L16.041,18.013Z" />
                <path fill="#4A90D9" d="M19.834,21C21.996,18.952 23.455,15.904 23.455,12C23.455,11.291 23.345,10.527 23.182,9.818L12,9.818L12,14.455L18.436,14.455C18.119,16.014 17.266,17.221 16.041,18.013L19.834,21Z" />
                <path fill="#FBBC05" d="M5.277,14.268C5.038,13.556 4.909,12.794 4.909,12C4.909,11.218 5.034,10.467 5.266,9.765L1.24,6.65C0.437,8.26 0,10.075 0,12C0,13.92 0.445,15.73 1.237,17.335L5.277,14.268Z" />
              </svg>
              Continuar com Google
            </button>

            <div className="il-signup">
              Não tem conta?{" "}
              <button type="button" onClick={() => alert("Navegar para tela de cadastro")}>
                Criar conta grátis
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}