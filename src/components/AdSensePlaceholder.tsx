import { useEffect, useRef } from 'react';

interface AdSensePlaceholderProps {
  slot: string;
  className?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
}

export default function AdSensePlaceholder({ slot, className = '', format = 'auto' }: AdSensePlaceholderProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (adRef.current && !adRef.current.hasAttribute('data-ad-status')) {
         (window as any).adsbygoogle = (window as any).adsbygoogle || [];
         (window as any).adsbygoogle.push({});
         adRef.current.setAttribute('data-ad-status', 'unfilled');
      }
    } catch (e) {
      console.warn("AdSense failed to load", e);
    }
  }, []);

  return (
    <div className={`ad-container flex justify-center items-center bg-[#f5f5f5] border border-[#ddd] min-h-[250px] w-full my-5 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-PUB-YOUR_CLIENT_ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
