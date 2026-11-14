import React, { useState } from 'react';
import { ExternalLink, Instagram, Facebook, Youtube, Sparkles, Filter } from 'lucide-react';
import { SOCIAL_POSTS, SocialPost } from '../data/socialReviewsData';

export const SocialFeedSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'WisdaCare' | 'WisdaSchool'>('all');

  const filteredPosts = selectedFilter === 'all'
    ? SOCIAL_POSTS
    : SOCIAL_POSTS.filter((p) => p.division === selectedFilter);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#168038] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Community Highlights &amp; Social Feeds</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2558] tracking-tight">
              Recent posts, stories &amp; expert explainers.
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Stay connected with daily learning tidbits from WisdaSchool and wellness updates, webinars, and reels from WisdaCare.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl shrink-0">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white text-[#0a2558] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setSelectedFilter('WisdaCare')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === 'WisdaCare'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              WisdaCare
            </button>
            <button
              onClick={() => setSelectedFilter('WisdaSchool')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === 'WisdaSchool'
                  ? 'bg-white text-[#0a2558] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              WisdaSchool
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post: SocialPost) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image / Thumbnail */}
                {post.image && (
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs ${
                        post.division === 'WisdaCare'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#0a2558] text-white'
                      }`}>
                        {post.division}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 shadow-xs">
                      {post.platform === 'Instagram' && <Instagram className="w-4 h-4 text-pink-600" />}
                      {post.platform === 'Facebook' && <Facebook className="w-4 h-4 text-blue-600" />}
                      {post.platform === 'YouTube' && <Youtube className="w-4 h-4 text-red-600" />}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    {post.likes && (
                      <>
                        <span>·</span>
                        <span className="text-slate-500">{post.likes}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0a2558] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link to Official Post */}
              <div className="p-5 pt-0">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold text-[#0a2558] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    View on {post.platform}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#168038]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Channels Strip */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-slate-900 block">Follow our official channels directly</span>
            <span className="text-xs text-slate-500">Daily educational carousels, health tips, and classroom stories</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://www.instagram.com/wisda_care/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>WisdaCare Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/wisdacare/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1.5"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>WisdaCare Facebook</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61595978941076"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>WisdaSchool Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@Wisdacare"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-red-50 text-red-700 hover:bg-red-100 transition-colors flex items-center gap-1.5"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>WisdaCare YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
