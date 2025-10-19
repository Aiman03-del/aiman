'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          className="min-h-screen flex items-center justify-center p-6"
          style={{
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-md w-full text-center">
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <AlertTriangle 
                className="w-16 h-16 mx-auto mb-4 opacity-70"
                style={{ color: 'var(--foreground)' }}
              />
            </motion.div>
            
            <motion.h1
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--foreground)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Oops! Something went wrong
            </motion.h1>
            
            <motion.p
              className="text-lg opacity-70 mb-8"
              style={{ color: 'var(--foreground)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We&apos;re sorry, but something unexpected happened. 
              Please try refreshing the page.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={this.handleReset}
                variant="default"
                size="lg"
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
              
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </Button>
            </motion.div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.details
                className="mt-8 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <summary className="cursor-pointer text-sm opacity-70 mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </motion.details>
            )}
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
