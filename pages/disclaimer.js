import React from 'react'
import Container from '../components/Container'

const Disclaimer = () => {
  const definitions = [
    {
      term: 'Application',
      definition: 'means the software program provided by the Company downloaded by You on any electronic device named Bottom Street.'
    },
    {
      term: 'Company',
      definition: '(referred to as either the "Company", "We", "Us" or "Our" in this Agreement) refers to Paprclip Technologies Pvt. Ltd., Address: American Center Metro Station, 24, KG Marg, near Barakhamba, New Delhi, Delhi 110001.'
    },
    {
      term: 'Service',
      definition: 'refers to the Application.'
    },
    {
      term: 'You',
      definition: 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.'
    },
  ]

  return (
    <Container>
      <div className='flex items-center border-b-[1px] border-slate-200 pb-2'>
        <h4 className='font-semibold text-[28px]'>Disclaimer</h4>
        <p className='font-normal text-[14px] ml-3 text-gray-400'>Last Updated on Nov 13, 2022</p>
      </div>

      {/* Interpretation and definitions */}
      <p className='bigHeading'>Interpretation and Definitions</p>
      <p className='heading'>Interpretation</p>
      <p className='para'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

      <p className='heading'>Definitions</p>
      <p className='para'>For the purposes of this Disclaimer:</p>
      <ul className='list-disc ml-5'>
        {definitions.map((item, index) => {
          return (
            <li className='para' key={index}>
              <strong>{item.term}</strong> {item.definition}
            </li>
          )
        })}
      </ul>

      {/* Disclaimer */}
      <p className='bigHeading'>Disclaimer</p>
      <p className='para'>The information contained on the Service is for general information purposes only.</p>
      <p className='para'>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
      <p className='para'>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the <a className='underline hover:text-blue ml-1' href='https://www.privacypolicies.com/disclaimer-generator/' target={"_blank"}> Disclaimer Generator</a></p>
      <p className='para'>The Company does not warrant that the Service is free of viruses or other harmful components.</p>

      {/* External Links Disclaimer */}
      <p className='bigHeading'>External Links Disclaimer</p>
      <p className='para'>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p>
      <p className='para'>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

      {/* Errors and Omissions Disclaimer */}
      <p className='bigHeading'>Errors and Omissions Disclaimer</p>
      <p className='para'>The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.</p>
      <p className='para'>The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>

      {/* Fair Use Disclaimer */}
      <p className='bigHeading'>Fair Use Disclaimer</p>
      <p className='para'>The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>
      <p className='para'>The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.</p>
      <p className='para'>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</p>
      
      {/* Views Expressed Disclaimer */}
      <p className='bigHeading'>Views Expressed Disclaimer</p>
      <p className='para'>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.</p>
      <p className='para'>Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.</p>
      
      {/* No Responsibility Disclaimer */}
      <p className='bigHeading'>Errors and Omissions Disclaimer</p>
      <p className='para'>The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</p>
      <p className='para'>In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</p>
      
      {/* "Use at Your Own Risk" Disclaimer */}
      <p className='bigHeading'>"Use at Your Own Risk" Disclaimer</p>
      <p className='para'>All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p>
      <p className='para'>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>
      
      {/* Contact Us */}
      <p className='bigHeading'>Contact Us</p>
      <p className='para'>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul className='list-disc ml-5'>
        <li className='para'>By email: help@bottomstreet.com</li>
        <li className='para'>By phone number: +918178074992</li>
      </ul>

      <div className='flex items-center border-t-[1px] border-slate-200 pb-2 mt-6'>
        <p className='para'>Generated using <a className='underline hover:text-blue ml-1' href='https://www.privacypolicies.com/disclaimer-generator/' target={"_blank"}> Disclaimer Generator</a> .</p>
      </div>
    </Container>
  )
}

export default Disclaimer