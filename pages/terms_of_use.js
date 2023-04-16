import React from 'react'
import Container from '../components/Container'

const TermsOfUse = () => {
    const termsOfUse = [
        {
            term: 'Acceptable Use:',
            description: 'You agree to use the App only for lawful purposes and in a way that does not infringe upon the rights of others, including but not limited to, intellectual property rights, privacy rights, and data protection rights. You agree not to use the App to transmit or store any content that is unlawful, harmful, threatening, defamatory, obscene, or infringing.'
        },
        {
            term: 'Registration:',
            description: 'You may be required to register an account to use certain features of the App. You agree to provide accurate and complete information when registering and to keep your account information up to date.'
        },
        {
            term: 'Security:',
            description: 'You are responsible for maintaining the security of your account information, including your login credentials. You agree not to share your account information with anyone else.'
        },
        {
            term: 'Privacy:',
            description: 'We take your privacy seriously and will only use your personal information as described in our Privacy Policy.'
        },
        {
            term: 'Intellectual Property:',
            description: 'The App and all content and materials contained therein are the property of the App owner and are protected by intellectual property laws. You agree not to copy, modify, distribute, or create derivative works based on the App or its content without our prior written consent.'
        },
        {
            term: 'Disclaimer of Warranties:',
            description: 'The App is provided "as is" and we make no warranties, express or implied, regarding the App or its functionality. We do not warrant that the App will be error-free or uninterrupted, or that any defects will be corrected.'
        },
        {
            term: 'Limitation of Liability:',
            description: 'We will not be liable for any damages arising from your use of the App, including but not limited to, direct, indirect, incidental, punitive, or consequential damages. This includes damages arising from any errors, omissions, interruptions, or delays in the App\'s operation or transmission, even if we have been advised of the possibility of such damages.'
        },
        {
            term: 'Changes to Terms:',
            description: 'We reserve the right to modify these Terms at any time without notice. Your continued use of the App after any such modifications will constitute your acceptance of the modified Terms.'
        },
        {
            term: 'Termination:',
            description: 'We reserve the right to terminate your access to the App at any time without notice and for any reason.'
        },
        {
            term: 'Governing Law:',
            description: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where the App owner is located.'
        }
    ]
  return (
    <Container>
        <div className='flex items-center border-b-[1px] border-slate-200 pb-2'>
            <h4 className='font-semibold text-[28px]'>Terms of Use</h4>
            <p className='font-normal text-[14px] ml-3 text-gray-400'>Last Updated on Nov 14, 2022</p>
        </div>

        <p className='para'>Thank you for using our fintech app <span className='font-semibold'>("Bottom Street")</span>. By using the App, you agree to comply with these Terms of Use <span className='font-semibold'>("Terms")</span>. If you do not agree to these Terms, please do not use the App.</p>

        <ul className='list-disc ml-5'>
        {termsOfUse.map((item, index) => {
          return (
            <li className='para' key={index}>
              <strong>{item.term}</strong> {item.description}
            </li>
          )
        })}
      </ul>

      <p className='para'>
        Thank you for using our fintech app. If you have any questions or concerns about these Terms, please contact us.
      </p>
    </Container>
  )
}

export default TermsOfUse