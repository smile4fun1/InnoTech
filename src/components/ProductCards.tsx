import { motion } from 'framer-motion'

const products = [
  { id: 1, title: 'Product 1', description: 'Description for Product 1' },
  { id: 2, title: 'Product 2', description: 'Description for Product 2' },
  { id: 3, title: 'Product 3', description: 'Description for Product 3' },
]

const ProductCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-bg-beige rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={`https://source.unsplash.com/random/400x300?product=${product.id}`}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCards
