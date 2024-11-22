import React from 'react';
import './Curriculum.css'; // Assuming you have the updated styles in curriculum.css

const curriculumData = [
  { name: 'Art & Design', icon: '🎨', description: 'This course introduces students to the principles of visual arts. Students will explore different mediums of creation and develop an understanding of design fundamentals.' },
  { name: 'Biology', icon: '🔬', description: 'Biology covers the study of life and living organisms. Students will gain an understanding of anatomy, ecology, genetics, and cellular biology through practical and theoretical learning methods.' },
  { name: 'Business Studies', icon: '💼', description: 'This course offers a comprehensive overview of business practices. Students will learn about management, economics, marketing, and entrepreneurship, along with practical application and case studies.' },
  { name: 'Chemistry', icon: '🧪', description: 'Chemistry explores the properties, structure, and reactions of matter. The course emphasizes laboratory experiments, chemical safety, and understanding the scientific method.' },
  { name: 'Computer Science', icon: '💻', description: 'Students will dive into the world of programming, algorithms, data structures, and computer hardware. This course focuses on developing critical problem-solving skills using modern programming languages and tools.' },
  { name: 'Digital Technology', icon: '🖥️', description: 'This course equips students with practical knowledge in digital technology, from coding in various programming languages to building digital projects, including websites and mobile apps.' },
  { name: 'English', icon: '📚', description: 'English focuses on developing language skills, including reading comprehension, writing, literature analysis, and communication techniques. Students will study classic and modern literature while improving their written and spoken English.' },
  { name: 'Food & Nutrition', icon: '🍎', description: 'This course examines the science of food, health, and nutrition. Students will learn about human nutrition, dietary needs, and the impact of food on overall health, with practical applications in meal planning and food science.' },
  { name: 'French', icon: '🇫🇷', description: 'French is designed to teach students the fundamentals of the French language, including grammar, vocabulary, pronunciation, and conversational skills, as well as an exploration of French culture and history.' },
  { name: 'Geography', icon: '🌍', description: 'Geography covers the physical features of the Earth, including landforms, climates, and ecosystems. It also delves into human geography, looking at population dynamics, urbanization, and environmental challenges.' },
];

const Curriculum = () => {
  return (
    <div className="curriculum-page">
      <section className="curriculum-header">
        <h1>Our Curriculum</h1>
        <p className="subtitle">Explore our diverse courses and their comprehensive descriptions.</p>
      </section>
      
      <section className="curriculum-grid">
        {curriculumData.map((subject, index) => (
          <div key={index} className="curriculum-item">
            <div className="icon">{subject.icon}</div>
            <h3>{subject.name}</h3>
            <p>{subject.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Curriculum;
