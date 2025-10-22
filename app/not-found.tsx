import { motion } from 'framer-motion';
import { FileX, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 404 Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="p-6 rounded-full" style={{ backgroundColor: 'var(--foreground)', opacity: 0.1 }}>
              <FileX className="h-16 w-16" style={{ color: 'var(--foreground)' }} />
            </div>
          </motion.div>

          {/* 404 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl font-serif font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-semibold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            পেজটি খুঁজে পাওয়া যায়নি
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg mb-8 opacity-70"
            style={{ color: 'var(--foreground)' }}
          >
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি বিদ্যমান নেই। 
            URL টি সঠিক কিনা পরীক্ষা করুন অথবা হোম পেজে ফিরে যান।
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              asChild
            >
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)'
                }}
              >
                <Home className="h-4 w-4" />
                হোম পেজে যান
              </Link>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2"
              style={{
                borderColor: 'var(--foreground)',
                color: 'var(--foreground)',
                backgroundColor: 'transparent'
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              পূর্ববর্তী পেজে যান
            </motion.button>
          </motion.div>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm opacity-50 mt-8"
            style={{ color: 'var(--foreground)' }}
          >
            যদি আপনি মনে করেন এটি একটি ভুল, দয়া করে আমাদের জানান
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
