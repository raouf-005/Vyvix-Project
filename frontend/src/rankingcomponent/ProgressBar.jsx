
import React from 'react';
import { Progress } from '@nextui-org/react';

export default function ProgressBar({value}) {
    return (

        <div className='flex flex-row gap-2  items-center '>

            <div className='font-semibold w-4 mr-1'>
                {`${value}%`}
            </div>
            <Progress
            size="md"
            radius="sm"
            aria-label="progress" 
            classNames={{
              base: "max-w-20",
              track: "drop-shadow-md border border-default dark:bg-white",
              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            value={value}
          />
        </div>

    )

}