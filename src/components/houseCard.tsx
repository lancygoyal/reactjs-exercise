'use client';

const DEFAULT_GRADIENT = ['white', 'black'];

export type HouseCardPropsType = {
  id: string;
  houseColours: string;
  name: string;
  animal: string;
  founder: string;
};

export default function HouseCard(props: HouseCardPropsType) {
  const houseColours = props?.houseColours
    ?.toLowerCase()
    ?.split(' ')
    .filter((color: string) => !['and'].includes(color));

  return (
    <div className='w-96 p-5 border rounded-xl shadow flex flex-col gap-3'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold'>{props.name}</h1>
        <p className='text-sm'>{props.animal}</p>
      </div>
      <div className='flex justify-center'>
        <div
          className='h-5 w-full border border-white rounded'
          style={{
            background: `linear-gradient(to right, ${DEFAULT_GRADIENT[0]}, ${DEFAULT_GRADIENT[1]})`,
          }}
        >
          <div
            className='h-5 w-full border border-white rounded'
            style={{
              background: `linear-gradient(to right, ${houseColours[0]}, ${houseColours[1]})`,
            }}
          ></div>
        </div>
      </div>
      <p className='text-sm'>Founder: {props.founder}</p>
    </div>
  );
}
