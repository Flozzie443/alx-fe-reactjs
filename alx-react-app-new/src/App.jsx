import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ Import Counter

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <Counter />   {/* ✅ Use Counter here */}
      <Footer />
    </div>
  );
}

export default App;
