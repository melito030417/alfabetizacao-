import React, { useEffect, useRef } from 'react';

interface VturbPlayerProps {
  videoId?: string;
  scriptUrl?: string;
  paddingAspectRatio?: string;
  maxWidth?: string;
  className?: string;
}

export const VturbPlayer: React.FC<VturbPlayerProps> = ({
  videoId = 'vid-6ace917e21ff7b56c1335bd3',
  scriptUrl = 'https://scripts.converteai.net/18bd9910-ef8c-473a-bb5f-1eb61241073a/players/6ace917e21ff7b56c1335bd3/v4/player.js',
  paddingAspectRatio = '67.16417910447761%',
  maxWidth,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject player script if not already added
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (!existingScript) {
      const s = document.createElement('script');
      s.src = scriptUrl;
      s.async = true;
      document.head.appendChild(s);
    }
  }, [scriptUrl]);

  const styleAttr = maxWidth
    ? `display: block; margin: 0 auto; width: 100%; max-width: ${maxWidth};`
    : `display: block; margin: 0 auto; width: 100%;`;

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-black ${className}`}
      dangerouslySetInnerHTML={{
        __html: `
          <vturb-smartplayer id="${videoId}" style="${styleAttr}">
            <div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: ${paddingAspectRatio} 0 0; z-index: 0; background-color: black;"></div>
          </vturb-smartplayer>
        `,
      }}
    />
  );
};
