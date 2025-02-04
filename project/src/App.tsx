import React, { useState } from 'react';
import { Menu, X, Star, BookOpen, Users, Clock, Phone, Mail, MapPin, Laptop, Heart, GraduationCap, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    {
      id: 1,
      name: 'Piano Lessons',
      description: 'Learn piano from expert instructors through live 1-on-1 classes',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=500&q=80',
      category: 'Music'
    },
    {
      id: 2,
      name: 'Java Programming',
      description: 'Master Java programming with personalized guidance and hands-on projects',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
      category: 'Coding'
    },
    {
      id: 3,
      name: 'Guitar Classes',
      description: 'Start your musical journey with personalized guitar lessons',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=500&q=80',
      category: 'Music'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Virag Kumar Patel',
      location: 'Johannesburg, South Africa',
      text: 'I would like to say thank you so much for getting me the best teacher whose knowledge, experience and method of teaching music is just out of the world. and Rick sir is such nice human being also. I am really privileged to learn from the best and credit goes to you eHobby team.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ramya Raghunandan',
      location: 'USA',
      text: 'Ananya is enjoying her piano lessons, we are seeing lots of progress day by day. I appreciate Joy sir for his patience and he is very accommodating and professional. I understand its not so easy to teach music online, but you guys are doing a great job. Thank you.',
      rating: 5
    },
    {
      id: 3,
      name: "Ayaan's mom",
      location: 'Boca Raton, Florida',
      text: 'My son is taking Java Classes from ehobby since last 5 months. My son is very happy learning Java and will always look forward to attend the class. I have never seen him taking so much interest in any other classes till now. I am very satisfied with our experience with ehobby and would highly recommend students to join ehobby.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                className="lg:hidden -ml-2 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-2xl font-bold text-indigo-600">eHobby</h1>
            </div>

            <div className="hidden lg:flex space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-indigo-600">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600">About Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>

            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Book Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-indigo-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Learn from Expert</span>
                  <span className="block text-indigo-400">Indian Tutors</span>
                </h2>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Join live online classes in Mathematics, Coding, Music, and more. Start with a free trial class today!
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Explore Courses
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
            alt="Online learning"
          />
        </div>
      </div>

      {/* Courses Section */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Book Free Trial
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At eHobby, we believe in making quality education accessible to everyone. Our platform connects passionate learners with expert Indian tutors for personalized, one-on-one online classes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-700">Expert Indian tutors with proven track record</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Laptop className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-700">Interactive online learning platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-700">Structured curriculum and learning path</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?auto=format&fit=crop&w=500&q=80"
                alt="Music class"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80"
                alt="Coding class"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentors Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mentors</h2>
          <p className="text-center text-gray-600 mb-12">
            We onboard trained professionals who are experts in their respective fields.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Customized teaching methods</h3>
              <p className="text-gray-600">Tailored approach for each student's needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Learning challenge experts</h3>
              <p className="text-gray-600">Identify and address learning obstacles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Timely feedback</h3>
              <p className="text-gray-600">Regular progress updates and support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Laptop className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Technology integration</h3>
              <p className="text-gray-600">Modern tools for enhanced learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Why parents trust us ❤️</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-4">Looking to connect with us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="flex-shrink-0 h-6 w-6 text-indigo-400" />
                  <p className="text-sm">
                    Registered Office Address:<br />
                    TITAS APRTMENT, F NO - 02, BL- A, TEGHARIA MAIN ROAD,<br />
                    Kolkata, West Bengal, India, 700059
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-indigo-400" />
                  <a href="tel:+919432115091" className="hover:text-white">+91 94321 15091</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-indigo-400" />
                  <a href="mailto:hello@ehobby.in" className="hover:text-white">hello@ehobby.in</a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Book a Demo</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
              <p className="text-sm mb-4">Intriped Innovation Pvt Ltd.</p>
              <p className="text-sm">Copyright @ehobby.in 2025<br />All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;