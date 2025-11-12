import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CountContainer } from './CountContainer';

interface TimeData {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownProps {
    targetDate: Date;
    className?: string;
    labels: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
    };
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, className = '', labels }) => {
    const [timeData, setTimeData] = useState<TimeData>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const calculateTime = useCallback(() => {
        const now = new Date();
        const target = new Date(targetDate);
        const timeDifference = target.getTime() - now.getTime();

        if (timeDifference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const remainingHours = timeDifference % (1000 * 60 * 60 * 24);

        const hours = Math.floor(remainingHours / (1000 * 60 * 60));
        const remainingMinutes = remainingHours % (1000 * 60 * 60);

        const minutes = Math.floor(remainingMinutes / (1000 * 60));
        const remainingSeconds = remainingMinutes % (1000 * 60);

        const seconds = Math.floor(remainingSeconds / 1000);

        return { days, hours, minutes, seconds };
    }, [targetDate]);

    useEffect(() => {
        setTimeData(calculateTime());

        const interval = setInterval(() => {
            setTimeData(prevData => {
                const newData = calculateTime();

                if (
                    prevData.days !== newData.days ||
                    prevData.hours !== newData.hours ||
                    prevData.minutes !== newData.minutes ||
                    prevData.seconds !== newData.seconds
                ) {
                    return newData;
                }

                return prevData;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [calculateTime]);

    const countdownItems = useMemo(() => [
        { count: timeData.days, label: labels.days },
        { count: timeData.hours, label: labels.hours },
        { count: timeData.minutes, label: labels.minutes },
        { count: timeData.seconds, label: labels.seconds }
    ], [timeData.days, timeData.hours, timeData.minutes, timeData.seconds, labels]);

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {countdownItems.map((item) => (
                <CountContainer
                    key={item.label}
                    count={item.count}
                    label={item.label}
                />
            ))}
        </div>
    );
};

export default Countdown;
