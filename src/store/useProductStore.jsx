import create from 'zustand';



const useProductStore = create((set) => ({
  products: [],
  total: 0,

  // Set initial products and calculate total
  setProducts: (products) => set(() => ({
    products,
    total: products.reduce((sum, product) => sum + product.price * product.quantity, 0)
  })),

  // Increase quantity and update total
  increase: (id) => set((state) => {
    console.log(id);
    const updatedProducts = state.products.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    const newTotal = state.total + state.products.find((product) => product.id === id).price;
    return { products: updatedProducts, total: newTotal };
  }),

  // Decrease quantity and update total
  decrease: (id) => set((state) => {
    const product = state.products.find((product) => product.id === id);
    if (product && product.quantity > 0) {
      const updatedProducts = state.products.map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
      );
      const newTotal = state.total - product.price;

      return { products: updatedProducts, total: newTotal };
    }
    return state;
  })
}));

export default useProductStore;
