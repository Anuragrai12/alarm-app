import Svg, { Circle, Path, Rect } from 'react-native-svg';

type Props = { name: string; size?: number; color?: string };

export default function AlarmIcon({ name, size = 20, color = '#fff' }: Props) {
  const stroke = { stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  const frame = { width: size, height: size, viewBox: '0 0 24 24' } as const;

  switch (name) {
    case 'sleep': return <Svg {...frame}><Path d="M20.7 14.1A8.6 8.6 0 0 1 9.9 3.3 8.8 8.8 0 1 0 20.7 14.1Z" {...stroke} /><Path d="M16.5 4.5v3M15 6h3" {...stroke} /></Svg>;
    case 'sun':
    case 'sunrise':
    case 'cloudSun': return <Svg {...frame}>{name === 'cloudSun' ? <><Path d="M7 18h11a3 3 0 0 0 .4-6A5.3 5.3 0 0 0 8 10.8 3.6 3.6 0 0 0 7 18Z" {...stroke} /><Path d="M5 9V7m-3 3 1.5-1.5M9 5l1-1" {...stroke} /></> : <><Path d={name === 'sunrise' ? 'M3 18h18M5 15a7 7 0 0 1 14 0M12 2v3M4.9 5l2.1 2M19.1 5 17 7' : 'M12 3v2m0 14v2m9-9h-2M5 12H3m15.4-6.4-1.4 1.4M7 17l-1.4 1.4M18.4 18.4 17 17M7 7 5.6 5.6'} {...stroke} />{name === 'sun' && <Circle cx="12" cy="12" r="4" {...stroke} />}</>}</Svg>;
    case 'alarm': return <Svg {...frame}><Path d="M5 5 3 7m16-2 2 2M7 20l-1 1m11-1 1 1" {...stroke} /><Circle cx="12" cy="13" r="7" {...stroke} /><Path d="M12 9v4l3 2" {...stroke} /></Svg>;
    case 'play': return <Svg {...frame}><Path d="M8 5.5v13l10-6.5-10-6.5Z" fill={color} /></Svg>;
    case 'report': return <Svg {...frame}><Path d="M4 20h17" {...stroke} /><Rect x="6" y="12" width="3" height="6" rx="1" fill={color} /><Rect x="11" y="8" width="3" height="10" rx="1" fill={color} /><Rect x="16" y="4" width="3" height="14" rx="1" fill={color} /></Svg>;
    case 'settings': return <Svg {...frame}><Path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" {...stroke} /><Path d="m19.4 15 .1.1 1.1.9-1.3 2.3-1.4-.5a7.8 7.8 0 0 1-1.5.9l-.3 1.5h-2.7l-.3-1.5a7.8 7.8 0 0 1-1.5-.9l-1.4.5-1.3-2.3 1.1-.9a7 7 0 0 1 0-1.8l-1.1-.9 1.3-2.3 1.4.5a7.8 7.8 0 0 1 1.5-.9l.3-1.5h2.7l.3 1.5a7.8 7.8 0 0 1 1.5.9l1.4-.5 1.3 2.3-1.1.9a7 7 0 0 1 0 1.7Z" {...stroke} /></Svg>;
    case 'math': return <Svg {...frame}><Path d="M8 4 6 20m12-16-2 16M4 9h16M3 15h16" {...stroke} /></Svg>;
    case 'tiles': return <Svg {...frame}><Rect x="4" y="4" width="7" height="7" rx="1.5" {...stroke} /><Rect x="13" y="4" width="7" height="7" rx="1.5" {...stroke} /><Rect x="4" y="13" width="7" height="7" rx="1.5" {...stroke} /><Rect x="13" y="13" width="7" height="7" rx="1.5" {...stroke} /></Svg>;
    case 'typing': return <Svg {...frame}><Rect x="3" y="6" width="18" height="12" rx="2" {...stroke} /><Path d="M6 10h1m3 0h1m3 0h1m3 0h.1M7 14h10m-7 2h4" {...stroke} /></Svg>;
    case 'shake': return <Svg {...frame}><Path d="M8 4 5 7l3 3-3 3 3 3-2 2m8-14 3 3-3 3 3 3-3 3 2 2M12 3v18" {...stroke} /></Svg>;
    case 'off': return <Svg {...frame}><Circle cx="12" cy="12" r="8" {...stroke} /><Path d="m9 9 6 6m0-6-6 6" {...stroke} /></Svg>;
    case 'shield': return <Svg {...frame}><Path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" {...stroke} /><Path d="m9 12 2 2 4-4" {...stroke} /></Svg>;
    case 'pet': return <Svg {...frame}><Circle cx="12" cy="14" r="6" {...stroke} /><Circle cx="6" cy="7" r="1.5" fill={color} /><Circle cx="11" cy="5" r="1.5" fill={color} /><Circle cx="16" cy="6" r="1.5" fill={color} /><Circle cx="19" cy="10" r="1.5" fill={color} /></Svg>;
    case 'cat': return <Svg {...frame}><Path d="m5 9-1-5 6 3a9 9 0 0 1 4 0l6-3-1 5a8 8 0 1 1-14 0Z" {...stroke} /><Path d="M8.5 12h.1m6.8 0h.1M10 16l2-1 2 1M3 13l4 1m14-1-4 1" {...stroke} /></Svg>;
    case 'bed': return <Svg {...frame}><Path d="M3 19v-8m0 4h18v4M7 15v-4a3 3 0 0 1 3-3h7a5 5 0 0 1 5 5v2M3 12h5" {...stroke} /></Svg>;
    case 'book': return <Svg {...frame}><Path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v17H6.5A2.5 2.5 0 0 0 4 22V5.5Zm16 0A2.5 2.5 0 0 0 17.5 3H12v17h5.5A2.5 2.5 0 0 1 20 22V5.5Z" {...stroke} /></Svg>;
    case 'tarot': return <Svg {...frame}><Rect x="5" y="3" width="14" height="18" rx="2" {...stroke} /><Path d="m12 7 1 2 2 .3-1.5 1.5.4 2.2-1.9-1-1.9 1 .4-2.2L9 9.3l2-.3 1-2Z" {...stroke} /><Path d="M9 17h6" {...stroke} /></Svg>;
    case 'heart': return <Svg {...frame}><Path d="M20.8 8.8c0 5.2-8.8 10-8.8 10S3.2 14 3.2 8.8A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8.8 1.8Z" {...stroke} /></Svg>;
    case 'sparkles': return <Svg {...frame}><Path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" {...stroke} /></Svg>;
    case 'cloud': return <Svg {...frame}><Path d="M7 19h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 9.5 4.8 4.8 0 0 0 7 19Z" {...stroke} /></Svg>;
    case 'music': return <Svg {...frame}><Path d="M9 18V5l11-2v13" {...stroke} /><Circle cx="6" cy="18" r="3" {...stroke} /><Circle cx="17" cy="16" r="3" {...stroke} /></Svg>;
    case 'volume': return <Svg {...frame}><Path d="M4 10v4h4l5 4V6l-5 4H4Zm12-2a6 6 0 0 1 0 8m2-11a10 10 0 0 1 0 14" {...stroke} /></Svg>;
    case 'mascot': return <Svg {...frame}><Circle cx="6.5" cy="7" r="3" fill="#efc29c" stroke="#b78168" strokeWidth="1.2" /><Circle cx="17.5" cy="7" r="3" fill="#efc29c" stroke="#b78168" strokeWidth="1.2" /><Circle cx="12" cy="13" r="8" fill="#f1caa4" stroke="#b78168" strokeWidth="1.2" /><Circle cx="9" cy="12" r=".8" fill="#302526" /><Circle cx="15" cy="12" r=".8" fill="#302526" /><Path d="M10 15q2 2 4 0m-8-1-2 1m18-1-2-1" {...stroke} stroke="#b78168" /><Circle cx="8" cy="15" r="1.5" fill="#e99892" opacity=".8" /><Circle cx="16" cy="15" r="1.5" fill="#e99892" opacity=".8" /></Svg>;
    default: return <Svg {...frame}><Circle cx="12" cy="12" r="8" {...stroke} /></Svg>;
  }
}
