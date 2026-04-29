import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard, SectionTitle } from '../components/ui-elements';
import { Filter } from 'lucide-react';

export const ProductsPage = () => {
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000);

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = PRODUCTS.filter(p =>
    (category === 'All' || p.category === category) && p.price <= maxPrice
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <SectionTitle title="The Collection" />

      <div className="flex flex-col lg:flex-row gap-20">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-12 h-fit lg:sticky lg:top-32">
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-8 border-b border-art-gray/20 pb-4">
              Categories
            </h4>
            <div className="flex flex-col gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-left text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                    category === cat ? "text-art-accent translate-x-2" : "text-art-text hover:text-art-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-8 border-b border-art-gray/20 pb-4">
              Price Limit / ₹{maxPrice}
            </h4>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-1 bg-art-text appearance-none cursor-pointer accent-art-accent"
            />
            <div className="flex justify-between text-[9px] uppercase tracking-widest text-gray-400 mt-4 font-bold">
              <span>₹0</span>
              <span>₹2000</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-48 bg-art-muted/50 border border-dashed border-art-gray/30">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Archive entry not found / 404</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
