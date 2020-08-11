/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { toMeasureHealth, sortPlayers } from '../app';
// import { toMeasureHealth } from '../app';

test('checks the health status of players', () => {
  const result = toMeasureHealth({ name, health: 70 });

  expect(result).toBe('healthy');
});

test('checks the health status of players', () => {
  const result = toMeasureHealth({ name, health: 50 });

  expect(result).toBe('healthy');
});

test('checks the health status of players', () => {
  const result = toMeasureHealth({ name, health: 30 });

  expect(result).toBe('wounded');
});

test('checks the health status of players', () => {
  const result = toMeasureHealth({ name, health: 15 });

  expect(result).toBe('wounded');
});

test('checks the health status of players', () => {
  const result = toMeasureHealth({ name, health: 10 });

  expect(result).toBe('critical');
});

test('need to sort players by health level', () => {
  const sorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortPlayers).toEqual(sorted);
});
