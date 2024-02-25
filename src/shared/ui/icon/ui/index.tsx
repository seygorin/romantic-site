import Image from 'next/image';

interface IconProps {
  name: string;
  width: number;
}

export const Icon: React.FC<IconProps> = ({ name, width }) => {
  return (
    <div className="hover:invert">
      <Image src={`/icon/${name}.svg`} alt={name} width={width} height={30} />
    </div>
  );
};
