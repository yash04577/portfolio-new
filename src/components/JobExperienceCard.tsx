
type Props = {
    primaryTitle:string;
    secondaryTitle:string;
    place:string;
    date:string;
    description:string;
}

const JobExperienceCard = ({primaryTitle, secondaryTitle, place, date, description}: Props) => {
  return (
    <div className='sm:w-[700px] w-[90%] mx-auto px-5 min-h-[300px] py-10 relative flex flex-col justify-center gap-10 shadow-skill-card  items-center rounded-lg hover:bg-[#191b1e] transition-colors duration-700'>
        <div className='border-l-8 border-[#191b1e] absolute sm:w-[700px] px-5 h-[300px] left-[-50px]'></div>
        <div className='flex justify-between w-full'>
            <div>
                <p className='text-2xl text-white'>{primaryTitle}</p>
                <p className='text-gray-500'>{secondaryTitle}</p>
            </div>
            <div className='bg-black px-5 py-2 rounded-lg flex flex-col justify-center items-center'>
                <span className='text-[#ff014f]'>{place}</span>
                <span className='text-[#ff014f]'>{date}</span>
            </div>
        </div>
        <div>
            <p className='text-gray-500'>{
            description}
            </p>
        </div>
    </div>
  )
}

export default JobExperienceCard