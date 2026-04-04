import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSocialLogin = (provider: string) => {
    // Demo: Set a mock token in cookies
    document.cookie = "token=mock_token; path=/; max-age=3600";
    
    // Trigger Success State
    setIsSuccess(true);
    
    // Trigger Confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#ec4899']
    });

    // Redirect after a delay
    setTimeout(() => {
      navigate("/");
      window.location.reload(); // Refresh to update navbar state
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-surface font-body text-on-surface">
      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center relative pt-20 pb-12 px-6">
        {/* Storybook Background Atmosphere */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-BOjPd2NLrVS5sE-5ZN7YWo3Y5QbPQAPT7_bOwJPcnmoVrxT4d9i4_SnN6Y88uXp75QO_VQn_qcxq1AzpF6xrW9VJYn_twsEPKDbAWTB99JIH3YZDc4C5ENtV43qZek7Q7dQdyDnx8okJHSZu9WzbCk16v3hmn2IVXhPmuJxoF_J-7J2pSyp3zpUN9erkCujXGobAl-4czmAPpH5lC_II2Zfy03AtX9xmbPk5lJkdAEM0t1A3-Is_vJb9LrWSi9rcF-QYrH94g1VZ')", 
            backgroundSize: "cover" 
          }}
        />
        
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div 
              key="login-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full max-w-md"
            >
              {/* Login Card */}
              <div className="glass-card rounded-xl p-8 md:p-10 shadow-[0px_20px_40px_rgba(39,48,87,0.06)] border border-white/20">
                <div className="text-center mb-10">
                  <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2 break-keep">
                    다시 오신 것을 <br className="block sm:hidden" />환영해요
                  </h1>
                  <p className="text-on-surface-variant text-sm font-medium">소셜 계정으로 간편하게 시작하세요</p>
                </div>
                
                {/* Social Login Section */}
                <div className="space-y-4">
                  {/* Naver */}
                  <button 
                    onClick={() => handleSocialLogin("네이버")}
                    className="w-full flex items-center justify-center gap-3 bg-[#03C75A] text-white py-4 rounded-xl hover:brightness-95 active:scale-[0.98] transition-all font-bold text-base shadow-md"
                  >
                    <span className="w-6 h-6 flex items-center justify-center font-black text-sm border-2 border-white rounded-md">N</span>
                    네이버로 시작하기
                  </button>
                  {/* Kakao */}
                  <button 
                    onClick={() => handleSocialLogin("카카오")}
                    className="w-full flex items-center justify-center gap-3 bg-[#FEE500] text-[#191919] py-4 rounded-xl hover:brightness-95 active:scale-[0.98] transition-all font-bold text-base shadow-md"
                  >
                    <MessageCircle size={24} fill="currentColor" />
                    카카오로 시작하기
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="login-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 w-full max-w-md text-center"
            >
              <div className="glass-card rounded-2xl p-12 shadow-2xl border border-white/30 flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Sparkles size={40} className="animate-pulse" />
                </div>
                <h2 className="text-3xl font-headline font-black text-on-surface mb-2">반가워요!</h2>
                <p className="text-on-surface-variant font-medium">로그인에 성공했습니다. <br /> 곧 마법의 숲으로 안내할게요.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default LoginPage;
