'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`'firstName' is 'undefined'`, () => {
    const user = {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    };

    restoreNames([user]);

    expect(user).toMatchObject({
      firstName: 'Jack',
      lastName: 'Holy',
      fullName: 'Jack Holy',
    });
  });

  it(`'firstName' was deleted`, () => {
    const user = {
      lastName: 'Adamson',
      fullName: 'Mike Adamson',
    };

    restoreNames([user]);

    expect(user).toMatchObject({
      firstName: 'Mike',
      lastName: 'Adamson',
      fullName: 'Mike Adamson',
    });
  });

  it(`valid user`, () => {
    const user = {
      firstName: 'Mike',
      lastName: 'Adamson',
      fullName: 'Mike Adamson',
    };

    restoreNames([user]);

    expect(user).toMatchObject({
      firstName: 'Mike',
      lastName: 'Adamson',
      fullName: 'Mike Adamson',
    });
  });

  it(`should return 'undefined'`, () => {
    const user = {
      firstName: 'Mike',
      lastName: 'Adamson',
      fullName: 'Mike Adamson',
    };

    expect(restoreNames([user])).toBeUndefined();
  });
});


