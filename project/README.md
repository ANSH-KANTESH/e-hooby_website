# eHobby Website Enhancement

A modern React-based website for eHobby, featuring a beautiful UI with Reactjs, Tailwind CSS and TypeScript.

## Project Setup Guide

1. Create the project structure:
```bash
mkdir eHobby-Website-Enhancement
cd eHobby-Website-Enhancement
npm create vite@latest . -- --template react-ts
```

2. Install dependencies:
```bash
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

4. Project Structure:
```
eHobby-Website-Enhancement/
│── src/                            
│   ├── components/                  
│   │   ├── Navbar.tsx              
│   │   ├── Footer.tsx              
│   │   ├── CourseCard.tsx          
│   │   ├── Button.tsx              
│   │   ├── Testimonials.tsx        
│   ├── pages/                      
│   │   ├── Home.tsx                
│   │   ├── Courses.tsx             
│   │   ├── About.tsx               
│   ├── styles/                     
│   │   ├── index.css               
│   ├── App.tsx                     
│   ├── main.tsx                    
│── .gitignore                      
│── package.json                    
│── README.md                       
```

5. Configure TypeScript:
   - Update tsconfig.json with proper configurations
   - Enable strict mode and React JSX support

6. Start Development:
```bash
npm run dev
```

## Features

- Responsive design with Tailwind CSS
- Modern UI components
- TypeScript support
- Lucide React icons
- Component-based architecture
- Optimized performance

## Development Guidelines

1. Component Structure:
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Implement proper error handling

2. Styling:
   - Use Tailwind CSS classes
   - Maintain consistent spacing
   - Follow responsive design principles

3. Performance:
   - Lazy load components when possible
   - Optimize images
   - Minimize bundle size

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run type-check`: Check TypeScript types

