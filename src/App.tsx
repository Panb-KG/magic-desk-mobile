import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  Castle, 
  ChevronRight, 
  ArrowLeft, 
  Search, 
  Mic, 
  Camera, 
  Send, 
  Menu,
  Book,
  Trophy,
  User,
  Calendar,
  Home as HomeIcon,
  FlaskConical,
  Languages,
  Palette,
  History,
  Brain,
  CheckCircle2,
  MoreHorizontal,
  PenTool,
  BookOpen,
  Plus,
  CloudUpload,
  X,
  HelpCircle,
  ShieldCheck,
  GraduationCap,
  Scroll,
  Layout,
  ShoppingBag,
  Settings
} from 'lucide-react';
import { View, NAV_ITEMS, CATEGORIES, TUTORS } from './constants';
import { 
  AchievementsView, 
  ScheduleView, 
  TasksView, 
  ArchiveView, 
  EnrollmentView,
  PracticeView,
  ScannerView,
  PortalView,
  DesktopHubView,
  LessonView,
  SpellbookView,
  StoreView,
  SettingsView
} from './components/Views';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components for Screens ---

const BottomNav = ({ currentView, setView }: { currentView: View, setView: (v: View) => void }) => (
  <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto border-t border-white/10 bg-magic-purple/80 backdrop-blur-xl px-4 pb-8 pt-3 flex items-center justify-around z-50">
    {NAV_ITEMS.map((item) => (
      <button
        key={item.id}
        onClick={() => setView(item.id)}
        className={cn(
          "flex flex-col items-center gap-1 transition-all active:scale-95",
          currentView === item.id ? "text-magic-gold" : "text-white/40"
        )}
      >
        <item.icon className={cn("size-6", currentView === item.id && "fill-current")} />
        <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        {currentView === item.id && <motion.div layoutId="nav-dot" className="size-1 bg-magic-gold rounded-full" />}
      </button>
    ))}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      <button 
        onClick={() => setView('camera')}
        className="flex size-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40 border-4 border-magic-purple text-white active:scale-90 transition-transform"
      >
        <Zap className="size-8 fill-current" />
      </button>
    </div>
  </nav>
);

const HomeView = ({ setView }: { setView: (v: View) => void }) => (
  <div className="flex flex-col min-h-screen pb-24">
    <header className="px-6 pt-12 pb-4 flex items-center gap-4">
      <div className="relative">
        <div className="size-16 rounded-full border-2 border-magic-gold p-0.5 bg-gradient-to-tr from-magic-gold to-sunset-gold">
          <img 
            src="https://picsum.photos/seed/wizard/200/200" 
            alt="Avatar" 
            className="w-full h-full rounded-full bg-slate-800 object-cover"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-magic-gold text-magic-purple rounded-full p-1 flex items-center justify-center">
          <Zap className="size-3 fill-current" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h1 className="font-display text-lg text-magic-gold">魔法学徒 小明</h1>
          <div className="flex gap-2">
            <button onClick={() => setView('hub')} className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white/60">
              <Layout className="size-4" />
            </button>
            <button onClick={() => setView('store')} className="size-8 rounded-full bg-white/10 flex items-center justify-center text-magic-gold">
              <ShoppingBag className="size-4" />
            </button>
            <button onClick={() => setView('settings')} className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white/60">
              <Settings className="size-4" />
            </button>
          </div>
        </div>
        <div className="mt-1 flex flex-col gap-1">
          <div className="flex justify-between items-center text-[10px] text-magic-gold/80">
            <span>魔法等级: 12</span>
            <span>750 / 1000 ✨</span>
          </div>
          <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden border border-magic-gold/20">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              className="h-full bg-gradient-to-r from-magic-gold to-sunset-gold relative"
            >
              <Sparkles className="absolute right-1 top-1/2 -translate-y-1/2 size-2 text-white animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </header>

    <section className="px-6 mt-6">
      <h2 className="font-display text-xl flex items-center gap-2 mb-4">
        <Sparkles className="size-5 text-magic-gold" />
        选择你的导师
      </h2>
      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
        {TUTORS.map((tutor) => (
          <button
            key={tutor.id}
            onClick={() => setView('chat')}
            className="flex-shrink-0 w-32 glass-card rounded-2xl p-3 border-b-4 border-magic-gold flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform"
          >
            <div className="size-16 rounded-full overflow-hidden border border-white/20">
              <img src={tutor.avatar} alt={tutor.name} className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-sm">{tutor.name}</span>
            <span className="text-[10px] text-white/60">{tutor.role}</span>
          </button>
        ))}
      </div>
    </section>

    <section className="px-6 mt-8">
      <button 
        onClick={() => setView('schedule')}
        className="w-full py-5 rounded-2xl bg-gradient-to-br from-magic-gold to-sunset-gold flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg shadow-magic-gold/20"
      >
        <Castle className="size-8 text-magic-purple fill-current" />
        <span className="font-display text-magic-purple text-xl font-bold">进入教室</span>
      </button>
    </section>

    <section className="px-6 mt-10">
      <div className="flex justify-between items-end mb-4">
        <h3 className="font-display text-lg">每日魔法任务</h3>
        <button onClick={() => setView('tasks')} className="text-xs text-magic-gold">查看全部</button>
      </div>
      <div className="parchment-card p-6 flex flex-col gap-4 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/5" />
        {[
          { icon: PenTool, title: '破解“方程式”咒语', desc: '数学 · 完成第4章' },
          { icon: History, title: '古诗词吟唱', desc: '文学 · 背诵《将进酒》' },
          { icon: BookOpen, title: '探索单词森林', desc: '英语 · 记忆10个单词' },
        ].map((task, i) => (
          <div key={i} className="flex items-center gap-3 border-b border-black/10 pb-2">
            <task.icon className="size-5 text-amber-900" />
            <div className="flex-1">
              <p className="font-bold text-sm">{task.title}</p>
              <p className="text-[10px] opacity-70">{task.desc}</p>
            </div>
            {i === 0 ? <CheckCircle2 className="size-5 text-green-700" /> : <div className="size-5 border-2 border-amber-800/30 rounded-full" />}
          </div>
        ))}
        <div className="flex justify-center mt-2">
          <MoreHorizontal className="size-5 text-amber-800/30" />
        </div>
      </div>
    </section>
  </div>
);

