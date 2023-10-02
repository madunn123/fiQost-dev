import React, { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';

export default function Progressbar({ val }) {
  const progressValue = val;
  const [progress, setProgress] = useState(progressValue);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progress), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-1.5">
      <Progress.Root
        className="relative overflow-hidden bg-[#E5E7EB] rounded-full w-full h-[10px]"
        style={{
          transform: 'translateZ(0)',
        }}
        value={progress}
      >
        <Progress.Indicator
          className="bg-main-color w-full h-full rounded-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>

      <div className="flex flex-row items-center justify-between text-lg capitalize text-black font-medium">
        <span>diterima</span>
        <span>diproses</span>
        <span>selesai</span>
      </div>
    </div>
  );
}
