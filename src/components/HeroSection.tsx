"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const scrollToHumanizer = () => {
    document.getElementById('humanizer')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          {/* Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
              🚀 Most Highly Sophisticated AI Humanization Algorithms
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-poppins mb-6">
            Transform{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Text
            </span>{' '}
            into{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Human Content
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Mr.JM AI Humanizer Tool employs the most highly sophisticated algorithms with advanced pattern recognition, 
            contextual analysis, and natural language processing to convert AI-generated text into perfectly authentic, 
            human-like content that seamlessly bypasses all AI detection systems.
          </p>

          {/* Key Benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Bypass AI Detection</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Maintain Original Meaning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>100% Free to Use</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Instant Results</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              onClick={scrollToHumanizer}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium"
            >
              Try Free Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-gray-900 font-poppins">500K+</div>
              <div className="text-sm text-gray-600 mt-1">Texts Humanized</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-gray-900 font-poppins">99.9%</div>
              <div className="text-sm text-gray-600 mt-1">Success Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-gray-900 font-poppins">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;