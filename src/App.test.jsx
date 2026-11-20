import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('composant App', () => {
  it('affiche le titre', () => {
    render(<App />);

    expect(screen.getByText('To do list Vito')).toBeDefined();
  });

  it('Affiche les deux premières tâches initiales', () => {
    render(<App />);

    expect(screen.getByText('première tache')).toBeDefined();
    expect(screen.getByText('deuxième tache')).toBeDefined();
  });

  it("Afficher le bouton d'ajout de tâche", () => {
    render(<App />);

    expect(screen.getByRole('button', { name: 'Ajouter' })).toBeDefined();
  });

  it('Afficher le bouton supprimer', () => {
    render(<App />);

    expect(screen.getAllByRole('button', { name: 'X' })).toBeDefined();
  });

  it('Afficher le bouton toggle', () => {
    render(<App />);

    expect(screen.getAllByRole('checkbox')).toBeDefined();
  });

  it('Ajouter une nouvelle tâche', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Nouvelle tâche...');

    fireEvent.change(input, { target: { value: 'troisième tache' } });
    fireEvent.click(screen.getByRole('button', { name: 'Ajouter' }));
  });

  it('supprime une tâche au clic sur le bouton X correspondant', () => {
    render(<App />);

    const boutonsSupprimer = screen.getAllByRole('button', { name: 'X' });

    fireEvent.click(boutonsSupprimer[0]);

    expect(screen.queryByText('première tache')).toBeNull();
    expect(screen.getByText('deuxième tache')).toBeDefined();
  });
});