const LibraryView = ({ setView }: { setView: (v: View) => void }) => (
  <div className="flex flex-col min-h-screen pb-24">
    <header className="px-6 pt-12 pb-4 flex justify-between items-center">
      <div>
        <h1 className="font-display text-2xl text-white">魔法图书馆</h1>
        <p className="text-[10px] text-white/50 tracking-widest uppercase">古代知识</p>
      </div>
      <div className="size-10 rounded-full glass-card flex items-center justify-center">
        <Sparkles className="size-5 text-magic-gold" />
      </div>
    </header>

    <div className="px-6 mt-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full h-14 flex items-center px-5 gap-3">
        <Search className="size-5 text-white/40" />
        <input 
          className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-white/40 w-full" 
          placeholder="搜索失落的咒语..." 
          type="text"
        />
      </div>
    </div>

    <section className="mt-8 px-6">
      <h2 className="font-display text-sm mb-4 text-white/80 flex items-center gap-2">
        <div className="size-1 bg-magic-gold rounded-full" />
        知识分类
      </h2>
      <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="size-16 rounded-2xl glass-card flex items-center justify-center active:scale-95 transition-transform">
              <cat.icon className={cn("size-8", cat.color)} />
            </div>
            <span className="text-[10px] font-medium text-white/70">{cat.label}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-10 px-6">
      <div className="flex justify-between items-end mb-6">
        <h2 className="font-display text-lg text-magic-gold">推荐卷轴</h2>
        <span className="text-[10px] text-white/40 uppercase tracking-widest">推荐</span>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { title: "变形术指南", author: "麦格教授", lv: "08", progress: 66 },
          { title: "霍格沃茨：一段校史", author: "巴希达·巴沙特", lv: "15", progress: 25 },
          { title: "标准咒语", author: "米兰达·戈沙克", lv: "12", progress: 75 },
          { title: "神奇动物在哪里", author: "纽特·斯卡曼德", lv: "05", progress: 50 },
        ].map((book, i) => (
          <button 
            key={i} 
            onClick={() => setView('lesson')}
            className="flex flex-col gap-3 text-left"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden glass-card group w-full">
              <img 
                src={`https://picsum.photos/seed/book${i}/300/400`} 
                alt="Book Cover" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-2 right-2">
                <span className="bg-gradient-to-br from-magic-gold to-sunset-gold text-magic-purple text-[8px] font-black px-1.5 py-0.5 rounded">LV.{book.lv}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="w-full h-1 bg-white/20 rounded-full">
                  <div className="h-full bg-magic-gold rounded-full" style={{ width: `${book.progress}%` }} />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-xs">《{book.title}》</p>
              <p className="text-[10px] text-white/40">{book.author}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  </div>
);

const ChatView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple">
    <header className="px-6 pt-12 pb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full glass-card">
          <ArrowLeft className="size-5" />
        </button>
        <div className="relative">
          <div className="size-12 rounded-full border-2 border-magic-gold overflow-hidden">
            <img src="https://picsum.photos/seed/hermione/100/100" alt="Hermione" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-magic-purple" />
        </div>
        <div>
          <h1 className="font-display text-magic-gold text-lg leading-tight">赫敏</h1>
          <p className="text-white/50 text-[10px] tracking-widest uppercase">魔法导师</p>
        </div>
      </div>
      <button className="size-10 flex items-center justify-center rounded-full glass-card text-magic-gold">
        <Book className="size-5" />
      </button>
    </header>

    <main className="flex-1 mx-4 mb-4 overflow-hidden rounded-sm parchment-card relative p-6">
      <div className="space-y-6 overflow-y-auto h-full no-scrollbar pb-20">
        <div className="flex flex-col items-start max-w-[85%]">
          <span className="text-[10px] text-amber-900/60 mb-1 ml-1 font-medium italic">资深导师</span>
          <div className="bg-mystery-purple border-2 border-magic-gold text-white p-4 text-sm rounded-2xl rounded-bl-none shadow-lg">
            你好，年轻的巫师！我看到你已经准备好掌握数学咒语了。我们今天要学习哪个咒语呢？
          </div>
        </div>
        <div className="flex flex-col items-end ml-auto max-w-[85%]">
          <div className="bg-white/50 border border-amber-900/20 text-amber-950 p-4 text-sm rounded-2xl rounded-br-none shadow-md">
            你能帮我看看这个“长除法”咒语吗？它现在感觉有点像黑魔法！
          </div>
        </div>
        <div className="flex flex-col items-start max-w-[85%]">
          <span className="text-[10px] text-amber-900/60 mb-1 ml-1 font-medium italic">资深导师</span>
          <div className="bg-mystery-purple border-2 border-magic-gold text-white p-4 text-sm rounded-2xl rounded-bl-none shadow-lg">
            啊，长除法！经典之作。让我们把它分解成四个简单的步骤：除、乘、减、落。把它想象成一段有节奏的吟唱...
          </div>
        </div>
      </div>
    </main>

    <footer className="px-4 pb-8 pt-2">
      <div className="relative flex items-center">
        <div className="absolute left-4 z-10 text-magic-gold">
          <Sparkles className="size-5" />
        </div>
        <input 
          className="w-full bg-mystery-purple border-2 border-magic-gold/40 rounded-full py-4 pl-12 pr-14 text-white placeholder-white/40 focus:outline-none focus:border-magic-gold text-sm transition-all" 
          placeholder="输入你的魔法咒语..." 
          type="text"
        />
        <button className="absolute right-2 size-10 rounded-full bg-gradient-to-br from-magic-gold to-sunset-gold text-magic-purple flex items-center justify-center shadow-lg active:scale-95 transition-transform">
          <Send className="size-5" />
        </button>
      </div>
      <div className="flex justify-center mt-3 gap-6">
        <button className="flex items-center gap-1 text-white/60 text-[10px] uppercase tracking-tighter">
          <Mic className="size-4" />
          咒语吟唱
        </button>
        <button className="flex items-center gap-1 text-white/60 text-[10px] uppercase tracking-tighter">
          <Camera className="size-4" />
          视觉咒语
        </button>
      </div>
    </footer>
  </div>
);

