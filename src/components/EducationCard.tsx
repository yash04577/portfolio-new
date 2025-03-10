
type Props = {
  primaryTitle: string; 
  secondaryTitle: string;
  place: string;
  date: string;
}

const EducationCard = ({primaryTitle, secondaryTitle, place, date}: Props) => {
  return (
    <div className='sm:w-[400px] px-10 h-[300px] sm:flex-row sm:justify-between shadow-skill-card  flex flex-col justify-center items-center gap-5 sm:items-center rounded-lg hover:bg-[#191b1e] transition-colors duration-700'>
        <div>
            <p className='text-2xl text-white'>{primaryTitle}</p>
            <p className='text-gray-500'>{secondaryTitle}</p>
        </div>
        <div className='bg-black px-8 py-2 rounded-lg'>
            <span className='text-[#ff014f]'>{place}</span><br />
            <span className='text-[#ff014f]'>({date})</span>
        </div>
    </div>
  )
}

export default EducationCard