'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from './sectionHeading'
import { useInViewSection } from '@/lib/hooks'
import { SectionName } from '@/global/models/shared.type'
import { useActiveSectionContext } from '@/context'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './submitButton'
import toast from 'react-hot-toast'

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
          console.log(resp.message as string)
          if (resp.status === 'success') toast.success(resp.message as string) 
          else toast.error(resp.message as string)
        }}
      >
        <input
          name='senderEmail'
          type='email' 
          className='h-14 rounded-lg borderBlack p-4 focus:border-2 focus:border-gray-900 focus:outline-none dark:bg-bgDark dark:border-white/20 dark:focus:border-white/50'
          placeholder='Your e-mail'
          required
        />
        <textarea 
          name='bodyEmail' 
          id=''
          className='min-h-52 my-3 rounded-lg borderBlack p-4 focus:border-2 focus:border-gray-900 focus:outline-none dark:bg-bgDark dark:border-white/20 dark:focus:border-white/50'
          placeholder='Your message'
          required
          maxLength={1000}
        />
        <SubmitButton handleClic={handleClic} />
      </form>
    </motion.section>
  )
}