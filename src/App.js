import MyButton from './components/button.js';
import { Container, Title, Text, Button, Group } from '@mantine/core';

function App() {
  return (
<<<<<<< HEAD
    <Container>
      <Title order={1} mt="md" mb="lg">
        John’s Website
      </Title>

      <Text size="lg" mb="sm">
        Welcome to John’s Website
      </Text>

      <Text mb="lg">This is where the main content of your site goes.</Text>

      <Group>
        <MyButton />
        <Button>I'm a Mantine Button</Button>
      </Group>

      <footer style={{ marginTop: '2rem' }}>
        <Text size="sm" c="dimmed">© 2025 John’s Website</Text>
      </footer>
    </Container>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          John's App Version 2 Learn React with John Doe - 2025
        </a>
      </header>
    </div>
>>>>>>> 4a8f5ccc5fb934258acf9d67512f82a51ad378ae
  );
}

export default App;