const CameraView = ({ onBack, onCapture }: { onBack: () => void, onCapture: () => void }) => (
  <div className="flex flex-col h-screen bg-black relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://picsum.photos/seed/bookscan/800/1200')" }} />
    
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-magic-gold/20 text-magic-gold">
        <X className="size-5" />
      </button>
      <div className="flex flex-col items-center">
        <h1 className="text-magic-gold font-bold text-lg tracking-tight flex items-center gap-2">
          <Sparkles className="size-4" />
          魔法相机
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-magic-gold/60">正在扫描魔法书</p>
      </div>
      <button className="size-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-magic-gold/20 text-magic-gold">
        <Zap className="size-5" />
      </button>
    </header>

    <div className="flex-1 flex items-center justify-center relative">
      <div className="absolute inset-8 border-[12px] border-magic-gold/20 rounded-xl pointer-events-none">
        <div className="absolute -top-1 -left-1 text-magic-gold/40"><Sparkles className="size-8" /></div>
        <div className="absolute -top-1 -right-1 text-magic-gold/40"><Sparkles className="size-8" /></div>
        <div className="absolute -bottom-1 -left-1 text-magic-gold/40"><Sparkles className="size-8" /></div>
        <div className="absolute -bottom-1 -right-1 text-magic-gold/40"><Sparkles className="size-8" /></div>
      </div>
      <motion.div 
        animate={{ top: ['20%', '80%', '20%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-magic-gold to-transparent shadow-[0_0_15px_#ffd700] z-20" 
      />
      
      <div className="absolute top-1/3 left-1/4 bg-magic-gold/15 backdrop-blur-sm border border-magic-gold/30 px-4 py-1 rounded-full text-magic-gold font-bold text-sm flex items-center gap-2">
        <span>2x + 5 = 15</span>
        <BookOpen className="size-3" />
      </div>
    </div>

    <footer className="relative z-40 px-6 pt-10 pb-12 bg-gradient-to-t from-black via-black/95 to-transparent">
      <div className="flex justify-center gap-4 mb-8">
        {[
          { icon: Brain, label: '解答' },
          { icon: Languages, label: '翻译' },
          { icon: Scroll, label: '总结' },
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="size-14 rounded-lg border border-magic-gold/30 bg-magic-gold/10 flex items-center justify-center text-magic-gold backdrop-blur-md">
              <action.icon className="size-6" />
            </div>
            <span className="text-[10px] text-magic-gold/80 uppercase font-bold tracking-wider">{action.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="size-14 rounded-lg border-2 border-magic-gold/50 overflow-hidden -rotate-6 bg-slate-700">
          <img src="https://picsum.photos/seed/lastscan/100/100" alt="Last scan" className="w-full h-full object-cover opacity-60" />
        </div>
        <button 
          onClick={onCapture}
          className="relative size-24 bg-magic-gold rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.4)] border-4 border-black active:scale-90 transition-transform"
        >
          <Camera className="size-10 text-black fill-current" />
        </button>
        <button className="size-14 rounded-full bg-black border border-magic-gold/30 flex items-center justify-center text-magic-gold">
          <Sparkles className="size-6" />
        </button>
      </div>
    </footer>
  </div>
);

const AnalysisView = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col h-screen bg-magic-purple relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>
      
      <header className="relative z-20 flex items-center justify-between p-6">
        <button onClick={onComplete} className="size-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
          <X className="size-5" />
        </button>
        <h1 className="text-lg font-bold tracking-tight text-white/90">正在解析咒语</h1>
        <div className="size-10" />
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center p-8">
        <div className="relative flex items-center justify-center size-80">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-magic-gold/30 border-dashed rounded-full" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-2 border-magic-gold/60 rounded-full" 
          />
          <div className="size-40 rounded-full bg-gradient-to-tr from-magic-gold/20 to-transparent border border-magic-gold/50 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="size-16 text-magic-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
          </div>
          
          <span className="absolute top-4 left-10 text-magic-gold/60 text-xs font-bold">x² + 5y = ?</span>
          <span className="absolute top-20 right-4 text-magic-gold/60 text-xs font-bold">解答</span>
          <span className="absolute bottom-10 left-12 text-magic-gold/60 text-xs font-bold">转化</span>
          <span className="absolute bottom-20 right-10 text-magic-gold/60 text-xs font-bold">π ≈ 3.14</span>
        </div>

        <div className="mt-12 w-full space-y-8 text-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">正在解读神秘符文...</h2>
            <p className="mt-2 text-magic-gold/80 font-medium">正在连接古代知识库</p>
          </div>
          <div className="space-y-3 px-4">
            <div className="flex items-end justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-magic-gold/60">魔法分析</span>
              <span className="text-sm font-bold text-magic-gold">{progress}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800/50 p-[2px] backdrop-blur-sm border border-white/10">
              <motion.div 
                className="h-full rounded-full bg-gradient-to-r from-magic-gold/40 via-magic-gold to-white shadow-[0_0_10px_#ffd700]" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-20 p-8 pb-12">
        <button onClick={onComplete} className="w-full h-14 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold active:scale-95 transition-all">
          取消仪式
        </button>
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/30">等待星象对齐</p>
      </footer>
    </div>
  );
};

const GatewayView = ({ setView }: { setView: (v: View) => void }) => (
  <div className="flex flex-col h-screen relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/castle/800/1200" 
        alt="Castle" 
        className="w-full h-full object-cover opacity-40 grayscale brightness-50" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-magic-purple/40 via-magic-purple/60 to-magic-purple" />
    </div>

    <header className="relative z-10 flex items-center justify-between p-6 pt-12">
      <div className="flex items-center gap-2">
        <div className="size-10 rounded-full bg-magic-gold/30 backdrop-blur-md flex items-center justify-center border border-magic-gold/50">
          <Sparkles className="size-5 text-magic-gold" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-white">魔法课桌</h2>
      </div>
      <button className="size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
        <HelpCircle className="size-5 text-white" />
      </button>
    </header>

    <main className="relative z-10 flex flex-1 flex-col items-center justify-end px-6 pb-12">
      <div className="absolute top-20 right-8 flex flex-col items-center">
        <div className="relative">
          <div className="size-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
            <Sparkles className="size-12 text-magic-gold animate-pulse" />
          </div>
          <div className="absolute -bottom-2 right-0">
            <Zap className="size-8 text-magic-gold fill-current" />
          </div>
        </div>
      </div>

      <div className="w-full text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-white leading-tight">欢迎来到魔法之门</h1>
        <p className="text-white/70 text-lg">选择你的魔法路径，开启奇幻旅程</p>
      </div>

      <div className="w-full space-y-6">
        <button 
          onClick={() => setView('home')}
          className="group relative w-full overflow-hidden rounded-xl bg-primary p-1 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(127,13,242,0.6)]"
        >
          <div className="flex items-center justify-between rounded-[calc(1rem-4px)] bg-primary px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <GraduationCap className="size-8 text-magic-gold" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium uppercase tracking-widest text-white/70">学生入口</div>
                <div className="text-xl font-bold text-white">以小巫师身份进入</div>
              </div>
            </div>
            <ChevronRight className="size-6 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </button>

        <button className="group relative w-full overflow-hidden rounded-xl bg-slate-800/80 p-[1px] backdrop-blur-xl transition-all hover:scale-[1.02] active:scale-95 border border-primary/30">
          <div className="flex items-center justify-between rounded-xl px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldCheck className="size-8 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium uppercase tracking-widest text-slate-400">家长入口</div>
                <div className="text-xl font-bold text-white">以魔法守护者身份进入</div>
              </div>
            </div>
            <ChevronRight className="size-6 text-slate-500 group-hover:text-white transition-colors" />
          </div>
        </button>
      </div>

      <div className="mt-10 flex flex-col items-center space-y-4">
        <button onClick={() => setView('enrollment')} className="text-magic-gold font-medium hover:underline flex items-center gap-2">
          <Book className="size-4" />
          新学员入学登记
        </button>
        <button className="text-white/40 text-sm hover:text-white transition-colors">
          忘记秘密咒语？
        </button>
      </div>
    </main>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState<View>('gateway');

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-950">
      <div className="w-full max-w-[430px] h-screen bg-magic-purple relative shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {view === 'gateway' && <GatewayView setView={setView} />}
            {view === 'home' && <HomeView setView={setView} />}
            {view === 'library' && <LibraryView setView={setView} />}
            {view === 'chat' && <ChatView onBack={() => setView('home')} />}
            {view === 'camera' && <CameraView onBack={() => setView('home')} onCapture={() => setView('analysis')} />}
            {view === 'analysis' && <AnalysisView onComplete={() => setView('chat')} />}
            {view === 'achievements' && <AchievementsView onBack={() => setView('home')} />}
            {view === 'schedule' && <ScheduleView onBack={() => setView('home')} />}
            {view === 'tasks' && <TasksView onBack={() => setView('home')} />}
            {view === 'archive' && <ArchiveView onBack={() => setView('home')} onSpellbook={() => setView('spellbook')} />}
            {view === 'enrollment' && <EnrollmentView onBack={() => setView('gateway')} onComplete={() => setView('home')} />}
            {view === 'practice' && <PracticeView onBack={() => setView('home')} />}
            {view === 'scanner' && <ScannerView onBack={() => setView('home')} onScan={() => setView('analysis')} />}
            {view === 'portal' && <PortalView onBack={() => setView('home')} />}
            {view === 'hub' && <DesktopHubView setView={setView} />}
            {view === 'lesson' && <LessonView onBack={() => setView('library')} onPractice={() => setView('practice')} />}
            {view === 'spellbook' && <SpellbookView onBack={() => setView('archive')} />}
            {view === 'store' && <StoreView onBack={() => setView('home')} />}
            {view === 'settings' && <SettingsView onBack={() => setView('home')} />}
          </motion.div>
        </AnimatePresence>

        {['home', 'library', 'achievements', 'archive', 'schedule'].includes(view) && (
          <BottomNav currentView={view} setView={setView} />
        )}
      </div>
    </div>
  );
}
