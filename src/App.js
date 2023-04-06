import './App.css';
import { ProductsList } from './components/ProductsList/ProductsList';

function App() {
  const productsList = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for product 4",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description for product 5",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description for product 6",
    },
  ];

  return (
    <div className="App">
      <h1>Products List</h1>
      <ProductsList products={productsList} />
    </div>
  );
}

export default App;
