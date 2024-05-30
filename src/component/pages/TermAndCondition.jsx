
import React from 'react';
import { Container } from 'react-bootstrap';
import './TermCondition.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

const ListItem = ({ title, children }) => {
  return (
    <div className="list-item">
      <h4><FaAngleDoubleRight /> <span className="title">{title}</span></h4>
      <p>{children}</p>
    </div>
  );
};
const TermAndCondition = () => {
  return (
    <Container>
      <div className='term_condition'>
        <h1>Terms and condition</h1>

        <p>At ShareWolves is committed to protecting the privacy of our website visitors. This Privacy Policy outlines the types of personal information that is received and collected and how it is used.</p>

        <ListItem title="Collection of Personal Information">
          When you visit our website, we may collect personal information that you voluntarily provide to us such as your name, email address, and phone number. This information may be collected when you register for courses, subscribe to newsletters, or fill out contact forms.
        </ListItem>

        <ListItem title="Use of Personal Information">
          We may use the personal information you provide to communicate with you, process your requests, and improve our services. This may include sending you newsletters, updates, or promotional materials related to our institute. We will not sell, rent, or lease your personal information to third parties.
        </ListItem>

        <ListItem title="Cookies">
          Our website may use cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
        </ListItem>

        <ListItem title="Security">
          We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
        </ListItem>

        <ListItem title="Links to Other Websites">
          Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to review the privacy policies of these websites before providing any personal information.
        </ListItem>

        <ListItem title="Children's Privacy">
          Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
        </ListItem>

        <ListItem title="Changes to This Privacy Policy">
          We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on this page.
        </ListItem>

        <ListItem title="Contact Us">
          If you have any questions about our Privacy Policy, please contact us.
        </ListItem>
      </div>
    </Container>
  );
};


export default TermAndCondition;
