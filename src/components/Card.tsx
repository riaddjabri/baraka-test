interface CardProps {
    number: number;
    label: string;
}
const Card = ({ number, label }: CardProps) => {
  return (
    <div className='border-[1px] border-secondary-black rounded-2xl p-6 flex flex-col items-center justify-between text-center'>
      <div className='text-3xl font-bold'>{number}</div>
      <p>{label}</p>
    </div>
  );
}

export default Card;