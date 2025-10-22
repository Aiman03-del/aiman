'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, Copy, Check } from 'lucide-react';
import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    // Log the error to console for debugging
    console.error('Application Error:', error);
  }, [error]);

  const copyToClipboard = async (text: string, type: 'message' | 'id') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'message') {
        setCopiedMessage(true);
        setTimeout(() => setCopiedMessage(false), 2000);
      } else {
        setCopiedId(true);
        setTimeout(() => setCopiedId(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getErrorMessage = (error: Error) => {
    if (error.message.includes('404')) {
      return 'Page not found';
    }
    if (error.message.includes('500')) {
      return 'Server error occurred';
    }
    if (error.message.includes('Network')) {
      return 'Network connection issue';
    }
    if (error.message.includes('ChunkLoadError')) {
      return 'Failed to load files';
    }
    return 'An unexpected error occurred';
  };

  const getErrorDetails = (error: Error & { digest?: string }) => {
    return {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toLocaleString('en-US'),
    };
  };

  const errorDetails = getErrorDetails(error);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--background)' }}>
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
            <div className="p-8 rounded-full border-4" style={{ 
              backgroundColor: 'var(--foreground)', 
              opacity: 0.1,
              borderColor: 'var(--foreground)',
              borderOpacity: 0.2
            } as React.CSSProperties}>
              <AlertTriangle className="h-20 w-20" style={{ 
                color: 'var(--foreground)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }} />
            </div>
          </motion.div>

          {/* Error Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-serif font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Oops! Something went wrong
          </motion.h1>

          {/* Error Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg mb-8 opacity-70"
            style={{ color: 'var(--foreground)' }}
          >
            {getErrorMessage(error)}
          </motion.p>

          {/* Error Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="backdrop-blur-sm p-6 rounded-xl shadow-sm mb-8 text-left"
            style={{
              backgroundColor: 'var(--background)',
              opacity: 0.9,
              border: '1px solid var(--foreground)',
              borderOpacity: 0.1
            } as React.CSSProperties}
          >
            <div className="flex items-center gap-2 mb-4">
              <Bug className="h-6 w-6" style={{ 
                color: 'var(--foreground)',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
              }} />
              <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                Error Details
              </h3>
            </div>
            
            <div className="space-y-4 text-sm">
              {/* Error Message Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ef4444' }}></div>
                    Error Message
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(errorDetails.message, 'message')}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs transition-all duration-200 border"
                    style={{
                      backgroundColor: 'var(--foreground)',
                      opacity: 0.1,
                      color: 'var(--foreground)',
                      borderColor: 'var(--foreground)',
                      borderOpacity: 0.3
                    } as React.CSSProperties}
                  >
                    {copiedMessage ? (
                      <Check className="h-4 w-4" style={{ 
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                      }} />
                    ) : (
                      <Copy className="h-4 w-4" style={{ 
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                      }} />
                    )}
                    {copiedMessage ? 'Copied!' : 'Copy'}
                  </motion.button>
                </div>
                <div className="relative">
                  <div className="p-4 rounded-lg border-2" style={{ 
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--foreground)',
                    borderOpacity: 0.2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  } as React.CSSProperties}>
                    <p className="font-mono text-sm break-all leading-relaxed" style={{ 
                      color: 'var(--foreground)',
                      fontWeight: '500'
                    }}>
                      {errorDetails.message}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Error ID Section */}
              {errorDetails.digest && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
                      Error ID
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(errorDetails.digest!, 'id')}
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs transition-all duration-200 border"
                      style={{
                        backgroundColor: 'var(--foreground)',
                        opacity: 0.1,
                        color: 'var(--foreground)',
                        borderColor: 'var(--foreground)',
                        borderOpacity: 0.3
                      } as React.CSSProperties}
                    >
                      {copiedId ? (
                        <Check className="h-4 w-4" style={{ 
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                        }} />
                      ) : (
                        <Copy className="h-4 w-4" style={{ 
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                        }} />
                      )}
                      {copiedId ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                  <div className="relative">
                    <div className="p-4 rounded-lg border-2" style={{ 
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--foreground)',
                      borderOpacity: 0.2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    } as React.CSSProperties}>
                      <p className="font-mono text-sm" style={{ 
                        color: 'var(--foreground)',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                      }}>
                        {errorDetails.digest}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Timestamp Section */}
              <div className="space-y-2">
                <span className="font-bold text-base flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
                  Timestamp
                </span>
                <div className="flex items-center gap-3 p-3 rounded-lg" style={{ 
                  backgroundColor: 'var(--foreground)', 
                  opacity: 0.05 
                }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
                  <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                    {errorDetails.timestamp}
                  </p>
                </div>
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
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)'
              }}
            >
              <RefreshCw className="h-5 w-5" style={{ 
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
              }} />
              Try Again
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 hover:opacity-80"
                style={{
                  borderColor: 'var(--foreground)',
                  color: 'var(--foreground)',
                  backgroundColor: 'transparent'
                }}
              >
                <Home className="h-5 w-5" style={{ 
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                }} />
                Go to Home
              </Link>
            </motion.div>
          </motion.div>

          {/* Help Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm opacity-50 mt-8"
            style={{ color: 'var(--foreground)' }}
          >
            If the problem persists, please contact us with these error details
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
