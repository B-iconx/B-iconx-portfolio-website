import jsPDF from 'jspdf';

export const generateCVPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 15;
  const lineHeight = 5;
  const margin = 15;
  const maxWidth = pageWidth - 2 * margin;

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - 10) {
      doc.addPage();
      yPosition = 15;
    }
  };

  // Helper function for section titles
  const addSectionTitle = (title: string) => {
    checkNewPage(15);
    doc.setFontSize(12);
    doc.setFont('', 'bold');
    doc.text(title, margin, yPosition);
    yPosition += 7;
    doc.setDrawColor(100);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 7;
  };

  // Helper function for text wrapping
  const addWrappedText = (text: string, fontSize: number = 10, bold: boolean = false, indent: number = 0) => {
    doc.setFontSize(fontSize);
    doc.setFont('', bold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, maxWidth - indent);
    lines.forEach((line: string) => {
      checkNewPage(8);
      doc.text(line, margin + indent, yPosition);
      yPosition += lineHeight;
    });
  };

  // Header
  doc.setFontSize(16);
  doc.setFont('', 'bold');
  doc.text('OKOYE IFEANYI CALEB', margin, yPosition);
  yPosition += 8;

  doc.setFontSize(11);
  doc.setFont('', 'normal');
  addWrappedText('Front-End Developer | Backend (Django)', 11);

  doc.setFontSize(9);
  doc.setFont('', 'normal');
  addWrappedText('Hawalli, Kuwait | Phone: +2348083808146', 9);
  addWrappedText('Email: biconx28@gmail.com', 9);
  addWrappedText('GitHub: https://github.com/B-iconx | LinkedIn: http://linkedin.com/in/b-iconx-i-52407037a', 9);
  yPosition += 3;

  // Professional Summary
  addSectionTitle('PROFESSIONAL SUMMARY');
  addWrappedText(
    'Dedicated and detail-oriented Front-End Developer with a good foundation in HTML, CSS, JavaScript and modern frameworks like React.js. Experienced in creating responsive, interactive and user-friendly web applications. Experienced in collaborating with back-end teams and also proficient in back-end development using Django (Python) to enhance full-stack capabilities. Passionate about clean UI/UX, performance optimization, and delivering scalable solutions.'
  );
  yPosition += 3;

  // Core Competencies
  addSectionTitle('SKILLS / CORE TECHNICAL COMPETENCIES');
  addWrappedText('Programming Languages:', 10, true);
  const progLangs = [
    'HTML5, CSS3, JavaScript',
    'Python (Basic)'
  ];
  progLangs.forEach(lang => {
    addWrappedText(`• ${lang}`, 9, false, 2);
  });

  addWrappedText('Frameworks and Libraries:', 10, true);
  const frameworks = [
    'React.js',
    'jQuery',
    'Django (Basic)',
    'Bootstrap',
    'Tailwind CSS'
  ];
  frameworks.forEach(fw => {
    addWrappedText(`• ${fw}`, 9, false, 2);
  });

  addWrappedText('Tools and Technologies:', 10, true);
  const tools = [
    'SQLite (Database)',
    'Git and GitHub (Version Control)'
  ];
  tools.forEach(tool => {
    addWrappedText(`• ${tool}`, 9, false, 2);
  });
  yPosition += 3;

  // Professional Experience
  addSectionTitle('PROFESSIONAL EXPERIENCE');
  
  addWrappedText('Web Developer', 10, true);
  addWrappedText('Devnex, Lagos, Nigeria | October 2025 – Present', 9);
  const exp1 = [
    'Frontend Development',
    'Backend Integration',
    'UI/UX Implementation',
    'Website Performance Optimization',
    'Database Management',
    'Version Control',
    'Development and Maintenance',
    'Security Best Practices'
  ];
  exp1.forEach(item => {
    addWrappedText(`• ${item}`, 9, false, 2);
  });
  yPosition += 2;

  addWrappedText('Web Developer', 10, true);
  addWrappedText('R-Tech Global Enterprise, Lagos, Nigeria | March 2025 – Present', 9);
  const exp2 = [
    'Developed a responsive e-commerce website, focusing on user-friendly interfaces and cross-browser compatibility using HTML, CSS, Bootstrap, jQuery, and AJAX',
    'Implemented modern UI/UX principles to enhance user experience and engagement',
    'Integrated front-end components with Django back-end services',
    'Implemented and optimised database structures using SQLite',
    'Deployed website and application to production environment',
    'Maintained and updated existing web applications to improve performance and user experience'
  ];
  exp2.forEach(item => {
    addWrappedText(`• ${item}`, 9, false, 2);
  });
  yPosition += 2;

  addWrappedText('Front-End Developer Intern', 10, true);
  addWrappedText('Devnex, Lagos, Nigeria | October 2023 – Present', 9);
  const exp3 = [
    'Assisted in the development of responsive web applications using HTML, CSS, and JavaScript',
    'Collaborated with designers to implement user-friendly interfaces',
    'Participated in code reviews and contributed to team discussions on best practices',
    'Learned and applied basic Django concepts to support backend development tasks'
  ];
  exp3.forEach(item => {
    addWrappedText(`• ${item}`, 9, false, 2);
  });
  yPosition += 3;

  // Education
  addSectionTitle('EDUCATIONAL BACKGROUND');
  addWrappedText('Higher National Diploma (HND) in Computer Engineering', 10, true);
  addWrappedText('Federal Polytechnic Oko, Anambra State, Nigeria | Graduated: 2023', 9);
  yPosition += 2;

  addWrappedText('National Diploma (ND) in Computer Engineering', 10, true);
  addWrappedText('Federal Polytechnic Oko, Anambra State, Nigeria | Graduated: 2020', 9);
  yPosition += 2;

  addWrappedText('Certificate in Programming and Web Design', 10, true);
  addWrappedText('Friendz Consulting Services | Completed: 2022', 9);
  yPosition += 3;

  // Certifications
  addSectionTitle('CERTIFICATIONS');
  const certs = [
    'Higher National Diploma (HND) in Computer Engineering',
    'National Diploma (ND) in Computer Engineering',
    'Certificate in Programming and Web Design',
    'Cisco Certification (2021)',
    'Cisco Certification (2023)'
  ];
  certs.forEach(cert => {
    addWrappedText(`• ${cert}`, 9);
  });
  yPosition += 3;

  // Professional Strengths
  addSectionTitle('KEY PROFESSIONAL STRENGTHS');
  const strengths = [
    'Collaboration and communication',
    'Responsive Design',
    'Client Satisfaction',
    'Performance Optimization',
    'Security-Focused Development',
    'Time Management',
    'Adaptability and continuous learning'
  ];
  strengths.forEach(strength => {
    addWrappedText(`• ${strength}`, 9);
  });

  // Footer
  checkNewPage(10);
  doc.setFontSize(9);
  doc.setFont('', 'normal');
  addWrappedText('Additional Information:', 10, true);
  addWrappedText('Languages: Fluent in English and Igbo', 9);
  addWrappedText('Interests: Passionate about web development, open-source contributions, Music, and continuous learning in the tech field', 9);
  addWrappedText('Availability: Open to relocation and remote work opportunities', 9);

  // Final footer
  checkNewPage(10);
  doc.setFontSize(8);
  doc.setFont('', 'italic');
  doc.text('References and detailed project portfolio available upon request.', margin, pageHeight - 10);

  // Save the PDF
  doc.save('Ifeanyi_Caleb_Okoye_CV.pdf');
};
