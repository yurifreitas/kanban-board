import express from 'express';
import { v4 as uuidv4 } from 'uuid';

interface Card {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

const cards: Card[] = [
  { id: uuidv4(), titulo: 'Card 1', conteudo: 'Conteudo do card 1', lista: 'Lista 1' },
  { id: uuidv4(), titulo: 'Card 2', conteudo: 'Conteudo do card 2', lista: 'Lista 2' },
  { id: uuidv4(), titulo: 'Card 3', conteudo: 'Conteudo do card 3', lista: 'Lista 3' },
];

const app = express();
app.use(express.json());

// Endpoint to handle user login
app.post('/login', (req, res) => {
  // Handle user login logic here
});

// Endpoint to get all cards
app.get('/cards', (req, res) => {
  res.send(cards);
});

// Endpoint to create a new card
app.post('/cards', (req, res) => {
  const { titulo, conteudo, lista } = req.body;
  const newCard: Card = { id: uuidv4(), titulo, conteudo, lista };
  cards.push(newCard);
  res.send(newCard);
});

// Endpoint to update an existing card
app.put('/cards/:id', (req, res) => {
  const id = req.params.id;
  const { titulo, conteudo, lista } = req.body;
  const cardIndex = cards.findIndex((card) => card.id === id);
  if (cardIndex === -1) {
    res.sendStatus(404);
  } else {
    const updatedCard = { ...cards[cardIndex], titulo, conteudo, lista };
    cards[cardIndex] = updatedCard;
    res.send(updatedCard);
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
