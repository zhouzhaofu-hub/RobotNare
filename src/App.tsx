/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Reorder, useMotionValue, useTransform } from 'motion/react';
import { AreaChart, Area, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, ReferenceArea, PieChart, Pie, Cell } from 'recharts';
import { 
  Home as HomeIcon, 
  Activity as ActivityIcon, 
  MessageCircle as MessageCircleIcon, 
  User as UserIcon, 
  Smartphone as SmartphoneIcon, 
  PhoneCall as PhoneCallIcon, 
  Users as UsersIcon, 
  Pill as PillIcon, 
  Bell as BellIcon, 
  Video as VideoIcon, 
  Camera as CameraIcon, 
  Mic as MicIcon, 
  Heart as HeartIcon, 
  Moon as MoonIcon, 
  Clipboard as ClipboardIcon, 
  ChevronRight as ChevronRightIcon, 
  ChevronLeft as ChevronLeftIcon, 
  Plus as PlusIcon, 
  Edit2 as Edit2Icon, 
  Image as ImageIconIcon, 
  Shield as ShieldIcon, 
  Info as InfoIcon, 
  Phone as PhoneIcon, 
  RefreshCw as RefreshCwIcon, 
  Maximize2 as Maximize2Icon, 
  Trash2 as Trash2Icon, 
  AlertTriangle as AlertTriangleIcon, 
  CircleAlert as AlertCircleIcon, 
  FileText as FileTextIcon, 
  BarChart2 as BarChart2Icon, 
  Settings as SettingsIcon, 
  MoreHorizontal as MoreHorizontalIcon, 
  ThumbsUp as ThumbsUpIcon, 
  Calendar as CalendarIcon, 
  Star as StarIcon, 
  HeartPulse as HeartPulseIcon, 
  Share2 as Share2Icon, 
  Download as DownloadIcon, 
  Search as SearchIcon, 
  Bot as BotIcon, 
  Stethoscope as StethoscopeIcon, 
  Lock as LockIcon,
  CheckCircle as CheckCircleIcon,
  Radio as RadioIcon,
  Power as PowerIcon,
  Smile,
  Meh,
  Frown
} from 'lucide-react';

// --- 极简线框图风格图标定义 (使用 Lucide React 提供的线框设计，风格统一且符合现代软件规范) ---
const Home = ({ size = 24, strokeWidth = 1.5, className }: any) => <HomeIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Activity = ({ size = 24, strokeWidth = 1.5, className }: any) => <ActivityIcon size={size} strokeWidth={strokeWidth} className={className} />;
const MessageCircle = ({ size = 24, strokeWidth = 1.5, className }: any) => <MessageCircleIcon size={size} strokeWidth={strokeWidth} className={className} />;
const User = ({ size = 24, strokeWidth = 1.5, className }: any) => <UserIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Smartphone = ({ size = 24, strokeWidth = 1.5, className }: any) => <SmartphoneIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Device = Smartphone;
const PhoneCall = ({ size = 24, strokeWidth = 1.5, className }: any) => <PhoneCallIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Users = ({ size = 24, strokeWidth = 1.5, className }: any) => <UsersIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Pill = ({ size = 24, strokeWidth = 1.5, className }: any) => <PillIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Bell = ({ size = 24, strokeWidth = 1.5, className }: any) => <BellIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Video = ({ size = 24, strokeWidth = 1.5, className }: any) => <VideoIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Camera = ({ size = 24, strokeWidth = 1.5, className }: any) => <CameraIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Mic = ({ size = 24, strokeWidth = 1.5, className }: any) => <MicIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Heart = ({ size = 24, strokeWidth = 1.5, className }: any) => <HeartIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Moon = ({ size = 24, strokeWidth = 1.5, className }: any) => <MoonIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Clipboard = ({ size = 24, strokeWidth = 1.5, className }: any) => <ClipboardIcon size={size} strokeWidth={strokeWidth} className={className} />;
const ChevronRight = ({ size = 24, strokeWidth = 1.5, className }: any) => <ChevronRightIcon size={size} strokeWidth={strokeWidth} className={className} />;
const ChevronLeft = ({ size = 24, strokeWidth = 1.5, className }: any) => <ChevronLeftIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Plus = ({ size = 24, strokeWidth = 1.5, className }: any) => <PlusIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Edit2 = ({ size = 24, strokeWidth = 1.5, className }: any) => <Edit2Icon size={size} strokeWidth={strokeWidth} className={className} />;
const ImageIcon = ({ size = 24, strokeWidth = 1.5, className }: any) => <ImageIconIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Shield = ({ size = 24, strokeWidth = 1.5, className }: any) => <ShieldIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Info = ({ size = 24, strokeWidth = 1.5, className }: any) => <InfoIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Phone = ({ size = 24, strokeWidth = 1.5, className }: any) => <PhoneIcon size={size} strokeWidth={strokeWidth} className={className} />;
const RefreshCw = ({ size = 24, strokeWidth = 1.5, className }: any) => <RefreshCwIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Maximize2 = ({ size = 24, strokeWidth = 1.5, className }: any) => <Maximize2Icon size={size} strokeWidth={strokeWidth} className={className} />;
const Trash2 = ({ size = 24, strokeWidth = 1.5, className }: any) => <Trash2Icon size={size} strokeWidth={strokeWidth} className={className} />;
const AlertTriangle = ({ size = 24, strokeWidth = 1.5, className }: any) => <AlertTriangleIcon size={size} strokeWidth={strokeWidth} className={className} />;
const AlertCircle = ({ size = 24, strokeWidth = 1.5, className }: any) => <AlertCircleIcon size={size} strokeWidth={strokeWidth} className={className} />;
const FileText = ({ size = 24, strokeWidth = 1.5, className }: any) => <FileTextIcon size={size} strokeWidth={strokeWidth} className={className} />;
const BarChart2 = ({ size = 24, strokeWidth = 1.5, className }: any) => <BarChart2Icon size={size} strokeWidth={strokeWidth} className={className} />;
const Settings = ({ size = 24, strokeWidth = 1.5, className }: any) => <SettingsIcon size={size} strokeWidth={strokeWidth} className={className} />;
const MoreHorizontal = ({ size = 24, strokeWidth = 1.5, className }: any) => <MoreHorizontalIcon size={size} strokeWidth={strokeWidth} className={className} />;
const ThumbsUp = ({ size = 24, strokeWidth = 1.5, className }: any) => <ThumbsUpIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Calendar = ({ size = 24, strokeWidth = 1.5, className }: any) => <CalendarIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Star = ({ size = 24, strokeWidth = 1.5, className }: any) => <StarIcon size={size} strokeWidth={strokeWidth} className={className} />;
const HeartPulse = ({ size = 24, strokeWidth = 1.5, className }: any) => <HeartPulseIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Share2 = ({ size = 24, strokeWidth = 1.5, className }: any) => <Share2Icon size={size} strokeWidth={strokeWidth} className={className} />;
const Download = ({ size = 24, strokeWidth = 1.5, className }: any) => <DownloadIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Search = ({ size = 24, strokeWidth = 1.5, className }: any) => <SearchIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Bot = ({ size = 24, strokeWidth = 1.5, className }: any) => <BotIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Stethoscope = ({ size = 24, strokeWidth = 1.5, className }: any) => <StethoscopeIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Lock = ({ size = 24, strokeWidth = 1.5, className }: any) => <LockIcon size={size} strokeWidth={strokeWidth} className={className} />;
const CheckCircle = ({ size = 24, strokeWidth = 1.5, className }: any) => <CheckCircleIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Radio = ({ size = 24, strokeWidth = 1.5, className }: any) => <RadioIcon size={size} strokeWidth={strokeWidth} className={className} />;
const Power = ({ size = 24, strokeWidth = 1.5, className }: any) => <PowerIcon size={size} strokeWidth={strokeWidth} className={className} />;

// --- 类型定义 ---
type TabType = 'guardian' | 'health' | 'companion' | 'profile';
type OverlayType = 'alertDetail' | 'videoCall' | 'voiceMessage' | 'imageViewer' | 'notifications' | 'elderlyProfile' | 'addRobot' | 'emergencyContacts' | 'familyMembers' | 'medicationPlan' | 'medicationCalendar' | 'legalNotice' | 'robotDetail' | 'confirmDelete' | 'cameraAccessLogs' | 'alarmSettings' | 'healthReport' | 'memoriesAlbum' | 'smartPlatforms' | 'smartDeviceScan' | 'smartDeviceDetail' | 'deviceManagement';

interface Robot {
  id: string;
  nickname: string;
  model: string;
  status: 'online' | 'offline';
  battery: number;
  network: string;
  version: string;
  icon: string;
}

interface CameraLog {
  id: string;
  time: string;
  source: '告警' | '通话' | '抓拍';
  status: string;
}

interface Contact {
  id: string;
  name: string;
  relation: string;
  phone: string;
}

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  avatar: string;
  phone?: string;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  times: string[];
  enabled?: boolean;
  imageUrl?: string;
  status?: 'pending' | 'taken' | 'missed' | 'delayed';
  startDate?: string;
  endDate?: string;
}

interface AlertData {
  time: string;
  type: string;
  status: 'critical' | 'warning';
  message: string;
}

interface AppNotification {
  id: string;
  type: '全部' | '告警' | '提示' | '信息';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

// --- 子组件：全屏图片查看器 ---
const ImageViewer = ({ src, onClose }: { src: string; onClose: () => void }) => {
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleSave = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `snapshot_${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 2000);
    } catch (e) {
      console.error('Failed to download image', e);
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center p-0"
    >
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-black/60">
        <button onClick={onClose} className="text-white text-4xl drop-shadow-md p-2 active:scale-90 transition-transform">‹</button>
        <button 
          onClick={handleSave}
          className="bg-white/20 backdrop-blur-xl text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 active:scale-95 transition-transform"
        >
          <span><Download size={16} /></span> 保存图片
        </button>
      </header>

      <div className="w-full h-full flex items-center justify-center">
        <motion.img 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          src={src} 
          alt="全屏查看" 
          className="max-w-full max-h-full transition-transform duration-300 touch-none shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <AnimatePresence>
        {showSavedToast && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 bg-white text-[#024481] px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 z-20"
          >
            <span><CheckCircle size={14} className="text-emerald-400" /></span> 已成功保存至相册
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-30">
        <p className="text-white text-xs font-bold  uppercase">双指可缩放查看细节</p>
      </div>
    </motion.div>
  );
};

// --- 子组件：视频通话页 ---
const VideoCallView = ({ onClose, isConnecting, onAction }: { onClose: () => void; isConnecting: boolean; onAction: (type: OverlayType) => void }) => {
  const [status, setStatus] = useState<'active' | 'poor' | 'interrupted' | 'hungup'>(isConnecting ? 'active' : 'active');
  const [callTime, setCallTime] = useState(45);

  useEffect(() => {
    if (!isConnecting) {
      const timer = setInterval(() => {
        setCallTime(prev => prev + 1);
      }, 1000);

      // 模拟 8 秒后可能出现网络不佳
      const networkTimeout = setTimeout(() => {
        if (Math.random() > 0.5) {
          setStatus('poor');
        }
      }, 8000);

      // 模拟 15-20 秒后可能通话由于网络中断或对方挂断
      const interruptionTimeout = setTimeout(() => {
        if (Math.random() > 0.4) {
          setStatus('interrupted');
        } else if (Math.random() > 0.7) {
          setStatus('hungup');
        }
      }, 15000);

      return () => {
        clearInterval(timer);
        clearTimeout(networkTimeout);
        clearTimeout(interruptionTimeout);
      };
    }
  }, [isConnecting]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRetry = () => {
    onClose();
    setTimeout(() => onAction('videoCall'), 100);
  };

  const handleVoiceMessage = () => {
    onClose();
    setTimeout(() => onAction('voiceMessage'), 100);
  };

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="absolute inset-0 z-[100] bg-gray-900 flex flex-col overflow-hidden"
    >
      {/* 背景画面 */}
      <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-all duration-1000 ${isConnecting || status === 'interrupted' || status === 'hungup' ? 'opacity-30 blur-xl scale-110' : status === 'poor' ? 'opacity-60 blur-sm scale-105' : 'opacity-100 blur-0 scale-100'}`}></div>
      
