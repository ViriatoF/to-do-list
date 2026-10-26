import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('composant App', () => {
  it('affiche le titre et les deux premières tâches initiales', () => {
    render(<App />);

    expect(screen.getByText('To do list')).toBeDefined();
    expect(screen.getByText('première tache')).toBeDefined();
    expect(screen.getByText('deuxième tache')).toBeDefined();
  });

  it('supprime une tâche au clic sur le bouton X correspondant', () => {
    render(<App />);

    const boutonsSupprimer = screen.getAllByRole('button', { name: 'X' });

    fireEvent.click(boutonsSupprimer[0]);

    expect(screen.queryByText('première tache')).toBeNull();
    expect(screen.getByText('deuxième tache')).toBeDefined();
  });
});
