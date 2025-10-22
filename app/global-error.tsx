'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import Link from 'next/link';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to console for debugging
    console.error('Global Application Error:', error);
  }, [error]);

  const getErrorMessage = (error: Error) => {
    if (error.message.includes('404')) {
      return 'পেজটি খুঁজে পাওয়া যায়নি';
    }
    if (error.message.includes('500')) {
      return 'সার্ভার এরর হয়েছে';
    }
    if (error.message.includes('Network')) {
      return 'নেটওয়ার্ক সংযোগ সমস্যা';
    }
    if (error.message.includes('ChunkLoadError')) {
      return 'ফাইল লোড করতে সমস্যা হচ্ছে';
    }
    if (error.message.includes('Hydration')) {
      return 'পেজ লোড করতে সমস্যা হচ্ছে';
    }
    return 'একটি গুরুতর এরর হয়েছে';
  };

  const getErrorDetails = (error: Error) => {
    return {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toLocaleString('bn-BD'),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
    };
  };

  const errorDetails = getErrorDetails(error);

  return (
    <html>
      <body style={{ margin: 0, padding: 0, backgroundColor: 'var(--background)' }}>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Error Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="p-6 rounded-full" style={{ backgroundColor: '#ef4444', opacity: 0.1 }}>
                  <AlertTriangle className="h-16 w-16 text-red-500" />
                </div>
              </motion.div>

              {/* Error Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-serif font-bold mb-4 text-gray-900 dark:text-white"
              >
                গুরুতর সমস্যা!
              </motion.h1>

              {/* Error Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg mb-8 text-gray-600 dark:text-gray-300"
              >
                {getErrorMessage(error)}
              </motion.p>

              {/* Error Details Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8 text-left"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Bug className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Error Details
                  </h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Error Message:</span>
                    <p className="font-mono text-xs bg-gray-200 dark:bg-gray-700 p-2 rounded mt-1 break-all text-gray-800 dark:text-gray-200">
                      {errorDetails.message}
                    </p>
                  </div>
                  
                  {errorDetails.digest && (
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Error ID:</span>
                      <p className="font-mono text-xs bg-gray-200 dark:bg-gray-700 p-2 rounded mt-1 text-gray-800 dark:text-gray-200">
                        {errorDetails.digest}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Time:</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{errorDetails.timestamp}</p>
                  </div>

                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">URL:</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 break-all">{errorDetails.url}</p>
                  </div>
                </div>
              </motion.div>

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
                  onClick={reset}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                >
                  <RefreshCw className="h-4 w-4" />
                  আবার চেষ্টা করুন
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  asChild
                >
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Home className="h-4 w-4" />
                    হোম পেজে যান
                  </Link>
                </motion.button>
              </motion.div>

              {/* Help Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm text-gray-500 dark:text-gray-400 mt-8"
              >
                যদি সমস্যা চলতে থাকে, দয়া করে এই error details সহ আমাদের সাথে যোগাযোগ করুন
              </motion.p>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}
