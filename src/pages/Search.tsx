import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { SectionTitle, ProductCard } from '../components/ui-elements';
import { Search as SearchIcon } from 'lucide-react';

export const SearchPage = () => {
  const [query, setQuery] = useState('');
  
  const results = query 
    ? PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
        <SectionTitle title="Search Collection" />
        <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Quickly find what you're looking for across our entire catalog.</p>
        </div>

      <div className="max-w-3xl mx-auto mb-16">
        <div className="relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent h-16 pl-0 pr-6 border-b border-art-gray/30 outline-none focus:border-art-accent focus:ring-0 transition-all text-xl uppercase tracking-widest placeholder:text-gray-300"
            placeholder="SEARCH PRODUCTS, CATEGORIES..."
            autoFocus
          />
          <SearchIcon className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-art-accent transition-colors" size={24} />
        </div>
        {query && (
          <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-500">
            SHOWING RESULTS FOR "<span className="text-art-accent font-bold">{query}</span>" ({results.length} ITEMS FOUND)
          </p>
        )}
      </div>

      <div>
        {query ? (
          results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-transparent border border-art-gray/20">
                <p className="text-[10px] uppercase tracking-widest text-gray-400">NO PRODUCTS MATCHED YOUR SEARCH.</p>
            </div>
          )
        ) : (
          <div className="text-center py-24">
             <p className="text-[10px] uppercase tracking-widest text-gray-400">START TYPING TO SEE RESULTS...</p>
          </div>
        )}
      </div>
    </div>
  );
};
