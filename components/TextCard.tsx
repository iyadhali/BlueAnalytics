import Link from 'next/link';
import Image from 'next/image';
import { CardItemProps } from '@/types/cards';

const TextCard: React.FC<CardItemProps> = ({ cardTitle, cardContent }) => {
  return (
    <div className="col-span-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-6 h-full flex flex-wrap justify-content content-center ">
        <h2 className="mb-3 text-5xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          {cardTitle}
        </h2>
        <div className="h-0 basis-full"></div>
        <h1 className="text-6xl">{cardContent}</h1>
        <p></p>
      </div>
    </div>
  );
};

export default TextCard;
