import Magician from '../js/magician';
import Daemon from '../js/daemon';

test('checking attack lvl without dope', () => {
  const magician = new Magician('Harry');
  magician.distance = 3;
  expect(magician.attack).toEqual(80);
});

test('checking attack lvl with dope', () => {
  const daemon = new Daemon('Leo');
  daemon.distance = 3;
  daemon.stoned = true;
  expect(daemon.attack).toEqual(72);
});