      {/* 自己的画面 (PIP) */}
      {!isConnecting && status !== 'interrupted' && status !== 'hungup' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-12 right-6 w-28 h-40 bg-gray-800 rounded-[24px] overflow-hidden border-2 border-white/20 shadow-2xl z-20"
        >
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="我" referrerPolicy="no-referrer" />
        </motion.div>
      )}

      {/* 状态提示 */}
      <div className="absolute top-12 left-0 right-0 text-center z-20 pointer-events-none px-6">
        {!isConnecting && status === 'active' && (
          <div className="bg-black/40 backdrop-blur inline-flex items-center gap-2 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white text-xs font-bold">通话中 - 小和正在为您记录</span>
          </div>
        )}
        {status === 'poor' && (
          <div className="bg-[#F59E0B]/80 backdrop-blur inline-flex items-center gap-2 px-4 py-1.5 rounded-full">
            <span className="text-white text-xs font-bold">⚠️ 当前网络环境较差，画面可能卡顿</span>
          </div>
        )}
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-between py-20 z-10 w-full px-6">
        <div className="text-center mt-10 w-full">
          {isConnecting ? (
            <div className="space-y-6 flex flex-col items-center">
               <div className="relative w-24 h-24">
                 <motion.div 
                   animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute inset-0 bg-blue-500 rounded-full blur-xl"
                 />
                 <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-4xl shadow-inner">
                   👴
                 </div>
               </div>
               <div className="space-y-2">
                 <h2 className="text-white text-2xl font-bold  animate-pulse">正在呼叫妈妈</h2>
                 <p className="text-white/60 text-base">正在等待接通...</p>
               </div>
            </div>
          ) : (status === 'interrupted' || status === 'hungup') ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/60 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 space-y-6 w-full max-w-[320px] mx-auto text-center shadow-2xl"
            >
              <div className="text-5xl mb-4">{status === 'interrupted' ? '📡' : '🤙'}</div>
              <h3 className="text-white text-xl font-bold">{status === 'interrupted' ? '网络已断开' : '对方已挂断'}</h3>
              <p className="text-white/60 text-base leading-relaxed">
                {status === 'interrupted' ? '检测到网络异常繁忙，通话已被迫中断' : '父母可能暂时有事离开了通话'}
                ，您可以尝试以下操作：
              </p>
              
              <div className="space-y-3 pt-4">
                <button 
                  onClick={handleRetry}
                  className="w-full py-4 bg-blue-600 text-white rounded-[24px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <RefreshCw size={18} className="animate-spin-slow" /> 重新呼叫
                </button>
                <button 
                  onClick={handleVoiceMessage}
                  className="w-full py-4 bg-white/10 text-white rounded-[24px] font-bold border border-white/10 active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <Mic size={18} /> 发送语音留言
                </button>
                <button onClick={onClose} className="w-full py-3 text-white/40 text-xs font-bold active:opacity-60">
                  取消返回
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 inline-block">
              <span className="text-white font-mono text-base ">正在通话 {formatTime(callTime)}</span>
            </div>
          )}
        </div>
        
        {/* 底部操作栏 */}
        {(status !== 'interrupted' && status !== 'hungup') && (
          <div className="w-full px-4 pb-8 mt-auto">
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-[32px] grid grid-cols-3 gap-6 shadow-2xl border border-white/10">
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-full bg-white/10 group-active:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <Mic size={24} strokeWidth={1.5} />
                </div>
                <span className="text-white/60 text-xs font-bold">静音</span>
              </button>
              <button 
                onClick={onClose} 
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#E11D48] group-active:scale-95 flex items-center justify-center text-white shadow-lg shadow-red-500/40 transition-all -mt-4">
                  <Phone size={28} strokeWidth={2} className="rotate-[135deg]" />
                </div>
                <span className="text-white/80 text-xs font-bold">挂断</span>
              </button>
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-full bg-white/10 group-active:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <Camera size={24} strokeWidth={1.5} />
                </div>
                <span className="text-white/60 text-xs font-bold">翻转镜头</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- 子组件：传家记忆相册页 ---
const MemoriesAlbumView = ({ onClose, onImageClick, onShowToast }: { onClose: () => void; onImageClick: (src: string) => void; onShowToast: (msg: string) => void }) => {
  const memories = [
    {
      id: '1',
      date: '2024-05-12',
      topic: '童年趣事',
      text: '从前啊，那条小河里面全都是鱼，我跟小伙伴经常去抓，现在的河水可不如当年清了。',
      source: '爷爷',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
      duration: '00:45'
    },
    {
      id: '2',
      date: '2024-05-11',
      topic: '家庭菜谱',
      text: '红烧肉的关键在于火候，要用小火慢炖，冰糖炒糖色才会亮，这可是奶奶的独家秘方。',
      source: '奶奶',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
      duration: '01:12'
    },
    {
      id: '3',
      date: '2024-05-10',
      topic: '青春岁月',
      text: '我们那个年代，骑一辆二八大杠自行车可是很拉风的，你爸爸当时每天骑车二十里地去上学。',
      source: '爷爷',
      image: 'https://images.unsplash.com/photo-1533038590840-1cbea4349bf5?q=80&w=800&auto=format&fit=crop',
      duration: '02:08'
    }
  ];

  const handleShare = async (memory?: any) => {
    const shareData = {
      title: memory ? `传家记忆: ${memory.topic}` : '传家记忆相册',
      text: memory ? `“${memory.text}” —— 分享自 ${memory.source} 的记忆` : '这是我们家的传家记忆相册，点点滴滴，代代相传。',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        onShowToast('链接已复制到剪贴板，快去转发给亲友吧！');
      } catch (err) {
        console.error('Clipboard failed:', err);
      }
    }
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="absolute inset-0 z-[150] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-[#024481]">传家记忆</h2>
        </div>
        <button onClick={() => handleShare()} className="text-xl active:scale-95 transition-transform">🔗</button>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="bg-[#024481] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <h3 className="text-2xl font-serif mb-2 relative z-10">时光回响</h3>
          <p className="text-base text-white/80 relative z-10 leading-relaxed">这里珍藏了长辈的碎碎念与老日历。<br/>点点滴滴，代代相传。</p>
        </div>

        <div className="space-y-6">
          {memories.map((memory) => (
            <div key={memory.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm card-shadow flex flex-col">
              {memory.image && (
                <div 
                  onClick={() => onImageClick(memory.image)}
                  className="relative h-48 w-full cursor-pointer group active:opacity-90"
                >
                  <img src={memory.image} alt="记忆瞬间" className="w-full h-full object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                    <span className="text-white text-xs font-bold uppercase  bg-black/40 w-max px-2 py-1 rounded backdrop-blur-md mb-2">{memory.topic}</span>
                    <span className="text-white/60 text-xs font-bold">点击查看图片</span>
                  </div>
                </div>
              )}
              <div className="p-5 space-y-4 relative">
                {!memory.image && (
                  <span className="text-gray-500 text-xs font-bold uppercase  bg-gray-100 w-max px-2 py-1 rounded mb-2 inline-block">{memory.topic}</span>
                )}
                <div className="flex gap-2">
                  <span className="text-3xl text-[#024481]/20 font-serif leading-none mt-1">“</span>
                  <p className="text-gray-800 text-base font-medium leading-relaxed italic">{memory.text}</p>
                  <span className="text-3xl text-[#024481]/20 font-serif leading-none mt-auto">”</span>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-bold">由 {memory.source} 讲述</span>
                    <span className="text-xs text-gray-400 font-bold uppercase">{memory.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => onShowToast(`正在为您播放 ${memory.source} 的原声录音...`)}
                      className="flex items-center gap-1.5 bg-[#024481]/5 text-[#024481] px-3 py-1.5 rounded-full active:scale-95 transition-all"
                    >
                      <span className="text-xs">▶️</span>
                      <span className="text-xs font-bold">{memory.duration} 播放原声</span>
                    </button>
                    <button 
                      onClick={() => handleShare(memory)} 
                      title="分享分享"
                      className="text-[#024481] text-lg active:scale-90 transition-transform p-1.5 bg-[#024481]/5 rounded-full"
                    >🔗</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-12 mb-8">
           <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
        </div>
      </main>
    </motion.div>
  );
};

// --- 子组件：告警详情页 ---
const AlertDetailView = ({ data, onClose, onResolve }: { data: AlertData; onClose: () => void; onResolve: () => void }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showFalseAlarmConfirm, setShowFalseAlarmConfirm] = useState(false);
  const [showResolveConfirm, setShowResolveConfirm] = useState(false);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[100] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-[#fef2f2] text-red-700 px-6 py-6 flex items-center gap-3 relative shadow-md shadow-red-100 border-b border-[#fee2e2] shrink-0">
        <button onClick={onClose} className="w-10 h-10 bg-[#E11D48]/10 rounded-[24px] flex items-center justify-center text-[#E11D48] font-bold active:scale-95 transition-transform text-2xl">‹</button>
        <h2 className="text-xl font-bold flex items-center gap-2">
          检测到妈妈可能跌倒
        </h2>
      </header>
      <main className="flex-1 px-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] space-y-6 py-6 text-gray-800">
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 space-y-2">
          <div className="flex justify-between items-center py-1 border-b border-gray-50 text-sm">
            <span className="text-gray-500">发生时间</span>
            <span className="font-bold text-gray-800">2026-05-10 13:00:23</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-50 text-sm">
            <span className="text-gray-500">发生位置</span>
            <span className="font-bold text-gray-800">主卧室</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-50 text-sm">
            <span className="text-gray-500">持续时长</span>
            <span className="font-bold text-[#024481]">已达 3 分钟</span>
          </div>
          <div className="flex justify-between items-center py-1 text-sm">
            <span className="text-gray-500">最新体征数据</span>
            <span className="font-bold text-gray-800">心率稍快 95bmp</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-500 font-bold text-xs px-1  uppercase">实时画面核实</h3>
          {!isVideoOpen ? (
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-full h-16 border border-dashed border-[#024481]/20 rounded-[24px] text-[#024481] font-bold flex items-center justify-center gap-2 bg-blue-50/30"
            >
              <span className="text-xl inline-flex items-center justify-center"><Video size={20} /></span>
              <span className="text-sm">点击查看实时监控画面</span>
            </button>
          ) : (
            <div className="aspect-video bg-gray-900 rounded-[24px] overflow-hidden relative shadow-md">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="核实画面" referrerPolicy="no-referrer" />
              <div className="absolute top-2 left-2 bg-[#E11D48] text-white text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-1 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> LIVE
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2">
          <button className="bg-white border border-gray-100 text-gray-800 py-4 rounded-[24px] flex flex-col items-center justify-center gap-1 shadow-sm active:scale-[0.98] transition-transform font-bold">
            <span className="text-xl flex items-center justify-center"><PhoneCall size={20} /></span>
            <span className="text-xs">呼叫家人</span>
          </button>
          <button className="bg-white border border-gray-100 text-gray-800 py-4 rounded-[24px] flex flex-col items-center justify-center gap-1 shadow-sm active:scale-[0.98] transition-transform font-bold">
            <span className="text-xl flex items-center justify-center"><Stethoscope size={20} className="text-red-500" /></span>
            <span className="text-xs">120急救</span>
          </button>
          <button className="bg-white border border-gray-100 text-gray-800 py-4 rounded-[24px] flex flex-col items-center justify-center gap-1 shadow-sm active:scale-[0.98] transition-transform font-bold">
            <span className="text-xl flex items-center justify-center"><Home size={20} /></span>
            <span className="text-xs">联系物业</span>
          </button>
        </div>

        <div className="pt-4 pb-6 space-y-3">
          {!showResolveConfirm ? (
            <button 
              onClick={() => setShowResolveConfirm(true)}
              className="w-full bg-[#10B981] text-white py-4 rounded-[24px] flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform text-sm"
            >
              <span className="font-bold text-base">解除告警</span>
            </button>
          ) : (
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-green-50 p-4 rounded-[20px] border border-green-100 flex flex-col gap-3 text-center"
             >
               <p className="text-sm font-bold text-green-800">已确认长辈安全并解除告警？</p>
               <div className="flex gap-2">
                 <button onClick={() => setShowResolveConfirm(false)} className="flex-1 bg-white py-2 rounded-[16px] text-gray-500 text-sm font-bold border border-gray-100 active:scale-95 transition-transform">取消</button>
                 <button onClick={onResolve} className="flex-1 bg-[#10B981] py-2 rounded-[16px] text-white text-sm font-bold shadow-md active:scale-95 transition-transform">解除</button>
               </div>
             </motion.div>
          )}

          <div className="text-center">
            {!showFalseAlarmConfirm ? (
              <button 
                onClick={() => setShowFalseAlarmConfirm(true)}
                className="text-gray-400 font-bold text-[10px] underline underline-offset-2"
              >
                这可能是一次误报？
              </button>
            ) : (
               <motion.div 
                 initial={{ opacity: 0, y: 5 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-gray-100 p-3 rounded-[16px] flex flex-col gap-2"
               >
                 <p className="text-sm font-bold text-gray-700">确认是一次误报吗？</p>
                 <div className="flex gap-2">
                   <button onClick={() => setShowFalseAlarmConfirm(false)} className="flex-1 bg-white py-2 rounded-[16px] text-gray-500 text-xs font-bold shadow-sm">取消</button>
                   <button onClick={onResolve} className="flex-1 bg-gray-300 py-2 rounded-[16px] text-gray-700 text-xs font-bold shadow-sm">误报</button>
                 </div>
               </motion.div>
            )}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

// --- 子组件：语音发送页 ---
const VoiceMessageView = ({ onClose }: { onClose: () => void }) => {
  const [isRecording, setIsRecording] = useState(false);
  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="absolute inset-0 z-[100] bg-white flex flex-col"
    >
      <header className="px-6 py-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 text-black">发送语音指令</h2>
        <button onClick={onClose} className="text-gray-400 text-3xl p-2 active:scale-90 transition-transform">‹</button>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center p-10 space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 text-black">{isRecording ? '正在录音...' : '点击开始录音'}</h3>
          <p className="text-gray-400">机器人将循环播放这段录音</p>
        </div>
        <div className="relative">
          {isRecording && (
            <motion.div 
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-[#024481]/10 rounded-full"
            />
          )}
          <button 
            onMouseDown={() => setIsRecording(true)}
            onMouseUp={() => setIsRecording(false)}
            onMouseLeave={() => setIsRecording(false)}
            className={`relative w-40 h-40 rounded-full bg-[#024481] shadow-2xl flex items-center justify-center text-5xl active:scale-90 transition-transform ${isRecording ? 'brightness-125 shadow-[#024481]/40' : ''}`}
          >
            <Mic size={20} />
          </button>
        </div>
        <p className="text-base text-[#024481] font-bold">长按底部按钮录制</p>
      </div>
      <div className="p-10 text-center">
        <button onClick={onClose} className="text-gray-400 font-bold">完成并退出</button>
      </div>
    </motion.div>
  );
};

// --- 子�
/**
 * 通用确认弹窗组件
 * 用于替代原生的 window.confirm
 */
const ConfirmationView = ({ 
  title, 
  message, 
  confirmText = "确认", 
  cancelText = "取消", 
  onConfirm, 
  onCancel 
}: { 
  title: string; 
  message: string; 
  confirmText?: string; 
  cancelText?: string; 
  onConfirm: () => void; 
  onCancel: () => void;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[500] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-[40px] w-full max-w-sm p-8 space-y-6 text-center shadow-2xl">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-2">❓</div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-base text-gray-400 leading-relaxed">{message}</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={onCancel}
            className="flex-1 py-4 bg-gray-100 rounded-[24px] font-bold text-gray-500 active:scale-95 transition-transform"
          >{cancelText}</button>
          <button 
            onClick={() => {
              onConfirm();
              onCancel();
            }}
            className="flex-1 py-4 bg-[#024481] text-white rounded-[24px] font-bold shadow-lg active:scale-95 transition-transform"
          >{confirmText}</button>
        </div>
      </div>
    </motion.div>
  );
};

// --- 子组件：守护首页 ---
const GuardianView = ({ 
  onAction, 
  onImageClick, 
  onStatusClick,
  onTabSwitch,
  isDeviceOffline = false,
  isAnonymous = false,
  unreadNotificationsCount = 0,
  alarmResolved = false
}: { 
  onAction: (type: OverlayType) => void;
  onImageClick: (src: string) => void;
  onStatusClick: (data: AlertData) => void;
  onTabSwitch: (tab: TabType) => void;
  isDeviceOffline?: boolean;
  isAnonymous?: boolean;
  unreadNotificationsCount?: number;
  alarmResolved?: boolean;
}) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [captureProgress, setCaptureProgress] = useState(0);
  const [captureStep, setCaptureStep] = useState('');
  const albumRef = useRef<HTMLDivElement>(null);
  const [albumIndex, setAlbumIndex] = useState(0);

  const [images, setImages] = useState(isAnonymous ? [] : [
    { url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800" },
    { url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800" },
    { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" }
  ]);

  // 安心时刻自动轮播
  useEffect(() => {
    if (isCapturing || isAnonymous || isDeviceOffline || images.length <= 1) return;
    const interval = setInterval(() => {
      setAlbumIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCapturing, isAnonymous, isDeviceOffline, images.length]);

  useEffect(() => {
    if (albumRef.current) {
      const el = albumRef.current;
      el.scrollTo({
        left: el.clientWidth * albumIndex,
        behavior: 'smooth'
      });
    }
  }, [albumIndex]);

  const [localToast, setLocalToast] = useState('');
  const [pullStatus, setPullStatus] = useState<'idle' | 'pulling' | 'ready'>('idle');
  const dragY = useMotionValue(0);
  const pullThreshold = 80;
  const pullOpacity = useTransform(dragY, [0, pullThreshold], [0, 1]);
  const pullHeight = useTransform(dragY, [0, pullThreshold], [0, 60]);

  const handleDrag = (_: any, info: any) => {
    if (info.offset.y > pullThreshold) {
      setPullStatus('ready');
    } else if (info.offset.y > 10) {
      setPullStatus('pulling');
    } else {
      setPullStatus('idle');
    }
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y > pullThreshold) {
      handleRefresh();
    }
    setPullStatus('idle');
    dragY.set(0);
  };

  const handleRefresh = async () => {
    if (isCapturing || isDeviceOffline) return;
    
    // 立即滚动到安心卡位置
    document.getElementById('guardian-moment-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setIsCapturing(true);
    setCaptureProgress(0);
    
    const steps = [
      { p: 15, s: '指令正在下发...' },
      { p: 45, s: '机器人正移动至老人附近...' },
      { p: 75, s: '摄像头瞬间开启抓拍...' },
      { p: 95, s: '加密上传影像中...' }
    ];

    for (const step of steps) {
      setCaptureStep(step.s);
      // 模拟每一步的耗时
      await new Promise(r => setTimeout(r, 800 + Math.random() * 600));
      setCaptureProgress(step.p);
    }

    // 抓拍成功与失败概率 (假设20%失败率)
    if (Math.random() > 0.2) {
      // 抓拍成功后，模拟多加一张图片（或者替换第一张）
      const newImg = { url: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&q=80&w=800&sig=${Date.now()}` };
      setImages(prev => [newImg, ...prev.slice(0, 2)]);
      setCaptureStep('抓拍成功');
      setLocalToast('已更新 1 张最新照片');
      setTimeout(() => setLocalToast(''), 3000);
    } else {
      setCaptureStep('');
      setLocalToast('抓拍失败，请稍后再试');
      setTimeout(() => setLocalToast(''), 3000);
    }
    
    setIsCapturing(false);
    setCaptureProgress(100);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 pb-24"
    >
      <AnimatePresence>
        {localToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
            className="fixed top-1/2 left-1/2 bg-gray-800 text-white px-6 py-3 rounded-full text-base font-bold z-[150] shadow-xl text-nowrap"
          >
            {localToast}
          </motion.div>
        )}
      </AnimatePresence>
      {/* 状态栏：显示系统当前健康状况 */}
      {!isAnonymous && (
        <div className="w-full">
          {!alarmResolved ? (
            <button 
              onClick={() => onStatusClick({
                time: '刚刚',
                type: '跌倒疑似告警',
                status: 'critical',
                message: '系统检测到长辈在卧室可能发生跌倒，请立即确认画面。'
              })}
              className="w-full bg-[#fef2f2] border border-[#fee2e2] px-5 py-4 rounded-[24px] flex justify-between items-center shadow-md shadow-red-100 active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E11D48]"></span>
                </span>
                <div className="text-left">
                  <p className="text-red-700 font-bold text-base">疑似跌倒 严重告警</p>
                  <p className="text-red-400 text-xs font-bold">13:00 卧室区域</p>
                </div>
              </div>
              <span className="bg-[#E11D48] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">立即处理</span>
            </button>
          ) : (
            <div className="w-full bg-green-50 border border-green-100 px-5 py-4 rounded-[24px] flex items-center gap-3 shadow-md shadow-green-100">
              <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                <CheckCircle size={16} />
              </div>
              <div>
                <p className="text-green-800 font-bold text-base">守护状态：正常</p>
                <p className="text-[#10B981]/60 text-xs font-medium">系统已恢复实时监测，环境安全</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 安心时刻卡片：展示长辈实时抓拍画面 */}
      <div id="guardian-moment-card" className="bg-white rounded-[32px] px-4 pt-4 pb-1 card-shadow border border-gray-50 flex flex-col gap-4 overflow-hidden relative">
        {/* 下拉提示背景 */}
        <div className="absolute top-0 left-0 right-0 h-20 flex flex-col items-center justify-center pointer-events-none z-0">
           <motion.div 
             style={{ opacity: pullOpacity, height: pullHeight }}
             className="w-16 h-1 bg-[#024481]/20 rounded-full mb-2"
           />
           <motion.p style={{ opacity: pullOpacity }} className="text-xs text-[#024481]/40 font-bold uppercase ">
             {pullStatus === 'ready' ? '松开立即抓拍' : '继续下拉抓拍照片'}
           </motion.p>
        </div>

        <motion.div 
          style={{ y: dragY }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.6}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          className="relative z-10 bg-white flex flex-col gap-4"
        >
          <div className="flex justify-between items-center px-1">
            <h3 className="font-bold text-lg text-gray-800">安心时刻</h3>
            <div className="flex items-center gap-2">
            </div>
          </div>

          {isDeviceOffline ? (
            <div className="w-full aspect-[4/3] rounded-3xl bg-gray-50 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-3">
              <span className="text-5xl opacity-20">📡</span>
              <p className="text-xs text-gray-400 font-bold">设备离线或被遮挡，无法获取影像</p>
            </div>
          ) : isAnonymous ? (
            <div className="w-full aspect-[4/3] rounded-3xl bg-gray-50 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-3">
              <span className="text-5xl opacity-20">🍃</span>
              <p className="text-xs text-gray-400 font-bold">暂无实时影像数据</p>
            </div>
          ) : isCapturing ? (
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-black overflow-hidden flex flex-col items-center justify-center p-8 gap-6 group">
               {/* 模拟扫描线 */}
               <motion.div 
                 animate={{ top: ['0%', '100%', '0%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 right-0 h-0.5 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
               />
               <div className="relative z-0 opacity-20 scale-110 pointer-events-none">
                 <img src={images[0]?.url} className="w-full h-full object-cover blur-xl" alt="blur" referrerPolicy="no-referrer" />
               </div>
               
               <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
                 <div className="text-4xl animate-bounce">🛰️</div>
                 <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${captureProgress}%` }}
                      className="h-full bg-blue-500"
                    />
                 </div>
                 <p className="text-white font-bold text-xs  animate-pulse">{captureStep}</p>
                 <div className="mt-4 flex gap-1">
                   {[0, 1, 2].map(i => (
                     <motion.div 
                       key={i}
                       animate={{ opacity: [0.3, 1, 0.3] }}
                       transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                       className="w-1.5 h-1.5 rounded-full bg-blue-400"
                     />
                   ))}
                 </div>
               </div>
            </div>
          ) : (
            <div 
              ref={albumRef}
              className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory px-0.5"
              onScroll={(e) => {
                const el = e.currentTarget;
                const index = Math.round(el.scrollLeft / el.clientWidth);
                if (index !== albumIndex) setAlbumIndex(index);
              }}
            >
              {images.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => onImageClick(item.url)}
                  className="relative shrink-0 w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-200 shadow-xl border-2 border-white snap-center cursor-pointer group"
                >
                  <img 
                    src={item.url} 
                    alt="安心时刻" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* 图片水印与元数据 */}
                  <div className="absolute top-0 left-0 right-0 p-4 bg-black/20 pointer-events-none">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-white/80 text-[9px] font-bold  uppercase">智护 实时抓拍</span>
                        <span className="text-white/40 text-xs font-medium">机位: 1号智能移动机器人 (客厅)</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md text-white text-xs px-2 py-0.5 rounded-full font-bold border border-white/10 opacity-60">
                        {index + 1} / {images.length}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 p-2 pointer-events-none bg-black/10 backdrop-blur-[2px] rounded-[24px]">
                    <p className="text-white/60 text-[9px] font-medium ">
                      {new Date().toLocaleDateString()} {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <button 
            className="flex items-center justify-center gap-2 py-0 text-center text-[10px] text-gray-400 font-bold -mt-2 pb-1 uppercase  pointer-events-none"
          >
            <span>{isCapturing ? '正在联机握手...' : '下拉立即抓拍照片'}</span>
          </button>
        </motion.div>
      </div>

      {/* 今日概况：关键健康指标摘要 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-bold text-lg text-gray-800">今日概况</h3>
        </div>

        <div className="relative overflow-hidden">
          {!isAnonymous && (
            <div className="absolute top-6 right-6 z-10 flex gap-1.5">
              {[0, 1, 2, 3].map(idx => (
                <div 
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeCardIndex === idx ? 'w-4 bg-[#024481]' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          )}
          <div 
            className="flex transition-transform duration-500 ease-out"
          >
            {isAnonymous ? (
              <div className="w-full px-1">
                <div className="bg-white rounded-[32px] p-10 border border-gray-50 shadow-sm flex flex-col items-center justify-center gap-4 text-center">
                  <div className="text-5xl">🔭</div>
                  <div>
                    <h4 className="font-bold text-gray-800">概况数据正在生成中</h4>
                    <p className="text-xs text-gray-400 mt-1">系统正在全天候监测并分析关键健康趋势</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                   onScroll={(e) => {
                     const el = e.currentTarget;
                     const index = Math.round(el.scrollLeft / el.clientWidth);
                     if (index !== activeCardIndex) setActiveCardIndex(index);
                   }}>
              
              {/* 心率呼吸卡片 */}
              <div 
                className="w-full shrink-0 snap-center px-1"
                onClick={() => onTabSwitch('health')}
              >
                <div className="bg-white rounded-[32px] px-6 pb-6 pt-16 aspect-[4/3] border border-gray-50 shadow-sm flex flex-col justify-between active:scale-[0.98] transition-all cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                          <Heart size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-800">心率 / 呼吸</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase ">雷达实时监测</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex flex-col items-end">
                          <span className="text-[10px] bg-green-50 text-[#10B981] px-2 py-0.5 rounded-full font-bold">正常</span>
                          <p className="text-[9px] text-gray-300 mt-0.5">刚刚同步</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-2 border-y border-gray-50">
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase ">平均心率</p>
                        <p className="text-xl font-bold text-gray-800">72<span className="text-xs ml-1 font-bold">bpm</span></p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase ">平均呼吸</p>
                        <p className="text-xl font-bold text-gray-800">18<span className="text-xs ml-1 font-bold">次/分</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(6)].map((_, i) => (
                         <motion.div 
                           key={i}
                           animate={{ height: [4, 12, 6, 14, 8] }}
                           transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
                           className="w-1 bg-red-400 rounded-full"
                         />
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-500 font-medium">生命体征平稳，未检测到异常波动。</p>
                  </div>
                </div>
              </div>
              <div 
                className="w-full shrink-0 snap-center px-1"
                onClick={() => onTabSwitch('health')}
              >
                <div className="bg-white rounded-[32px] px-6 pb-6 pt-16 aspect-[4/3] border border-gray-50 shadow-sm flex flex-col justify-between active:scale-[0.98] transition-all cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                          <Moon size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-800">睡眠质量</h4>
                          <p className="text-[10px] text-gray-400 font-bold">每日监测数据</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex flex-col items-end">
                          <p className="text-xl font-bold text-[#024481]">78<span className="text-xs ml-1 font-bold">分</span></p>
                          <p className="text-[10px] text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded-full">良好</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-2 border-y border-gray-50">
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase ">睡眠时长</p>
                        <p className="text-xl font-bold text-gray-800">6.3<span className="text-xs ml-1 font-bold">h</span></p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase ">深睡时长</p>
                        <p className="text-xl font-bold text-gray-800">2.1<span className="text-xs ml-1 font-bold">h</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: '85%' }}
                         className="h-full bg-blue-400 rounded-full"
                       />
                    </div>
                    <p className="shrink-0 text-[10px] text-blue-500 font-bold">优于 85% 同龄人</p>
                  </div>
                </div>
              </div>

              {/* 用药卡片 */}
              <div 
                className="w-full shrink-0 snap-center px-1"
                onClick={() => onTabSwitch('health')}
              >
                <div className="bg-white rounded-[32px] px-6 pb-6 pt-16 aspect-[4/3] border border-gray-50 shadow-sm flex flex-col justify-between active:scale-[0.98] transition-all cursor-pointer">
                  <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-emerald-500">
                  <Pill size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">今日用药</h4>
                  <p className="text-[10px] text-gray-400 font-bold  uppercase">服药计划完成度</p>
                </div>
              </div>
              <div className="relative">
                <p className="text-xl font-bold text-[#07C160]">3/4</p>
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-[#FA5151] rounded-full animate-pulse shadow-sm"></span>
              </div>
            </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-[24px] border border-gray-100">
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-[#07C160] border-2 border-white flex items-center justify-center text-[8px] text-white"><CheckCircle size={10} /></div>
                        <div className="w-5 h-5 rounded-full bg-[#07C160] border-2 border-white flex items-center justify-center text-[8px] text-white"><CheckCircle size={10} /></div>
                        <div className="w-5 h-5 rounded-full bg-[#07C160] border-2 border-white flex items-center justify-center text-[8px] text-white"><CheckCircle size={10} /></div>
                        <div className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] text-gray-400"><Activity size={10} /></div>
                      </div>
                      <p className="text-[9px] text-gray-500 font-bold leading-tight">待服 1 次：降压药 (睡前)</p>
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-gray-500 leading-relaxed italic">“今天已经完成 75% 的服药计划，请在睡前记得提醒长辈。”</p>
                </div>
              </div>

              {/* 血压卡片 */}
              <div 
                className="w-full shrink-0 snap-center px-1"
                onClick={() => onTabSwitch('health')}
              >
                <div className="bg-white rounded-[32px] px-6 pb-6 pt-16 aspect-[4/3] border border-gray-50 shadow-sm flex flex-col justify-between active:scale-[0.98] transition-all cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                          <Clipboard size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-800">最新血压</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase ">智能终端同步</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">偏高</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 py-2 border-y border-gray-50">
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase ">收缩压 (高压)</p>
                        <p className="text-xl font-bold text-gray-800">142<span className="text-xs ml-1 font-bold">mmHg</span></p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase ">舒张压 (低压)</p>
                        <p className="text-xl font-bold text-gray-800">88<span className="text-xs ml-1 font-bold">mmHg</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-2 bg-orange-50/50 rounded-xl">
                    <span className="animate-pulse flex items-center justify-center"><AlertTriangle size={14} className="text-orange-500" /></span>
                    <p className="text-[10px] text-orange-700 font-bold">今日血压略高于平均水平，建议减少盐分摄入。</p>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>

      {/* 快速操作按钮 */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-gray-800 px-1">快捷操作</h3>
        <div className="grid grid-cols-3 gap-4">
          <button 
            onClick={() => onAction('videoCall')}
            className="bg-white text-gray-700 border border-gray-100 py-4 rounded-[20px] flex flex-col items-center gap-1 card-shadow active:scale-95 transition-all w-full"
          >
            <Video size={22} className="mb-1 text-blue-500" />
            <span className="font-bold text-sm">视频通话</span>
            <span className="text-[10px] text-gray-400">呼叫家人</span>
          </button>
          <motion.button 
            onClick={handleRefresh}
            animate={isCapturing ? { rotate: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.4 }}
            className={`bg-white text-gray-700 border border-gray-100 py-4 rounded-[20px] flex flex-col items-center gap-1 card-shadow active:scale-95 transition-all w-full ${isCapturing ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <Camera size={22} className="mb-1 text-emerald-500" />
            <span className="font-bold text-sm">看看家人</span>
            <span className="text-[10px] text-gray-400">查看现状</span>
          </motion.button>
          <button 
             onClick={() => onAction('voiceMessage')}
            className="bg-white text-gray-700 border border-gray-100 py-4 rounded-[20px] flex flex-col items-center gap-1 card-shadow active:scale-95 transition-all w-full"
          >
            <Mic size={22} className="mb-1 text-orange-500" />
            <span className="font-bold text-sm">语音留言</span>
            <span className="text-[10px] text-gray-400">发送语音</span>
          </button>
        </div>
      </div>

      {/* 消息提醒入口 */}
      <div 
        onClick={() => onAction('notifications')}
        className="bg-white rounded-[24px] p-4 card-shadow flex items-center justify-between border border-gray-50 active:scale-[0.98] transition-transform cursor-pointer"
      >
        <div className="flex items-center gap-3">
           <div className="relative">
             <span className="text-gray-400">
               <Bell size={24} strokeWidth={1.5} />
             </span>
             <span className="absolute top-0 right-0 w-2 h-2 bg-[#FA5151] rounded-full"></span>
           </div>
           <div>
             <p className="text-sm font-bold text-gray-800">通知中心</p>
             <p className="text-[10px] text-gray-400">查看系统所有告警与提示</p>
           </div>
        </div>
      </div>

      <div className="text-center mt-12 mb-8">
        <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
      </div>
    </motion.div>
  );
};

// --- 子组件：健康详情 ---
const HealthView = ({ onCalendarClick, isAnonymous, plan, onImageClick }: { onCalendarClick: () => void; isAnonymous?: boolean; plan: Medication[]; onImageClick: (src: string) => void }) => {
  if (isAnonymous) {
    return (
      <div className="flex flex-col items-center justify-center pt-20 px-6 text-center">
        <div className="text-blue-500 mb-6 bg-blue-50 p-6 rounded-[32px]">
          <Activity size={64} strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">暂无健康数据</h2>
        <p className="text-gray-500 text-base">机器人监测后，将为您生成每日健康报表。</p>
      </div>
    );
  }
  const [metricTab, setMetricTab] = useState<'bp' | 'bs' | 'hr' | 'resp'>('hr');
  const [timeRange, setTimeRange] = useState<'7' | '30'>('7');
  const [expandedMed, setExpandedMed] = useState(false);
  const [abnormalRecords, setAbnormalRecords] = useState<{id: string; type: string; time: string; value: string; unit: string; detail: string; status: string}[]>([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [showScoreExplain, setShowScoreExplain] = useState(false);

  const currentData = React.useMemo(() => {
    const data = [];
    const now = new Date();
    const days = timeRange === '7' ? 7 : 30;
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const name = i === 0 ? '今日' : `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
      
      // 模拟数据缺失：约 15% 的概率缺失，今日保证有数据
      const isMissing = i !== 0 && Math.random() < 0.15;

      if (metricTab === 'bp') {
        data.push({ 
          name, 
          sys: isMissing ? null : 110 + Math.floor(Math.random() * 30), 
          dia: isMissing ? null : 70 + Math.floor(Math.random() * 15),
          isMissing 
        });
      } else if (metricTab === 'bs') {
        data.push({ name, val: isMissing ? null : +(5.0 + Math.random() * 2).toFixed(1), isMissing });
      } else if (metricTab === 'hr') {
        data.push({ name, val: isMissing ? null : 65 + Math.floor(Math.random() * 20), isMissing });
      } else if (metricTab === 'resp') {
        data.push({ name, val: isMissing ? null : 16 + Math.floor(Math.random() * 4), isMissing });
      }
    }
    return data;
  }, [metricTab, timeRange]);

  const renderNormalRange = () => {
    switch(metricTab) {
      case 'bp': return '正常范围: 收缩压90-139 / 舒张压60-89';
      case 'bs': return '正常范围: 空腹 3.9-6.1 mmol/L';
      case 'hr': return '正常范围: 60-100 次/分';
      case 'resp': return '正常范围: 12-20 次/分';
      default: return '';
    }
  };

  // 映射真实数据到显示结构
  const todayMedsDisplay = React.useMemo(() => {
    return plan.map(med => ({
      id: med.id,
      name: med.name,
      time: med.times.join(' • '),
      icon: med.imageUrl ? <ImageIcon size={18} /> : (
        med.name.includes('阿司匹林') || med.name.includes('阿斯匹林') ? <Pill size={18} /> : 
        med.name.includes('维生素') ? <Stethoscope size={18} /> : 
        med.name.includes('地平') || med.name.includes('沙坦') ? <Stethoscope size={18} /> : 
        <Activity size={18} />
      ),
      imageUrl: med.imageUrl,
      status: med.status || (med.enabled === false ? 'pending' : 'pending'),
      statusText: 
        med.enabled === false ? '已暂停' :
        med.status === 'taken' ? '已服用' :
        med.status === 'missed' ? '未按时' :
        med.status === 'delayed' ? '有延迟' : '待服用',
      color: 
        med.enabled === false ? '#9ca3af' :
        med.status === 'taken' ? '#16a34a' :
        med.status === 'missed' ? '#ef4444' :
        med.status === 'delayed' ? '#f59e0b' : '#3b82f6',
      bg: 
        med.enabled === false ? '#f3f4f6' :
        med.status === 'taken' ? '#f0fdf4' :
        med.status === 'missed' ? '#fef2f2' :
        med.status === 'delayed' ? '#fffbeb' : '#f0f9ff',
      iconBg: 
        med.enabled === false ? '#e5e7eb' :
        med.status === 'taken' ? '#dcfce7' :
        med.status === 'missed' ? '#fee2e2' :
        med.status === 'delayed' ? '#fef3c7' : '#dbeafe'
    }));
  }, [plan]);

  const displayList = expandedMed ? todayMedsDisplay : todayMedsDisplay.slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-4 pb-24"
    >
    {/* 综合评分区域 - 采用绿色递进分段设计 */}
    <div className="pt-4 pb-4 flex flex-col items-center">
      <div className="relative w-56 h-56 flex items-center justify-center">
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: '用药', value: 30, color: '#047857' },
                  { name: '测量', value: 25, color: '#059669' },
                  { name: '运动', value: 25, color: '#10B981' },
                  { name: '饮食', value: 15, color: '#34D399' },
                  { name: '剩余', value: 5, color: '#F3F4F6' } // 占比满100%
                ]}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={92}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
                cornerRadius={4}
                paddingAngle={2}
              >
                {
                  [
                    { color: '#047857' },
                    { color: '#059669' },
                    { color: '#10B981' },
                    { color: '#34D399' },
                    { color: '#F3F4F6' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* 核心数值展示 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-8xl font-bold text-[#10B981]  leading-none">95</span>
            <div className="mt-3 flex flex-col items-center opacity-80">
              <span className="text-xs font-bold text-gray-500 ">综合评分</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 色块说明 */}
      <div className="flex items-center justify-center gap-4 mt-6 flex-wrap px-4">
        {[
          { name: '用药', color: 'bg-[#047857]' },
          { name: '测量', color: 'bg-[#059669]' },
          { name: '运动', color: 'bg-[#10B981]' },
          { name: '饮食', color: 'bg-[#34D399]' }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-sm ${item.color}`}></span>
            <span className="text-xs font-bold text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>

      {/* 状态趋势 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <div className="flex items-center gap-2 text-[#10B981] bg-emerald-50/60 px-4 py-1.5 rounded-full border border-emerald-100/50">
          <Activity size={14} strokeWidth={3} />
          <span className="text-xs font-bold ">比上周提升 5%</span>
        </div>
      </motion.div>
    </div>

    {/* 用药记录 */}
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h3 className="font-bold text-lg text-gray-800">今日用药</h3>
        <button 
          onClick={onCalendarClick}
          className="text-[#024481] font-bold text-base flex items-center gap-1 p-2 active:bg-blue-50 rounded-[24px] transition-colors"
        >查看日历 <Calendar size={18} strokeWidth={1.5} /></button>
      </div>
      
      <div className="space-y-3">
        {displayList.map((med) => (
          <div key={med.id} className="p-4 rounded-[20px] flex items-center justify-between border-l-4 shadow-sm" style={{ background: med.bg, borderColor: med.color }}>
            <div className="flex items-center gap-3">
              <div>
                <p className="font-bold text-gray-800">{med.name}</p>
                <p className="text-xs text-gray-500">{med.time}</p>
              </div>
            </div>
            <span className="text-xs font-bold flex items-center gap-1" style={{ color: med.color }}>
              {med.statusText}
            </span>
          </div>
        ))}
        
        {todayMedsDisplay.length > 3 && (
          <button 
            onClick={() => setExpandedMed(!expandedMed)}
            className="w-full text-center py-2 group active:scale-95 transition-transform"
          >
            <span className="text-xs font-bold text-[#024481] uppercase  bg-blue-50 px-3 py-1.5 rounded-full group-hover:bg-blue-100 transition-colors">
              {expandedMed ? '收起部分清单 ⌃' : `查看更多 (${todayMedsDisplay.length - 3}) ⌵`}
            </span>
          </button>
        )}
      </div>
    </div>

    {/* 体征趋势模拟图 */}
    <div className="bg-white rounded-[24px] p-6 card-shadow space-y-4 border border-gray-50">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">体征趋势</h3>
        </div>
        <div className="flex bg-gray-100 rounded-full p-1 border border-gray-200 shadow-inner">
          <button 
            onClick={() => setTimeRange('7')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${timeRange === '7' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400'}`}
          >7日</button>
          <button 
            onClick={() => setTimeRange('30')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${timeRange === '30' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400'}`}
          >30日</button>
        </div>
      </div>
      <div className="flex bg-gray-100 p-1 rounded-full overflow-hidden shadow-inner border border-gray-100">
        <button onClick={() => setMetricTab('hr')} className={`flex-1 py-1.5 px-3 rounded-full font-bold text-base transition-colors ${metricTab === 'hr' ? 'bg-white text-[#024481] shadow-sm' : 'bg-transparent text-gray-500 shadow-none'}`}>心率</button>
        <button onClick={() => setMetricTab('resp')} className={`flex-1 py-1.5 px-3 rounded-full font-bold text-base transition-colors ${metricTab === 'resp' ? 'bg-white text-[#024481] shadow-sm' : 'bg-transparent text-gray-500 shadow-none'}`}>呼吸</button>
        <button onClick={() => setMetricTab('bp')} className={`flex-1 py-1.5 px-3 rounded-full font-bold text-base transition-colors ${metricTab === 'bp' ? 'bg-white text-[#024481] shadow-sm' : 'bg-transparent text-gray-500 shadow-none'}`}>血压</button>
        <button onClick={() => setMetricTab('bs')} className={`flex-1 py-1.5 px-3 rounded-full font-bold text-base transition-colors ${metricTab === 'bs' ? 'bg-white text-[#024481] shadow-sm' : 'bg-transparent text-gray-500 shadow-none'}`}>血糖</button>
      </div>
      <div className="h-48 w-full mt-4 relative">
        {/* 数据缺失提示层 */}
        <div className="absolute inset-0 pointer-events-none flex items-end pb-8 left-10 right-0">
          {currentData.map((d, i) => d.isMissing && (
            <div 
              key={i} 
              className="flex-1 flex flex-col items-center justify-end h-full group"
            >
              <div className="w-[1px] h-[60%] border-l border-dashed border-gray-200 relative">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-xs text-gray-300 font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">无数据</span>
              </div>
            </div>
          ))}
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={currentData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  if (data.isMissing) {
                    return (
                      <div className="bg-white/90 backdrop-blur-md p-2 rounded-[24px] shadow-xl border border-gray-100 text-xs">
                        <p className="font-bold text-gray-400">{data.name}</p>
                        <p className="text-gray-300 italic mt-1">⚠️ 该时段数据缺失</p>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-[24px] shadow-xl border border-gray-50 flex flex-col gap-1">
                      <p className="text-xs font-bold text-gray-400 border-b border-gray-50 pb-1 mb-1">{data.name}</p>
                      {payload.filter((p: any) => p.name && !p.name.endsWith('_link')).map((p: any) => (
                        <div key={p.name} className="flex items-center justify-between gap-4">
                          <span className="text-xs font-medium text-gray-500">{p.name}:</span>
                          <span className="text-xs font-bold text-[#024481]">{p.value}</span>
                        </div>
                      ))}
                      <div className="mt-1 pt-1 border-t border-gray-50 text-xs text-gray-400">
                        {renderNormalRange()}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            {metricTab === 'bp' ? (
              <>
                <ReferenceArea y1={60} y2={89} fill="#84d8a4" fillOpacity={0.1} strokeOpacity={0} {...({} as any)} />
                <ReferenceArea y1={90} y2={139} fill="#024481" fillOpacity={0.05} strokeOpacity={0} {...({} as any)} />
                <Area type="monotone" dataKey="sys" name="收缩压_link" stroke="#024481" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} connectNulls={true} activeDot={false} />
                <Area type="monotone" dataKey="sys" name="收缩压" stroke="#024481" strokeWidth={3} fillOpacity={0.1} fill="#024481" connectNulls={false} />
                <Area type="monotone" dataKey="dia" name="舒张压" stroke="#84d8a4" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} connectNulls={true} />
              </>
            ) : (
              <>
                {metricTab === 'bs' && <ReferenceArea y1={3.9} y2={6.1} fill="#024481" fillOpacity={0.05} strokeOpacity={0} {...({} as any)} />}
                {metricTab === 'hr' && <ReferenceArea y1={60} y2={100} fill="#024481" fillOpacity={0.05} strokeOpacity={0} {...({} as any)} />}
                {metricTab === 'resp' && <ReferenceArea y1={12} y2={20} fill="#024481" fillOpacity={0.05} strokeOpacity={0} {...({} as any)} />}
                <Area type="monotone" dataKey="val" name="val_link" stroke="#024481" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} connectNulls={true} activeDot={false} />
                <Area type="monotone" dataKey="val" name={metricTab === 'bs' ? '血糖' : metricTab === 'hr' ? '心率' : '呼吸'} stroke="#024481" strokeWidth={3} fillOpacity={0.1} fill="#024481" connectNulls={false} />
              </>
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* 异常记录 */}
    <div className="space-y-3">
      <h3 className="font-bold text-lg text-gray-800 px-1">最近异常记录</h3>
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {abnormalRecords.length > 0 ? abnormalRecords.map((record) => (
            <motion.div 
              key={record.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="relative overflow-hidden rounded-[24px]"
            >
              <div className="absolute right-0 inset-y-0 w-24 bg-[#E11D48] flex items-center justify-center">
                <span className="text-white text-xs font-bold">🗑️ 删除</span>
              </div>
              <motion.div 
                drag="x"
                dragConstraints={{ right: 0, left: -96 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40) {
                    setDeleteConfirmId(record.id);
                  }
                }}
                className="bg-white p-5 rounded-[24px] shadow-sm border border-[#fee2e2] relative z-10 touch-pan-y"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[12px] border border-red-50 flex items-center justify-center bg-red-50/30">
                      <AlertCircle size={18} strokeWidth={1} className={record.status === 'critical' ? 'text-red-500' : 'text-orange-400'} />
                    </div>
                    <p className="font-bold text-gray-800">{record.type}</p>
                  </div>
                  <span className="text-[12px] text-gray-400">{record.time}</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-3xl text-[#dc2626] font-bold">{record.value} <span className="text-base font-normal text-gray-500">{record.unit}</span></p>
                  <div className="bg-[#dcfce7] px-2 py-1 rounded text-xs text-[#16a34a] font-bold">{record.detail}</div>
                </div>
              </motion.div>
            </motion.div>
          )) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50/40 border border-dashed border-emerald-100 rounded-[32px] p-6 flex flex-col items-center justify-center text-center gap-3"
            >
              <div className="space-y-1">
                <p className="text-emerald-800 font-bold text-lg">良好</p>
                <p className="text-emerald-600/60 text-xs font-medium leading-relaxed">系统未监测到异常生理指标，请继续加油！</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>

      {/* 删除确认弹窗 */}
      <AnimatePresence>
        {deleteConfirmId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-[32px] p-8 w-full max-w-sm text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-100 text-[#E11D48] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">⚠️</div>
              <h3 className="text-lg font-bold text-gray-800">确认删除此条异常记录？</h3>
              <p className="text-base text-gray-400 mt-2">删除后将无法找回该条记录。</p>
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 py-4 bg-gray-100 rounded-[24px] font-bold text-gray-500 active:scale-95 transition-transform"
                >取消</button>
                <button 
                  onClick={() => {
                    setAbnormalRecords(prev => prev.filter(r => r.id !== deleteConfirmId));
                    setDeleteConfirmId(null);
                  }}
                  className="flex-1 py-4 bg-[#E11D48] text-white rounded-[24px] font-bold shadow-lg shadow-red-200 active:scale-95 transition-transform"
                >确认删除</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-12 mb-8">
        <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
      </div>
    </motion.div>
  );
};

// --- 子组件：AI 陪伴 ---
const CompanionView = ({ onAction, isAnonymous, unreadNotificationsCount = 0 }: { onAction: (type: OverlayType) => void; isAnonymous?: boolean; unreadNotificationsCount?: number }) => {
  if (isAnonymous) {
    return (
      <div className="flex flex-col items-center justify-center pt-20 px-6 text-center">
        <div className="text-6xl mb-6">💬</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">暂无聊天记录</h2>
        <p className="text-gray-500 text-base">快去和机器人聊聊天吧！</p>
      </div>
    );
  }
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const toggleLike = (key: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLikedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [selectedEmotion, setSelectedEmotion] = useState<any>(null);
  const [selectedExercise, setSelectedExercise] = useState<any>(null);

  // 运动数据
  const exerciseData = [
    { day: '一', date: '05/05', level: 'low', type: '散步', duration: '15分钟', moves: '1200步', feeling: '轻松', calories: '45kcal' },
    { day: '二', date: '05/06', level: 'medium', type: '太极拳', duration: '30分钟', moves: '24组', feeling: '刚好', calories: '120kcal' },
    { day: '三', date: '05/07', level: 'low', type: '慢走', duration: '20分钟', moves: '1800步', feeling: '轻松', calories: '60kcal' },
    { day: '四', date: '05/08', level: 'high', type: '广场舞', duration: '45分钟', moves: '36节', feeling: '吃力', calories: '210kcal' },
    { day: '五', date: '05/09', level: 'high', type: '慢跑', duration: '40分钟', moves: '3200步', feeling: '刚好', calories: '180kcal' },
    { day: '六', date: '05/10', level: 'none', type: '休息', duration: '0分钟', moves: '0', feeling: '无', calories: '0kcal' },
    { day: '日', date: '今日', level: 'medium', type: '室内操', duration: '25分钟', moves: '20组', feeling: '刚好', calories: '110kcal' },
  ];

  // 情绪脸谱数据
  const emotions = [
    { day: '周一', emoji: <Smile size={24} className="text-[#10B981]" />, level: 4, reason: '主动对话6次，笑声3次', summary: '今日心情极佳，与邻居聊得愉快。' },
    { day: '周二', emoji: <Meh size={24} className="text-gray-400" />, level: 3, reason: '对话较少，监测到较多静息时间', summary: '心情平稳，生活节奏稳定。' },
    { day: '周三', emoji: <Frown size={24} className="text-orange-400" />, level: 2, reason: '午后情绪略显低落，活动量下降', summary: '情绪低落期，建议增加主动关怀。' },
    { day: '周四', emoji: <Smile size={24} className="text-[#10B981]" />, level: 4, reason: '完成了一场象棋对弈，心情舒畅', summary: '积极社交的一天。' },
    { day: '周五', emoji: <Meh size={24} className="text-gray-400" />, level: 3, reason: '作息规律，配合健康指导练习', summary: '情绪稳定，执行力强。' },
    { day: '周六', emoji: <AlertCircle size={24} className="text-[#E11D48]" />, level: 1, reason: '夜间惊醒后出现轻微喘息与焦虑', summary: '监测到焦虑情绪，机器人已介入陪伴。' },
    { day: '今日', emoji: <Smile size={24} className="text-[#10B981]" />, level: 4, reason: '收到了家人寄来的礼物', summary: '满怀喜悦，正在与机器人分享快乐。' },
  ];

  // 回忆金句数据
  const quotes = [
    { text: "那时候哪有那么多讲究，有口吃的就是福，只要全家人聚在一起就是团圆。", topic: "冬日趣事", date: "2026-05-10", source: "奶奶" },
    { text: "年轻时总想走远，老了才发现，最香的还是家里的那碗热面。", topic: "感悟人生", date: "2026-05-08", source: "妈妈" },
    { text: "勤学好问是家风。记住，书本里的知识是别人偷不走的财富。", topic: "家风家教", date: "2026-05-05", source: "爷爷" },
  ];
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-4 pb-24"
    >
      {/* 4.5.1 运动周历 */}
      <div className="rounded-[24px] bg-white p-6 card-shadow border border-gray-50 space-y-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg text-gray-800">运动周历</h3>
          <span className="text-sm font-bold text-gray-500">目标：4/7天</span>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {exerciseData.map((d, i) => (
            <motion.div 
              key={i} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedExercise(d)}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <span className="text-xs font-bold text-gray-400">{d.day}</span>
              <div className={`w-full aspect-square rounded-full transition-all ${
                d.level !== 'none' ? 'bg-[#10B981]' : 'bg-gray-100 border border-gray-200'
              } ${selectedExercise?.day === d.day ? 'ring-2 ring-[#024481] ring-offset-2' : ''}`}></div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-gray-400">点击查看每日详情</p>
        </div>

        {/* 运动详情浮层 */}
        <AnimatePresence>
          {selectedExercise && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-emerald-50 rounded-[24px] p-4 border border-emerald-100 space-y-3 relative"
            >
              <button onClick={() => setSelectedExercise(null)} className="absolute top-3 right-3 text-emerald-300 hover:text-emerald-500 text-2xl active:scale-90 transition-transform">‹</button>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-emerald-800">{selectedExercise.day === '今日' ? '今日' : `周${selectedExercise.day}`} 运动详情</span>
                <span className="text-xs bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-bold">{selectedExercise.type}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="text-center">
                  <p className="text-xs text-emerald-600 font-bold uppercase">时长</p>
                  <p className="text-xs font-bold text-emerald-900">{selectedExercise.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-emerald-600 font-bold uppercase">动作</p>
                  <p className="text-xs font-bold text-emerald-900">{selectedExercise.moves}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-emerald-600 font-bold uppercase">感受</p>
                  <p className="text-xs font-bold text-emerald-900">{selectedExercise.feeling}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-emerald-600 font-bold uppercase">热量</p>
                  <p className="text-xs font-bold text-emerald-900">{selectedExercise.calories}</p>
                </div>
              </div>
              <div className="flex justify-end pt-2 border-t border-emerald-100 mt-2 gap-4">
                <button 
                  onClick={(e) => toggleLike(`exercise_${selectedExercise.day}`, e)} 
                  className={`flex items-center gap-1 text-xs font-bold transition-colors ${likedItems[`exercise_${selectedExercise.day}`] ? 'text-emerald-600' : 'text-emerald-400'}`}
                >
                  <ThumbsUp size={16} strokeWidth={1.5} className={`${likedItems[`exercise_${selectedExercise.day}`] ? 'fill-current scale-110' : ''} transition-all`} />
                  <span>{likedItems[`exercise_${selectedExercise.day}`] ? '已点赞' : '点赞'}</span>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onAction('voiceMessage'); }}
                  className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-emerald-600 transition-colors"
                >
                  <Mic size={16} strokeWidth={1.5} />
                  <span>语音鼓励</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4.5.2 情绪脸谱 (V2.0 整合情绪趋势) */}
      <div className="bg-white rounded-[32px] p-6 card-shadow border border-gray-50 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg text-gray-800">情绪脸谱</h3>
          </div>
          <span className="text-[10px] bg-gray-50 text-gray-400 px-3 py-1 rounded-full font-bold uppercase ">本周良好</span>
        </div>

        {/* 表情图标横向排列 */}
        <div className="flex justify-between items-center px-1">
          {emotions.map((item, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedEmotion(item)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`w-10 h-10 rounded-[24px] flex items-center justify-center text-xl transition-all ${selectedEmotion?.day === item.day ? 'bg-blue-50 scale-110 shadow-sm' : 'bg-gray-50'}`}>
                {item.emoji}
              </div>
              <span className={`text-xs font-bold ${selectedEmotion?.day === item.day ? 'text-[#024481]' : 'text-gray-400'}`}>{item.day}</span>
            </motion.button>
          ))}
        </div>

        {/* 情绪趋势曲线 (LineChart) */}
        <div className="h-32 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={emotions}>
              <XAxis dataKey="day" hide />
              <YAxis hide domain={[0, 5]} />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white/90 backdrop-blur-md p-2 rounded-[24px] shadow-xl border border-gray-100 text-xs flex items-center gap-2">
                        <span className="text-base flex items-center justify-center">{data.emoji}</span>
                        <span className="font-bold text-gray-500">{data.day}</span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="level" 
                stroke="#024481" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#024481', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 详情浮层 (Inline Animated Detail) */}
        <AnimatePresence>
          {selectedEmotion && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-blue-50/50 rounded-[24px] p-4 border border-blue-100/50 space-y-3 relative">
                <button 
                  onClick={() => setSelectedEmotion(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl active:scale-90 transition-transform"
                >‹</button>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#024481]">{selectedEmotion.day} 情绪溯源</span>
                  <span className="text-lg flex items-center justify-center">{selectedEmotion.emoji}</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase ">标注原因</p>
                    <p className="text-xs text-gray-700 font-medium">{selectedEmotion.reason}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase ">陪伴摘要</p>
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">{selectedEmotion.summary}</p>
                  </div>
                </div>
                <div className="flex justify-end pt-2 border-t border-blue-100/50 mt-2 gap-4">
                  <button 
                    onClick={(e) => toggleLike(`emotion_${selectedEmotion.day}`, e)} 
                    className={`flex items-center gap-1 text-xs font-bold transition-colors ${likedItems[`emotion_${selectedEmotion.day}`] ? 'text-blue-600' : 'text-blue-400'}`}
                  >
                    <ThumbsUp size={16} strokeWidth={1.5} className={`${likedItems[`emotion_${selectedEmotion.day}`] ? 'fill-current scale-110' : ''} transition-all`} />
                    <span>{likedItems[`emotion_${selectedEmotion.day}`] ? '已点赞' : '点赞'}</span>
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAction('voiceMessage'); }}
                    className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Mic size={16} strokeWidth={1.5} />
                    <span>语音鼓励</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4.5.3 AI健康关怀卡片 */}
      <div className="rounded-[32px] bg-blue-50/80 p-6 card-shadow border border-blue-100/50 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="font-bold text-lg text-[#024481]">AI健康关怀</h3>
          </div>
        </div>
        <p className="text-base text-blue-900 leading-relaxed font-medium italic">
          “王阿姨，您这周心率平稳，睡眠质量有明显提升。周三由于天气骤降有过一次血压偏高，目前已恢复正常，近期早晚注意及时添衣保暖。”
        </p>
        <button 
          onClick={() => onAction('healthReport')}
          className="w-full py-2.5 bg-gray-50 text-gray-500 rounded-[24px] font-bold text-[10px] active:scale-95 transition-transform border border-gray-100 uppercase "
        >
          查看报告
        </button>
      </div>

      {/* 4.5.4 回忆金句卡片 (左右滑动切换) */}
      <div className="relative px-2">
        {/* 背景堆叠纸张效果 1 */}
        <div className="absolute inset-x-4 top-2 bottom-0 bg-white/40 rounded-[32px] border border-gray-100/50 -rotate-1 z-0"></div>
        {/* 背景堆叠纸张效果 2 */}
        <div className="absolute inset-x-3 top-1 bottom-0 bg-white/60 rounded-[32px] border border-gray-100/50 rotate-1 z-0"></div>
        
        <div 
          className="relative z-10 flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
          onScroll={(e) => {
            const el = e.currentTarget;
            const index = Math.round(el.scrollLeft / el.clientWidth);
            if (index !== activeQuoteIndex) setActiveQuoteIndex(index);
          }}
        >
          {quotes.map((quote, idx) => (
            <div key={idx} className="w-full shrink-0 snap-center">
                <div 
                  onClick={() => onAction('memoriesAlbum')}
                  className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-lg border border-[#f0f0f0] group cursor-pointer active:scale-[0.99] transition-transform min-h-[260px] flex flex-col justify-between"
                >
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg text-gray-800">回忆金句</h3>
                    </div>
                    {/* 轮播指示点 - 右上角 */}
                    <div className="flex items-center gap-1 bg-gray-50/80 backdrop-blur-sm px-2 py-1.5 rounded-full">
                      {quotes.map((_, dotIdx) => (
                        <div 
                          key={dotIdx} 
                          className={`w-1 h-1 rounded-full transition-all ${idx === dotIdx ? 'w-2.5 bg-[#024481]' : 'bg-gray-200'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="text-xl text-gray-800 leading-relaxed italic font-medium">
                      “{quote.source}说：{quote.text}”
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col gap-3 pt-4 border-t border-gray-50 mt-4">
                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase">
                      <div className="flex items-center gap-2">
                        <span>话题：{quote.topic}</span>
                        <span className="opacity-30">|</span>
                        <span>采集时间：{quote.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleLike(`quote_${idx}`, e); }} 
                          className={`flex items-center gap-1 text-xs font-bold transition-colors ${likedItems[`quote_${idx}`] ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                          <ThumbsUp size={16} strokeWidth={1.5} className={`${likedItems[`quote_${idx}`] ? 'fill-current scale-110' : ''} transition-all`} />
                          <span>{likedItems[`quote_${idx}`] ? '已赞' : '点赞'}</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); onAction('voiceMessage'); }}
                          className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <Mic size={16} strokeWidth={1.5} />
                          <span>语音鼓励</span>
                        </button>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onAction('memoriesAlbum'); }}
                        className="text-xs text-[#024481] font-bold active:scale-95 transition-transform"
                      >
                        查看传家记忆 ➔
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="text-center mt-12 mb-8">
        <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
      </div>
    </motion.div>
  );
};

// --- 子组件：紧急联系人管理 ---
const EmergencyContactsView = ({ 
  contacts, 
  onUpdate, 
  onClose,
  isMainAccount = true,
  onShowToast
}: { 
  contacts: Contact[]; 
  onUpdate: (newContacts: Contact[]) => void; 
  onClose: () => void;
  isMainAccount?: boolean;
  onShowToast?: (msg: string) => void;
}) => {
  const [items, setItems] = useState(contacts);
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', relation: '', phone: '' });

  const handleAdd = () => {
    if (!newContact.name || !newContact.phone) return;
    const updated = [...items, { ...newContact, id: Date.now().toString() }];
    setItems(updated);
    onUpdate(updated);
    setIsAdding(false);
    setNewContact({ name: '', relation: '', phone: '' });
  };

  const handleDelete = (id: string) => {
    const updated = items.filter(i => i.id !== id);
    setItems(updated);
    onUpdate(updated);
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[150] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-[#024481]">紧急联系人</h2>
        </div>
        {isMainAccount && (
          <button 
            onClick={() => setIsAdding(true)}
            className="text-blue-600 font-bold text-2xl"
          >+</button>
        )}
      </header>

      <main className="flex-1 p-6">
        {isMainAccount ? (
          <p className="text-xs text-gray-400 mb-4 font-bold uppercase ">长按右侧图标拖动排序（首位为默认呼叫人）</p>
        ) : (
          <p className="text-xs text-gray-400 mb-4 font-bold uppercase ">只读模式，仅主账号可编辑</p>
        )}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-5xl mb-6 shadow-sm">
              🏥
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">未设置紧急联系人</h3>
            <p className="text-base text-gray-500 leading-relaxed max-w-[240px]">
              紧急联系人是重要的安全保障。当机器人发现异常情况或长辈触发求助时，将第一时间自动拨打他们的电话。
            </p>
            {isMainAccount && (
              <button 
                onClick={() => setIsAdding(true)}
                className="mt-10 bg-[#E11D48] text-white px-10 py-4 rounded-3xl font-bold shadow-xl shadow-red-200 active:scale-95 transition-transform"
              >
                设置第一位联系人
              </button>
            )}
          </div>
        ) : (
          <Reorder.Group axis="y" values={items} onReorder={(newOrder) => {
            if (!isMainAccount) return;
            setItems(newOrder);
            onUpdate(newOrder);
          }} className="space-y-4">
            {items.map((item, index) => (
              <Reorder.Item 
                key={item.id} 
                value={item}
                drag={isMainAccount ? "y" : false}
                className="bg-white rounded-[24px] border border-gray-100 shadow-sm active:shadow-md transition-shadow relative overflow-hidden"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -100, right: 0 }}
                  onDragEnd={(event, info) => {
                    if (info.offset.x < -80) {
                      handleDelete(item.id);
                    }
                  }}
                  className="p-4 flex items-center justify-between bg-white w-full relative z-20"
                >
                  <div className="flex items-center gap-3">
                    {/* 序号：前面添加的联系人顺序数字（如 1、2 等） */}
                    <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{item.name} <span className="text-xs text-gray-400 font-normal ml-1">({item.relation})</span></p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.phone}</p>
                    </div>
                  </div>
                  {isMainAccount && (
                    <div className="cursor-grab active:cursor-grabbing text-gray-300">☰</div>
                  )}
                </motion.div>
                {/* Swipe delete background */}
                <div 
                  className="absolute inset-y-0 right-0 w-24 bg-[#E11D48] flex items-center justify-center text-white"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 size={24} />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}

        <div className="text-center mt-12 mb-8">
          <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
        </div>

        {isAdding && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-6">
            <div className="bg-white rounded-[32px] w-full p-8 space-y-6">
              <h3 className="text-lg font-bold text-center">添加新联系人</h3>
              <div className="space-y-4">
                <input 
                  placeholder="姓名"
                  value={newContact.name}
                  onChange={e => setNewContact({...newContact, name: e.target.value})}
                  className="w-full bg-gray-50 rounded-[24px] p-4 text-base font-bold border-none"
                />
                <input 
                  placeholder="关系 (如：大儿子)"
                  value={newContact.relation}
                  onChange={e => setNewContact({...newContact, relation: e.target.value})}
                  className="w-full bg-gray-50 rounded-[24px] p-4 text-base font-bold border-none"
                />
                <input 
                  placeholder="手机号"
                  type="tel"
                  value={newContact.phone}
                  onChange={e => setNewContact({...newContact, phone: e.target.value})}
                  className="w-full bg-gray-50 rounded-[24px] p-4 text-base font-bold border-none"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setIsAdding(false)} className="flex-1 py-4 text-gray-400 font-bold">取消</button>
                <button onClick={handleAdd} className="flex-1 py-4 bg-[#024481] text-white rounded-[24px] font-bold shadow-lg">确认添加</button>
              </div>
            </div>
          </div>
        )}
      </main>
      <div className="text-center mt-12 mb-8">
        <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
      </div>
    </motion.div>
  );
};

// --- 子组件：用药详情与日历 ---
const MedicationCalendarView = ({ onClose, plan }: { onClose: () => void, plan: Medication[] }) => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const monthDays = 31; // 模拟当前月 31 天
  const startDayOffset = 3; // 模拟月首偏移 (从周三开始)

  // 模拟数据状态
  const getDayStatus = (day: number) => {
    if (day % 7 === 0) return 'missed'; // 红色：漏服
    if (day % 5 === 0) return 'delayed'; // 黄色：延迟
    if (day % 3 === 0) return 'none'; // 灰色：无计划
    return 'onTime'; // 绿色：全部按时
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'onTime': return 'bg-[#10B981]';
      case 'delayed': return 'bg-yellow-400';
      case 'missed': return 'bg-[#E11D48]';
      default: return 'bg-gray-200';
    }
  };

  const getDailyDetails = (day: number) => {
    const status = getDayStatus(day);
    if (status === 'none') return [];
    
    return [
      { name: '阿司匹林', planTime: '08:00', actualTime: status === 'missed' ? '--:--' : '08:05', status: status === 'missed' ? '漏服' : '已服用' },
      { name: '维生素 D3', planTime: '12:30', actualTime: status === 'delayed' ? '14:20' : status === 'missed' ? '--:--' : '12:35', status: status === 'delayed' ? '已服用' : status === 'missed' ? '漏服' : '已服用' },
      { name: '缬沙坦', planTime: '20:00', actualTime: '--:--', status: '待服用' },
    ];
  };

  const currentDetails = getDailyDetails(selectedDay);

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="absolute inset-0 z-[160] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-[#024481]">用药日历</h2>
        </div>
        <div className="text-base font-bold text-gray-500">2024年5月</div>
      </header>

      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* 日历卡片 */}
        <div className="bg-white rounded-[32px] p-6 card-shadow border border-gray-50">
          <div className="grid grid-cols-7 gap-y-4 mb-4">
            {['一', '二', '三', '四', '五', '六', '日'].map(w => (
              <div key={w} className="text-xs font-bold text-gray-400 text-center">{w}</div>
            ))}
            {Array.from({ length: startDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: monthDays }).map((_, i) => {
              const day = i + 1;
              const status = getDayStatus(day);
              const isSelected = selectedDay === day;
              return (
                <button 
                  key={day} 
                  onClick={() => setSelectedDay(day)}
                  className="flex flex-col items-center gap-1 relative"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isSelected ? 'bg-[#024481] text-white' : 'text-gray-700'
                  }`}>
                    {day}
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor(status)}`}></div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 pt-4 border-t border-gray-50">
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span><span className="text-xs text-gray-400">全部按时</span></div>
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400"></span><span className="text-xs text-gray-400">有延迟</span></div>
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#E11D48]"></span><span className="text-xs text-gray-400">有漏服</span></div>
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-200"></span><span className="text-xs text-gray-400">无计划</span></div>
          </div>
        </div>

        {/* 当日详情 */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2 px-1">
            <span className="flex items-center justify-center"><Calendar size={20} strokeWidth={1.5} /></span> 5月{selectedDay}日 用药清单
          </h3>
          <div className="space-y-3">
            {currentDetails.length > 0 ? currentDetails.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-[24px] border border-gray-50 card-shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-400 font-bold uppercase ">
                      计划 {item.planTime} | 实际 {item.actualTime}
                    </p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  item.status === '已服用' ? 'bg-green-100 text-green-700' : 
                  item.status === '漏服' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.status}
                </span>
              </div>
            )) : (
              <div className="bg-white p-10 rounded-[24px] border border-dashed border-gray-100 text-center text-gray-400 text-xs font-bold">
                今日无预设用药计划
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12 mb-8">
          <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
        </div>
      </main>
    </motion.div>
  );
};

// --- 子组件：告警设置 ---
const AlarmSettingsView = ({ onClose }: { onClose: () => void }) => {
  const [settings, setSettings] = useState({
    health: true,
    dailyReport: true,
    care: true
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = [
    {
      id: 'emergency',
      title: '紧急告警',
      scenario: '跌倒 / 心率骤停 / 烟雾报警等',
      method: 'App强推送 + 短信 + 语音电话',
      description: '事关生命安全，此项不可关闭',
      isLocked: true,
      enabled: true,
      icon: <AlertTriangle size={20} strokeWidth={1} className="text-red-500" />
    },
    {
      id: 'health',
      title: '健康异常',
      scenario: '血压重度异常 / 严重漏服药',
      method: 'App系统推送',
      description: '及时获知健康偏离状态',
      isLocked: false,
      enabled: settings.health,
      icon: <HeartPulse size={20} strokeWidth={1} className="text-gray-400" />
    },
    {
      id: 'dailyReport',
      title: '每日简报',
      scenario: '每日 08:00 生成前一日汇总',
      method: 'App系统推送',
      description: '掌握每日健康全景数据',
      isLocked: false,
      enabled: settings.dailyReport,
      icon: <Calendar size={20} strokeWidth={1} className="text-gray-400" />
    },
    {
      id: 'care',
      title: '关怀提醒',
      scenario: '连续多日未运动 / 情绪波动',
      method: 'App系统推送',
      description: '关注长辈心理与日常活力',
      isLocked: false,
      enabled: settings.care,
      icon: <Heart size={20} strokeWidth={1} className="text-gray-400" />
    }
  ];

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[200] bg-white flex flex-col font-sans"
    >
      <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-lg font-bold text-gray-800">通知信息</h2>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-4 overflow-y-auto">
        <div className="bg-gray-50 p-4 rounded-[24px] border border-gray-100 flex items-start gap-3 mb-2">
          <Shield size={18} className="text-gray-400 shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
            系统深度集成了多维度感知算法，确保在紧急时刻能第一时间通过多种路径通知到您。
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-[28px] p-5 shadow-sm border border-gray-50 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{cat.title}</h3>
                  <p className="text-[10px] text-gray-400 font-bold">{cat.method}</p>
                </div>
              </div>
              
              {cat.isLocked ? (
                <div className="bg-gray-100 px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="text-[10px] text-gray-400 font-bold">始终开启</span>
                  <Lock size={12} className="text-gray-300" strokeWidth={2} />
                </div>
              ) : (
                <button 
                  onClick={() => toggle(cat.id as any)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 relative ${cat.enabled ? 'bg-[#024481]' : 'bg-gray-200'}`}
                >
                  <motion.div 
                    animate={{ x: cat.enabled ? 24 : 0 }}
                    className="w-4 h-4 bg-white rounded-full shadow-sm"
                  />
                </button>
              )}
            </div>

            <div className="pt-4 border-t border-gray-50">
              <div className="flex items-start gap-2">
                <span className="text-[10px] text-gray-400 mt-0.5">场景:</span>
                <p className="text-[10px] text-gray-600 font-medium">{cat.scenario}</p>
              </div>
              <p className="text-[10px] text-gray-400 mt-1">{cat.description}</p>
            </div>
          </div>
        ))}

        <div className="p-8 text-center">
          <p className="text-xs text-gray-300">智护 极简守护OS · 告警模块 v1.0</p>
        </div>

        <div className="text-center mt-12 mb-8">
          <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
        </div>
      </main>
    </motion.div>
  );
};
const FamilyMembersView = ({ 
  members, 
  onDelete, 
  onClose,
  onShowToast
}: { 
  members: FamilyMember[]; 
  onDelete: (id: string) => void; 
  onClose: () => void;
  onShowToast?: (msg: string) => void;
}) => {
  const handleInvite = () => {
    // 模拟原生分享
    if (navigator.share) {
      navigator.share({
        title: '邀请加入智护',
        text: '老爸老妈的健康我在看，你也来看看吧！',
        url: window.location.href,
      }).catch(console.error);
    } else {
      onShowToast?.('已生成邀请链接，请前往微信/手机QQ粘贴发送给家人');
    }
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[150] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-[#024481]">家人信息</h2>
        </div>
        <button onClick={handleInvite} className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">邀请家人</button>
      </header>

      <main className="flex-1 p-6 space-y-4">
        {members.map(member => (
          <div 
            key={member.id} 
            className="bg-white rounded-[24px] border border-gray-100 shadow-sm transition-shadow relative overflow-hidden"
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: -100, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -80) {
                  onDelete(member.id);
                }
              }}
              className="p-4 bg-white w-full relative z-20 flex items-center gap-4"
            >
              <img src={member.avatar} className="w-12 h-12 rounded-full object-cover border-2 border-blue-50" alt={member.name} referrerPolicy="no-referrer" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-gray-800">{member.name}</p>
                  <p className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase  leading-tight">{member.relation}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-gray-400">
                  <Phone size={12} strokeWidth={2.5} />
                  <p className="text-xs font-bold leading-none ">{member.phone || '138****0000'}</p>
                </div>
              </div>
            </motion.div>
            {/* Swipe delete background */}
            <div 
              className="absolute inset-y-0 right-0 w-24 bg-[#E11D48] flex items-center justify-center text-white"
              onClick={() => onDelete(member.id)}
            >
              <Trash2 size={24} />
            </div>
          </div>
        ))}
        
        <div className="bg-blue-50/40 p-5 rounded-[24px] border border-blue-100 border-dashed text-center">
          <p className="text-xs text-blue-600 font-medium">邀请更多家人，共同守护家里的老人</p>
          <div className="flex justify-center gap-4 mt-4">
             <div className="flex flex-col items-center gap-1 opacity-60 grayscale scale-90">
               <span className="text-2xl">💬</span>
               <span className="text-xs font-bold text-gray-500 uppercase">微信</span>
             </div>
             <div className="flex flex-col items-center gap-1 opacity-60 grayscale scale-90">
               <span className="text-2xl">🐧</span>
               <span className="text-xs font-bold text-gray-500 uppercase">手机QQ</span>
             </div>
          </div>
        </div>
      </main>
      <div className="text-center mt-12 mb-8">
        <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
      </div>
    </motion.div>
  );
};

// --- 子组件：用药计划调整 ---
const MedicationPlanView = ({ 
  plan, 
  onUpdate, 
  onClose,
  onShowToast,
  isMainAccount = true
}: { 
  plan: Medication[]; 
  onUpdate: (plan: Medication[]) => void; 
  onClose: () => void;
  onShowToast?: (msg: string) => void;
  isMainAccount?: boolean;
}) => {
  const [data, setData] = useState(plan);
  const [editingMed, setEditingMed] = useState<Medication | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<Partial<Medication>>({
    name: '',
    dosage: '',
    times: ['08:00'],
    enabled: true,
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  });

  const handlePhotoScan = async (file: File) => {
    setIsScanning(true);
    try {
      const reader = new FileReader();
      const base64Promise = new Promise<{base64: string, full: string}>((resolve) => {
        reader.onload = (e) => {
          const result = e.target?.result as string;
          resolve({
            base64: result.split(',')[1],
            full: result
          });
        };
      });
      reader.readAsDataURL(file);
      const { base64, full } = await base64Promise;

      // 立即在表单中预览图片，提升用户反馈感
      setForm(prev => ({ ...prev, imageUrl: full }));

      const response = await fetch('/api/analyze-medicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          base64,
          mimeType: file.type,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze medicine');
      }

      const result = await response.json();
      if (result.name && result.name !== 'invalid') {
        setForm({
          name: result.name,
          dosage: result.dosage || '1粒',
          times: ['08:00'],
          enabled: true,
          imageUrl: full,
          startDate: new Date().toISOString().split('T')[0],
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        });
        setIsAdding(true);
        setEditingMed(null);
      }
    } catch (error) {
      console.error("Scan error:", error);
    } finally {
      setIsScanning(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleEditClick = (med: Medication) => {
    if (!isMainAccount) return;
    setEditingMed(med);
    setForm({ ...med });
    setIsAdding(false);
  };

  const handleAddClick = () => {
    if (!isMainAccount) return;
    setForm({
      name: '',
      dosage: '',
      times: ['08:00'],
      enabled: true,
      imageUrl: undefined,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    });
    setIsAdding(true);
    setEditingMed(null);
  };

  const saveMedication = () => {
    if (!form.name || !form.dosage) return;

    let updated: Medication[];
    if (isAdding) {
      const newMed: Medication = {
        ...(form as Medication),
        id: Math.random().toString(36).substr(2, 9)
      };
      updated = [...data, newMed];
    } else if (editingMed) {
      updated = data.map(m => m.id === editingMed.id ? { ...m, ...form } as Medication : m);
    } else {
      return;
    }

    setData(updated);
    onUpdate(updated);
    setIsAdding(false);
    setEditingMed(null);
  };

  const deleteMedication = (id: string) => {
    const updated = data.filter(m => m.id !== id);
    setData(updated);
    onUpdate(updated);
    setIsAdding(false);
    setEditingMed(null);
  };

  const toggleEnabled = (id: string) => {
    if (!isMainAccount) return;
    const updated = data.map(m => m.id === id ? { ...m, enabled: !m.enabled } : m);
    setData(updated);
    onUpdate(updated);
  };

  const addTime = () => {
    setForm(prev => ({
      ...prev,
      times: [...(prev.times || []), '12:00']
    }));
  };

  const removeTime = (index: number) => {
    setForm(prev => ({
      ...prev,
      times: prev.times?.filter((_, i) => i !== index)
    }));
  };

  const updateTime = (index: number, val: string) => {
    setForm(prev => {
      const newTimes = [...(prev.times || [])];
      newTimes[index] = val;
      return { ...prev, times: newTimes };
    });
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[150] bg-[#fbf9f8] flex flex-col font-sans"
    >
      <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-[#024481]">用药计划</h2>
        </div>
        {/* 已去掉右上角 AI识别用药 和 + 按钮 */}
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-6 relative">
        <div className="space-y-3">
          {data.map(med => (
            <div 
              key={med.id} 
              className={`bg-white p-4 rounded-[20px] border border-gray-100 shadow-sm flex items-center justify-between gap-4 ${med.enabled === false ? 'opacity-60 bg-gray-50/50' : 'opacity-100'}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💊</span>
                  <h4 className="font-bold text-base text-gray-800 truncate">{med.name}</h4>
                  {med.enabled === false && (
                    <span className="text-[9px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full font-bold">已停用</span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">推送时间</span>
                    <span className="font-medium">{med.times.join(' • ')}</span>
                  </div>
                  {med.dosage && (
                    <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
                      <span className="font-bold text-gray-500">单次:</span>
                      <span className="font-bold text-gray-700">{med.dosage}</span>
                    </div>
                  )}
                </div>
                {(med.startDate || med.endDate) && (
                  <div className="text-[10px] text-gray-300 mt-1 font-medium">
                    有效期: {med.startDate || '未设'} ~ {med.endDate || '未设'}
                  </div>
                )}
              </div>
            </div>
          ))}

          {data.length === 0 && (
            <div className="text-center py-12">
               <div className="text-5xl mb-4">🍵</div>
               <p className="text-gray-400 font-medium">暂无用药计划</p>
            </div>
          )}
        </div>

        {/* 已经去掉底部 “同步至机器人端” 的卡片 */}
      </main>

      {/* 编辑/新增 抽屉 */}
      <AnimatePresence>
        {(isAdding || editingMed) && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-[160] bg-[#fbf9f8] flex flex-col font-sans"
          >
            <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-4">
                <button onClick={() => { setIsAdding(false); setEditingMed(null); }} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
                <h2 className="text-xl font-bold text-[#024481]">{isAdding ? '新增用药' : '维护医嘱'}</h2>
              </div>
              <button 
                onClick={saveMedication}
                disabled={!form.name || !form.dosage}
                className={`px-6 py-2 rounded-[24px] font-bold transition-all ${(!form.name || !form.dosage) ? 'bg-gray-100 text-gray-300' : 'bg-[#024481] text-white shadow-lg shadow-blue-900/20 active:scale-95'}`}
              >
                保存
              </button>
            </header>

            <main className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="bg-white rounded-[32px] p-8 border border-gray-50 shadow-sm space-y-8">
                {/* 药盒识别图 */}
                {form.imageUrl && (
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase  ml-1">药品包装图</label>
                    <div 
                      className="w-full aspect-video rounded-3xl overflow-hidden shadow-inner bg-gray-50 relative group cursor-pointer"
                      onClick={() => setFullScreenImage(form.imageUrl!)}
                    >
                      <img src={form.imageUrl} className="w-full h-full object-cover" alt="Drug Box" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">点击全屏查看</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setForm({ ...form, imageUrl: undefined }); }}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md text-[#E11D48] rounded-full flex items-center justify-center font-bold shadow-lg"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}

                {/* 药名 */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase  ml-1">药品名称</label>
                  <input 
                    type="text"
                    value={form.name}
                    placeholder="例如：缬沙坦胶囊"
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 border-none rounded-[24px] px-6 py-4 text-gray-700 font-bold focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                  />
                </div>

                {/* 剂量 */}
                <div className="space-y-3">
                   <label className="text-xs font-bold text-gray-400 uppercase  ml-1">单次剂量</label>
                   <input 
                    type="text"
                    value={form.dosage}
                    placeholder="例如：1粒"
                    onChange={e => setForm({ ...form, dosage: e.target.value })}
                    className="w-full bg-gray-50 border-none rounded-[24px] px-6 py-4 text-gray-700 font-bold focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                  />
                </div>

                {/* 计划周期 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase  ml-1">开始日期</label>
                    <input 
                      type="date"
                      value={form.startDate}
                      onChange={e => setForm({ ...form, startDate: e.target.value })}
                      className="w-full bg-gray-50 border-none rounded-[24px] px-4 py-4 text-gray-700 font-bold focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase  ml-1">结束日期</label>
                    <input 
                      type="date"
                      value={form.endDate}
                      onChange={e => setForm({ ...form, endDate: e.target.value })}
                      className="w-full bg-gray-50 border-none rounded-[24px] px-4 py-4 text-gray-700 font-bold focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-base"
                    />
                  </div>
                </div>

                {/* 时间点 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold text-gray-400 uppercase ">提醒时间点</label>
                    <button onClick={addTime} className="text-blue-500 text-xs font-bold">+ 增加时间</button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {form.times?.map((time, idx) => (
                      <div key={idx} className="relative">
                        <input 
                          type="time"
                          value={time}
                          onChange={e => updateTime(idx, e.target.value)}
                          className="w-full bg-gray-50 border-none rounded-[24px] px-6 py-4 text-gray-700 font-bold focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        />
                        {form.times!.length > 1 && (
                          <button 
                            onClick={() => removeTime(idx)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 text-[#E11D48] rounded-full text-xs flex items-center justify-center font-bold"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullScreenImage && (
          <ImageViewer src={fullScreenImage} onClose={() => setFullScreenImage(null)} />
        )}
      </AnimatePresence>
      <div className="text-center mt-12 mb-8">
        <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
      </div>
    </motion.div>
  );
};

// --- 子组件：法律条款 ---
const LegalNoticeView = ({ 
  type, 
  onClose,
  onDeleteData,
  onViewLogs,
  isMainAccount = true
}: { 
  type: 'terms' | 'privacy' | 'informed'; 
  onClose: () => void;
  onDeleteData?: () => void;
  onViewLogs?: () => void;
  isMainAccount?: boolean;
}) => {
  const getTitle = () => {
    switch(type) {
      case 'terms': return '用户服务协议';
      case 'privacy': return '隐私保护政策';
      case 'informed': return '被监护人知情同意书';
      default: return '法律协议';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-[40px] w-full max-w-sm flex flex-col p-8 space-y-6 max-h-[85vh]">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">{getTitle()}</h3>
          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-wider">智护OS · 终端合规文案 V1.0</p>
        </div>
        
        <div className="flex-1 overflow-y-auto text-sm text-gray-600 leading-normal space-y-5 px-1 scrollbar-hide">
          {type === 'terms' && (
            <>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">1. 服务性质声明</p>
                <p className="text-xs">本产品为健康管理辅助工具，<strong>非医疗器械</strong>，不提供医疗诊断、病情判定、用药指导或临床治疗等专业医疗服务。平台建议仅供参考。</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">2. 硬件使用限制</p>
                <p className="text-xs">机器人需在通电、联网、传感器无遮挡状态下运行。因断电、网络异常、外力损坏导致功能中断或告警延迟，平台不承担民事责任。</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">3. 告警响应说明</p>
                <p className="text-xs">异常行为告警基于AI算法识别，存在合理范围内的误报或漏报。监护人收到告警后须第一时间自行核实老人实际状况。</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">4. AI内容权责</p>
                <p className="text-xs">所有AI生成的分析、建议及关怀话术均为算法生成，不具备专业医疗或心理咨询效力，不对其绝对准确性承担保证责任。</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">5. 账户管理责任</p>
                <p className="text-xs">注册人须为被监护人的直系亲属或合法授权人员。因填报虚假关系、无授权绑定设备引发的法律纠纷由注册人自行承担。</p>
              </div>
            </>
          )}

          {type === 'privacy' && (
            <>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">1. 数据采集清单</p>
                <p className="text-xs">我们采集必要信息：体征监测数据、用药记录、睡眠行为、语音交互及安全告警相关图像视频。严禁采集无关合规隐私信息。</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">2. 视听隐私规则</p>
                <p className="text-xs">安心卡照片云端仅留存24小时后自动清理；视频通话全程不录制、不存储内容；语音数据脱敏后仅用于算法优化，用户可随时关闭采集。</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">3. 摄像头控制权</p>
                <p className="text-xs">摄像头默认关闭。仅在：监护人发起抓拍、发起视频通话、触发告警核实等三种明示场景下开启，且机身指示灯会同步闪烁。</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">4. 数据删除与注销</p>
                <p className="text-xs">用户可在“个人中心”自主删除历史数据或申请账号注销。注销后，所有相关个人隐私信息将执行永久无痕删除。</p>
              </div>
              <div className="pt-4 border-t border-gray-50 flex flex-col gap-3">
                <button 
                  onClick={onViewLogs}
                  className="w-full py-3 text-gray-500 font-bold text-xs bg-gray-50 rounded-[24px] active:scale-95 transition-transform border border-gray-100"
                >查看摄像头调用详情</button>
                {isMainAccount && (
                  <button 
                    onClick={() => {
                      onClose();
                      onDeleteData?.();
                    }}
                    className="w-full py-3 text-[#E11D48]/60 font-bold text-xs bg-red-50/50 rounded-[24px] active:scale-95 transition-transform"
                  >清理历史隐私数据</button>
                )}
              </div>
            </>
          )}

          {type === 'informed' && (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">1. 产品定位说明</p>
                  <p className="text-xs">本设备是子女远程关心、陪伴长辈的智慧助手。具备用药提醒、日常聊天及安全看护功能，属于家人关心工具而非监视器。</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-gray-800 border-l-2 border-gray-200 pl-2">2. 温馨陪伴说明</p>
                  <p className="text-xs">“这款机器人是连接您与远方家人的纽带，希望在保障安全的同时，为您带来更有温度的居家陪伴。”</p>
                </div>
              </div>
            </>
          )}
          
          <p className="text-[9px] text-gray-300 pt-4 border-t border-gray-50 font-bold uppercase tracking-tighter">© 2026 阿七宜特 · 合规留痕文本</p>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full py-4 bg-gray-800 shadow-xl shadow-gray-200 rounded-[24px] font-bold text-white active:scale-95 transition-transform"
        >确认并接受</button>
      </div>
    </motion.div>
  );
};

// --- 子组件：摄像头记录展示 ---
const CameraAccessLogsView = ({ logs, onClose }: { logs: CameraLog[], onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[250] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white px-6 py-6 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-[#024481]">摄像头调用记录</h2>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="bg-white rounded-[32px] p-6 space-y-4 border border-gray-100 shadow-sm">
           <p className="text-xs text-gray-400 font-bold uppercase  text-center py-2 border-b border-gray-50">
             隐私保障：端到端加密传输 <Lock size={12} className="inline-block" />
           </p>
           <div className="space-y-4">
             {logs.length > 0 ? logs.map(log => (
               <div key={log.id} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                 <div className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-[24px] flex items-center justify-center text-xl font-bold ${
                     log.source === '告警' ? 'bg-red-50 text-[#E11D48]' : 
                     log.source === '通话' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-[#10B981]'
                   }`}>
                     {log.source === '告警' ? <AlertTriangle size={16} /> : log.source === '通话' ? <PhoneCall size={16} /> : <Camera size={16} />}
                   </div>
                   <div>
                     <p className="font-bold text-gray-800">{log.source}调用</p>
                     <p className="text-xs text-gray-400">{log.time}</p>
                   </div>
                 </div>
                 <span className="text-xs text-gray-500 font-bold bg-gray-50 px-3 py-1 rounded-full">{log.status}</span>
               </div>
             )) : (
               <div className="text-center py-20 text-gray-400">暂无相关调用记录</div>
             )}
           </div>
        </div>
        
        <div className="p-4 bg-blue-50/50 rounded-[24px] border border-blue-100/50">
          <p className="text-xs text-blue-600 leading-relaxed text-center font-medium">
            提示：采集的音视频仅用于实时通话与跌倒检测，暂不在云端进行持久化存储。
          </p>
        </div>
      </main>
    </motion.div>
  );
};

// --- 子组件：机器人详情设置 (OTA/重启/关机) ---
const RobotDetailView = ({ 
  robot, 
  onSave, 
  onDelete,
  onClose,
  onShowToast,
  isMainAccount = true
}: { 
  robot: any; 
  onSave: (robot: any) => void; 
  onDelete: (id: string) => void;
  onClose: () => void;
  onShowToast?: (msg: string) => void;
  isMainAccount?: boolean;
}) => {
  const [nickname, setNickname] = useState(robot.nickname);
  // 新增 SN (序列号) 编辑状态以支持修改序列号
  const [sn, setSn] = useState(robot.sn || 'JH4820-2910-X1');
  const [upgrading, setUpgrading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleOTA = () => {
    setUpgrading(true);
    setTimeout(() => {
      setUpgrading(false);
      onShowToast?.('固件已更新至最新版本');
    }, 3000);
  };

  const handleConfirmDelete = () => {
    if (password === '123456') {
      onDelete(robot.id);
      onClose();
    } else {
      setPasswordError('验证失败：密码错误');
    }
  };

  return (
    <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      className="absolute inset-0 z-[150] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white px-6 py-6 pt-12 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-[#024481]">设备维护</h2>
        </div>
        <button 
          // 保存时一并提交修改后的昵称和序列号 (SN)
          onClick={() => onSave({ ...robot, nickname, sn })}
          className="bg-[#024481] text-white px-6 py-2 rounded-full font-bold text-base shadow-xl shadow-blue-100"
        >保存修改</button>
      </header>

      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="bg-white rounded-[32px] p-6 space-y-4 border border-gray-50 shadow-sm">
           <div className="space-y-1.5 text-left">
             <label className="text-xs font-bold text-gray-400 ml-1 uppercase ">机器人名称</label>
             <input 
               value={nickname}
               onChange={e => setNickname(e.target.value)}
               disabled={!isMainAccount}
               className={`w-full ${!isMainAccount ? 'bg-gray-100 text-gray-400' : 'bg-gray-50 text-[#024481] focus:ring-2 focus:ring-blue-100'} border-none rounded-[24px] p-4 text-base font-bold`}
             />
           </div>
           {/* 支持在后台直接输入并修改机器人序列号 (SN) */}
           <div className="space-y-1.5 text-left">
             <label className="text-xs font-bold text-gray-400 ml-1 uppercase ">序列号 (SN)</label>
             <input 
               value={sn}
               onChange={e => setSn(e.target.value)}
               disabled={!isMainAccount}
               className={`w-full ${!isMainAccount ? 'bg-gray-100 text-gray-400' : 'bg-gray-50 text-[#024481] focus:ring-2 focus:ring-blue-100'} border-none rounded-[24px] p-4 text-base font-bold`}
             />
           </div>
           <div className="flex justify-between items-center px-1 pt-2">
             <span className="text-xs text-gray-400 font-bold">硬件型号</span>
             <span className="text-xs font-bold text-gray-700">{robot.model}</span>
           </div>
        </div>

        {isMainAccount ? (
          <div className="pt-4">
            <button 
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full py-4 text-[#E11D48] font-bold text-xs  bg-red-50 rounded-[24px] active:scale-95 transition-transform"
            >❌ 解除设备绑定</button>
            <p className="text-center text-xs text-gray-300 font-bold mt-4 leading-relaxed px-4">
              解除绑定后，该设备的历史轨迹和录音数据将被安全抹除。
            </p>
          </div>
        ) : (
          <div className="pt-4 text-center">
            <p className="text-xs text-gray-400 font-bold mt-4 leading-relaxed px-4">
              当前账号为分享账号，无法解除设备绑定或修改设备参数。
            </p>
          </div>
        )}
      </main>

      {/* 解绑确认弹窗 */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <div className="bg-white rounded-[40px] w-full p-8 space-y-6 text-center">
              <div className="w-16 h-16 bg-red-100 text-[#E11D48] rounded-full flex items-center justify-center text-3xl mx-auto">⚠️</div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 ">确认解除绑定？</h3>
                <p className="text-xs text-gray-400 font-bold leading-relaxed px-4">此操作不可撤销，请输入您的登录密码确认身份。</p>
              </div>
              
              <div className="space-y-2">
                <input 
                  type="password"
                  placeholder="请输入您的登录密码"
                  autoFocus
                  value={password}
                  onChange={e => { setPassword(e.target.value); setPasswordError(''); }}
                  className={`w-full h-14 bg-gray-50 border-none rounded-[24px] p-4 text-base font-bold text-center  focus:ring-2 ${passwordError ? 'ring-2 ring-red-300 animate-shake' : 'focus:ring-blue-100'}`}
                />
                {passwordError && <p className="text-xs text-[#E11D48] font-bold animate-pulse">{passwordError}</p>}
                <p className="text-xs text-gray-300 font-bold">默认演示密码: 123456</p>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setShowDeleteConfirm(false)} className="flex-1 py-4 text-gray-400 font-bold text-xs uppercase  leading-none">返回</button>
                <button 
                  onClick={handleConfirmDelete}
                  className="flex-1 py-4 bg-[#E11D48] text-white rounded-[24px] font-bold text-xs shadow-xl shadow-red-200 active:scale-95 transition-transform"
                >确认解绑</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 子组件：二次确认删除弹窗 ---
const DeleteConfirmDialog = ({ 
  onConfirm, 
  onClose 
}: { 
  onConfirm: () => void; 
  onClose: () => void 
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = () => {
    if (password === '123456') {
      onConfirm();
    } else {
      setError('密码错误，请重新输入');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 text-center"
    >
      <div className="bg-white rounded-[40px] w-full max-xs p-8 space-y-6">
        <div className="w-16 h-16 bg-red-100 text-[#E11D48] rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">⚠️</div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-800">重要安全确认</h3>
          <p className="text-xs text-gray-400 leading-relaxed">删除历史数据将永久移除所有健康趋势与录音，操作不可撤销。</p>
        </div>
        
        <div className="space-y-2 text-left">
          <label className="text-xs font-bold text-gray-400 ml-1">请输入登录密码验证</label>
          <input 
            type="password"
            placeholder="默认密码 123456"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(''); }}
            className={`w-full bg-gray-50 border-none rounded-[24px] p-4 text-base font-bold text-center  ${error ? 'ring-1 ring-red-300' : ''}`}
          />
          {error && <p className="text-xs text-[#E11D48] text-center font-medium">{error}</p>}
        </div>

        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-4 text-gray-400 font-bold text-base">取消</button>
          <button onClick={handleConfirm} className="flex-1 py-4 bg-[#E11D48] text-white rounded-[24px] font-bold shadow-lg shadow-red-200 active:scale-95 transition-transform text-base">确认清理</button>
        </div>
      </div>
    </motion.div>
  );
};
const ElderlyProfileEditView = ({ 
  data, 
  onSave, 
  onClose,
  onShowToast
}: { 
  data: any; 
  onSave: (newData: any) => void; 
  onClose: () => void;
  onShowToast?: (msg: string) => void;
}) => {
  const [formData, setFormData] = useState(data);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarSelect = () => {
    avatarInputRef.current?.click();
  };

  const onAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData({ ...formData, avatar: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 模拟从病历拍照提取数据
  const handleScanRecord = () => {
    cameraInputRef.current?.click();
  };

  const handleSelectAlbum = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        // 模拟提取了一些新信息
        setFormData({
          ...formData,
          medicalHistory: formData.medicalHistory ? formData.medicalHistory + '；近期检查：心功能二级(AI解析)' : '近期检查：心功能二级(AI解析)',
          medicationSuggestion: formData.medicationSuggestion ? formData.medicationSuggestion + '；维D 1片/日(AI解析)' : '维D 1片/日(AI解析)'
        });
        if (fileInputRef.current) fileInputRef.current.value = '';
        if (cameraInputRef.current) cameraInputRef.current.value = '';
      }, 2000);
    }
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[100] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white text-gray-800 px-5 py-5 flex items-center justify-between shadow-sm border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-lg font-bold">健康档案库</h2>
        </div>
        <div className="flex gap-2">
          <input 
            type="file" 
            accept="image/*" 
            ref={avatarInputRef}
            className="hidden"
            onChange={onAvatarFileChange}
          />
          <input 
            type="file" 
            accept="image/*" 
            multiple 
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <input 
            type="file" 
            accept="image/*" 
            capture="environment"
            ref={cameraInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button 
            onClick={handleSelectAlbum}
            className="px-4 py-1.5 bg-gray-50 text-gray-500 rounded-full text-xs font-bold flex items-center gap-2 active:scale-95 transition-transform border border-gray-100"
          >
            <Camera size={14} strokeWidth={2.5} />
            AI识别病历
          </button>
          <button 
            onClick={() => {
              if(!formData.phone) return; // 必填校验简易实现
              onSave(formData);
              onClose();
            }}
            className="bg-[#024481] text-white px-4 py-1.5 rounded-full text-base font-bold shadow-md active:scale-95 transition-transform"
          >保存</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-4 space-y-4 pb-12">
        {isScanning && (
          <div className="bg-[#024481] text-white p-3 rounded-[24px] flex items-center justify-center gap-3 animate-pulse shadow-lg text-base">
             <span className="animate-spin text-lg inline-flex items-center justify-center"><Settings size={18} /></span> 正在AI解析电子病历档案...
          </div>
        )}

        {/* 核心基础信息 */}
        <div className="bg-white rounded-[24px] p-4 border border-gray-100 space-y-3">
          <div className="flex items-center gap-4 mb-2">
             <div 
               className="relative shrink-0 cursor-pointer active:scale-95 transition-transform"
               onClick={handleAvatarSelect}
             >
               <img src={formData.avatar} className="w-14 h-14 rounded-full object-cover border-2 border-blue-50" alt="avatar" referrerPolicy="no-referrer" />
               <div className="absolute -bottom-1 -right-1 bg-[#024481] text-white p-1 rounded-full text-xs"><Camera size={10} /></div>
             </div>
             <div className="flex-1 space-y-2">
                <input 
                  type="text" 
                  placeholder="姓名 (必填)"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-[24px] px-3 py-2 text-base font-bold focus:ring-1 focus:ring-blue-200"
                />
                <input 
                  type="tel" 
                  placeholder="联系电话 (必填)"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-[24px] px-3 py-2 text-base font-bold focus:ring-1 focus:ring-blue-200"
                />
             </div>
          </div>
          
          {/* 移除标签选择，调整为2列网格（年龄与血型） */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-bold ml-1 uppercase">年龄</label>
              <input 
                type="number" 
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
                className="w-full bg-gray-50 rounded-[20px] px-3 py-2 text-sm font-bold"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-bold ml-1 uppercase">血型</label>
              <select 
                value={formData.bloodType}
                onChange={(e) => setFormData({...formData, bloodType: e.target.value})}
                className="w-full bg-gray-50 rounded-[20px] px-3 py-2 text-sm font-bold appearance-none text-center"
              >
                <option value="A型血">A型</option>
                <option value="B型血">B型</option>
                <option value="AB型血">AB型</option>
                <option value="O型血">O型</option>
              </select>
            </div>
          </div>
        </div>

        {/* 健康记录详情 */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold text-gray-400 flex items-center gap-2 px-1">
             <span className="w-1 h-3 bg-gray-300 rounded-full inline-block"></span>
             健康档案详情
          </h3>
          
          <div className="bg-white rounded-[24px] p-4 border border-gray-100 space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-bold ml-1">既往病史</label>
              <textarea 
                rows={2}
                value={formData.medicalHistory}
                onChange={(e) => setFormData({...formData, medicalHistory: e.target.value})}
                className="w-full bg-gray-50 rounded-[24px] p-3 text-xs leading-relaxed focus:ring-1 focus:ring-blue-100 border-none outline-none resize-none"
                placeholder="手术史、重大疾病..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-bold ml-1">慢性病管理</label>
              <input 
                type="text"
                value={formData.chronicDiseases}
                onChange={(e) => setFormData({...formData, chronicDiseases: e.target.value})}
                className="w-full bg-gray-50 rounded-[24px] p-3 text-xs focus:ring-1 focus:ring-blue-100 border-none outline-none"
                placeholder="如：高血压、糖尿病"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-bold ml-1 uppercase letter-spacing-wider">过敏源</label>
              <input 
                type="text"
                value={formData.allergies}
                onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                className="w-full bg-gray-50 rounded-[24px] p-3 text-xs text-gray-800 focus:ring-1 focus:ring-gray-100 border-none outline-none font-medium"
                placeholder="药物、食物过敏..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-bold ml-1">用药建议</label>
              <textarea 
                rows={2}
                value={formData.medicationSuggestion}
                onChange={(e) => setFormData({...formData, medicationSuggestion: e.target.value})}
                className="w-full bg-gray-50 rounded-[24px] p-3 text-xs text-gray-800 leading-relaxed border-none outline-none resize-none"
                placeholder="药物名称、频次、剂量"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-bold ml-1">运动建议</label>
              <textarea 
                rows={2}
                value={formData.exerciseSuggestion}
                onChange={(e) => setFormData({...formData, exerciseSuggestion: e.target.value})}
                className="w-full bg-gray-50 rounded-[24px] p-3 text-xs text-gray-800 leading-relaxed border-none outline-none resize-none"
                placeholder="运动项目、强度、频率"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-gray-400 font-bold ml-1">饮食建议</label>
              <textarea 
                rows={2}
                value={formData.dietarySuggestion}
                onChange={(e) => setFormData({...formData, dietarySuggestion: e.target.value})}
                className="w-full bg-gray-50 rounded-[24px] p-3 text-xs text-gray-800 leading-relaxed border-none outline-none resize-none"
                placeholder="营养建议、忌口说明"
              />
            </div>
          </div>
        </section>

        {/* 移除“评估与环境”相关大模块以满足用户需求 */}
        <div className="text-center text-gray-300 font-bold uppercase py-6 text-xs tracking-wider">
          — 已经到底 —
        </div>
      </main>


    </motion.div>
  );
};

// --- 子组件：添加机器人页面 ---
// --- 子组件：第三方健康平台及设备绑定 ---
// --- 子组件：智能设备详情/编辑页面 ---
// --- 子组件：全量设备管理页面 ---
const DeviceManagementView = ({ 
  robots, 
  activeRobotId, 
  onRobotClick, 
  onRobotDetail, 
  onAddRobot, 
  onAddSmartDevice, 
  onAddPlatform,
  onDeviceManage,
  onClose 
}: { 
  robots: Robot[]; 
  activeRobotId: string | null; 
  onRobotClick: (id: string) => void; 
  onRobotDetail: (r: Robot) => void;
  onAddRobot: () => void;
  onAddSmartDevice: () => void;
  onAddPlatform: () => void;
  onDeviceManage: (d: any) => void;
  onClose: () => void;
}) => {
  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[240] bg-[#fbf9f8] flex flex-col"
    >
      <header className="p-6 flex items-center justify-between bg-white border-b border-gray-50 flex-none sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-gray-800">设备中心</h2>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* 1. 照护机器人 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              照护机器人
            </h4>
            <button 
              onClick={onAddRobot}
              className="text-xs text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full active:scale-95 transition-transform"
            >＋ 绑定机器人</button>
          </div>
          {robots.map(robot => (
            <div 
              key={robot.id}
              // 点击机器人整张卡片即可直接进入修改名称与属性的页面
              onClick={() => onRobotDetail(robot)}
              className={`p-5 rounded-[28px] border transition-all cursor-pointer ${activeRobotId === robot.id ? 'bg-white border-blue-500 shadow-lg shadow-blue-100/30' : 'bg-white border-gray-100 hover:border-blue-200'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-[20px] transition-all flex items-center justify-center border ${activeRobotId === robot.id ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'}`}>
                    <Bot size={22} strokeWidth={1.2} className={activeRobotId === robot.id ? 'text-blue-500' : 'text-gray-400'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                       {/* 后面添加了 ✏️ 提示可点击修改机器人姓名 */}
                       <p className={`font-bold transition-all flex items-center gap-1.5 ${activeRobotId === robot.id ? 'text-[#024481] text-base' : 'text-gray-800 text-base'}`}>
                         {robot.nickname} <span>✏️</span>
                       </p>
                       {activeRobotId === robot.id && <span className="bg-[#024481]/10 text-[#024481] text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">配置</span>}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                       <span className={`w-1.5 h-1.5 rounded-full ${robot.status === 'online' ? 'bg-[#0d6c42] animate-pulse' : 'bg-gray-300'}`}></span>
                       <span className="text-xs font-bold text-gray-400">
                         {/* “在线运行中” 后面加上电量百分比显示 */}
                         {robot.status === 'online' ? `在线运行中 | 电量 ${robot.battery || 85}%` : '离线/深度休眠'}
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. 绑定智能设备与平台接入 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-400 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#10B981] rounded-full"></span>
              智能平台与健康硬件
            </h4>
            <button 
              onClick={onAddSmartDevice}
              className="text-xs text-[#10B981] font-bold bg-green-50 px-3 py-1 rounded-full active:scale-95 transition-transform"
            >＋ 绑定硬件</button>
          </div>
          <div className="space-y-3">
            {[
              { id: 'yy-01', name: '血糖分析仪', icon: <HeartPulse size={22} strokeWidth={1.2} />, platform: '鱼跃医疗', val: '正常波动范围内', color: 'green' }
            ].map(d => (
              <div 
                key={d.id}
                className="bg-white p-4 rounded-[24px] border border-gray-100 flex items-center justify-between group active:bg-blue-50/50 transition-all cursor-default shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-[20px] flex items-center justify-center border border-gray-100 group-active:scale-90 transition-transform">
                    <span className="text-[#10B981]">
                      {d.icon}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-gray-800 text-base">{d.name}</p>
                      <span className="text-xs px-1.5 py-0.5 rounded font-bold bg-green-50 text-[#10B981]">
                        {d.platform}
                      </span>
                    </div>
                    <p className="text-xs font-medium mt-0.5 text-gray-400">
                      {d.val}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SmartDeviceDetailView = ({ 
  device, 
  onClose, 
  onDisconnect, 
  onShowToast,
  onSetConfirmation
}: { 
  device: any; 
  onClose: () => void; 
  onDisconnect: () => void; 
  onShowToast?: (msg: string) => void;
  onSetConfirmation?: (cfg: {title: string, message: string, onConfirm: () => void}) => void;
}) => {

  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      onShowToast?.('数据同步成功！已获取最新的健康指标。');
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[260] bg-[#fbf9f8] flex flex-col"
    >
      <header className="p-6 flex items-center justify-between bg-white border-b border-gray-50">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
          <h2 className="text-xl font-bold text-gray-800">设备管理</h2>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* 设备头部卡片 */}
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-4xl shadow-inner">
            {device.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{device.name}</h3>
            <p className="text-xs text-gray-400 mt-1">序列号: {device.id || 'SN-772839441'}</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-green-50 text-[#0d6c42] text-xs font-bold px-3 py-1 rounded-full border border-green-100 italic">Connected</span>
            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-100">Battery 85%</span>
          </div>
        </div>

        {/* 管理选项组 */}
        <div className="space-y-3">
          <p className="text-xs text-gray-400 font-bold uppercase  px-1">数据与同步</p>
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className="w-full bg-white p-5 rounded-[24px] border border-gray-50 flex items-center justify-between active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-[24px] flex items-center justify-center text-xl">
                {isSyncing ? <RefreshCw size={16} className="animate-spin" /> : <RefreshCw size={16} />}
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-base">立即同步数据</p>
                <p className="text-xs text-gray-400 mt-1">同步上次测量后的所有离线记录</p>
              </div>
            </div>
            <span className="text-gray-300">❯</span>
          </button>

          <button className="w-full bg-white p-5 rounded-[24px] border border-gray-50 flex items-center justify-between active:scale-[0.98] transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-[24px] flex items-center justify-center text-xl"><BarChart2 size={20} /></div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-base">测量趋势分析</p>
                <p className="text-xs text-gray-400 mt-1">查看该设备的历史全量数据报表</p>
              </div>
            </div>
            <span className="text-gray-300">❯</span>
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-xs text-gray-400 font-bold uppercase  px-1">安全设置</p>
          <button className="w-full bg-white p-5 rounded-[24px] border border-gray-50 flex items-center justify-between active:scale-[0.98] transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-50 text-[#E11D48] rounded-[24px] flex items-center justify-center">
                <Bell size={20} strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-base">告警阈值设定</p>
                <p className="text-xs text-gray-400 mt-1">当测量值超过范围时自动呼叫家人</p>
              </div>
            </div>
            <span className="text-gray-300">❯</span>
          </button>
        </div>

        {/* 危险操作 */}
        <div className="pt-6">
          <button 
            onClick={() => {
              onSetConfirmation?.({
                title: '解除设备绑定',
                message: `确认要解除与 ${device.name} 的绑定吗？解除后将无法自动获取该设备的数据。`,
                onConfirm: onDisconnect
              });
            }}
            className="w-full py-4 text-[#E11D48] font-bold border-2 border-red-50/50 rounded-[24px] active:bg-red-50 transition-colors"
          >
            解除设备绑定
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SmartHealthPlatformsView = ({ onClose, onShowToast }: { onClose: () => void; onShowToast?: (msg: string) => void }) => {
  const platforms = [
    { id: 'yuyue', name: '鱼跃医疗', icon: <CheckCircle size={24} className="text-emerald-500" />, detail: '对接鱼跃系列血压、血糖及血氧仪', status: '已连接' }, 
    { id: 'apple', name: 'Apple Health', icon: <Smartphone size={24} className="text-gray-400" />, detail: '同步 iPhone 及 Apple Watch 健康数据', status: '未连接' }, 
    { id: 'google', name: 'Google Fit', icon: <Activity size={24} className="text-blue-400" />, detail: '同步 Android 手机健康中心数据', status: '未连接' } 
  ];

  const handleConnect = (name: string) => {
    onShowToast?.(`正在建立与 ${name} 的安全加密连接，请在随后的弹窗中完成授权...`);
  };

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed inset-0 z-[250] bg-[#fbf9f8] flex flex-col"
    >
      <header className="p-6 flex items-center gap-4 bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-50">
        <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
        <h2 className="text-xl font-bold text-gray-800">对接健康数据平台</h2>
      </header>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="bg-blue-50/50 p-5 rounded-[24px] border border-blue-100 flex items-start gap-4">
          <div className="w-10 h-10 bg-white rounded-[24px] flex items-center justify-center text-xl shadow-sm text-blue-500"><Info size={20} /></div>
          <p className="text-xs text-blue-700 leading-relaxed font-medium">
            授权后，系统将自动从第三方平台获取长辈的基础生理指标（步数、心率、呼吸等），协助机器人为您生成更精准的健康报告。
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-gray-400 font-bold uppercase  px-1">可选平台列表</p>
          {platforms.map(p => (
            <button 
              key={p.id}
              onClick={() => handleConnect(p.name)}
              className="w-full bg-white p-5 rounded-[28px] border border-gray-50 flex items-center justify-between active:scale-[0.98] transition-all group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-[24px] flex items-center justify-center text-2xl group-active:scale-90 transition-transform">
                  {p.icon}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800 text-base">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{p.detail}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.status === '未连接' ? 'text-blue-600 bg-blue-50' : 'text-gray-400 bg-gray-50'}`}>
                  {p.status}
                </span>
                <span className="text-gray-300">❯</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center pb-12">
          <div className="w-12 h-1 bg-gray-200 mx-auto rounded-full mb-4"></div>
          <p className="text-xs text-gray-300 font-medium">数据加密传输中 · 由智护安全中心提供技术支持</p>
        </div>
      </div>
    </motion.div>
  );
};

const SmartDeviceBindView = ({ onClose, onShowToast }: { onClose: () => void; onShowToast?: (msg: string) => void }) => {
  const [scanning, setScanning] = useState(true);
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanning(false);
      setDevices([
        { id: '1', name: '智能血压计 (BP-88)', type: '蓝牙设备', rssi: -65 },
        { id: '2', name: '红外体温枪 (T-01)', type: '蓝牙设备', rssi: -78 }
      ]);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="fixed inset-0 z-[250] bg-[#fbf9f8] flex flex-col"
    >
      <header className="p-6 flex items-center justify-between bg-white border-b border-gray-50">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-2xl active:scale-90 transition-transform">‹</button>
          <h2 className="text-xl font-bold text-gray-800">绑定智能健康硬件</h2>
        </div>
        {scanning && <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>}
      </header>

      <div className="flex-1 p-6 space-y-6">
        {scanning ? (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
             <div className="relative">
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="absolute inset-0 bg-blue-400 rounded-full"
               ></motion.div>
               <div className="relative w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl shadow-xl z-10 text-white">📡</div>
             </div>
             <div className="space-y-1">
               <h3 className="font-bold text-gray-800">正在搜索周边蓝牙设备...</h3>
               <p className="text-xs text-gray-400">请确保您的血压计、血糖仪已开启蓝牙模式</p>
             </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <p className="text-xs text-gray-400 font-bold uppercase ">发现可用设备 ({devices.length})</p>
              <button className="text-xs text-blue-600 font-bold" onClick={() => { setScanning(true); setDevices([]); }}>重新搜索</button>
            </div>
            {devices.map(d => (
              <button 
                key={d.id}
                onClick={() => onShowToast?.(`正在尝试连接 ${d.name}...`)}
                className="w-full bg-white p-5 rounded-[28px] border border-gray-100 flex items-center justify-between active:scale-[0.98] transition-transform shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-[24px] flex items-center justify-center text-2xl"><Stethoscope size={24} /></div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800 text-base">{d.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{d.type} · 信号稳定</p>
                  </div>
                </div>
                <div className="bg-[#024481] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-100">绑定</div>
              </button>
            ))}

            <div className="mt-10 p-6 bg-gray-50/50 border border-gray-100 rounded-[32px] text-center space-y-3">
               <p className="text-xs text-gray-400 font-medium">找不到您的设备？</p>
               <button 
                onClick={() => onShowToast?.('已开启平台手动对接模式')}
                className="text-xs text-[#024481] font-bold border-b border-[#024481]/30 pb-0.5"
               >尝试通过健康平台同步数据</button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AddRobotView = ({ 
  onAdd, 
  onClose,
  onShowToast
}: { 
  onAdd: (robot: any) => void; 
  onClose: () => void;
  onShowToast?: (msg: string) => void;
}) => {
  const [formData, setFormData] = useState({
    sn: '',
    nickname: '嘉和智能助手',
    ownerName: '',
    ownerPhone: '',
    serviceProviderName: '',
    serviceProviderPhone: ''
  });
  const [isScanningSN, setIsScanningSN] = useState(false);
  const [bindingState, setBindingState] = useState<{ active: boolean, step: 'searching' | 'connecting' | 'binding' | 'success' }>({
    active: false,
    step: 'searching'
  });

  // 验证序列号 (样例: 需为8-12位字母数字组合)
  const isValidSN = (sn: string) => /^[A-Z0-9]{8,12}$/i.test(sn);
  // 验证手机号
  const isValidPhone = (phone: string) => /^1[3-9]\d{9}$/.test(phone);

  // 模拟扫码识别序列号
  const handleScanSN = () => {
    setIsScanningSN(true);
    // Simulate camera access and scanning
    setTimeout(() => {
      setIsScanningSN(false);
      const mockSN = 'JH' + Math.floor(100000 + Math.random() * 900000).toString().padStart(6, '0');
      setFormData(prev => ({ ...prev, sn: mockSN }));
    }, 3000);
  };

  const handleConfirm = () => {
    if (!isValidSN(formData.sn)) {
      onShowToast?.('请输入有效的8-12位设备序列号');
      return;
    }
    
    // 开始绑定动画流程
    setBindingState({ active: true, step: 'searching' });

    // 逻辑流：搜索 -> 连接 -> 绑定 -> 成功
    setTimeout(() => setBindingState(prev => ({ ...prev, step: 'connecting' })), 2000);
    setTimeout(() => setBindingState(prev => ({ ...prev, step: 'binding' })), 4000);
    setTimeout(() => setBindingState(prev => ({ ...prev, step: 'success' })), 6000);

    setTimeout(() => {
      onAdd({
        id: 'robot-' + Date.now(),
        name: formData.nickname,
        nickname: formData.nickname,
        model: 'JH-Care X1',
        status: '在线',
        battery: 100,
        version: 'v1.0.0',
        icon: <Bot size={24} />,
        network: '5G',
        ...formData
      });
      onClose();
    }, 7500);
  };

  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      className="absolute inset-0 z-[150] bg-[#fbf9f8] flex flex-col"
    >
      <header className="bg-white px-6 py-6 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
        <h2 className="text-xl font-bold text-[#024481]">绑定新设备</h2>
      </header>

      <main className="flex-1 p-6 space-y-6 overflow-y-auto w-full relative">
        <div className="bg-white rounded-[32px] p-6 border border-gray-50 card-shadow space-y-5">
           <div className="flex flex-col items-center mb-4">
              <div className="w-20 h-20 bg-blue-50 rounded-[28px] flex items-center justify-center text-blue-500 mb-4 shadow-inner">
                <Device size={40} strokeWidth={1.5} />
              </div>
              <p className="text-xs text-gray-400 font-bold  text-center px-4">请扫描机器人底部的二维码或手动输入序列号</p>
           </div>

           {/* 序列号录入 */}
           <div className="space-y-1.5">
             <label className="text-xs font-bold text-gray-400 uppercase  ml-1">设备序列号 (SN)</label>
             <div className="flex gap-2">
               <input 
                 type="text" 
                 placeholder="请输入序列号"
                 value={formData.sn}
                 onChange={(e) => setFormData({...formData, sn: e.target.value})}
                 className="flex-1 bg-gray-50 border-none rounded-[24px] p-4 text-base font-bold focus:ring-2 focus:ring-blue-100"
               />
               <button 
                 onClick={handleScanSN}
                 className="w-14 h-14 bg-blue-50 text-blue-600 rounded-[24px] flex items-center justify-center text-xl active:scale-95 transition-transform"
               >
                 <Camera size={20} />
               </button>
             </div>
           </div>
           
            
           {/* 机器人昵称 */}
           <div className="space-y-1.5">
             <label className="text-xs font-bold text-gray-400 uppercase  ml-1">机器人名称</label>
             <input 
               type="text" 
               placeholder="给机器人起个名字"
               value={formData.nickname}
               onChange={(e) => setFormData({...formData, nickname: e.target.value})}
               className="w-full bg-gray-50 border-none rounded-[24px] p-4 text-base font-bold focus:ring-2 focus:ring-blue-100"
             />
           </div>
        </div>

        <button 
          disabled={!formData.sn}
          onClick={handleConfirm}
          className="w-full py-4 bg-[#024481] text-white rounded-[24px] font-bold shadow-xl shadow-blue-100 active:scale-[0.98] transition-all disabled:opacity-30"
        >
          确认绑定设备
        </button>
      </main>

      {/* 扫码全屏界面 */}
      <AnimatePresence>
        {isScanningSN && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-gray-900 flex flex-col items-center justify-center font-sans"
          >
            <div className="absolute top-0 w-full p-6 pt-12 flex justify-between items-center z-10 bg-gray-900/60">
              <button onClick={() => setIsScanningSN(false)} className="text-white text-3xl p-2 active:opacity-50 transition-transform">‹</button>
              <h2 className="text-white font-bold  text-lg">扫一扫</h2>
              <div className="w-10"></div>
            </div>
            
            <div className="relative w-64 h-64 border border-white/20 rounded-3xl overflow-hidden mt-8 shadow-2xl">
               {/* 扫描框四个边角 */}
               <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#00f249] rounded-tl-3xl z-10 transition-all duration-300"></div>
               <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#00f249] rounded-tr-3xl z-10 transition-all duration-300"></div>
               <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#00f249] rounded-bl-3xl z-10 transition-all duration-300"></div>
               <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#00f249] rounded-br-3xl z-10 transition-all duration-300"></div>

               {/* 模拟摄像头背景 */}
               <div className="absolute inset-0 bg-gray-800/80 flex items-center justify-center">
                  <span className="text-7xl grayscale opacity-20 transform scale-90">QR</span>
               </div>
               
               {/* 扫描线动画 */}
               <motion.div 
                 initial={{ top: '-10%' }}
                 animate={{ top: '110%' }}
                 transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                 className="absolute left-0 right-0 h-[3px] bg-[#00f249] shadow-[0_0_15px_3px_rgba(0,242,73,0.5)] z-20"
               />
               <motion.div 
                 initial={{ top: '-10%' }}
                 animate={{ top: '110%' }}
                 transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                 className="absolute left-0 right-0 h-24 bg-[#00f249]/10 transform -translate-y-full z-10"
               />
            </div>
            <p className="text-white/60 mt-10 text-base font-bold  text-center">将二维码/条码放入框内<br/><span className="text-xs font-normal opacity-80 mt-2 block">即可自动扫描识别并绑定</span></p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 绑定状态过渡动画层 */}
      <AnimatePresence>
        {bindingState.active && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[400] bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center p-10 overflow-hidden"
          >
            <div className="relative w-48 h-48 flex items-center justify-center mb-12">
              {/* 动态扩散环 */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.8],
                  opacity: [0.6, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-blue-100"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.6],
                  opacity: [0.4, 0]
                }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-blue-50"
              />

              {/* 中心图标 */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: bindingState.step === 'searching' ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-28 h-28 bg-white rounded-[36px] shadow-2xl flex items-center justify-center text-6xl z-10 border border-blue-50 relative"
              >
                <div key={bindingState.step}>
                  {bindingState.step === 'searching' && <Search size={20} className="animate-pulse" />}
                  {bindingState.step === 'connecting' && '⚡'}
                  {bindingState.step === 'binding' && '🔐'}
                  {bindingState.step === 'success' && '✨'}
                </div>
                
                {/* 成功时的环绕粒子 */}
                {bindingState.step === 'success' && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    className="absolute inset-0 border-4 border-green-400 rounded-[36px]"
                  />
                )}
              </motion.div>

              {/* 扫描线动画 */}
              {bindingState.step === 'searching' && (
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-x-0 h-1 bg-blue-400/50 z-20 blur-sm"
                />
              )}
            </div>

            <div className="text-center space-y-4 max-w-[280px] min-h-[140px]">
              <h4 className="text-2xl font-bold text-[#024481]">
                {bindingState.step === 'searching' && '搜寻设备中'}
                {bindingState.step === 'connecting' && '正在建立连接'}
                {bindingState.step === 'binding' && '同步安全数据'}
                {bindingState.step === 'success' && '成功绑定'}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed font-medium">
                {bindingState.step === 'searching' && '正在通过 5G 信号匹配您身边的机器人...'}
                {bindingState.step === 'connecting' && '正在与设备终端进行握手验证，请稍候'}
                {bindingState.step === 'binding' && '正在为您分配专属照护空间，同步健康模型'}
                {bindingState.step === 'success' && '绑定已完成，您可以开始体验智能照护服务'}
              </p>
            </div>

            {/* 进度条 */}
            <div className="absolute bottom-20 left-10 right-10 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ 
                  width: 
                    bindingState.step === 'searching' ? '30%' : 
                    bindingState.step === 'connecting' ? '60%' : 
                    bindingState.step === 'binding' ? '90%' : '100%',
                  backgroundColor: bindingState.step === 'success' ? '#22c55e' : '#2563eb'
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 子组件：每周健康报告 PDF 预览 ---
const HealthReportView = ({ onClose, robots, setOverlay, onShowToast }: { onClose: () => void; robots: any[]; setOverlay: (overlay: OverlayType | null) => void; onShowToast?: (msg: string) => void }) => {
  const reportData = {
    dateRange: '2026.05.04 - 2026.05.10',
    overallStatus: '优秀',
    statusDesc: '本周老人生命体征稳定，健康状态较上周有所提升。',
    metrics: [
      { name: '平均心率', value: '72 bpm', status: '正常', icon: <Heart size={20} strokeWidth={1} className="text-gray-400" /> },
      { name: '平均血压', value: '128/82 mmHg', status: '正常', icon: <Activity size={20} strokeWidth={1} className="text-gray-400" /> },
      { name: '用药依从率', value: '100%', status: '极佳', icon: <Pill size={20} strokeWidth={1} className="text-gray-400" /> },
      { name: '睡眠时长', value: '7h 15m', status: '达标', icon: <Moon size={20} strokeWidth={1} className="text-gray-400" /> },
    ],
    highlights: [
      '睡眠质量显著提升，深度睡眠比例增加 15%',
      '用药依从性极佳，本周任务全部按时完成',
      '周三监测到短时血压波动，已自动提示并恢复',
    ],
    suggestions: [
      '近期气温变化剧烈，注意早晚添衣防止感冒。',
      '建议增加摄入富含钾的食物，有助于更稳定控制血压。',
      '保持目前的心情愉悦状态，情绪脸谱显示本周心情良好。'
    ]
  };

  const handleWeChatClick = () => {
    // Check if any robot is bound
    const isBound = robots.length > 0;
    
    if (!isBound) {
      onShowToast?.('请先绑定机器人');
      setOverlay('addRobot');
    } else {
      onShowToast?.('已生成分享链接，可发送至微信');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      className="fixed inset-0 z-[300] bg-gray-50 flex flex-col"
    >
      <header className="bg-white p-6 pt-12 flex justify-between items-center border-b border-gray-100">
        <button onClick={onClose} className="text-gray-400 text-3xl p-2 active:scale-90 transition-transform">‹</button>
        <h2 className="font-bold text-gray-800 text-lg">每周健康评估报告</h2>
        <div className="w-8"></div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* PDF 模拟页 */}
        <div className="bg-white rounded-[32px] p-4 space-y-4 border border-white">
          {/* 页眉 */}
          <div className="flex justify-between items-start border-b-2 border-blue-50 pb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">健康评估报告</h1>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-gray-400">报告周期</p>
              <p className="text-base font-bold text-[#1e293b]">{reportData.dateRange}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-gray-50 text-gray-400 border border-gray-100 rounded-[24px] text-xs font-bold">状态：{reportData.overallStatus}</div>
            </div>
          </div>

          {/* 综述 */}
          <section className="space-y-3">
             <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
               <span className="w-1 h-4 bg-gray-300 rounded-full"></span>
               AI 综合评估
             </h3>
             <p className="text-base text-gray-600 leading-loose bg-gray-50 p-4 rounded-[24px] italic border border-gray-100/50">
               “{reportData.statusDesc}”
             </p>
          </section>

          {/* 指标卡片 */}
          <div className="grid grid-cols-2 gap-4">
            {reportData.metrics.map((m, i) => (
              <div key={i} className="p-4 bg-gray-50/50 rounded-[24px] border border-gray-100 flex flex-col gap-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xl">{m.icon}</span>
                  <span className="text-xs bg-white px-1.5 py-0.5 rounded font-bold text-gray-400">{m.status}</span>
                </div>
                <p className="text-xs text-gray-400 font-bold">{m.name}</p>
                <p className="text-base font-bold text-gray-800">{m.value}</p>
              </div>
            ))}
          </div>

          {/* 本周趋势 - 极简线框图表示 */}
          <section className="space-y-3">
             <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
               <span className="w-1 h-4 bg-gray-300 rounded-full"></span>
               指标趋势图
             </h3>
             <div className="h-32 w-full border border-dashed border-gray-200 rounded-[24px] flex items-center justify-center bg-gray-50/30">
                <div className="flex items-end gap-2 h-16">
                  {[40, 60, 45, 80, 55, 70, 65].map((h, i) => (
                    <div key={i} className="w-4 bg-white border border-gray-200" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <p className="absolute text-[10px] text-gray-300 font-bold uppercase mt-20">线框化示意图</p>
             </div>
          </section>

          {/* 本周亮点 */}
          <section className="space-y-3">
             <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
               <span className="w-1 h-4 bg-gray-300 rounded-full"></span>
               本周亮点
             </h3>
             <ul className="space-y-2">
               {reportData.highlights.map((h, i) => (
                 <li key={i} className="flex gap-2 items-start text-xs text-gray-600 leading-relaxed">
                   <Star size={14} className="text-gray-300 mt-0.5" strokeWidth={1.5} />
                   {h}
                 </li>
               ))}
             </ul>
          </section>

          {/* 专业建议 */}
          <section className="space-y-3">
             <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
               <span className="w-1 h-4 bg-gray-300 rounded-full"></span>
               下周建议
             </h3>
             <div className="space-y-2">
               {reportData.suggestions.map((s, i) => (
                 <div key={i} className="p-3 bg-white rounded-[24px] text-xs text-gray-700 leading-relaxed border border-gray-100 shadow-sm">
                   {s}
                 </div>
               ))}
             </div>
          </section>

          {/* 印章/页脚 */}
          <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-xs text-gray-400 font-bold">检测设备：JH-Care X1 智能机器人</p>
              <p className="text-xs text-gray-400 font-bold">生成时间：2026.05.11 08:45:12</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center -mb-2 select-none overflow-hidden p-1 shadow-sm">
                <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://health.jiahe.com/report/demo')] bg-cover"></div>
              </div>
              <p className="text-[8px] text-gray-300 font-bold mt-3 uppercase tracking-tighter">扫码核验真伪</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-6 bg-white border-t border-gray-100 flex gap-4">
        <button 
          onClick={handleWeChatClick}
          className="flex-1 py-4 bg-gray-50 text-gray-500 rounded-[24px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform border border-gray-100"
        >
          <Share2 size={18} strokeWidth={1.5} /> 分享转发
        </button>
        <button 
          onClick={() => onShowToast?.('PDF 正在下载中...')}
          className="flex-1 py-4 bg-gray-800 text-white rounded-[24px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Download size={18} strokeWidth={1.5} /> 立即下载
        </button>
      </footer>
    </motion.div>
  );
};

// --- 子组件：登录与注册 ---
const LoginRegisterView = ({ 
  onLogin, 
  onAnonymousLogin, 
  onSetUnbound, 
  onSetRobots, 
  onSetLoggedIn,
  onSetMainAccount,
  onViewLegal,
  onShowToast
}: { 
  onLogin: () => void; 
  onAnonymousLogin: () => void;
  onSetUnbound: (val: boolean) => void;
  onSetRobots: (robots: any[]) => void;
  onSetLoggedIn: (val: boolean) => void;
  onSetMainAccount: (val: boolean) => void;
  onViewLegal: (type: 'terms' | 'privacy') => void;
  onShowToast?: (msg: string) => void;
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginMethod, setLoginMethod] = useState<'sms' | 'password'>('sms'); // 默认验证码登录
  const [formData, setFormData] = useState({ phone: '13800013800', code: '******', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [showDemoArea, setShowDemoArea] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // 原有演示模式
  const fillDemoAccount = () => {
    setFormData({ ...formData, phone: '13800138000', password: 'password123', code: '888888' });
    onSetMainAccount(true);
    onSetUnbound(false);
    onLogin();
    onSetRobots([
      // 已去掉其它多余的演示机器人
      { id: 'robot-1', nickname: '我的小和', model: 'Gen-2', status: 'online', battery: 85, network: '极佳', version: 'v2.1.0', icon: <Bot size={24} />, sn: 'JH4820-2910-X1' }
    ]);
  };

  // 新增账号A：主管理员账号
  const fillMainAccountDemo = () => {
    setFormData({ ...formData, phone: '13811111111', password: 'password111', code: '111111' });
    onSetMainAccount(true);
    onSetUnbound(false);
    onLogin();
    onSetRobots([
      // 已去掉演示机器人 A，仅留一台主设备
      { id: 'robot-main', nickname: '主管理员设备', model: 'Gen-2', status: 'online', battery: 92, network: '极佳', version: 'v2.1.0', icon: <Bot size={24} />, sn: 'JH4820-2910-MA' }
    ]);
  };

  // 新增账号B：分享账号（子账号）
  const fillSharedAccountDemo = () => {
    setFormData({ ...formData, phone: '13822222222', password: 'password222', code: '222222' });
    onSetMainAccount(false);
    onSetUnbound(false);
    onLogin();
    onSetRobots([
      { id: 'robot-shared', nickname: '共享小和设备', model: 'Gen-2', status: 'online', battery: 45, network: '良好', version: 'v2.1.0', icon: <Bot size={24} /> }
    ]);
  };

  // 新增账号C：账号异常（未绑定/离线）
  const fillAbnormalAccountDemo = () => {
    setFormData({ ...formData, phone: '13833333333', password: 'password333', code: '333333' });
    onSetMainAccount(true);
    onSetUnbound(true);
    onLogin();
    onSetRobots([]);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      onShowToast?.("请先同意协议");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white flex flex-col p-8 overflow-y-auto relative"
    >
      <div 
        className="absolute top-0 right-0 w-32 h-32 z-50"
        onDoubleClick={() => setShowDemoArea(true)}
      />
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="w-16 h-16 bg-[#024481] rounded-[24px] flex items-center justify-center text-3xl shadow-xl shadow-blue-100 shrink-0 text-white">
              <Home size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-2 items-end z-40 relative">
              {isLogin && showDemoArea && (
                <>
                  <div className="flex flex-col gap-1.5 w-full items-end">
                    <span className="text-xs text-gray-400 font-bold uppercase">全场景演示区</span>
                    <div className="grid grid-cols-2 gap-2 w-full max-w-[200px]">
                      <button 
                        type="button"
                        onClick={fillMainAccountDemo}
                        className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1.5 rounded-[24px] font-bold uppercase  active:scale-95 transition-all text-center flex items-center justify-center gap-1 shadow-sm border border-gray-100"
                      >主账号模式</button>
                      <button 
                        type="button"
                        onClick={fillSharedAccountDemo}
                        className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1.5 rounded-[24px] font-bold uppercase  active:scale-95 transition-all text-center flex items-center justify-center gap-1 shadow-sm border border-gray-100"
                      >分享号模式</button>
                      <button 
                        type="button"
                        onClick={fillAbnormalAccountDemo}
                        className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1.5 rounded-[24px] font-bold uppercase  active:scale-95 transition-all text-center flex items-center justify-center gap-1 shadow-sm border border-gray-100 col-span-2"
                      >账号异常模式</button>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-2 border-t border-gray-100 pt-2 w-full justify-end">
                    <button 
                      type="button"
                      onClick={fillDemoAccount}
                      className="text-xs bg-blue-50 text-[#024481] px-2 py-1 rounded font-bold uppercase  active:scale-95 transition-all text-center"
                    >老演示</button>
                    <button 
                      type="button"
                      onClick={() => {
                        onAnonymousLogin();
                      }}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-bold uppercase  active:scale-95 transition-all text-center"
                    >匿名模式</button>
                    <button 
                      type="button"
                      onClick={() => {
                        onAnonymousLogin();
                        onSetUnbound(true);
                        onSetRobots([]);
                        onSetLoggedIn(true);
                      }}
                      className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded font-bold uppercase  active:scale-95 transition-all text-center"
                    >快速绑定</button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="space-y-1 mt-4">
            <h1 className="text-3xl font-bold text-gray-900 ">{isLogin ? '欢迎回来' : '开启守护'}</h1>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs text-gray-400 font-bold uppercase  px-1">手机号码</label>
            <input 
              type="tel" 
              placeholder="请输入 11 位手机号"
              required
              className="w-full h-14 bg-gray-50 border-none rounded-[24px] px-6 text-base font-bold focus:ring-2 focus:ring-[#024481] transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {(isLogin && loginMethod === 'sms') || !isLogin ? (
             <div className="space-y-1.5">
                <label className="text-xs text-gray-400 font-bold uppercase  px-1">短信验证码</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="6位验证码"
                    className="flex-1 h-14 bg-gray-50 border-none rounded-[24px] px-6 text-base font-bold focus:ring-2 focus:ring-[#024481] transition-all"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  />
                  <button type="button" className="px-5 h-14 bg-gray-100 text-gray-600 rounded-[24px] text-xs font-bold active:scale-95 transition-transform">获取验证码</button>
                </div>
             </div>
          ) : null}

          {(isLogin && loginMethod === 'password') || !isLogin ? (
            <div className="space-y-1.5">
              <div className="flex justify-between px-1">
                <label className="text-xs text-gray-400 font-bold uppercase ">{!isLogin ? '设置密码' : '登录密码'}</label>
                {isLogin && <button type="button" className="text-xs text-gray-400 font-bold">忘记密码？</button>}
              </div>
              <input 
                type="password" 
                placeholder={isLogin ? "请输入密码" : "6-12位字母数字"}
                required
                className="w-full h-14 bg-gray-50 border-none rounded-[24px] px-6 text-base font-bold focus:ring-2 focus:ring-[#024481] transition-all"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          ) : null}

          <div className="pt-2">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <input 
                type="checkbox" 
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-[#024481] border-gray-300 rounded focus:ring-[#024481]"
                id="terms"
              />
              <label htmlFor="terms" className="text-xs text-gray-500 font-bold items-center flex">
                {isLogin ? '登录' : '注册'}即代表同意 <button type="button" onClick={() => onViewLegal('terms')} className="text-gray-800 font-bold underline mx-1">用户服务协议</button> 与 <button type="button" onClick={() => onViewLegal('privacy')} className="text-gray-800 font-bold underline mx-1">隐私政策</button>
              </label>
            </div>
            <button 
              disabled={loading || !agreedToTerms}
              className="w-full h-14 bg-[#024481] mt-1 text-white rounded-[24px] font-bold text-base shadow-xl shadow-blue-100 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 mb-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  正在安全校验...
                </>
              ) : (isLogin ? '进入系统' : '立即注册')}
            </button>
            {isLogin && loginMethod === 'sms' && (
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={() => setLoginMethod('password')}
                  className="text-xs text-gray-400 font-bold underline"
                >其他方式登录</button>
              </div>
            )}
            {isLogin && loginMethod === 'password' && (
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={() => setLoginMethod('sms')}
                  className="text-xs text-gray-400 font-bold underline"
                >返回验证码登录</button>
              </div>
            )}
          </div>
        </form>

        <div className="text-center space-y-6">
          <p className="text-xs text-gray-400 font-bold">
            {isLogin ? '还没有账号？' : '已有账号？'}
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#024481] ml-1 font-bold underline underline-offset-4"
            >
              {isLogin ? '极速注册' : '返回登录'}
            </button>
          </p>
        </div>
      </div>

      <footer className="py-4 text-center mt-auto">
        <p className="text-xs text-gray-300 font-medium leading-relaxed max-w-[240px] mx-auto">
          智护 OS
        </p>
      </footer>
    </motion.div>
  );
};

const ProfileView = ({ 
  profiles,
  activeIdx,
  onProfileSwitch,
  onEditClick,
  robots,
  activeRobotId,
  onRobotSwitch,
  onRobotEdit,
  onRobotDetail,
  onAddRobotClick,
  onDeleteRobot,
  onDeleteData,
  onLogout,
  isMainAccount,
  onAddProfile,
  onUpdateProfile,
  userProfile,
  onUpdateUserProfile,
  onDeviceManage
}: { 
  profiles: any[];
  activeIdx: number;
  onProfileSwitch: (index: number) => void;
  onEditClick: () => void;
  robots: any[];
  activeRobotId: string;
  onRobotSwitch: (id: string) => void;
  onRobotEdit: (robot: any) => void;
  onRobotDetail: (robot: any) => void;
  onAddRobotClick: (type?: any) => void;
  onDeleteRobot: (id: string) => void;
  onDeleteData: () => void;
  onLogout: () => void;
  isMainAccount: boolean;
  onAddProfile: () => void;
  onUpdateProfile: (idx: number, updates: any) => void;
  userProfile: FamilyMember;
  onUpdateUserProfile: (updates: Partial<FamilyMember>) => void;
  onDeviceManage: (device: any) => void;
}) => {
  const profile = profiles[activeIdx];
  const [switches, setSwitches] = useState({ push: true, sms: true, voice: false });
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
    setShowAvatarMenu(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateProfile(activeIdx, { avatar: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 pb-24 relative"
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleFileChange} 
      />

      <AnimatePresence>
        {showAvatarMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-end justify-center p-4"
            onClick={() => setShowAvatarMenu(false)}
          >
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="bg-white rounded-[32px] w-full max-w-sm p-6 space-y-4 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <h4 className="text-center font-bold text-gray-800 text-lg mb-2">更新头像</h4>
              <button 
                onClick={triggerFileInput}
                className="w-full py-4 bg-gray-50 rounded-[24px] flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                <Camera size={20} className="text-gray-500" />
                <span className="font-bold text-gray-700">拍照</span>
              </button>
              <button 
                onClick={triggerFileInput}
                className="w-full py-4 bg-gray-50 rounded-[24px] flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                <ImageIcon size={20} className="text-gray-500" />
                <span className="font-bold text-gray-700">从相册选择</span>
              </button>
              <button 
                onClick={() => setShowAvatarMenu(false)}
                className="w-full py-4 text-gray-400 font-bold active:opacity-60"
              >
                取消
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 成员切换页签 - 隐藏多成员切换，当前版本仅支持一个老人 */}
      {/* 个人简介与数据概览 */}
      <div className="px-1 mb-2 bg-transparent">
        <h3 className="font-bold text-lg text-gray-800">长辈信息</h3>
      </div>
      <div className="bg-white rounded-[32px] p-6 card-shadow border border-gray-50 flex flex-col items-center relative overflow-hidden">
        <div className="relative">
          <div 
            onClick={onEditClick}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden cursor-pointer active:scale-95 transition-transform"
          >
            <img 
              src={profile.avatar} 
              alt="用户头像" 
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={onEditClick}
            className="absolute bottom-0 right-0 bg-[#024481] text-white p-1.5 rounded-full border-2 border-white shadow-md active:scale-90 transition-transform"
          >
            <Edit2 size={12} strokeWidth={3} />
          </button>
        </div>
        <div className="text-center mt-4 w-full mb-8">
          <h2 className="text-2xl font-bold text-gray-800">{profile.name} <span className="text-base text-gray-500 font-normal ml-1">{profile.age}岁</span></h2>
        </div>

        {/* 数据概览 */}
        <div className="w-full bg-transparent flex justify-between items-center text-center px-4">
          <div className="flex-1">
            <div className="text-xs text-[#8e9eba] font-bold  mb-2">守护天数</div>
            <div className="text-[28px] font-medium text-[#1e293b]">452</div>
          </div>
          <div className="w-px h-10 bg-[#e2e8f0]"></div>
          <div className="flex-1">
            <div className="text-xs text-[#8e9eba] font-bold  mb-2">关联机器人</div>
            <div className="text-[28px] font-medium text-[#1e293b]">{robots.length}</div>
          </div>
          <div className="w-px h-10 bg-[#e2e8f0]"></div>
          <div className="flex-1">
            <div className="text-xs text-[#8e9eba] font-bold  mb-2">依从性评分</div>
            <div className="text-[28px] font-medium text-[#10B981]">优秀</div>
          </div>
        </div>
      </div>

      {/* 我的设备：入口组 */}
      <div className="px-1 mb-2 bg-transparent">
        <h3 className="font-bold text-lg text-gray-800">智能设备</h3>
      </div>
      <div className="bg-white rounded-[32px] p-2 card-shadow border border-gray-50 mb-6">
        <button 
          onClick={() => onAddRobotClick('deviceManagement' as any)}
          className="w-full flex items-center justify-between p-4 bg-transparent active:bg-gray-50 rounded-[24px] transition-colors group"
        >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center">
            <Smartphone size={24} strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="font-bold text-gray-800 text-base">设备中心</p>
            <p className="text-xs text-gray-400 mt-0.5">管理周边硬件 ({robots.length}) 与同步平台</p>
          </div>
        </div>
          <ChevronRight size={20} className="text-gray-300" />
        </button>
      </div>


      {/* 系统相关设置 */}
      <div className="px-1 mb-2">
        <h3 className="font-bold text-lg text-gray-800">系统设置</h3>
      </div>
      
      {/* 设置列表 */}
      <div className="bg-white rounded-[32px] p-2 card-shadow border border-gray-50 overflow-hidden">
        <button 
          onClick={() => onAddRobotClick('emergencyContacts' as any)}
          className="w-full p-5 flex items-center justify-between border-b border-gray-50 active:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
              <PhoneCall size={20} strokeWidth={2} />
            </div>
            <span className="font-bold text-gray-700">紧急联系人</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">已设 {profiles.length} 位</span>
            <ChevronRight size={20} className="text-gray-300" />
          </div>
        </button>

        <button 
          onClick={() => onAddRobotClick('familyMembers' as any)}
          className="w-full p-5 flex items-center justify-between border-b border-gray-50 active:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
              <Users size={20} strokeWidth={2} />
            </div>
            <span className="font-bold text-gray-700">家人信息</span>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </button>

        <button 
          onClick={() => onAddRobotClick('medicationPlan' as any)}
          className="w-full p-5 flex items-center justify-between active:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
              <Pill size={20} strokeWidth={2} />
            </div>
            <span className="font-bold text-gray-700">用药计划</span>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </button>
      </div>

      {/* 消息通知相关 */}
      <div className="px-1 mt-6 mb-2">
        <h3 className="font-bold text-lg text-gray-800">通知信息</h3>
      </div>

      <div className="bg-white rounded-[32px] p-2 card-shadow border border-gray-50 flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer"
        onClick={() => onAddRobotClick('alarmSettings')}
      >
        <div className="flex items-center gap-4 p-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
            <Bell size={24} strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">设置管理</h3>
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-300 pr-4 box-content" />
      </div>

      {/* 退出登录 */}
      <div className="px-6 pb-4">
        <button 
          onClick={onLogout}
          className="w-full py-4 text-[#E11D48] font-bold text-base bg-red-50 rounded-[24px] active:scale-95 transition-transform"
        >退出当前账号</button>
        
        {/* 底部辅助连接 */}
        <div className="flex flex-wrap justify-center gap-y-2 gap-x-6 pt-6 px-6 text-center">
          <button 
            onClick={() => onAddRobotClick('legalTerms' as any)}
            className="text-xs text-gray-400 hover:text-gray-600 font-medium"
          >用户服务协议</button>
          <div className="relative">
            <div className="absolute left-[-12px] top-1 w-px h-2.5 bg-gray-100"></div>
            <button 
              onClick={() => onAddRobotClick('legalPrivacy' as any)}
              className="text-xs text-gray-400 hover:text-gray-600 font-medium"
            >隐私政策</button>
          </div>
          <div className="relative">
            <div className="absolute left-[-12px] top-1 w-px h-2.5 bg-gray-100"></div>
            <button 
              onClick={() => onAddRobotClick('legalInformed' as any)}
              className="text-xs text-gray-400 hover:text-gray-600 font-medium"
            >知情同意书</button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 px-4 leading-relaxed">
          智护OS 极简陪伴版 v1.2.4<br/>
          安全加密连接中 <Lock size={12} className="inline-block align-middle" />
        </p>
      </div>
    </motion.div>
  );
};

// --- 子组件：通知列表页 ---
const NotificationsView = ({ 
  onClose, 
  onAlertClick, 
  notifications, 
  onMarkAsRead,
  onClearAll,
  onMarkAllRead
}: { 
  onClose: () => void, 
  onAlertClick: (data: AlertData) => void,
  notifications: AppNotification[],
  onMarkAsRead: (id: string) => void,
  onClearAll: () => void,
  onMarkAllRead: () => void
}) => {
  const [activeTab, setActiveTab] = useState<'全部' | '告警' | '提示' | '信息'>('全部');

  const tabs: Array<'全部' | '告警' | '提示' | '信息'> = ['全部', '告警', '提示', '信息'];

  const filteredNotifications = notifications.filter(n => activeTab === '全部' || n.type === activeTab);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="absolute inset-0 z-[100] bg-white flex flex-col font-sans"
    >
      <header className="bg-white flex items-center justify-between px-4 py-4 relative border-b border-gray-100 shrink-0">
        <button onClick={onClose} className="w-10 h-10 bg-gray-50 rounded-[24px] flex items-center justify-center text-gray-500 font-bold active:scale-95 transition-transform text-2xl">‹</button>
        <h2 className="text-lg font-bold text-center text-gray-800">通知信息</h2>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={onMarkAllRead} className="text-[10px] text-gray-400 font-bold whitespace-nowrap active:opacity-70">全部已读</button>
          <button onClick={onClearAll} className="text-[10px] text-[#E11D48]/60 font-bold whitespace-nowrap active:opacity-70">一键清除</button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* 搜索框 */}
        <div className="px-5 py-4">
          <div className="bg-gray-50 flex items-center gap-2 px-4 py-3.5 rounded-[24px] border border-gray-100/50">
            <Search size={18} className="text-gray-300" />
            <input 
              type="text" 
              placeholder="搜索通知标题..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-300 font-medium" 
            />
          </div>
        </div>

        {/* 分类 Tabs */}
        <div className="flex px-5 overflow-x-auto gap-3 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${activeTab === tab ? 'bg-gray-800 text-white shadow-lg shadow-gray-200' : 'bg-gray-50 text-gray-400'} px-8 py-2.5 rounded-[24px] text-sm font-bold shrink-0 transition-all`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 消息列表 */}
        <div className="px-5 pb-6 space-y-4">
          {filteredNotifications.map((notif, index) => {
            const isCritical = notif.id === '1'; // In this demo, the first is critical
            const isLatest = index === 0 && !notif.isRead;
            
            return (
              <div 
                key={notif.id}
                onClick={() => onMarkAsRead(notif.id)}
                className={`relative group cursor-pointer active:scale-[0.98] transition-all duration-200 ${
                  isCritical 
                    ? 'bg-[#fff5f6] border border-[#ffe5e9] shadow-[0_4px_20px_rgba(255,30,86,0.06)]' 
                    : isLatest
                    ? 'bg-blue-50/30 border border-blue-100/50 shadow-sm'
                    : 'bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                } rounded-[24px] p-5 flex flex-col gap-4 overflow-hidden`}
              >
                {isLatest && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-500 text-white text-[9px] font-bold px-3 py-1 rounded-bl-[16px] uppercase tracking-wider">最新消息</div>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-[24px] flex items-center justify-center shrink-0 shadow-sm ${
                    notif.type === '告警' ? 'bg-[#fb2c58] shadow-red-200' :
                    notif.type === '提示' ? 'bg-[#ff9500] shadow-orange-200' :
                    'bg-[#2b7fff] shadow-blue-200'
                  }`}>
                    <span className="text-white text-2xl font-bold">
                      {notif.type === '告警' ? <Shield size={16} /> : notif.type === '提示' ? <Bell size={16} /> : <Info size={16} />}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2 mt-0.5">
                      <h3 className={`font-bold text-sm leading-tight pr-4 ${isCritical ? 'text-[#8a1a2b]' : 'text-[#1c1c1e]'} flex items-center flex-wrap`}>
                        {!notif.isRead && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 shadow-[0_0_8px_rgba(59,130,246,0.4)] shrink-0" />
                        )}
                        {notif.title}
                      </h3>
                      <span className={`${
                        isCritical ? 'bg-[#FA5151]/10 text-[#FA5151]' : 'bg-gray-100 text-gray-500'
                      } text-[10px] font-bold px-2 py-1 rounded-full shrink-0 uppercase `}>
                        {notif.time}
                      </span>
                    </div>
                    <p className={`text-sm font-medium leading-relaxed  ${
                      isCritical ? 'text-[#e6194b]' : 'text-gray-400'
                    }`}>
                      {notif.message}
                    </p>
                  </div>
                </div>

                {isCritical && (
                  <div className="flex gap-3 pl-[4rem]">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onMarkAsRead(notif.id);
                        onAlertClick({ time: notif.time, type: 'health', status: 'critical', message: '心率与呼吸异常' });
                      }}
                      className="flex-[1.2] bg-[#0066ff] text-white py-3 rounded-[24px] text-[10px] font-bold active:scale-95 transition-transform"
                    >
                      立即查看
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-white text-gray-600 py-3 rounded-[24px] text-[10px] font-bold shadow-sm border border-gray-100 active:scale-95 transition-transform"
                    >
                      呼叫 120
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          
          {filteredNotifications.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 opacity-30">
              <span className="text-6xl mb-4">📭</span>
              <p className="font-bold">暂无通知记录</p>
            </div>
          )}
        </div>

        <div className="text-center mt-12 mb-8">
          <p className="text-xs text-gray-300 font-bold  uppercase">— 已经到底 —</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isMainAccount, setIsMainAccount] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isUnboundMode, setIsUnboundMode] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('guardian');
  const [overlay, setOverlay] = useState<OverlayType | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [globalToast, setGlobalToast] = useState('');
  const [confirmation, setConfirmation] = useState<{title: string, message: string, onConfirm: () => void} | null>(null);
  const [alertData, setAlertData] = useState<AlertData | null>(null);
  const [alarmResolved, setAlarmResolved] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  
  // 服务人状态
  const [servicePersonnel, setServicePersonnel] = useState<FamilyMember[]>([
    { id: 's1', name: '李阿姨', relation: '居家育儿嫂', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
    { id: 's2', name: '王医生', relation: '家庭医生', avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop' }
  ]);
  
  // 消息通知状态
  const [notifications, setNotifications] = useState<AppNotification[]>([
    {
      id: '1',
      type: '告警',
      title: '关键预警：生命体征异常',
      message: '非接触式监测显示张大爷心率（48 BPM）与呼吸频率（10 次/分）显著低于正常阈值，请立即确认服务人状态。',
      time: '09:42',
      isRead: false
    },
    {
      id: '2',
      type: '提示',
      title: '用药依从性日报',
      message: '昨日用药任务已全部完成。张大爷精神状态良好，已记录至周报中。',
      time: '08:05',
      isRead: false
    },
    {
      id: '3',
      type: '信息',
      title: '系统软件更新成功',
      message: '智护OS 1.0.0 稳定版已成功安装。本次更新优化了低光环境下的视觉算法，提升了跟随稳定性。',
      time: '昨天 15:45',
      isRead: true
    }
  ]);
  
  // 恢复老人档案
  const [elderlyProfiles, setElderlyProfiles] = useState([
    {
      id: 'elder-1',
      name: '张建设',
      phone: '13812345678',
      age: 78,
      bloodType: 'A型血',
      tags: '独居老人, 慢病管理',
      mode: '独居模式',
      healthStatus: '健康良好',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      chronicDiseases: '高血压、轻度糖尿病',
      medicalHistory: '2015年进行过阑尾切除手术',
      allergies: '青霉素过敏',
      medicationSuggestion: '缬沙坦胶囊 1粒/日，二甲双胍 0.5g/日',
      exerciseSuggestion: '每日散步30分钟',
      dietarySuggestion: '低盐低糖饮食',
      livingAbility: '基本自理，需提醒用药',
      riskAssessment: '存在轻度跌倒风险'
    }
  ]);
  const [activeElderlyIndex, setActiveElderlyIndex] = useState(0);

  const [robots, setRobots] = useState<Robot[]>([
    // 只留一个机器人，已经去掉“备用小和”
    { id: 'robot-1', nickname: '我的小和', model: 'Gen-2', status: 'online', battery: 85, network: '极佳', version: 'v2.1.0', icon: <Bot size={24} />, sn: 'JH4820-2910-X1' }
  ]);

  const [activeRobotId, setActiveRobotId] = useState('robot-1');
  const [editingRobot, setEditingRobot] = useState<any>(null);
  const [activeDetailRobot, setActiveDetailRobot] = useState<any>(null);

  // 摄像头记录
  const [cameraLogs, setCameraLogs] = useState<CameraLog[]>([
    { id: '1', time: '10:24', source: '告警', status: '已自动取流' },
    { id: '2', time: '09:15', source: '通话', status: '通话时长 05:20' },
    { id: '3', time: '昨日 18:30', source: '抓拍', status: '定时日常巡检' }
  ]);

  // 通知信息
  const [notifConfig, setNotifConfig] = useState({
    app: true,
    sms: true,
    voice: false,
    dnd: false,
    startTime: '22:00',
    endTime: '07:00'
  });

  // 紧急联系人
  const [emergencyContacts, setEmergencyContacts] = useState<Contact[]>([
    { id: '1', name: '张大勇', relation: '长子', phone: '13800001111' },
    { id: '2', name: '张小丽', relation: '次女', phone: '13900002222' }
  ]);

  // 用户个人资料
  const [userProfile, setUserProfile] = useState<FamilyMember>({
    id: 'u1',
    name: '张杰',
    phone: '13888880001',
    relation: '子女',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop'
  });

  // 家人管理
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: '1', name: '张大勇', relation: '大儿子', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop', phone: '13888881234' },
    { id: '2', name: '王晓梅', relation: '大儿媳', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop', phone: '13912345678' }
  ]);

  // 用药计划
  const [medicationPlan, setMedicationPlan] = useState<Medication[]>([
    { 
      id: '1', 
      name: '缬沙坦胶囊', 
      dosage: '1粒/次', 
      times: ['08:00'], 
      enabled: true,
      status: 'taken',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop' 
    },
    { 
      id: '2', 
      name: '二甲双胍', 
      dosage: '0.5g/次', 
      times: ['08:00', '18:00'], 
      enabled: true,
      status: 'pending',
      imageUrl: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: '3',
      name: '阿司匹林',
      dosage: '100mg/次',
      times: ['20:00'],
      enabled: true,
      status: 'pending',
      imageUrl: 'https://images.unsplash.com/photo-1550572017-ed200f545dec?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: '4',
      name: '氨氯地平',
      dosage: '5mg/次',
      times: ['07:00'],
      enabled: true,
      status: 'missed',
      imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: '5',
      name: '维生素B12',
      dosage: '1片/次',
      times: ['12:00'],
      enabled: true,
      status: 'delayed',
      imageUrl: 'https://images.unsplash.com/photo-1626285861696-9f0e1a1005bc?q=80&w=600&auto=format&fit=crop'
    }
  ]);

  const [legalType, setLegalType] = useState<'terms' | 'privacy'>('terms');

  const showToast = (msg: string) => {
    setGlobalToast(msg);
    setTimeout(() => setGlobalToast(''), 3000);
  };

  // 统一处理操作导航
  const handleAction = (type: OverlayType) => {
    if (type === 'videoCall') {
      setIsConnecting(true);
      setOverlay('videoCall');
      // 模拟父母同意的过程
      let timeoutId = setTimeout(() => {
        // 模拟接听或拒绝
        if (Math.random() > 0.5) {
          setIsConnecting(false); // 接通
        } else {
          setOverlay(null);
          setIsConnecting(false);
          showToast('妈妈暂时不方便接听');
        }
      }, 4000);

      // 如果在此之前页面已关闭，我们可以通过 useEffect 清理，但这里我们先简单处理
    } else {
      setOverlay(type);
    }
  };

  // 根据当前标签渲染视图
  const renderContent = () => {
    const isEmptyAnonymous = isAnonymous && robots.length > 0;
    switch (activeTab) {
      case 'guardian': {
        const activeRobot = robots.find(r => r.id === activeRobotId);
        return (
          <GuardianView 
            onAction={handleAction}
            unreadNotificationsCount={notifications.filter(n => !n.isRead).length}
            onImageClick={(src) => {
              setSelectedImage(src);
              setOverlay('imageViewer');
            }}
            onStatusClick={(data) => {
              setAlertData(data);
              setOverlay('alertDetail');
            }}
            onTabSwitch={(tab) => setActiveTab(tab)}
            isDeviceOffline={activeRobot?.status === 'offline'}
            isAnonymous={isEmptyAnonymous} 
            alarmResolved={alarmResolved}
          />
        );
      }
      case 'health': return (
        <HealthView 
          onCalendarClick={() => handleAction('medicationCalendar')}
          isAnonymous={isEmptyAnonymous} // 更新此调用
          plan={medicationPlan}
          onImageClick={(src) => {
            setSelectedImage(src);
            setOverlay('imageViewer');
          }}
        />
      );
      case 'companion': return <CompanionView onAction={(type) => setOverlay(type)} isAnonymous={isEmptyAnonymous} unreadNotificationsCount={notifications.filter(n => !n.isRead).length} />; // 更新此调用
      case 'profile': return (
        <ProfileView 
          profiles={elderlyProfiles} 
          activeIdx={activeElderlyIndex}
          onProfileSwitch={(idx) => setActiveElderlyIndex(idx)}
          onAddProfile={() => {
            const newProfile = {
              id: Date.now().toString(),
              name: '新长辈',
              age: 70,
              bloodType: 'A',
              mode: '自主照护',
              healthStatus: '健康',
              avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop'
            };
            setElderlyProfiles([...elderlyProfiles, newProfile]);
            setActiveElderlyIndex(elderlyProfiles.length);
          }}
          onUpdateProfile={(idx, updates) => {
            const updatedProfiles = [...elderlyProfiles];
            updatedProfiles[idx] = { ...updatedProfiles[idx], ...updates };
            setElderlyProfiles(updatedProfiles);
          }}
          onEditClick={() => setOverlay('elderlyProfile')} 
          robots={robots}
          activeRobotId={activeRobotId}
          onRobotSwitch={(id) => setActiveRobotId(id)}
          onRobotEdit={(robot) => setEditingRobot(robot)}
          onRobotDetail={(robot) => {
            setActiveDetailRobot(robot);
            setOverlay('robotDetail');
          }}
          onAddRobotClick={(type: any) => {
            if (type === 'emergencyContacts') setOverlay('emergencyContacts' as any);
            else if (type === 'familyMembers') setOverlay('familyMembers' as any);
            else if (type === 'medicationPlan') setOverlay('medicationPlan' as any);
            else if (type === 'legalTerms') { setLegalType('terms'); setOverlay('legalNotice' as any); }
            else if (type === 'legalPrivacy') { setLegalType('privacy'); setOverlay('legalNotice' as any); }
            else if (type === 'legalInformed') { setLegalType('informed'); setOverlay('legalNotice' as any); }
            else if (type === 'alarmSettings') { setOverlay('alarmSettings' as any); }
            else if (type === 'smartPlatforms') setOverlay('smartPlatforms');
            else if (type === 'smartDeviceScan') setOverlay('smartDeviceScan');
            else if (type === 'deviceManagement') setOverlay('deviceManagement');
            else setOverlay('addRobot');
          }}
          onDeviceManage={(device) => {
            setSelectedDevice(device);
            setOverlay('smartDeviceDetail');
          }}
          onDeleteRobot={(id) => {
            setRobots(rs => rs.filter(r => r.id !== id));
            if (activeRobotId === id && robots.length > 1) {
              setActiveRobotId(robots.find(r => r.id !== id)?.id || '');
            }
          }}
          onDeleteData={() => setOverlay('confirmDelete' as any)}
          onLogout={() => setIsLoggedIn(false)}
          isMainAccount={isMainAccount}
          userProfile={userProfile}
          onUpdateUserProfile={(updates) => setUserProfile(prev => ({ ...prev, ...updates }))}
        />
      );
    }
  };

  // 机器人昵称编辑弹窗
  const renderRobotEditor = () => {
    if (!editingRobot) return null;
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[32px] w-full max-w-sm p-8 shadow-2xl overflow-hidden relative"
        >
          <div className="flex flex-col items-center gap-4">
             <div className="w-16 h-16 bg-blue-50 rounded-[24px] flex items-center justify-center text-blue-500">
              <Device size={32} strokeWidth={1.5} />
            </div>
             <div className="text-center">
               <h3 className="text-xl font-bold text-gray-800">修改机器人昵称</h3>
               <p className="text-xs text-gray-400 mt-1">给这台设备取个好记的名字吧</p>
             </div>
             <input 
               type="text" 
               autoFocus
               defaultValue={editingRobot.nickname}
               id="robotNicknameInput"
               className="w-full bg-gray-50 border-none rounded-[24px] px-6 py-4 text-center text-lg font-bold focus:ring-2 focus:ring-blue-100"
             />
             <div className="flex gap-3 w-full mt-4">
               <button 
                 onClick={() => setEditingRobot(null)}
                 className="flex-1 py-4 rounded-[24px] bg-gray-100 text-gray-500 font-bold active:scale-95 transition-transform"
               >取消</button>
               <button 
                 onClick={() => {
                   const val = (document.getElementById('robotNicknameInput') as HTMLInputElement).value;
                   if (val) {
                     setRobots(rs => rs.map(r => r.id === editingRobot.id ? { ...r, nickname: val } : r));
                   }
                   setEditingRobot(null);
                 }}
                 className="flex-1 py-4 rounded-[24px] bg-[#024481] text-white font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform"
               >确认</button>
             </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto relative bg-[#fbf9f8] text-gray-800">
      <AnimatePresence>
        {globalToast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
            className="fixed top-12 left-1/2 bg-gray-800 text-white px-6 py-3 rounded-full text-base font-bold z-[200] shadow-xl text-nowrap"
          >
            {globalToast}
          </motion.div>
        )}
        {overlay === 'legalNotice' && (
          <LegalNoticeView 
            type={legalType}
            onViewLogs={() => setOverlay('cameraAccessLogs')}
            onDeleteData={() => setOverlay('confirmDelete' as any)}
            onClose={() => setOverlay(null)}
            isMainAccount={isMainAccount}
          />
        )}
      </AnimatePresence>
      
      {!isLoggedIn ? (
        <AnimatePresence>
          <LoginRegisterView 
            onLogin={() => setIsLoggedIn(true)} 
            onAnonymousLogin={() => {
              setIsLoggedIn(true);
              setIsAnonymous(true);
              setIsUnboundMode(false);
              setRobots([
                // 只保留一个主机器人，已移除多余设备
                { id: 'robot-1', nickname: '我的小和', model: 'Gen-2', status: 'online', battery: 85, network: '极佳', version: 'v2.1.0', icon: <Bot size={24} />, sn: 'JH4820-2910-X1' }
              ]);
            }}
            onSetUnbound={setIsUnboundMode}
            onSetRobots={setRobots}
            onSetLoggedIn={setIsLoggedIn}
            onSetMainAccount={setIsMainAccount}
            onViewLegal={(type) => {
              setLegalType(type);
              setOverlay('legalNotice');
            }}
            onShowToast={showToast}
          />
        </AnimatePresence>
      ) : (
        <>
          {/* 全屏 Overlay 渲染 */}
          <AnimatePresence>
            {renderRobotEditor()}
            {overlay === 'imageViewer' && selectedImage && (
              <ImageViewer src={selectedImage} onClose={() => setOverlay(null)} />
            )}
            {overlay === 'addRobot' && (
          <AddRobotView 
            onAdd={(robot) => {
              setRobots(rs => [...rs, robot]);
              setOverlay('deviceManagement');
            }}                
            onClose={() => setOverlay('deviceManagement')}
            onShowToast={showToast}
          />
        )}
        {overlay === 'deviceManagement' && (
          <DeviceManagementView 
            robots={robots}
            activeRobotId={activeRobotId}
            onRobotClick={(id) => {
              setActiveRobotId(id);
            }}
            onRobotDetail={(r) => {
              setActiveDetailRobot(r);
              setOverlay('robotDetail');
            }}
            onAddRobot={() => setOverlay('addRobot')}
            onAddSmartDevice={() => setOverlay('smartDeviceScan')}
            onAddPlatform={() => setOverlay('smartPlatforms')}
            onDeviceManage={(device) => {
              setSelectedDevice(device);
              setOverlay('smartDeviceDetail');
            }}
            onClose={() => setOverlay(null)}
          />
        )}
        {overlay === 'smartPlatforms' && (
          <SmartHealthPlatformsView onClose={() => setOverlay('deviceManagement')} onShowToast={showToast} />
        )}
        {overlay === 'smartDeviceScan' && (
          <SmartDeviceBindView onClose={() => setOverlay('deviceManagement')} onShowToast={showToast} />
        )}
        {overlay === 'smartDeviceDetail' && selectedDevice && (
          <SmartDeviceDetailView 
            device={selectedDevice} 
            onClose={() => setOverlay('deviceManagement')} 
            onDisconnect={() => {
              setOverlay('deviceManagement');
              showToast(`已解除与 ${selectedDevice.name} 的绑定`);
            }}
            onShowToast={showToast}
          />
        )}
        {overlay === 'videoCall' && (
          <VideoCallView 
            isConnecting={isConnecting} 
            onAction={handleAction}
            onClose={() => {
              setOverlay(null);
              setIsConnecting(false);
            }} 
          />
        )}
        {overlay === 'alertDetail' && alertData && (
          <AlertDetailView 
            data={alertData} 
            onClose={() => setOverlay(null)} 
            onResolve={() => {
              setAlarmResolved(true);
              setOverlay(null);
              showToast('告警已解除，状态已转为正常');
            }} 
          />
        )}
        {overlay === 'voiceMessage' && (
          <VoiceMessageView onClose={() => setOverlay(null)} />
        )}
        {overlay === 'memoriesAlbum' && (
          <MemoriesAlbumView 
            onClose={() => setOverlay(null)} 
            onImageClick={(src) => {
              setSelectedImage(src);
              setOverlay('imageViewer');
            }}
            onShowToast={showToast}
          />
        )}
        {overlay === 'notifications' && (
          <NotificationsView 
            onClose={() => setOverlay(null)} 
            notifications={notifications}
            onMarkAsRead={(id) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n))}
            onMarkAllRead={() => setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))}
            onClearAll={() => setNotifications([])}
            onAlertClick={(data) => {
              setAlertData(data);
              setOverlay('alertDetail');
            }} 
          />
        )}
        {overlay === 'elderlyProfile' && (
          <ElderlyProfileEditView 
            data={elderlyProfiles[activeElderlyIndex]} 
            onSave={(newData) => {
              setElderlyProfiles(ps => ps.map((p, idx) => idx === activeElderlyIndex ? newData : p));
              showToast('个人资料已更新');
            }}
            onClose={() => setOverlay(null)} 
            onShowToast={showToast}
          />
        )}
        {overlay === 'emergencyContacts' && (
          <EmergencyContactsView 
            contacts={emergencyContacts}
            onUpdate={setEmergencyContacts}
            onClose={() => setOverlay(null)}
            isMainAccount={isMainAccount}
            onShowToast={showToast}
          />
        )}
        {overlay === 'familyMembers' && (
          <FamilyMembersView 
            members={familyMembers}
            onDelete={(id) => setFamilyMembers(ms => ms.filter(m => m.id !== id))}
            onClose={() => setOverlay(null)}
            onShowToast={showToast}
          />
        )}
        {overlay === 'medicationPlan' && (
          <MedicationPlanView 
            plan={medicationPlan}
            onUpdate={setMedicationPlan}
            onClose={() => setOverlay(null)}
            isMainAccount={isMainAccount}
            onShowToast={showToast}
          />
        )}
        {overlay === 'medicationCalendar' && (
          <MedicationCalendarView 
            plan={medicationPlan}
            onClose={() => setOverlay(null)}
          />
        )}
        {overlay === 'robotDetail' && activeDetailRobot && (
          <RobotDetailView 
            robot={activeDetailRobot}
            onSave={(updatedRobot) => {
              setRobots(rs => rs.map(r => r.id === updatedRobot.id ? updatedRobot : r));
              setOverlay('deviceManagement');
              setActiveDetailRobot(null);
            }}
            onDelete={(id) => {
              setRobots(rs => rs.filter(r => r.id !== id));
              setOverlay('deviceManagement');
            }}
            onClose={() => {
              setOverlay('deviceManagement');
              setActiveDetailRobot(null);
            }}
            onShowToast={showToast}
            isMainAccount={isMainAccount}
          />
        )}
        {overlay === 'alarmSettings' && (
          <AlarmSettingsView onClose={() => setOverlay(null)} />
        )}
        {overlay === 'healthReport' && (
          <HealthReportView onClose={() => setOverlay(null)} robots={robots} setOverlay={setOverlay} onShowToast={showToast} />
        )}
        {confirmation && (
          <ConfirmationView 
            title={confirmation.title}
            message={confirmation.message}
            onConfirm={confirmation.onConfirm}
            onCancel={() => setConfirmation(null)}
          />
        )}
        {overlay === 'cameraAccessLogs' && (
          <CameraAccessLogsView 
            logs={cameraLogs}
            onClose={() => setOverlay('legalNotice' as any)}
          />
        )}
        {overlay === 'confirmDelete' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[250] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <div className="bg-white rounded-[40px] w-full max-w-sm p-8 space-y-6 text-center shadow-2xl">
              <div className="w-20 h-20 bg-red-100 text-[#E11D48] rounded-full flex items-center justify-center text-4xl mx-auto mb-2">🗑️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">确认清理数据？</h3>
                <p className="text-base text-gray-400 mt-2">操作后将清除所有历史体征趋势与摄像头通话记录，此操作不可撤销。</p>
              </div>
              
              <div className="space-y-3">
                <input 
                  type="password" 
                  placeholder="请输入确认密码 (123456)" 
                  id="deleteConfirmPwd"
                  className="w-full bg-gray-50 border-none rounded-[24px] p-4 text-center text-base font-bold focus:ring-1 focus:ring-red-100"
                />
                <div className="flex gap-3">
                  <button 
                    onClick={() => setOverlay(null)}
                    className="flex-1 py-4 bg-gray-100 rounded-[24px] font-bold text-gray-500 active:scale-95 transition-transform"
                  >取消</button>
                  <button 
                    onClick={() => {
                      const pwd = (document.getElementById('deleteConfirmPwd') as HTMLInputElement).value;
                      if (pwd === '123456') {
                        setCameraLogs([]);
                        setOverlay(null);
                        showToast('历史记录已成功清理');
                      } else {
                        showToast('密码错误');
                      }
                    }}
                    className="flex-1 py-4 bg-[#E11D48] text-white rounded-[24px] font-bold shadow-lg shadow-red-200 active:scale-95 transition-transform"
                  >确认清理</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 顶部标题栏 */}
      <header className="flex justify-between items-center px-6 py-4 sticky top-0 bg-[#fbf9f8]/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <h1 className="text-xl font-bold text-[#024481]">智护OS</h1>
        </div>
        <button onClick={() => handleAction('notifications')} className="w-11 h-11 rounded-[24px] bg-white flex items-center justify-center card-shadow active:scale-95 transition-transform relative">
          <span className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer active:scale-90">
            <Bell size={22} strokeWidth={2} />
          </span>
          {notifications.some(n => !n.isRead) && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E11D48] border-2 border-white shadow-sm flex items-center justify-center text-[9px] text-white font-bold">
                {notifications.filter(n => !n.isRead).length}
              </span>
            </span>
          )}
        </button>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 px-6 pt-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {isAnonymous && robots.length === 0 && activeTab !== 'profile' && (
          <div className="bg-blue-50 text-[#024481] p-4 rounded-3xl mb-6 flex items-center justify-between shadow-sm">
            <p className="text-xs font-bold">欢迎使用智护OS，请一步快速绑定机器人。</p>
            <button onClick={() => setOverlay('addRobot')} className="text-xs font-bold bg-white rounded-full px-3 py-1.5 shadow-sm">去绑定</button>
          </div>
        )}
        <AnimatePresence mode="wait">
          <div key={activeTab}>
            {isUnboundMode && robots.length === 0 ? (
              <div className="flex flex-col items-center justify-center pt-20 px-6 text-center">
                 <div className="w-40 h-40 bg-blue-500 rounded-[32px] flex items-center justify-center text-6xl text-white mb-8 shadow-2xl shadow-blue-300">
                   <Bot size={80} strokeWidth={1} />
                 </div>
                 <p className="text-gray-500 font-bold text-base mb-12">只需简单两步，即可为您或您的长辈开启全方位的智能健康守护。</p>
                 <div className="w-full bg-white rounded-[32px] p-6 shadow-xl border border-blue-50 flex items-center gap-4 text-left">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-base">绑定机器人 & 建立档案</h4>
                      <p className="text-xs text-gray-400 mt-0.5">连接终端并录入服务人信息以开启AI守护</p>
                    </div>
                    <button onClick={() => setOverlay('addRobot')} className="bg-blue-500 text-white font-bold text-xs px-6 py-3 rounded-full shadow-lg">立即开始</button>
                 </div>
              </div>
            ) : (
              renderContent()
            )}
          </div>
        </AnimatePresence>
      </main>

      {/* 底部导航栏 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-50 pb-safe pb-8 pt-3 px-4 flex justify-around items-center z-40 max-w-md mx-auto shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
        {[
          { id: 'guardian', icon: <Home size={22} />, label: '守护' },
          { id: 'health', icon: <Activity size={22} />, label: '健康' },
          { id: 'companion', icon: <MessageCircle size={22} />, label: '陪伴' },
          { id: 'profile', icon: <User size={22} />, label: '我的' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              if (isAnonymous && robots.length === 0 && tab.id !== 'profile') {
                setOverlay('addRobot');
                return;
              }
              setActiveTab(tab.id as TabType);
            }}
            className={`flex flex-col items-center gap-1 transition-all duration-300 relative px-4 py-1 rounded-2xl ${
              activeTab === tab.id ? 'text-[#07C160] scale-105' : 'text-gray-400 scale-95'
            }`}
          >
            {tab.icon}
            <span className={`text-[10px] font-bold ${activeTab === tab.id ? 'text-[#07C160]' : 'text-gray-400'}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </nav>
      </>
      )}
    </div>
  );
}

