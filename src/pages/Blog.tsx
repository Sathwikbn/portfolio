import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring large-scale React applications with proper state management and code organization.",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    category: "React"
  },
  {
    title: "Modern JavaScript Features You Should Know",
    excerpt: "Explore the latest JavaScript features that can make your code more efficient and easier to maintain.",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    category: "JavaScript"
  },
  {
    title: "Introduction to Web Performance Optimization",
    excerpt: "Learn essential techniques to improve your website's loading speed and overall performance.",
    date: "March 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    category: "Performance"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-4 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Insights and tutorials about web development and technology
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;