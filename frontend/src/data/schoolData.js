/**
 * Prince Public School, Simari — Static Content Data
 * All school information centralized for easy management
 */

export const schoolInfo = {
  name: "Prince Public School",
  tagline: "Nurturing Minds, Building Futures Since 1998",
  shortName: "PPS",
  established: 1998,
  medium: "English Medium",
  type: "Co-Educational",
  affiliation: "Bihar State Board",
  address: {
    full: "Simari, Bisfi (South Side of Simari Bazar), Madhubani, Bihar, India",
    short: "Simari, Bisfi, Madhubani",
    city: "Madhubani",
    state: "Bihar",
    country: "India",
    pinCode: "847222",
  },
  contact: {
    phone: "+91 8873541202",
    phoneRaw: "8873541202",
    email: "princepublicschool1998@gmail.com",
    admissionEmail: "princepublicschool1998@gmail.com",
  },
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14344.15!2d86.42!3d26.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb00000000001%3A0x1!2sSimari%2C+Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const stats = [
  { label: "Years of Excellence", value: 27, suffix: "+" },
  { label: "Happy Students", value: 500, suffix: "+" },
  { label: "Expert Teachers", value: 25, suffix: "+" },
  { label: "Success Rate", value: 95, suffix: "%" },
];

export const whyChooseUs = [
  {
    icon: "GraduationCap",
    title: "Academic Excellence",
    description:
      "Our rigorous academic program ensures every student achieves their highest potential with a curriculum designed for holistic development.",
  },
  {
    icon: "Users",
    title: "Experienced Faculty",
    description:
      "Our dedicated team of 25+ qualified educators brings years of experience and passion for teaching to every classroom.",
  },
  {
    icon: "BookOpen",
    title: "Modern Curriculum",
    description:
      "We blend traditional values with modern pedagogy, incorporating smart classrooms and digital learning tools for an engaging experience.",
  },
  {
    icon: "Trophy",
    title: "Holistic Development",
    description:
      "Beyond academics, we nurture talent through sports, arts, cultural activities, and personality development programs.",
  },
];

export const leadershipMessages = [
  {
    role: "Manager",
    name: "(Manager)",
    title: "Manager's Message",
    image: null,
    message: [
      "It is a matter of great pride for us to provide education to the young minds of the growing metropolis of India. We are sure that keeping in the true tradition of PRINCE PUBLIC SCHOOL,AT-P.O. SIMARI, BISFI, (South Side od Simari Bazar), MADHUBANI - the school will continue to set higher standards of excellence in education.",
      "At PRINCE PUBLIC SCHOOL, we seek to develop the child's physical, emotional and spiritual being, and we value equally the practical, the artistic, the social and the intellectual. The aim of PRINCE PUBLIC SCHOOL is to place into the world balanced, well rounded and emotionally stable young people with a depth of understanding about themselves, their relationship with others, society and the times in which they find themselves. Our School aims to provide a foundation for community life where parents, grandparents, and children experience the most inspired, spiritual and loving education available in Kunda, Pratapgarh by teachers who are welcoming, approachable and who demonstrate the innate qualities of what is it to be human, those innate qualities that are nurtured and brought to the fore by the Philosophies of S. Radhakrishan.",
      "A Persian Philosopher being asked by what method he has acquired so much knowledge, answered \"By not being prevented by shame from asking questions when I was ignorant.\""
    ],
  },
  {
    role: "Principal",
    name: "(Principal)",
    title: "Message by Principal",
    image: null,
    message: [
      "Dear Parents and Students, It is with great pleasure that I welcome you to PRINCE PUBLIC SCHOOL website. As Principal I am hugely impressed by the commitment of the management and the staff for providing excellent all-round education for our students in our state of the art facilities."
    ],
  }
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Notice Board", path: "/notices" },
  {
    name: "Academics",
    path: "/academics",
    children: [
      { name: "Curriculum", path: "/academics#curriculum" },
      { name: "Facilities", path: "/academics#facilities" },
    ],
  },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Disclosure", path: "/disclosure" },
  { name: "Contact", path: "/contact" },
];

export const notices = [
  {
    id: 1,
    title: "New Academic Session 2026-27 Admissions Open",
    date: "April 10, 2026",
    category: "admission",
    isImportant: true,
  },
  {
    id: 2,
    title: "Annual Sports Day Celebration — April 25, 2026",
    date: "April 8, 2026",
    category: "event",
    isImportant: false,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Scheduled for April 20",
    date: "April 5, 2026",
    category: "general",
    isImportant: true,
  },
  {
    id: 4,
    title: "Summer Vacation: May 15 to June 30, 2026",
    date: "April 1, 2026",
    category: "holiday",
    isImportant: false,
  },
  {
    id: 5,
    title: "Inter-School Quiz Competition Results Announced",
    date: "March 28, 2026",
    category: "event",
    isImportant: false,
  },
];

export const facilities = [
  {
    icon: "Monitor",
    title: "Smart Classrooms",
    description:
      "Technology-enabled classrooms with digital boards and audio-visual learning tools for an immersive educational experience.",
  },
  {
    icon: "FlaskConical",
    title: "Science Laboratory",
    description:
      "Well-equipped physics, chemistry, and biology labs where students gain hands-on practical knowledge.",
  },
  {
    icon: "Laptop",
    title: "Computer Lab",
    description:
      "Modern computer lab with high-speed internet, providing students with essential digital literacy skills.",
  },
  {
    icon: "BookOpen",
    title: "Library",
    description:
      "An extensive library housing thousands of books, magazines, and digital resources to cultivate a reading culture.",
  },
  {
    icon: "Dumbbell",
    title: "Sports Ground",
    description:
      "Spacious playground with facilities for cricket, football, athletics, and various indoor games.",
  },
  {
    icon: "Music",
    title: "Activity Room",
    description:
      "Dedicated space for music, dance, art, and cultural activities fostering creativity and self-expression.",
  },
];

export const academicPrograms = [
  {
    level: "Pre-Primary",
    classes: "Nursery, LKG, UKG",
    description:
      "A play-based curriculum focused on early childhood development, motor skills, and foundational literacy through engaging activities.",
    highlights: [
      "Activity-based learning",
      "Story-telling sessions",
      "Art and craft",
      "Physical development",
    ],
  },
  {
    level: "Primary",
    classes: "Class I - V",
    description:
      "A strong academic foundation combined with co-curricular activities to develop well-rounded personalities and critical thinking skills.",
    highlights: [
      "English, Hindi, Mathematics",
      "Environmental Studies",
      "Computer Education",
      "Moral Science",
    ],
  },
  {
    level: "Middle School",
    classes: "Class VI - VIII",
    description:
      "Advanced subject knowledge with emphasis on analytical thinking, scientific temper, and communication skills.",
    highlights: [
      "Science & Technology",
      "Social Studies",
      "Mathematics",
      "Language Development",
    ],
  },
  {
    level: "Secondary",
    classes: "Class IX - X",
    description:
      "Board examination preparation with comprehensive study material, regular assessments, and individual attention.",
    highlights: [
      "Board Exam Preparation",
      "Career Guidance",
      "Competitive Exam Coaching",
      "Personality Development",
    ],
  },
];

export const admissionProcess = [
  {
    step: 1,
    title: "Online Enquiry",
    description:
      "Fill out the online admission enquiry form with student and parent details.",
    icon: "FileText",
  },
  {
    step: 2,
    title: "Document Submission",
    description:
      "Submit required documents — birth certificate, previous marksheet, transfer certificate, and passport-size photos.",
    icon: "Upload",
  },
  {
    step: 3,
    title: "Interaction Session",
    description:
      "An informal interaction with the student and parents to understand learning needs and expectations.",
    icon: "MessageCircle",
  },
  {
    step: 4,
    title: "Admission Confirmation",
    description:
      "Upon successful evaluation, receive your admission confirmation letter and complete the fee formalities.",
    icon: "CheckCircle",
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent of Class VIII Student",
    text: "Prince Public School has been a wonderful journey for my child. The teachers are extremely dedicated and the school provides a perfect balance of academics and extracurricular activities.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Parent of Class V Student",
    text: "I am very happy with the quality of education at PPS. My daughter has shown tremendous improvement in her confidence and academic performance since joining.",
    rating: 5,
  },
  {
    name: "Amit Jha",
    role: "Alumni, Batch 2020",
    text: "The foundation I received at Prince Public School shaped my future. The values and knowledge I gained here continue to guide me in my higher education journey.",
    rating: 5,
  },
];

export const galleryImages = [
  { id: 1, title: "Annual Day Celebration", category: "events" },
  { id: 2, title: "Science Exhibition", category: "academics" },
  { id: 3, title: "Sports Day", category: "sports" },
  { id: 4, title: "Republic Day Parade", category: "events" },
  { id: 5, title: "Classroom Learning", category: "academics" },
  { id: 6, title: "Library Session", category: "facilities" },
  { id: 7, title: "Computer Lab", category: "facilities" },
  { id: 8, title: "Cricket Match", category: "sports" },
  { id: 9, title: "Cultural Program", category: "events" },
];

export const aboutHistory = {
  founding:
    "Prince Public School was established in 1998 with a vision to provide quality English-medium education to the children of Simari and surrounding areas in Madhubani district.",
  growth:
    "Over the past 27 years, the school has grown from a modest beginning to a well-established educational institution, producing hundreds of successful alumni who have excelled in various fields.",
  mission:
    "One of the most important decisions that a parent makes is the choice of education for his child. An equally important decision that a school can make is to further that choice. At we have taken that plunge. We have given ourselves a mandate to provide each child with a never ending thirst for knowledge. To carry out this mandate we have left no stone unturned to inculcate the 'how and why' frame of mind in every student. The school has aimed to commit itself to the cause of holistic education which is focused on the intellectual, spiritual, emotional, physical and cognitive needs of its students.",
  vision:
    "Our vision is to build our students articulate, emotionally intelligent, caring, outward-looking and tolerant. By the end of this year, the school endeavors to ensure that Technology Enabled Learning becomes an integral part of every classroom. As a service towards community, we aim to achieve 100% literacy in the neighbouring village with our available resources. PRINCE PUBLIC SCHOOL is also committed to plant 1000 trees in the neighbourhood in order to create environmental awareness and sensitivity.",
  commitment:
    "PRINCE PUBLIC SCHOOL is profoundly committed to exacting high standards, focusing on value education, social sensitivity and spiritual evolution. Our aim is to inspire the love of learning and a genuine respect for all members of our multi-cultural, multi-faith community.",
  values: [
    "Academic Excellence",
    "Integrity & Ethics",
    "Respect & Inclusivity",
    "Innovation in Learning",
    "Community Engagement",
  ],
};

export const footerLinks = {
  quickLinks: [
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ],
  resources: [
    { name: "Public Disclosure", path: "/disclosure" },
    { name: "Academic Calendar", path: "#" },
    { name: "Fee Structure", path: "#" },
    { name: "School Uniform", path: "#" },
    { name: "Transport", path: "#" },
    { name: "Downloads", path: "#" },
  ],
};
