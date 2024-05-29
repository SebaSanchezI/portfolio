'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from './sectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { useInViewSection } from '@/lib/hooks'
import { SectionName } from '@/global/models/shared.type'
import { useActiveSectionContext } from '@/context'
import { sendEmail } from '@/actions/sendEmail'

type Props = {}

export function Contact (props: Props) {
  const { ref } = useInViewSection({ 
    sectionName: SectionName.contact, 
    threshold: 0.5, 
  });
  const { activeSection, setActiveSection, setTimeOfLastClick } =
  useActiveSectionContext()
  const handleClic = () => {
    setActiveSection(SectionName.contact)
    setTimeOfLastClick(Date.now())
  }

  return (
    <motion.section id='contact'
      ref={ref}
     className='mb-20 sm:mb-28 w-[min(100%, 64rem)] text-center'
     initial={{
      opacity: 0
     }}
     whileInView={{
      opacity: 1
     }}
     transition={{
      duration: 1
     }}
     viewport={{
      once: true
     }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at {" "}
        <a href='mailto:sebastian.sanchezisame@outlook.com' className='underline'>
          sebastian.sanchezisame@outlook.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className='flex flex-col gap-2 mt-10'
        action={async (formData) => {
          const resp = await sendEmail(formData)
          alert(resp.message)
        }}
      >
        <input
          name='senderEmail'
          type='email' 
          className='h-14 rounded-lg borderBlack p-4 focus:border-2 focus:border-gray-900 focus:outline-none'
          placeholder='Your e-mail'
          required
        />
        <textarea 
          name='bodyEmail' 
          id=''
          className='min-h-52 my-3 rounded-lg borderBlack p-4 focus:border-2 focus:border-gray-900 focus:outline-none'
          placeholder='Your message'
          required
          maxLength={1000}
        />
        <button 
          type='submit'
          className='group flex items-center justify-center gap-2 h-12 w-full sm:w-32 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-105 hover:bg-gray-950'
          onClick={handleClic}
        >
          Submit 
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
        </button>
      </form>
    </motion.section>
  )
}