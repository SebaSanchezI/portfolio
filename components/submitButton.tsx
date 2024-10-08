import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

interface ISubmitButton {
  handleClic: () => void
}

export default function SubmitButton({ handleClic }: ISubmitButton) {
  const { pending } = useFormStatus()
  return (
    <button 
    type='submit'
    className='group flex items-center justify-center gap-2 h-12 w-full sm:w-32
     bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 
     hover:scale-105 hover:bg-gray-950 disabled:bg-opacity-65 dark:bg-white/10 dark:hover:bg-white/20'
    onClick={handleClic}
    disabled={pending}
  >
    {pending
    ? (
      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
    )
    : (
      <>
       Submit 
      <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
      </>
    )}
  </button>
  )
}

