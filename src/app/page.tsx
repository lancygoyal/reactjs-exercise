'use client';

import HouseCard, { HouseCardPropsType } from '@/components/houseCard';
import useWizardHousesQuery from '@/services/wizards';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Home() {
  const wizardHousesData = useWizardHousesQuery();

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h2 className='p-2'>React.js | Next.js Exercise App</h2>
      {wizardHousesData.isLoading ? (
        <div className='h-full flex flex-col justify-center items-center p-24'>
          <ClipLoader
            color={'black'}
            loading={wizardHousesData.isLoading}
            size={50}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        <div className='flex flex-col gap-5'>
          {wizardHousesData.data?.map((item: HouseCardPropsType) => (
            <HouseCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </main>
  );
}
