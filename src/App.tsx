// src/App.tsx
import { Button } from './components/Button';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Helios UI - Button Component</h1>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', alignItems: 'center' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Button loading>Loading...</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}

export default App;