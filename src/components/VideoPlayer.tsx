import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface VideoPlayerProps {
    src: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    preload?: 'none' | 'metadata' | 'auto';
}

interface VideoChunk {
    start: number;
    end: number;
    data: ArrayBuffer;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    className = '',
    autoPlay = true,
    muted = true,
    loop = true,
    preload = "metadata"
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const blobUrlRef = useRef<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { t } = useTranslation(["common"]);


    const loadVideoInChunks = useCallback(async () => {
        try {
            setError(null);

            const response = await fetch(src, {
                headers: {
                    'Range': 'bytes=0-',
                    'Accept-Ranges': 'bytes'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const contentLength = response.headers.get('content-length');
            const totalSize = contentLength ? parseInt(contentLength, 10) : 0;

            if (totalSize === 0) {
                const video = videoRef.current;
                if (video) {
                    video.src = src;
                }
                return;
            }

            const chunkSize = 1024 * 1024;
            const chunks: VideoChunk[] = [];

            for (let start = 0; start < totalSize; start += chunkSize) {
                const end = Math.min(start + chunkSize - 1, totalSize - 1);

                try {
                    const chunkResponse = await fetch(src, {
                        headers: {
                            'Range': `bytes=${start}-${end}`,
                            'Accept-Ranges': 'bytes'
                        }
                    });

                    if (chunkResponse.ok) {
                        const arrayBuffer = await chunkResponse.arrayBuffer();
                        chunks.push({
                            start,
                            end,
                            data: arrayBuffer
                        });
                    }
                } catch (chunkError) {
                    console.warn(`Failed to load chunk ${start}-${end}:`, chunkError);
                }
            }

            if (chunks.length > 0 && videoRef.current) {
                const video = videoRef.current;
                const blob = new Blob(chunks.map(chunk => chunk.data), { type: 'video/webm' });
                const url = URL.createObjectURL(blob);

                if (blobUrlRef.current) {
                    URL.revokeObjectURL(blobUrlRef.current);
                }

                blobUrlRef.current = url;
                video.src = url;
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load video');
            if (videoRef.current) {
                videoRef.current.src = src;
            }
        }
    }, [src]);

    useEffect(() => {
        loadVideoInChunks();
    }, [loadVideoInChunks]);

    useEffect(() => {
        return () => {
            if (videoRef.current) {
                videoRef.current.src = '';
            }
            // Revogar URL blob quando o componente for desmontado
            if (blobUrlRef.current) {
                URL.revokeObjectURL(blobUrlRef.current);
                blobUrlRef.current = null;
            }
        };
    }, []);

    const handleRetry = () => {
        setError(null);
        loadVideoInChunks();
    };

    if (error) {
        return (
            <div className={`flex flex-col items-center justify-center bg-gray-900 text-white ${className}`}>
                <div className="text-center p-6">
                    <div className="text-red-400 text-2xl mb-4">⚠️</div>
                    <h3 className="text-lg font-semibold mb-2">{t('video_player.error_loading_video', { ns: "common" })}</h3>
                    <p className="text-gray-300 mb-4">{error}</p>
                    <button
                        onClick={handleRetry}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                        {t('video_player.try_again', { ns: "common" })}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <video
            ref={videoRef}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            className={`w-full h-full object-cover ${className}`}
            playsInline
            preload={preload}
        >
            <source src={src} type="video/webm" />
            {t('video_player.unsupported_browser', { ns: "common" })}
        </video>
    );
};

export default VideoPlayer;
