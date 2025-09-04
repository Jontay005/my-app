import MyButton from './components/button.js';
import { Container, Title, Text, Button, Group } from '@mantine/core';

function App() {
  return (
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
  );
}

export default App;
