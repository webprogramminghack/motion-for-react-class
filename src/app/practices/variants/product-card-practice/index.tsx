import { Check, Loader2, Plus, ShoppingCart, Star } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  gradient: string;
};

export const ProductCardDemo = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      rating: 4.5,
      image: '🎧',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      rating: 4.8,
      image: '⌚',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      rating: 4.2,
      image: '💻',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      price: 159.99,
      rating: 4.9,
      image: '⌨️',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  // Card variants
  const cardVariants: Variants = {
    idle: {
      scale: 1,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    selected: {
      scale: 1,
      boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
    loading: {
      scale: 0.98,
      opacity: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Image variants
  const imageVariants: Variants = {
    idle: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
    selected: {
      scale: 1.2,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
      },
    },
    loading: {
      scale: 0.9,
      rotate: 0,
    },
  };

  // Price variants
  const priceVariants: Variants = {
    idle: {
      scale: 1,
      color: '#e5e7eb',
    },
    hover: {
      scale: 1.05,
      color: '#8b5cf6',
      transition: {
        duration: 0.2,
      },
    },
    selected: {
      scale: 1.1,
      color: '#8b5cf6',
    },
    loading: {
      scale: 1,
      color: '#e5e7eb',
    },
  };

  // Button variants
  const buttonVariants: Variants = {
    idle: {
      backgroundColor: '#8b5cf6',
      scale: 1,
    },
    hover: {
      backgroundColor: '#7c3aed',
      scale: 1.05,
    },
    selected: {
      backgroundColor: '#22c55e',
      scale: 1,
    },
    loading: {
      backgroundColor: '#6b7280',
      scale: 1,
    },
  };

  const handleAddToCart = async (productId: number) => {
    if (loadingProducts.includes(productId)) return;

    setLoadingProducts([...loadingProducts, productId]);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoadingProducts(loadingProducts.filter((id) => id !== productId));
    setSelectedProducts([...selectedProducts, productId]);
    setCartCount(cartCount + 1);
  };

  const getProductState = (productId: number) => {
    if (loadingProducts.includes(productId)) return 'loading';
    if (selectedProducts.includes(productId)) return 'selected';
    return 'idle';
  };

  return (
    <div className='relative w-full'>
      {/* Cart Counter */}
      <motion.div
        className='absolute top-lg right-lg z-10 flex items-center gap-sm rounded-full bg-purple-600 px-lg py-sm shadow-lg'
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        key={cartCount}
        transition={{
          type: 'spring' as const,
          stiffness: 500,
          damping: 15,
        }}
      >
        <ShoppingCart className='size-20 text-white' />
        <motion.span
          key={cartCount}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring' as const,
            stiffness: 500,
            damping: 10,
          }}
          className='text-md-semibold text-white'
        >
          {cartCount}
        </motion.span>
      </motion.div>

      {/* Product Grid */}
      <div className='grid grid-cols-2 gap-xl p-xl md:grid-cols-4'>
        {products.map((product) => {
          const state = getProductState(product.id);
          return (
            <motion.div
              key={product.id}
              className='relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 p-lg'
              variants={cardVariants}
              initial='idle'
              animate={state}
              whileHover={state === 'idle' ? 'hover' : state}
            >
              {/* Product Image */}
              <motion.div
                className={cn(
                  'mb-lg flex h-120 items-center justify-center rounded-lg bg-gradient-to-br',
                  product.gradient
                )}
                variants={imageVariants}
              >
                <span className='text-6xl'>{product.image}</span>
              </motion.div>

              {/* Product Info */}
              <div className='space-y-sm'>
                <h3 className='text-neutral-100 text-sm-semibold'>
                  {product.name}
                </h3>

                {/* Rating */}
                <div className='flex items-center gap-xs'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'size-12',
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-neutral-600'
                      )}
                    />
                  ))}
                  <span className='text-neutral-400 text-xs-regular'>
                    {product.rating}
                  </span>
                </div>

                {/* Price - moved to right */}
                <div className='flex items-center justify-between'>
                  <span className='text-neutral-500 text-sm-regular'>
                    Price
                  </span>
                  <motion.p
                    className='text-lg-semibold'
                    variants={priceVariants}
                  >
                    ${product.price}
                  </motion.p>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  className='flex h-36 w-full cursor-pointer items-center justify-center gap-sm rounded-lg text-sm-semibold text-white'
                  variants={buttonVariants}
                  onClick={() => handleAddToCart(product.id)}
                  disabled={state !== 'idle'}
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 className='size-16 animate-spin' />
                      Adding...
                    </>
                  ) : state === 'selected' ? (
                    <>
                      <Check className='size-16' />
                      Added
                    </>
                  ) : (
                    <>
                      <Plus className='size-16' />
                      Add to Cart
                    </>
                  )}
                </motion.button>
              </div>

              {/* Selected Badge */}
              {state === 'selected' && (
                <motion.div
                  className='absolute top-md right-md flex size-32 items-center justify-center rounded-full bg-green-500'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring' as const,
                    stiffness: 500,
                  }}
                >
                  <Check className='size-16 text-white' strokeWidth={3} />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
