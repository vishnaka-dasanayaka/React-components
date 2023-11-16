import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Sidebar() {
  return (
    <div className='h-screen border-r-2 border-primary flex flex-col'>

        <div className='bg-primary h-[18rem] rounded-b-[40%] flex flex-col justify-center items-center'>
            <div className='mb-24'>
                <AccountCircleIcon className='scale-[4]' />
            </div>
            <div className='w-fit px-2 py-1 bg-green-800 rounded-lg'>
                <h1 className='text-white text-lg'>Dr.Kanchuka Sirimanna</h1>
            </div>
        </div>
        <div>
            <ul className='ml-20'>
                <li className='bg-primary pl-10 py-1 w-2/3 rounded-xl mt-10 '>20 Batch
                <ArrowForwardIosIcon className='ml-10 scale-75' /></li>

                <li className='bg-green-950 text-white pl-10 py-1 w-2/3 rounded-xl mt-5 '>21 Batch
                <ArrowForwardIosIcon className='ml-10 scale-75' /></li>

                <li className='bg-primary pl-10 py-1 w-2/3 rounded-xl mt-5 '>22 Batch
                <ArrowForwardIosIcon className='ml-10 scale-75' /></li>

                <li className='bg-primary pl-10 py-1 w-2/3 rounded-xl mt-5 '>23 Batch
                <ArrowForwardIosIcon className='ml-10 scale-75' /></li>

                <li className='bg-primary pl-10 py-1 w-2/3 rounded-xl mt-5 '>24 Batch
                <ArrowForwardIosIcon className='ml-10 scale-75' /></li>
                

            </ul>
        </div>

    </div>
  )
}

export default Sidebar
