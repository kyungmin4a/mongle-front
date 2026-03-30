import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: Set a mock token in cookies
    document.cookie = "token=mock_token; path=/; max-age=3600";
    navigate("/");
    window.location.reload(); // Refresh to update navbar state
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-6 magical-gradient flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass p-8 md:p-12 rounded-3xl space-y-8 shadow-2xl"
      >
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl text-white mb-4 shadow-lg">
            <Sparkles size={32} />
          </div>
          <h1 className="text-3xl font-display font-bold">다시 오신 것을 환영합니다</h1>
          <p className="text-on-surface-variant">마법 같은 이야기를 계속 만들어보세요.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">이메일</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@magic.com"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-surface-container-low font-medium border-none focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">비밀번호</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-surface-container-low font-medium border-none focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-2 group"
          >
            로그인하기
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="text-center space-y-4">
          <p className="text-sm text-on-surface-variant">
            계정이 없으신가요? <Link to="/signup" className="text-primary font-bold hover:underline">회원가입</Link>
          </p>
          <button className="text-xs text-on-surface-variant hover:text-primary transition-colors">
            비밀번호를 잊으셨나요?
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
