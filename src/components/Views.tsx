import { motion } from 'motion/react';
import { 
  Trophy, 
  ChevronLeft, 
  Share2, 
  Diamond, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Palette, 
  Lock, 
  CheckCircle2,
  Clock,
  LayoutGrid,
  History,
  FlaskConical,
  Dumbbell,
  CloudRain,
  Sun,
  Droplets,
  Star,
  Zap,
  ArrowLeft,
  Book,
  Verified,
  User,
  ShieldCheck,
  GraduationCap,
  Mic2,
  Scan,
  Wand2,
  Layout,
  FileText,
  MessageSquare,
  Globe,
  ShoppingBag,
  Settings,
  Play,
  XCircle,
  AlertCircle,
  Info,
  Scroll,
  ChevronRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { View } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const data = [
  { name: 'Mon', points: 400 },
  { name: 'Tue', points: 600 },
  { name: 'Wed', points: 500 },
  { name: 'Thu', points: 800 },
  { name: 'Fri', points: 700 },
  { name: 'Sat', points: 1100 },
  { name: 'Sun', points: 1280 },
];

export const AchievementsView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col min-h-screen pb-24 overflow-y-auto no-scrollbar">
    <header className="px-6 pt-12 pb-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="size-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <ChevronLeft className="size-6 text-magic-gold" />
        </button>
        <h1 className="text-xl text-magic-gold tracking-wider font-display">荣誉殿堂</h1>
        <button className="size-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <Share2 className="size-5 text-magic-gold" />
        </button>
      </div>
      
      <div className="glass-card p-6 flex flex-col items-center rounded-2xl border-b-4 border-magic-gold">
        <div className="relative mb-4">
          <div className="size-24 rounded-full border-4 border-magic-gold p-1">
            <img src="https://picsum.photos/seed/felix/200/200" alt="Avatar" className="w-full h-full rounded-full bg-slate-800 object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-magic-gold text-magic-purple px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
            LV.24
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">巫师 小明</h2>
        <p className="text-sm text-white/60 mb-4">格兰芬多初级巫师</p>
        <div className="grid grid-cols-3 gap-4 w-full border-t border-white/10 pt-4">
          <div className="text-center">
            <div className="text-magic-gold font-bold text-lg">1,280</div>
            <div className="text-[10px] text-white/40 uppercase tracking-tighter">魔法值</div>
          </div>
          <div className="text-center border-x border-white/10 px-2">
            <div className="text-magic-gold font-bold text-lg">15</div>
            <div className="text-[10px] text-white/40 uppercase tracking-tighter">勋章</div>
          </div>
          <div className="text-center">
            <div className="text-magic-gold font-bold text-lg">92%</div>
            <div className="text-[10px] text-white/40 uppercase tracking-tighter">掌控度</div>
          </div>
        </div>
      </div>
    </header>

    <main className="px-6 space-y-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-magic-gold font-display">勋章馆</h3>
          <span className="text-xs text-white/40">查看全部 (24)</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Diamond, label: '全知全能', color: 'text-sky-300' },
            { icon: Sparkles, label: '咒语大师', color: 'text-white/80' },
            { icon: BookOpen, label: '学习之光', color: 'text-magic-gold' },
            { icon: LayoutGrid, label: '逻辑达人', color: 'text-white/60' },
            { icon: Palette, label: '艺术奇迹', color: 'text-white/40' },
            { icon: Lock, label: '未知', color: 'text-white/20' },
          ].map((badge, i) => (
            <div key={i} className={cn("glass-card p-3 flex flex-col items-center justify-center gap-2 aspect-square rounded-xl", i === 5 && "opacity-40 grayscale")}>
              <badge.icon className={cn("size-8", badge.color)} />
              <span className={cn("text-[10px] font-bold text-center", badge.color)}>{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg text-magic-gold font-display">成长趋势</h3>
          <div className="flex gap-2">
            <button className="text-[10px] px-2 py-1 rounded bg-magic-gold text-magic-purple font-bold">周</button>
            <button className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/40">月</button>
          </div>
        </div>
        <div className="glass-card p-4 h-[220px] rounded-2xl overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffd700" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffd700" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="points" stroke="#ffd700" strokeWidth={3} fillOpacity={1} fill="url(#colorPoints)" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a0b2e', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '8px' }}
                itemStyle={{ color: '#ffd700' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="pb-8">
        <h3 className="text-lg text-magic-gold mb-4 font-display">近期成就</h3>
        <div className="space-y-3">
          <div className="glass-card p-4 flex items-center gap-4 rounded-xl">
            <div className="size-10 rounded-full bg-magic-gold/20 flex items-center justify-center text-magic-gold">
              <Star className="size-5 fill-current" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold">解锁：词汇专家</h4>
              <p className="text-xs text-white/40">掌握 500+ 魔法英语单词</p>
            </div>
            <div className="text-[10px] text-white/20">2小时前</div>
          </div>
          <div className="glass-card p-4 flex items-center gap-4 rounded-xl">
            <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
              <CheckCircle2 className="size-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold">连胜：每日学习</h4>
              <p className="text-xs text-white/40">连续 7 天完成作业</p>
            </div>
            <div className="text-[10px] text-white/20">昨天</div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export const ScheduleView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col min-h-screen pb-24">
    <header className="flex items-center p-6 pb-2 justify-between sticky top-0 z-20 backdrop-blur-md">
      <button onClick={onBack} className="size-12 flex items-center justify-center bg-white/10 rounded-full text-white">
        <ChevronLeft className="size-8" />
      </button>
      <h2 className="text-white text-xl font-extrabold font-display">魔法课表</h2>
      <button className="size-12 flex items-center justify-center rounded-full bg-white/10 text-magic-gold">
        <History className="size-6" />
      </button>
    </header>

    <div className="px-4 py-4">
      <div className="flex glass-card rounded-2xl p-2 justify-between items-center border border-white/10">
        {['周一', '周二', '周三', '周四', '周五'].map((day, i) => (
          <div key={day} className={cn(
            "flex flex-col items-center justify-center rounded-xl py-3 px-4 transition-all",
            i === 0 ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-white/40"
          )}>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{day}</p>
            <p className="text-lg font-extrabold">{12 + i}</p>
          </div>
        ))}
      </div>
    </div>

    <main className="flex-1 px-4 py-2 space-y-6">
      <div className="flex items-center gap-4">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-xs font-bold text-magic-gold tracking-[0.2em] uppercase">今日旅程</p>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {[
        { time: '09:00 AM', title: '天文学与科学', room: '密室 • 402室', icon: Sun, active: true },
        { time: '11:00 AM', title: '魔法体育', room: '魁地奇球场', icon: Dumbbell, active: false },
        { time: '01:30 PM', title: '炼金术与魔药', room: '地牢实验室', icon: FlaskConical, active: false },
      ].map((item, i) => (
        <div key={i} className={cn("relative flex flex-col gap-3", !item.active && "opacity-60")}>
          <div className="flex items-center gap-3">
            <span className={cn("text-xs font-bold", item.active ? "text-magic-gold" : "text-white/40")}>{item.time}</span>
            {item.active && <div className="size-2 rounded-full bg-magic-gold animate-pulse" />}
          </div>
          <div className={cn(
            "rounded-2xl p-5 shadow-xl flex items-center justify-between border-l-4",
            item.active ? "bg-white/10 border-magic-gold" : "bg-white/5 border-white/10"
          )}>
            <div className="flex flex-col gap-1">
              {item.active && (
                <div className="flex items-center gap-2">
                  <Sparkles className="size-3 text-magic-gold" />
                  <span className="text-[10px] font-bold text-magic-gold uppercase tracking-widest">进行中</span>
                </div>
              )}
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
              <p className="text-white/40 text-sm font-medium">{item.room}</p>
            </div>
            <div className={cn("size-16 rounded-xl flex items-center justify-center", item.active ? "bg-magic-gold/10" : "bg-white/5")}>
              <item.icon className={cn("size-8", item.active ? "text-magic-gold" : "text-white/20")} />
            </div>
          </div>
        </div>
      ))}
    </main>
  </div>
);

export const TasksView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between">
      <button onClick={onBack} className="bg-white/10 p-2 rounded-full text-white">
        <ChevronLeft className="size-6" />
      </button>
      <h1 className="font-display text-2xl font-bold text-white tracking-wide">每日魔法任务</h1>
      <button className="bg-white/10 p-2 rounded-full text-magic-gold">
        <Sparkles className="size-6" />
      </button>
    </header>

    <div className="flex flex-col items-center justify-center py-4">
      <div className="relative size-32">
        <svg className="size-full -rotate-90">
          <circle cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-white/10" />
          <motion.circle 
            cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" 
            strokeDasharray="364.4" strokeDashoffset="91.1" strokeLinecap="round"
            className="text-magic-gold"
            initial={{ strokeDashoffset: 364.4 }}
            animate={{ strokeDashoffset: 91.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-magic-gold">75%</span>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-magic-gold/70">法力值</span>
        </div>
      </div>
      <p className="mt-4 text-magic-gold/80 font-medium text-sm">已获得 750 / 1000 经验值</p>
    </div>

    <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-4 no-scrollbar">
      <div className="parchment-card p-8 shadow-xl min-h-[500px] relative rounded-sm">
        <h2 className="font-display text-3xl text-amber-950 mb-6 border-b border-amber-900/20 pb-2">每日任务</h2>
        <div className="space-y-6">
          {[
            { title: '咒语练习：数学', meta: '15 分钟 • 炼金室', checked: true },
            { title: '古代如尼文：拼写检查', meta: '10 分钟 • 图书馆', checked: false },
            { title: '魔药制作：科学测验', meta: '20 分钟 • 实验室', checked: false },
            { title: '驯龙术：阅读', meta: '15 分钟 • 户外', checked: false },
            { title: '星尘收集：历史', meta: '12 分钟 • 天文台', checked: false },
          ].map((task, i) => (
            <label key={i} className="flex items-center justify-between group cursor-pointer">
              <div className="flex flex-col">
                <span className="font-display text-xl text-amber-950 leading-tight">{task.title}</span>
                <span className="text-amber-800/70 text-sm font-semibold uppercase tracking-wider">{task.meta}</span>
              </div>
              <div className={cn(
                "size-7 rounded-full border-2 flex items-center justify-center transition-all",
                task.checked ? "bg-red-700 border-red-800 shadow-md" : "border-amber-900/20"
              )}>
                {task.checked && <CheckCircle2 className="size-4 text-white" />}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const ArchiveView = ({ onBack, onSpellbook }: { onBack: () => void, onSpellbook: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple relative overflow-hidden">
    <header className="flex items-center bg-transparent p-6 justify-between sticky top-0 z-20">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white">
        <ArrowLeft className="size-6" />
      </button>
      <h2 className="text-white text-xl font-extrabold font-display">我的档案</h2>
      <button onClick={onSpellbook} className="size-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-magic-gold">
        <Scroll className="size-6" />
      </button>
    </header>

    <main className="flex-1 flex flex-col relative">
      <div className="absolute top-4 left-6 z-10 space-y-3">
        <div className="bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-2xl">
          <div className="size-10 rounded-xl bg-magic-gold/20 flex items-center justify-center">
            <Sparkles className="size-6 text-magic-gold" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-magic-gold uppercase tracking-widest">掌握咒语</p>
            <p className="text-lg font-extrabold text-white">42</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-2xl">
          <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Clock className="size-6 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">学习时长</p>
            <p className="text-lg font-extrabold text-white">128h</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex items-end justify-center pb-20">
        <div className="absolute bottom-16 w-48 h-12 bg-primary/20 rounded-full blur-2xl" />
        <div className="relative w-64 h-[400px] flex items-end justify-center">
          <div className="w-8 h-48 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-full" />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-40 flex flex-wrap w-48 gap-2 justify-center"
          >
            {[...Array(12)].map((_, i) => (
              <div key={i} className={cn(
                "size-6 rotate-45 rounded-sm shadow-lg",
                i % 3 === 0 ? "bg-sky-400" : i % 3 === 1 ? "bg-rose-400" : "bg-green-400"
              )} />
            ))}
          </motion.div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="size-12 bg-magic-gold rotate-45 rounded-sm shadow-[0_0_20px_#ffd700] animate-pulse" />
            <div className="w-1 h-20 bg-gradient-to-t from-primary to-magic-gold opacity-50" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-28 text-center">
        <button className="group relative w-full py-5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl shadow-xl shadow-primary/40 flex items-center justify-center gap-3 overflow-hidden active:scale-95 transition-all">
          <Droplets className="size-8" />
          <span className="text-lg font-extrabold uppercase tracking-widest">灌溉魔法树</span>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full">
            <span className="text-xs font-bold text-magic-gold">500</span>
            <Star className="size-4 text-magic-gold fill-current" />
          </div>
        </button>
        <p className="mt-3 text-white/40 text-[10px] font-bold uppercase tracking-widest opacity-60 italic">使用学习积分来提升你的法力</p>
      </div>
    </main>
  </div>
);

export const EnrollmentView = ({ onBack, onComplete }: { onBack: () => void, onComplete: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple relative overflow-hidden">
    <header className="relative z-10 flex items-center p-6 pb-2 justify-between">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
        <ArrowLeft className="size-6" />
      </button>
      <h2 className="text-white text-lg font-bold tracking-tight flex-1 text-center pr-10 font-display">入学登记</h2>
    </header>

    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col z-10 no-scrollbar">
      <div className="relative flex-1 flex flex-col">
        <div className="h-4 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-full shadow-md z-20" />
        <div className="parchment-card flex-1 -mt-2 -mb-2 px-8 py-10 flex flex-col relative border-x-4 border-amber-200/50 rounded-sm">
          <div className="mb-8">
            <div className="flex h-12 w-full items-center justify-center rounded-xl bg-black/5 p-1">
              <button className="flex-1 h-full rounded-lg bg-primary text-white text-sm font-bold">巫师</button>
              <button className="flex-1 h-full rounded-lg text-amber-900/60 text-sm font-bold">守护者</button>
            </div>
          </div>
          <h1 className="text-amber-950 text-3xl font-bold text-center mb-10 tracking-tight font-display">进入学院</h1>
          <div className="space-y-10">
            {[
              { label: '魔法名', icon: Sparkles },
              { label: '秘密咒语', icon: Lock },
              { label: '确认咒语', icon: ShieldCheck },
            ].map((field, i) => (
              <div key={i} className="relative group">
                <input 
                  className="peer w-full border-0 border-b-2 border-amber-900/20 bg-transparent py-2 px-0 focus:ring-0 focus:border-amber-900 text-amber-950 text-lg placeholder-transparent" 
                  placeholder={field.label}
                  type={field.label.includes('Spell') ? 'password' : 'text'}
                />
                <label className="absolute left-0 -top-6 text-amber-900/60 text-sm font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-amber-900 peer-focus:text-sm">
                  {field.label}
                </label>
                <field.icon className="absolute right-0 top-2 size-5 text-amber-900/40" />
              </div>
            ))}
          </div>
          <div className="mt-auto pt-10 flex justify-center opacity-20">
            <BookOpen className="size-10 text-amber-900" />
          </div>
        </div>
        <div className="h-4 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-full shadow-md z-20" />
      </div>

      <div className="mt-8 mb-10 relative flex justify-center">
        <button 
          onClick={onComplete}
          className="relative group w-full py-5 bg-primary text-white font-bold text-xl rounded-xl shadow-xl active:scale-95 transition-all"
        >
          <span>确认入学</span>
          <div className="absolute -right-2 -top-4 size-16 bg-red-700 rounded-full flex items-center justify-center border-4 border-red-800 shadow-lg rotate-12">
            <Verified className="size-8 text-white" />
          </div>
        </button>
      </div>
    </div>
  </div>
);

export const PracticeView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10">
        <ChevronLeft className="size-6 text-white" />
      </button>
      <h1 className="font-display text-xl font-bold text-white tracking-wide">咒语练习</h1>
      <div className="size-10" />
    </header>

    <main className="flex-1 flex flex-col items-center justify-center px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-magic-gold mb-2 font-display">羽加迪姆 勒维奥萨</h2>
        <p className="text-white/40 text-sm uppercase tracking-widest">发音: win-GAR-dee-um lev-ee-OH-sa</p>
      </div>

      <div className="relative size-64 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-magic-gold/20 rounded-full blur-3xl"
        />
        <button className="relative size-40 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(127,13,242,0.5)] border-4 border-white/10 active:scale-90 transition-transform">
          <Mic2 className="size-16 text-white" />
        </button>
      </div>

      <div className="mt-16 w-full space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-xs font-bold text-magic-gold uppercase tracking-widest">咒语能量</span>
          <span className="text-sm font-bold text-magic-gold">85%</span>
        </div>
        <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '85%' }}
            className="h-full bg-gradient-to-r from-magic-gold to-sunset-gold"
          />
        </div>
      </div>
    </main>

    <footer className="p-8 pb-12 text-center">
      <p className="text-white/40 text-xs italic">"一挥一抖！" — 弗立维教授</p>
    </footer>
  </div>
);

export const ScannerView = ({ onBack, onScan }: { onBack: () => void, onScan: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10">
        <ChevronLeft className="size-6 text-white" />
      </button>
      <h1 className="font-display text-xl font-bold text-white tracking-wide">每日任务</h1>
      <div className="size-10" />
    </header>

    <main className="flex-1 flex flex-col items-center justify-center px-6">
      <div className="relative group">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-8 border-2 border-magic-gold/20 border-dashed rounded-full"
        />
        <button 
          onClick={onScan}
          className="relative size-48 bg-gradient-to-br from-magic-gold to-sunset-gold rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.3)] border-8 border-magic-purple active:scale-95 transition-all"
        >
          <Scan className="size-16 text-magic-purple mb-2" />
          <span className="text-sm font-black text-magic-purple uppercase tracking-tighter">魔法扫描仪</span>
        </button>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        {['解答', '翻译', '讲解', '总结'].map((chip) => (
          <span key={chip} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/60">
            {chip}
          </span>
        ))}
      </div>
    </main>
  </div>
);

export const PortalView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10">
        <ChevronLeft className="size-6 text-white" />
      </button>
      <h1 className="font-display text-xl font-bold text-white tracking-wide">传送门</h1>
      <div className="size-10" />
    </header>

    <main className="flex-1 flex flex-col items-center justify-center px-6">
      <div className="glass-card w-full p-8 rounded-3xl border-2 border-dashed border-magic-gold/30 flex flex-col items-center justify-center min-h-[300px] mb-8">
        <div className="size-20 rounded-full bg-magic-gold/10 flex items-center justify-center mb-4">
          <CloudRain className="size-10 text-magic-gold" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">将你的知识投放在这里</h2>
        <p className="text-white/40 text-sm text-center">上传你的卷轴或魔法书，立即进行知识转化</p>
      </div>

      <button className="w-full py-5 bg-primary rounded-2xl shadow-xl shadow-primary/40 flex items-center justify-center gap-3 active:scale-95 transition-all">
        <Wand2 className="size-6 text-white" />
        <span className="text-lg font-bold uppercase tracking-widest">施放咒语</span>
      </button>
    </main>
  </div>
);

export const DesktopHubView = ({ setView }: { setView: (v: View) => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden p-6">
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded-full border-2 border-magic-gold p-0.5">
          <img src="https://picsum.photos/seed/wizard/100/100" alt="Avatar" className="w-full h-full rounded-full object-cover" />
        </div>
        <div>
          <h1 className="text-white font-bold">巫师 小明</h1>
          <p className="text-[10px] text-magic-gold uppercase tracking-widest">12级 魔法学徒</p>
        </div>
      </div>
      <button className="size-10 rounded-full bg-white/10 flex items-center justify-center">
        <Layout className="size-5 text-white" />
      </button>
    </header>

    <div className="flex-1 flex flex-col gap-6">
      <button 
        onClick={() => setView('camera')}
        className="w-full aspect-video bg-gradient-to-br from-magic-gold to-sunset-gold rounded-3xl flex flex-col items-center justify-center gap-2 shadow-2xl shadow-magic-gold/20 active:scale-95 transition-all"
      >
        <Scan className="size-12 text-magic-purple" />
        <span className="text-xl font-black text-magic-purple uppercase tracking-tight">魔法相机</span>
      </button>

      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: FileText, label: '作业', color: 'bg-blue-500/20 text-blue-400', view: 'tasks' as View },
          { icon: MessageSquare, label: '导师', color: 'bg-emerald-500/20 text-emerald-400', view: 'chat' as View },
          { icon: BookOpen, label: '图书馆', color: 'bg-amber-500/20 text-amber-400', view: 'library' as View },
          { icon: Globe, label: '传送门', color: 'bg-purple-500/20 text-purple-400', view: 'portal' as View },
        ].map((card, i) => (
          <button 
            key={i} 
            onClick={() => setView(card.view)}
            className="glass-card p-6 rounded-3xl flex flex-col items-start gap-4 active:scale-95 transition-all"
          >
            <div className={cn("size-12 rounded-2xl flex items-center justify-center", card.color)}>
              <card.icon className="size-6" />
            </div>
            <span className="font-bold text-white">{card.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export const LessonView = ({ onBack, onPractice }: { onBack: () => void, onPractice: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between bg-black/20 backdrop-blur-md sticky top-0 z-20">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10">
        <ChevronLeft className="size-6 text-white" />
      </button>
      <h1 className="font-display text-xl font-bold text-white tracking-wide">魔法数学</h1>
      <button className="size-10 flex items-center justify-center rounded-full bg-white/10 text-magic-gold">
        <Info className="size-5" />
      </button>
    </header>

    <main className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar pb-32">
      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-magic-gold/20">
        <img src="https://picsum.photos/seed/lesson/800/450" alt="Lesson Video" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button className="size-20 rounded-full bg-magic-gold/80 backdrop-blur-md flex items-center justify-center shadow-2xl active:scale-90 transition-transform">
            <Play className="size-10 text-magic-purple fill-current ml-1" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white font-display">第4章：几何咒语</h2>
        <p className="text-white/60 leading-relaxed">
          在本章中，我们将学习如何对各种几何形状施放“面积”咒语。
          矩形的咒语很简单：长乘以宽。但对于圆形，你必须借助圆周率的力量...
        </p>
      </div>

      <div className="glass-card p-6 rounded-3xl space-y-4">
        <h3 className="text-lg font-bold text-magic-gold flex items-center gap-2">
          <Sparkles className="size-5" />
          关键公式
        </h3>
        <ul className="space-y-3">
          {[
            { label: '正方形面积', formula: 'a²' },
            { label: '圆形面积', formula: 'πr²' },
            { label: '三角形面积', formula: '½bh' },
          ].map((item, i) => (
            <li key={i} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0">
              <span className="text-sm text-white/80">{item.label}</span>
              <span className="font-mono text-magic-gold font-bold">{item.formula}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>

    <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-magic-purple via-magic-purple to-transparent">
      <button 
        onClick={onPractice}
        className="w-full py-5 bg-primary rounded-2xl shadow-xl shadow-primary/40 flex items-center justify-center gap-3 active:scale-95 transition-all"
      >
        <Wand2 className="size-6 text-white" />
        <span className="text-lg font-bold uppercase tracking-widest">开始练习</span>
      </button>
    </footer>
  </div>
);

export const SpellbookView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10">
        <ChevronLeft className="size-6 text-white" />
      </button>
      <h1 className="font-display text-xl font-bold text-white tracking-wide">我的咒语书</h1>
      <div className="size-10" />
    </header>

    <main className="flex-1 overflow-y-auto p-6 no-scrollbar pb-24">
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: '悬浮术', level: 5, icon: CloudRain, color: 'text-sky-400' },
          { name: '火球术', level: 12, icon: Zap, color: 'text-orange-400' },
          { name: '护盾术', level: 8, icon: ShieldCheck, color: 'text-blue-400' },
          { name: '治愈术', level: 15, icon: Droplets, color: 'text-emerald-400' },
          { name: '隐身术', level: 20, icon: Sparkles, color: 'text-purple-400' },
          { name: '传送术', level: 25, icon: Globe, color: 'text-indigo-400' },
        ].map((spell, i) => (
          <div key={i} className="glass-card p-6 rounded-3xl flex flex-col items-center gap-4 border-b-4 border-magic-gold/20">
            <div className={cn("size-16 rounded-2xl bg-white/5 flex items-center justify-center", spell.color)}>
              <spell.icon className="size-10" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-white">{spell.name}</h3>
              <p className="text-[10px] text-magic-gold uppercase tracking-widest">等级 {spell.level}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export const StoreView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10">
        <ChevronLeft className="size-6 text-white" />
      </button>
      <h1 className="font-display text-xl font-bold text-white tracking-wide">魔法商店</h1>
      <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
        <Star className="size-4 text-magic-gold fill-current" />
        <span className="text-sm font-bold text-magic-gold">1,280</span>
      </div>
    </header>

    <main className="flex-1 overflow-y-auto p-6 no-scrollbar pb-24">
      <div className="grid grid-cols-2 gap-6">
        {[
          { name: '凤凰羽毛', price: 500, img: 'https://picsum.photos/seed/item1/200/200', desc: '提升法力恢复速度' },
          { name: '龙鳞', price: 800, img: 'https://picsum.photos/seed/item2/200/200', desc: '增强防御咒语' },
          { name: '水晶球', price: 1200, img: 'https://picsum.photos/seed/item3/200/200', desc: '解锁隐藏知识' },
          { name: '魔法棒', price: 2000, img: 'https://picsum.photos/seed/item4/200/200', desc: '大师级魔杖' },
        ].map((item, i) => (
          <div key={i} className="glass-card rounded-3xl overflow-hidden flex flex-col">
            <div className="aspect-square bg-white/5 relative">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1">
                <Star className="size-3 text-magic-gold fill-current" />
                <span className="text-[10px] font-bold text-magic-gold">{item.price}</span>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-1">
              <h3 className="font-bold text-sm text-white">{item.name}</h3>
              <p className="text-[10px] text-white/40 leading-tight">{item.desc}</p>
              <button className="mt-3 w-full py-2 bg-magic-gold text-magic-purple text-[10px] font-black uppercase tracking-widest rounded-xl active:scale-95 transition-all">
                购买
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export const SettingsView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col h-screen bg-magic-purple overflow-hidden">
    <header className="flex items-center p-6 justify-between">
      <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/10">
        <ChevronLeft className="size-6 text-white" />
      </button>
      <h1 className="font-display text-xl font-bold text-white tracking-wide">学院设置</h1>
      <div className="size-10" />
    </header>

    <main className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
      <section className="space-y-4">
        <h2 className="text-xs font-bold text-magic-gold uppercase tracking-widest ml-1">账户</h2>
        <div className="glass-card rounded-3xl overflow-hidden divide-y divide-white/10">
          {[
            { icon: User, label: '个人魔法', value: '巫师 小明' },
            { icon: ShieldCheck, label: '守护神控制', value: '已开启' },
            { icon: Globe, label: '语言', value: '简体中文' },
          ].map((item, i) => (
            <button key={i} className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <item.icon className="size-5 text-white/60" />
                </div>
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40">{item.value}</span>
                <ChevronRight className="size-4 text-white/20" />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xs font-bold text-magic-gold uppercase tracking-widest ml-1">偏好设置</h2>
        <div className="glass-card rounded-3xl overflow-hidden divide-y divide-white/10">
          {[
            { icon: Sparkles, label: '魔法特效', value: '开启' },
            { icon: Zap, label: '快速施法', value: '已启用' },
            { icon: Info, label: '关于学院', value: 'v2.4.0' },
          ].map((item, i) => (
            <button key={i} className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <item.icon className="size-5 text-white/60" />
                </div>
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
              <ChevronRight className="size-4 text-white/20" />
            </button>
          ))}
        </div>
      </section>

      <button className="w-full py-5 text-red-400 font-bold uppercase tracking-widest text-xs border-2 border-red-400/20 rounded-2xl active:scale-95 transition-all">
        离开学院
      </button>
    </main>
  </div>
);
